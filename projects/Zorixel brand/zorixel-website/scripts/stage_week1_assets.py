import os
import shutil
import zipfile
from fontTools.ttLib import TTFont

PROJECT_ROOT = r"d:\AI-OS\projects\Zorixel brand\zorixel-website"
PUBLIC_DIR = os.path.join(PROJECT_ROOT, "public")
FONT_SRC_DIR = r"d:\AI-OS\projects\font-showcase\fonts"
VECTOR_SRC_DIR = r"d:\AI-OS\projects\font-showcase"

def stage_fonts():
    fonts_dest = os.path.join(PUBLIC_DIR, "fonts")
    os.makedirs(fonts_dest, exist_ok=True)
    
    font_files = [
        ("Nuqun-Regular.otf", "Nuqun-Regular.woff2"),
        ("Havock.otf", "Havock.woff2"),
        ("Rosehot.ttf", "Rosehot.woff2"),
    ]
    
    for src_name, dest_name in font_files:
        src_path = os.path.join(FONT_SRC_DIR, src_name)
        dest_path = os.path.join(fonts_dest, dest_name)
        if os.path.exists(src_path):
            font = TTFont(src_path)
            font.flavor = "woff2"
            font.save(dest_path)
            print(f"Converted {src_name} -> {dest_name}")
        else:
            print(f"Warning: {src_path} not found")

    # Generate fonts.css
    css_content = """/* ZORIXEL Brand Typography System - WOFF2 Fonts */

@font-face {
  font-family: 'Nuqun';
  src: url('/fonts/Nuqun-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Havock';
  src: url('/fonts/Havock.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Rosehot';
  src: url('/fonts/Rosehot.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
"""
    css_path = os.path.join(fonts_dest, "fonts.css")
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(css_content)
    print("Created fonts.css")

def stage_vectors():
    vectors_dest = os.path.join(PUBLIC_DIR, "vectors")
    os.makedirs(vectors_dest, exist_ok=True)
    
    vector_files = [
        "zorixel_logo_solid_white.svg",
        "zorixel_logo_solid_dark.svg"
    ]
    
    for filename in vector_files:
        src = os.path.join(VECTOR_SRC_DIR, filename)
        dest = os.path.join(vectors_dest, filename)
        if os.path.exists(src):
            shutil.copy2(src, dest)
            print(f"Copied vector: {filename}")
            
    # Favicon SVG
    favicon_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="128" fill="#0D0E12"/>
  <circle cx="256" cy="256" r="180" fill="none" stroke="#6D001A" stroke-width="16" stroke-dasharray="12 12"/>
  <path d="M140 180 L372 180 L180 340 L372 340" fill="none" stroke="#D61C2C" stroke-width="36" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="372" cy="180" r="24" fill="#C5A059"/>
  <circle cx="180" cy="340" r="24" fill="#C5A059"/>
