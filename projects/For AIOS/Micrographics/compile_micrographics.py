import os
import json
import urllib.request
import re
import html
import time
import sys

# Configure stdout to UTF-8
if sys.platform.startswith('win'):
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

# Constants
FILE_KEY = "4Hd9pXMkSFNo7mXIIDaVf3"
JSON_PATH = "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\41e09fb8-8d2b-4fa2-97f5-708f442b9906\\scratch\\figma_file.json"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def load_token():
    # Attempt to load token from .env in various directory levels
    paths = [
        os.path.join(BASE_DIR, ".env"),
        os.path.join(BASE_DIR, "..", ".env"),
        os.path.join(BASE_DIR, "..", "..", ".env"),
        os.path.join(BASE_DIR, "..", "..", "..", ".env")
    ]
    for p in paths:
        if os.path.exists(p):
            with open(p, "r", encoding="utf-8") as f:
                for line in f:
                    if "FIGMA_ACCESS_TOKEN" in line and "=" in line:
                        _, token = line.strip().split("=", 1)
                        return token.strip().strip('"').strip("'")
    # Fallback to hardcoded token from config
    return "figd_NFddvjrQzbd-kJayooYQdhxwfq77Rwl2Xi2jsIJK"

TOKEN = load_token()

def get_figma_images(file_key, ids, format_type, token):
    ids_str = ",".join(ids)
    url = f"https://api.figma.com/v1/images/{file_key}?ids={ids_str}&format={format_type}"
    req = urllib.request.Request(url)
    req.add_header("X-Figma-Token", token)
    
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req) as response:
                if response.status == 200:
                    data = json.loads(response.read().decode('utf-8'))
                    return data.get("images", {})
                else:
                    print(f"Error calling Figma API (HTTP {response.status}), retrying...")
        except Exception as e:
            print(f"Exception calling Figma API: {e}, retrying...")
        time.sleep(2)
    return {}

def download_file(url, filepath):
    for attempt in range(3):
        try:
            urllib.request.urlretrieve(url, filepath)
            return True
        except Exception as e:
            print(f"Failed download attempt {attempt+1} for {url}: {e}")
            time.sleep(1)
    return False

def parse_color(fills):
    if not fills:
        return "#FFFAEE"
    for fill in fills:
        if fill.get("visible", True) and fill.get("type") == "SOLID":
            color = fill.get("color", {})
            r = int(color.get("r", 0) * 255)
            g = int(color.get("g", 0) * 255)
            b = int(color.get("b", 0) * 255)
            a = fill.get("opacity", color.get("a", 1.0))
            if a >= 0.99:
                return f"#{r:02x}{g:02x}{b:02x}".upper()
            else:
                return f"rgba({r}, {g}, {b}, {a:.2f})"
    return "#FFFAEE"

def svg_to_jsx(svg_content):
    # Remove XML processing instruction
    svg_content = re.sub(r'<\?xml[^>]*\?>', '', svg_content)
    # Remove DOCTYPE
    svg_content = re.sub(r'<!DOCTYPE[^>]*>', '', svg_content)
    # Remove comments
    svg_content = re.sub(r'<!--.*?-->', '', svg_content, flags=re.DOTALL)
    
    # Convert SVG inline style="property:value" strings into JSX style={{ propertyName: 'value' }} objects
    def replace_style_attr(match):
        style_str = match.group(1)
        props = []
        for item in style_str.split(';'):
            if ':' in item:
                k, v = item.split(':', 1)
                k = k.strip()
                v = v.strip()
                k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                props.append(f"{k_camel}: '{v}'")
        return f"style={{{{ {', '.join(props)} }}}}"

    svg_content = re.sub(r'style="([^"]*)"', replace_style_attr, svg_content)
    
    # Replace standard attributes with JSX camelCase equivalents
    replacements = {
        'fill-rule=': 'fillRule=',
        'clip-rule=': 'clipRule=',
        'stroke-width=': 'strokeWidth=',
        'stroke-linecap=': 'strokeLinecap=',
        'stroke-linejoin=': 'strokeLinejoin=',
        'stroke-miterlimit=': 'strokeMiterlimit=',
        'stroke-dasharray=': 'strokeDasharray=',
        'stroke-dashoffset=': 'strokeDashoffset=',
        'fill-opacity=': 'fillOpacity=',
        'stroke-opacity=': 'strokeOpacity=',
        'xlink:href=': 'xlinkHref=',
        'class=': 'className='
    }
    for old, new in replacements.items():
        svg_content = svg_content.replace(old, new)
        
    return svg_content.strip()

