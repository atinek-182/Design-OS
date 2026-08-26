import json
import sys

# Ensure stdout is UTF-8
if sys.platform.startswith('win'):
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

def get_node_info(node, rx_parent, ry_parent, depth=0):
    ntype = node.get("type")
    name = node.get("name", "element")
    bounds = node.get("absoluteBoundingBox", {})
    
    rx, ry = 0.0, 0.0
    cw, ch = 0.0, 0.0
    if bounds:
        rx = bounds.get("x", 0.0) - rx_parent
        ry = bounds.get("y", 0.0) - ry_parent
        cw = bounds.get("width", 0.0)
        ch = bounds.get("height", 0.0)
        
    info = f"{'  ' * depth}- [{ntype}] '{name}' pos=({rx:.1f}, {ry:.1f}) size=({cw:.1f}, {ch:.1f}) ID={node.get('id')}"
    
    if ntype == "TEXT":
        style = node.get("style", {})
        chars = node.get("characters", "").replace("\n", "\\n").replace("\r", "\\r")
        info += f"\n{'  ' * (depth+1)}Text: {repr(chars)}"
        info += f"\n{'  ' * (depth+1)}Font: {style.get('fontFamily')} size={style.get('fontSize')} weight={style.get('fontWeight')} lh={style.get('lineHeightPx')}"
        info += f"\n{'  ' * (depth+1)}AlignH: {style.get('textAlignHorizontal')} AlignV: {style.get('textAlignVertical')} resize={style.get('textAutoResize')}"
        info += f"\n{'  ' * (depth+1)}LetterSpacing: {style.get('letterSpacing')}"
        
    for child in node.get("children", []):
        info += "\n" + get_node_info(child, rx_parent, ry_parent, depth + 1)
        
    return info

def main():
    json_path = r"C:\Users\HP\.gemini\antigravity-ide\brain\41e09fb8-8d2b-4fa2-97f5-708f442b9906\scratch\figma_file.json"
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    document = data.get("document", {})
    pages = document.get("children", [])
    micro_page = [p for p in pages if "Micrographics" in p.get("name")][0]
    frames = {c.get("name"): c for c in micro_page.get("children", []) if c.get("type") == "FRAME"}
    
    tf = "043"
    f_node = frames.get(tf)
    if f_node:
        bounds = f_node.get("absoluteBoundingBox", {})
        rx_parent = bounds.get("x", 0.0)
        ry_parent = bounds.get("y", 0.0)
        print(f"\n=======================================================")
        print(f"FRAME {tf}: pos=({rx_parent}, {ry_parent}) size=({bounds.get('width')}, {bounds.get('height')})")
        print(f"=======================================================")
        for child in f_node.get("children", []):
            print(get_node_info(child, rx_parent, ry_parent))

if __name__ == "__main__":
    main()