</svg>"""
    with open(os.path.join(vectors_dest, "favicon.svg"), "w", encoding="utf-8") as f:
        f.write(favicon_svg)
    print("Created favicon.svg")

def create_preview_card_svg(title, subtitle, tag, number, output_path, accent_color="#D61C2C"):
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <linearGradient id="bgGrad_{number}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D0E12"/>
      <stop offset="50%" stop-color="#151720"/>
      <stop offset="100%" stop-color="#0A0B0E"/>
    </linearGradient>
    <linearGradient id="cardGrad_{number}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E202B"/>
      <stop offset="100%" stop-color="#111218"/>
    </linearGradient>
    <linearGradient id="accentGrad_{number}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6D001A"/>
      <stop offset="100%" stop-color="{accent_color}"/>
    </linearGradient>
    <pattern id="grid_{number}" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#232634" stroke-width="1" opacity="0.4"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1920" height="1080" fill="url(#bgGrad_{number})"/>
  <rect width="1920" height="1080" fill="url(#grid_{number})"/>

  <!-- Glowing Backdrop Orb -->
  <circle cx="1500" cy="300" r="400" fill="{accent_color}" opacity="0.12" filter="blur(80px)"/>

  <!-- Card Frame -->
  <rect x="120" y="100" width="1680" height="880" rx="32" fill="url(#cardGrad_{number})" stroke="#2D3042" stroke-width="2"/>
  
  <!-- Accent Top Border -->
  <rect x="120" y="100" width="1680" height="8" rx="4" fill="url(#accentGrad_{number})"/>

  <!-- Number Watermark -->
  <text x="1700" y="800" font-family="'Havock', 'Inter', sans-serif" font-size="280" font-weight="900" fill="#252838" text-anchor="end" opacity="0.5">{number}</text>

  <!-- Tag Pill -->
  <rect x="220" y="200" width="240" height="56" rx="28" fill="#6D001A" opacity="0.9"/>
  <text x="340" y="236" font-family="'Rosehot', 'Inter', sans-serif" font-size="20" font-weight="700" fill="#FAF8F5" text-anchor="middle" letter-spacing="2">{tag.upper()}</text>

  <!-- Title -->
  <text x="220" y="380" font-family="'Havock', 'Inter', sans-serif" font-size="72" font-weight="800" fill="#FAF8F5">{title}</text>
  
  <!-- Subtitle -->
  <text x="220" y="460" font-family="'Rosehot', 'Inter', sans-serif" font-size="32" font-weight="400" fill="#C5A059">{subtitle}</text>

  <!-- Code Preview Box Illustration -->
  <rect x="220" y="540" width="1000" height="340" rx="16" fill="#0D0E12" stroke="#33374A" stroke-width="2"/>
  <circle cx="260" cy="580" r="8" fill="#D61C2C"/>
  <circle cx="290" cy="580" r="8" fill="#C5A059"/>
  <circle cx="320" cy="580" r="8" fill="#2ECC71"/>
  
  <text x="260" y="650" font-family="monospace" font-size="24" fill="#6D001A">&lt;ZorixelComponent</text>
  <text x="280" y="700" font-family="monospace" font-size="24" fill="#FAF8F5">theme="ObsidianMidnight"</text>
  <text x="280" y="750" font-family="monospace" font-size="24" fill="#C5A059">motion="GSAP.ScrollTrigger"</text>
  <text x="260" y="800" font-family="monospace" font-size="24" fill="#6D001A">/&gt;</text>

  <!-- Zorixel Brand Stamp -->
  <text x="1740" y="920" font-family="'Nuqun', 'Rosehot', sans-serif" font-size="24" font-weight="600" fill="#6D001A" text-anchor="end">ZORIXEL ENGINE</text>
</svg>"""
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(svg)

def stage_spiral_cards():
    dest_dir = os.path.join(PUBLIC_DIR, "previews", "spiral-cards")
    os.makedirs(dest_dir, exist_ok=True)
    
    cards = [
        ("Next.js 15 App Router Starter", "Fullstack React 19 & Tailwind v4 Architecture", "CORE FRAMEWORK", "01", "#D61C2C"),
        ("OKLCH Design System Tokens", "Dynamic OKLCH Color Engine & Theme Switches", "DESIGN SYSTEM", "02", "#6D001A"),
        ("3D Spiral Shader WebGL Engine", "StudioDialect Helical Cylinder Canvas Stage", "WEBGL CANVAS", "03", "#C5A059"),
        ("GSAP 3-Digit Rolling Counter", "Insane 40x Scale-Up Mask Exit Preloader", "MOTION STAGE", "04", "#D61C2C"),
        ("Contextual Magnetic Custom Cursor", "Parallax Hover Physics & Tag Snap Engine", "INTERACTION", "05", "#6D001A"),
        ("Live Code Inspector Drawer", "Instant Copy Engine & JSX/Tailwind Tabs", "DEVELOPER UX", "06", "#C5A059"),
        ("Free Resource Hub Grid", "Filterable Download Cards & Asset Vault", "RESOURCES", "07", "#D61C2C"),
        ("Frictionless Lead Magnet Modal", "Confetti Burst & Fast Subscribe Handler", "CONVERSION", "08", "#6D001A"),
        ("Stripe Checkout & Webhook Engine", "Digital Products Storefront & Orders API", "MONETIZATION", "09", "#C5A059"),
        ("Clerk Auth Customer Dashboard", "Protected Account & Order History Portal", "AUTHENTICATION", "10", "#D61C2C"),
    ]
    
    for title, subtitle, tag, number, accent in cards:
        slug = title.lower().replace(" ", "-").replace(".", "").replace("/", "-")
        filename = f"card-{number}-{slug}.svg"
        output_path = os.path.join(dest_dir, filename)
        create_preview_card_svg(title, subtitle, tag, number, output_path, accent)
        print(f"Generated spiral card: {filename}")