def main():
    print("Starting Micrographics Code Generation & Asset Extraction...")
    
    # Load Figma JSON structure
    if not os.path.exists(JSON_PATH):
        print(f"Error: Figma JSON file not found at {JSON_PATH}")
        sys.exit(1)
        
    with open(JSON_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    document = data.get("document", {})
    pages = document.get("children", [])
    
    micro_page = None
    for p in pages:
        if "Micrographics" in p.get("name"):
            micro_page = p
            break
            
    if not micro_page:
        print("Error: Micrographics page not found in JSON.")
        sys.exit(1)
        
    # Get all frames
    frames = [c for c in micro_page.get("children", []) if c.get("type") == "FRAME"]
    numbered_frames = []
    for f in frames:
        name = f.get("name")
        try:
            # We want names matching 3-digit strings e.g. 001-050
            int(name)
            numbered_frames.append(f)
        except ValueError:
            continue
            
    # Sort frames numerically
    numbered_frames.sort(key=lambda x: int(x.get("name")))
    print(f"Found {len(numbered_frames)} numbered frames to compile.")
    
    # Setup folders
    svg_dir = os.path.join(BASE_DIR, "svg")
    symbols_dir = os.path.join(BASE_DIR, "symbols")
    html_dir = os.path.join(BASE_DIR, "html")
    react_dir = os.path.join(BASE_DIR, "react")
    
    os.makedirs(svg_dir, exist_ok=True)
    os.makedirs(symbols_dir, exist_ok=True)
    os.makedirs(html_dir, exist_ok=True)
    os.makedirs(react_dir, exist_ok=True)
    
    # Collect all frame IDs and individual graphic node IDs
    frame_ids = [f.get("id") for f in numbered_frames]
    graphic_node_ids = []
    
    # Dictionary mapping node_id to target symbol filename
    symbol_filenames = {}
    
    for frame in numbered_frames:
        frame_name = frame.get("name")
        children = frame.get("children", [])
        for child in children:
            if not child.get("visible", True):
                continue
            if child.get("type") != "TEXT":
                node_id = child.get("id")
                graphic_node_ids.append(node_id)
                # Clean name for safe filename
                clean_child_name = re.sub(r'[^a-zA-Z0-9_]', '_', child.get("name", "vector"))
                safe_id = node_id.replace(":", "_")
                symbol_filenames[node_id] = f"symbol_{frame_name}_{clean_child_name}_{safe_id}.svg"
                
    print(f"Ready to fetch {len(frame_ids)} full frame SVGs and {len(graphic_node_ids)} graphic symbol SVGs.")
    
    # 1. Check for missing full frame SVGs
    missing_frame_ids = []
    for frame in numbered_frames:
        frame_name = frame.get("name")
        frame_id = frame.get("id")
        dest = os.path.join(svg_dir, f"{frame_name}.svg")
        if not os.path.exists(dest):
            missing_frame_ids.append(frame_id)
            
    if missing_frame_ids:
        print(f"Downloading {len(missing_frame_ids)} missing full frame SVGs in chunks...")
        frame_svg_urls = {}
        # Chunk requests by 50
        for chunk in [missing_frame_ids[i:i+50] for i in range(0, len(missing_frame_ids), 50)]:
            urls = get_figma_images(FILE_KEY, chunk, "svg", TOKEN)
            frame_svg_urls.update(urls)
            
        for frame in numbered_frames:
            frame_name = frame.get("name")
            frame_id = frame.get("id")
            if frame_id in frame_svg_urls:
                url = frame_svg_urls.get(frame_id)
                if url:
                    dest = os.path.join(svg_dir, f"{frame_name}.svg")
                    download_file(url, dest)
    else:
        print("All full frame SVGs already present on disk. Skipping download.")
    
    # 2. Check for missing individual graphic symbols
    missing_symbol_ids = []
    downloaded_symbols = {}
    
    for node_id in graphic_node_ids:
        filename = symbol_filenames[node_id]
        dest = os.path.join(symbols_dir, filename)
        if os.path.exists(dest):
            try:
                with open(dest, "r", encoding="utf-8") as f:
                    downloaded_symbols[node_id] = f.read()
            except Exception as e:
                print(f"Error reading local symbol {dest}: {e}")
                missing_symbol_ids.append(node_id)
        else:
            missing_symbol_ids.append(node_id)
            
    if missing_symbol_ids:
        print(f"Downloading {len(missing_symbol_ids)} missing symbol SVGs in chunks...")
        symbol_svg_urls = {}
        # Chunk requests by 80 to prevent URL length limits
        chunks = [missing_symbol_ids[i:i+80] for i in range(0, len(missing_symbol_ids), 80)]
        for i, chunk in enumerate(chunks):
            print(f"Requesting symbol chunk {i+1}/{len(chunks)}...")
            urls = get_figma_images(FILE_KEY, chunk, "svg", TOKEN)
            symbol_svg_urls.update(urls)
            
        # Download symbols
        for node_id in missing_symbol_ids:
            url = symbol_svg_urls.get(node_id)
            if url:
                filename = symbol_filenames[node_id]
                dest = os.path.join(symbols_dir, filename)
                if download_file(url, dest):
                    try:
                        with open(dest, "r", encoding="utf-8") as f:
                            downloaded_symbols[node_id] = f.read()
                    except Exception as e:
                        print(f"Error reading downloaded symbol {dest}: {e}")
    else:
        print("All individual symbol SVGs already present on disk. Skipping download.")
        
    print(f"Loaded {len(downloaded_symbols)} symbols into memory.")

    
    # 3. Generate HTML & React JSX files
    print("Compiling code components...")
    
    for frame in numbered_frames:
        frame_name = frame.get("name")
        frame_id = frame.get("id")
        frame_bounds = frame.get("absoluteBoundingBox", {})
        fx = frame_bounds.get("x", 0)
        fy = frame_bounds.get("y", 0)
        fw = frame_bounds.get("width", 1080)
        fh = frame_bounds.get("height", 1080)
        
        bg_color = parse_color(frame.get("fills", []))
        
        children = frame.get("children", [])
        
        # HTML output buffers
        html_elements = []
        css_styles = []
        
        # React properties
        react_props_defs = [f"bgColor = '{bg_color}'"]
        react_elements = []
        
        text_counter = 1
        
        # Process child elements in visual rendering order (depth-first traversal inside frame)
        # Figma JSON orders children from back to front (first child is bottommost)
        # In HTML/JSX, elements are rendered in DOM order (earlier elements render at the bottom,
        # later elements render on top). So we process in original order (no reversal).
        for child in children:
            if not child.get("visible", True):
                continue
            node_type = child.get("type")
            node_name = child.get("name", "element")
            node_id = child.get("id")
            
            # Rotation handling
            rotation_rad = child.get("rotation", 0.0)
            a_deg = 0.0
            
            bounds = child.get("absoluteBoundingBox", {})
            cx_bb = bounds.get("x", 0.0)
            cy_bb = bounds.get("y", 0.0)
            w_bb = bounds.get("width", 0.0)
            h_bb = bounds.get("height", 0.0)
            
            # Relative positioning
            rx = cx_bb - fx
            ry = cy_bb - fy
            cw = w_bb
            ch = h_bb
            
            # Rotation handling: Figma API exports graphic SVGs with rotation already baked in.
            # Only text nodes require CSS rotation transforms.
            if node_type == "TEXT" and abs(rotation_rad) >= 1e-4:
                import math
                a_deg = math.degrees(rotation_rad)
            else:
                a_deg = 0.0
            
            # Skip element if bounds are invalid (both width and height are 0) and it's not text
            if cw <= 0 and ch <= 0:
                if node_type != "TEXT":
                    continue

            
            if node_type == "TEXT":
                chars = child.get("characters", "").replace("\u2028", "\n").replace("\u2029", "\n")
                escaped_chars = html.escape(chars).replace("\n", "<br />")
                react_escaped_chars = chars.replace("\n", "{'\\n'}")

                
                style = child.get("style", {})
                font_family = style.get("fontFamily", "sans-serif")
                font_size = style.get("fontSize", 16)
                font_weight = style.get("fontWeight", 400)
                line_height = style.get("lineHeightPx", font_size * 1.2)
                letter_spacing = style.get("letterSpacing", 0)
                
                # Retrieve textTransform case
                text_case = style.get("textCase", "ORIGINAL")
                text_transform_css = ""
                react_text_transform = "none"
                if text_case == "UPPER":
                    text_transform_css = "text-transform: uppercase;"
                    react_text_transform = "uppercase"
                elif text_case == "LOWER":
                    text_transform_css = "text-transform: lowercase;"
                    react_text_transform = "lowercase"
                elif text_case == "TITLE":
                    text_transform_css = "text-transform: capitalize;"
                    react_text_transform = "capitalize"
                
                # Check horizontal text alignment
                text_align_horiz = style.get("textAlignHorizontal", "LEFT").upper()
                card_center = fw / 2.0
                element_center = rx + cw / 2.0
                is_centered = abs(element_center - card_center) < 15.0 # Center if within 15px
                
                text_align_last_css = ""
                react_text_align_last = "auto"
                
                # Force left alignment on Frame 9 as requested by user
                if frame_name == "009":
                    text_align_horiz_css = "left"
                elif text_align_horiz == "CENTER":
                    text_align_horiz_css = "center"
                elif text_align_horiz == "RIGHT":
                    text_align_horiz_css = "right"
                elif text_align_horiz == "JUSTIFIED":
                    is_manual_spacing = "   " in chars or "  \n" in chars
                    if is_manual_spacing:
                        text_align_horiz_css = "left"
                    else:
                        text_align_horiz_css = "justify"
                        text_align_last_css = "text-align-last: justify;"
                        react_text_align_last = "justify"
                elif text_align_horiz == "LEFT" and is_centered:
                    text_align_horiz_css = "center"
                else:
                    text_align_horiz_css = "left"

                
                text_auto_resize = style.get("textAutoResize", "NONE")
                is_single_word = len(chars.strip().split()) <= 1
                if is_single_word:
                    white_space_css = "white-space: nowrap;"
                    react_white_space = "nowrap"
                elif text_align_horiz_css == "justify":
                    # Justified text must use pre-wrap in CSS to allow the browser to stretch spaces
                    white_space_css = "white-space: pre-wrap;"
                    react_white_space = "pre-wrap"
                elif "\n" in chars:
                    # Explicit newlines present: use pre to respect exact breaks and spacing, preventing auto-wrap leaks
                    white_space_css = "white-space: pre;"
                    react_white_space = "pre"
                elif text_auto_resize == "WIDTH_AND_HEIGHT":
                    white_space_css = "white-space: nowrap;"
                    react_white_space = "nowrap"
                else:
                    white_space_css = "white-space: pre-wrap;"
                    react_white_space = "pre-wrap"


                
                # Font mappings
                css_font_family = font_family
                if "DIN Condensed" in font_family:
                    css_font_family = "'DIN Condensed', 'Barlow Condensed', sans-serif"
                elif "Special Gothic" in font_family:
                    css_font_family = f"'{font_family}', 'Special Gothic', sans-serif"
                else:
                    css_font_family = f"'{font_family}', sans-serif"
                
                # Make variable names for customizing
                var_text_content = f"text_{text_counter}"
                var_text_color = f"textColor_{text_counter}"

                # Check for text strokes (hollow text)
                has_strokes = len(child.get("strokes", [])) > 0
                has_fills = len(child.get("fills", [])) > 0
                
                text_color = parse_color(child.get("fills", []))
                
                text_stroke_css = ""
                react_text_stroke_style = ""
                
                if has_strokes:
                    stroke_color = parse_color(child.get("strokes", []))
                    stroke_width = child.get("strokeWeight", 1.0)
                    if not has_fills:
                        text_color = "transparent"
                    text_stroke_css = f"-webkit-text-stroke: {stroke_width}px {stroke_color}; color: {text_color};"
                    react_text_stroke_style = f"WebkitTextStroke: '{stroke_width}px {stroke_color}', color: '{text_color}',"
                else:
                    text_stroke_css = f"color: var(--text-color-{text_counter}, {text_color});"
                    react_text_stroke_style = f"color: {var_text_color},"

                # Lead compensation for vertical alignment top offset
                lead_compensation = 0.0
                vertical_align = "flex-start"
                if style.get("textAlignVertical") == "CENTER":
                    vertical_align = "center"
                elif style.get("textAlignVertical") == "BOTTOM":
                    vertical_align = "flex-end"
                
                if vertical_align == "flex-start" and line_height > font_size:
                    lead_compensation = (line_height - font_size) / 2.0
                
                ry_compensated = ry - lead_compensation
                
                # CSS transform for rotation
                rotation_style = ""
                react_rotation_style = ""
                if abs(a_deg) >= 1e-4:
                    rotation_style = f" transform: rotate({a_deg}deg); transform-origin: 0 0;"
                    react_rotation_style = f" transform: 'rotate({a_deg}deg)', transformOrigin: '0 0',"
                
                react_props_defs.append(f"{var_text_content} = {json.dumps(chars)}")
                react_props_defs.append(f"{var_text_color} = '{text_color}'")
                
                # HTML template overlay
                # Outer div for positioning & vertical alignment
                # Inner div for text rendering & horizontal alignment
                html_elements.append(f"""  <!-- Layer: {node_name} -->
  <div class="text-layer text-layer-{text_counter}" style="
    position: absolute;
    left: {rx}px;
    top: {ry_compensated}px;
    width: {cw}px;
    height: {ch}px;
    display: flex;
    flex-direction: column;
    justify-content: {vertical_align};{rotation_style}
  ">
    <div style="
      display: block;
      width: 100%;
      font-family: {css_font_family};
      font-size: {font_size}px;
      font-weight: {font_weight};
      line-height: {line_height}px;
      letter-spacing: {letter_spacing}px;
      {text_stroke_css}
      text-align: {text_align_horiz_css};
      {text_align_last_css}
      {white_space_css}
      {text_transform_css}
      word-break: break-word;
    ">{escaped_chars}</div>
  </div>""")
                
                css_styles.append(f"  --text-color-{text_counter}: {text_color};")
                
                # React JSX overlay
                react_elements.append(f"""      {'{/* Layer: ' + node_name + ' */}'}
      <div style={{{{
        position: 'absolute',
        left: '{rx}px',
        top: '{ry_compensated}px',
        width: '{cw}px',
        height: '{ch}px',
        {react_rotation_style}
        display: 'flex',
        flexDirection: 'column',
        justifyContent: '{vertical_align}'
      }}}}>
        <div style={{{{
          display: 'block',
          width: '100%',
          fontFamily: "{css_font_family}",
          fontSize: '{font_size}px',
          fontWeight: {font_weight},
          lineHeight: '{line_height}px',
          letterSpacing: '{letter_spacing}px',
          {react_text_stroke_style}
          textAlign: '{text_align_horiz_css}',
          textAlignLast: '{react_text_align_last}',
          whiteSpace: '{react_white_space}',
          textTransform: '{react_text_transform}',
          wordBreak: 'break-word'
        }}}}>
          {{{var_text_content}}}
        </div>
      </div>""")
                
                text_counter += 1

            else:
                # Graphic node
                svg_content = downloaded_symbols.get(node_id)
                filename = symbol_filenames.get(node_id)
                
                if svg_content and filename:
                    # Parse width and height from the SVG content
                    svg_w_match = re.search(r'width="([^"]+)"', svg_content)
                    svg_h_match = re.search(r'height="([^"]+)"', svg_content)
                    
                    svg_w = float(svg_w_match.group(1)) if svg_w_match else cw
                    svg_h = float(svg_h_match.group(1)) if svg_h_match else ch
                    
                    css_cw = max(svg_w, 1.0)
                    css_ch = max(svg_h, 1.0)
                    
                    # CSS transforms for rotation (if any)
                    rotation_style = ""
                    react_rotation_style = ""
                    if abs(a_deg) >= 1e-4:
                        rotation_style = f" transform: rotate({a_deg}deg); transform-origin: 0 0;"
                        react_rotation_style = f", transform: 'rotate({a_deg}deg)', transformOrigin: '0 0'"
                    
                    # HTML Element: We can use inline SVG or img src
                    # Inline SVG is highly editable, let's inject it inline!
                    # Make sure the inline SVG has absolute positioning properties set
                    inline_svg_html = svg_content
                    # Inject style tag into root svg tag for positioning
                    inline_svg_html = re.sub(
                        r'<svg ',
                        f'<svg style="position: absolute; left: {rx}px; top: {ry}px; width: {css_cw}px; height: {css_ch}px; overflow: visible;{rotation_style}" ',
                        inline_svg_html,
                        count=1
                    )
                    html_elements.append(f"  <!-- Layer Graphic: {node_name} -->\n  {inline_svg_html.strip()}")
                    
                    # React Component element
                    jsx_svg = svg_to_jsx(svg_content)
                    # Inject absolute style properties into React SVG tag
                    jsx_svg = re.sub(
                        r'<svg ',
                        f'<svg style={{{{ position: \'absolute\', left: \'{rx}px\', top: \'{ry}px\', width: \'{css_cw}px\', height: \'{css_ch}px\', overflow: \'visible\'{react_rotation_style} }}}} ',
                        jsx_svg,
                        count=1
                    )
                    react_elements.append(f"      {'{/* Layer Graphic: ' + node_name + ' */}'}\n      {jsx_svg.strip()}")

                else:
                    # Fallback if download failed
                    html_elements.append(f"  <!-- Graphic fallback: {node_name} (Download Failed) -->")
                    react_elements.append(f"      {'{/* Graphic fallback: ' + node_name + ' (Download Failed) */}'}")
                    
        # Construct full HTML file
        css_vars = "\n".join(css_styles)
        elements_html = "\n".join(html_elements)
        
        full_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Micrographic {frame_name}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=42dot+Sans:wght@300;400;600;800&family=Barlow+Condensed:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&family=Instrument+Serif:ital@0;1&family=Pinyon+Script&family=Special+Gothic+Expanded+One&family=Special+Gothic:wght@400;700&family=UnifrakturMaguntia&display=swap" rel="stylesheet">

  <style>
    :root {{
      --bg-color: {bg_color};
{css_vars}
    }}
    
    body {{
      margin: 0;
      padding: 0;
      background: #0B0B0B;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: system-ui, sans-serif;
    }}
    
    .card-container {{
      position: relative;
      width: {fw}px;
      height: {fh}px;
      background-color: var(--bg-color);
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }}
  </style>
</head>
<body>

<div class="card-container">
{elements_html}
</div>

</body>
</html>
"""
        
        with open(os.path.join(html_dir, f"{frame_name}.html"), "w", encoding="utf-8") as f:
            f.write(full_html)
            
        # Construct React Component
        props_str = ",\n  ".join(react_props_defs)
        elements_react = "\n".join(react_elements)
        
        full_react = f"""import React from 'react';

export default function Frame{frame_name}({{
  {props_str}
}}) {{
  return (
    <div style={{{{
      position: 'relative',
      width: '{fw}px',
      height: '{fh}px',
      backgroundColor: bgColor,
      overflow: 'hidden'
    }}}}>
{elements_react}
    </div>
  );
}}
"""
        
        with open(os.path.join(react_dir, f"Frame{frame_name}.jsx"), "w", encoding="utf-8") as f:
            f.write(full_react)
            
    print("All individual components written successfully.")
    
    # 4. Generate master index.html dashboard
    print("Compiling interactive showcase dashboard...")
    
    cards_grid_html = []
    for f in numbered_frames:
        name = f.get("name")
        cards_grid_html.append(f"""
    <div class="card-wrapper" data-id="{name}">
      <div class="card-header">
        <span class="card-num">Layout {name}</span>
        <div class="card-actions">
          <a class="action-btn" href="html/{name}.html" target="_blank">Open Full</a>
          <button class="action-btn copy-btn" onclick="copyCode('{name}')">Copy Code</button>
        </div>
      </div>
      <iframe src="html/{name}.html" class="card-frame" title="Card {name}"></iframe>
    </div>
""")
        
    grid_str = "\n".join(cards_grid_html)
    
    index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZORIXEL - Micrographics Templates Showcase</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Space+Mono&display=swap" rel="stylesheet">
  <style>
    :root {{
      --bg-dark: #090909;
      --bg-card: #151515;
      --accent: #E5C384;
      --text: #FFFAEE;
      --text-muted: #888888;
    }}
    
    body {{
      margin: 0;
      padding: 0;
      background: var(--bg-dark);
      color: var(--text);
      font-family: 'Outfit', sans-serif;
      overflow-x: hidden;
    }}
    
    header {{
      padding: 40px;
      border-bottom: 1px solid #222;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }}
    
    .logo {{
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -1px;
      color: var(--accent);
    }}
    
    .subtitle {{
      font-size: 16px;
      color: var(--text-muted);
      margin-top: 5px;
    }}
    
    .stats {{
      font-family: 'Space Mono', monospace;
      font-size: 14px;
      background: #111;
      padding: 8px 16px;
      border: 1px solid #333;
      border-radius: 4px;
    }}
    
    .showcase-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      gap: 30px;
      padding: 40px;
    }}
    
    .card-wrapper {{
      background: var(--bg-card);
      border: 1px solid #222;
      border-radius: 8px;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }}
    
    .card-wrapper:hover {{
      transform: translateY(-5px);
      border-color: var(--accent);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }}
    
    .card-header {{
      padding: 15px;
      background: #1C1C1C;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #222;
    }}
    
    .card-num {{
      font-family: 'Space Mono', monospace;
      font-weight: bold;
      color: var(--text-muted);
    }}
    
    .card-actions {{
      display: flex;
      gap: 10px;
    }}
    
    .action-btn {{
      background: #252525;
      color: var(--text);
      border: 1px solid #333;
      padding: 5px 12px;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }}
    
    .action-btn:hover {{
      background: var(--accent);
      color: #000;
      border-color: var(--accent);
    }}
    
    .card-frame {{
      width: 1080px;
      height: 1080px;
      border: none;
      transform: scale(0.324); /* Scales 1080px perfectly into ~350px width wrapper */
      transform-origin: top left;
    }}
    
    /* Container size matched to scaled frame size */
    .card-wrapper {{
      display: flex;
      flex-direction: column;
      height: 480px;
    }}
    
    .frame-container {{
      flex-grow: 1;
      overflow: hidden;
      position: relative;
      background: #000;
    }}
    
    /* Toast Notification */
    .toast {{
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: var(--accent);
      color: #000;
      padding: 12px 24px;
      border-radius: 6px;
      font-weight: 600;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 100;
    }}
    .toast.show {{
      opacity: 1;
      transform: translateY(0);
    }}
  </style>
</head>
<body>

<header>
  <div>
    <div class="logo">zorixel.</div>
    <div class="subtitle">Micrographics Design Templates Collection (50 Layouts)</div>
  </div>
  <div class="stats">
    Vault: For AIOS/Micrographics · Count: 50
  </div>
</header>

<div class="showcase-grid">
{grid_str}
</div>

<div id="toast" class="toast">Code copied to clipboard!</div>

<script>
  // Simple utility to fix scaled viewport container heights
  document.querySelectorAll('.card-wrapper').forEach(wrapper => {{
    const container = document.createElement('div');
    container.className = 'frame-container';
    const frame = wrapper.querySelector('.card-frame');
    wrapper.replaceChild(container, frame);
    container.appendChild(frame);
  }});
  
  function copyCode(name) {{
    const url = `html/${{name}}.html`;
    fetch(url)
      .then(res => res.text())
      .then(text => {{
        navigator.clipboard.writeText(text);
        showToast();
      }});
  }}
  
  function showToast() {{
    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => {{
      t.classList.remove('show');
    }}, 2000);
  }}
</script>

</body>
</html>
"""
    
    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)
        
    print("Showcase dashboard written successfully.")
    print("Extraction and generation complete!")

if __name__ == "__main__":
    main()