def stage_ribbon_freebies():
    dest_dir = os.path.join(PUBLIC_DIR, "previews", "ribbon-freebies")
    os.makedirs(dest_dir, exist_ok=True)
    
    freebies = [
        ("Next.js 15 Starter Kit", "Production Template with OKLCH Tokens", "FREE STARTER", "01", "#D61C2C"),
        ("AI OS Workflow Architecture Map", "5-Workflow Automation Blueprint", "WORKFLOW SOP", "02", "#6D001A"),
        ("Zorixel Master Prompt Stack v3", "Battle-Tested Web Design Prompts", "PROMPT VAULT", "03", "#C5A059"),
        ("Figma Component Vault Pack", "147 UI Components & Design System", "FIGMA KIT", "04", "#D61C2C"),
        ("GSAP Animation Cheatsheet", "ScrollTrigger & Timeline Presets", "MOTION CHEATSHEET", "05", "#6D001A"),
        ("Tailwind v4 Token System", "OKLCH Color Palette & Config Rules", "CSS ARCHITECTURE", "06", "#C5A059"),
        ("Viral Carousel Copy Outlines", "High-Converting Slide Templates", "CONTENT ENGINE", "07", "#D61C2C"),
    ]
    
    for title, subtitle, tag, number, accent in freebies:
        slug = title.lower().replace(" ", "-").replace(".", "").replace("/", "-")
        filename = f"freebie-{number}-{slug}.svg"
        output_path = os.path.join(dest_dir, filename)
        create_preview_card_svg(title, subtitle, tag, f"F{number}", output_path, accent)
        print(f"Generated ribbon freebie card: {filename}")

def stage_downloads():
    downloads_dir = os.path.join(PUBLIC_DIR, "downloads")
    os.makedirs(downloads_dir, exist_ok=True)
    
    # 1. ZIP starter package
    zip_path = os.path.join(downloads_dir, "zorixel-nextjs15-starter-v1.zip")
    with zipfile.ZipFile(zip_path, "w") as zf:
        zf.writestr("README.md", "# ZORIXEL Next.js 15 Starter Kit v1\n\nOfficial Zorixel Starter Template with OKLCH Design Tokens and GSAP integration.\n")
        zf.writestr("package.json", '{\n  "name": "zorixel-starter",\n  "version": "1.0.0",\n  "private": true\n}\n')
    print("Created zorixel-nextjs15-starter-v1.zip")
    
    # 2. PDF Prompt Stack Document
    pdf_path = os.path.join(downloads_dir, "zorixel-aios-prompt-stack-v3.pdf")
    pdf_content = b"%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj 2 0 obj<</Type/Pages/Count 1/Kids[3 0 R]>>endobj 3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>endobj\nxref\n0 4\n0000000000 65535 f\n0000000009 00000 n\n0000000052 00000 n\n0000000101 00000 n\ntrailer<</Size 4/Root 1 0 R>>\nstartxref\n178\n%%EOF\n"
    with open(pdf_path, "wb") as f:
        f.write(pdf_content)
    print("Created zorixel-aios-prompt-stack-v3.pdf")

if __name__ == "__main__":
    print("Staging Week 1 Assets for Zorixel Website...")
    stage_fonts()
    stage_vectors()
    stage_spiral_cards()
    stage_ribbon_freebies()
    stage_downloads()
    print("Week 1 Assets Staging Complete!")
