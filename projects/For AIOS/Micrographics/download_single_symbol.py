import urllib.request
import json
import os

def main():
    token = os.environ.get("FIGMA_API_KEY", "")

    file_key = "4Hd9pXMkSFNo7mXIIDaVf3"
    node_id = "31:138"
    
    url = f"https://api.figma.com/v1/images/{file_key}?ids={node_id}&format=svg"
    req = urllib.request.Request(url)
    req.add_header("X-Figma-Token", token)
    req.add_header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    
    try:
        print("Fetching SVG URL from Figma with custom User-Agent...")
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            images = data.get("images", {})
            svg_url = images.get(node_id)
            print(f"SVG URL: {svg_url}")
            
            if svg_url:
                dest = r"D:\AI-OS\projects\For AIOS\Micrographics\symbols\symbol_024_1741380738072_1_31_138.svg"
                print(f"Downloading SVG to {dest}...")
                
                # Fetch SVG with custom user agent too
                svg_req = urllib.request.Request(svg_url)
                svg_req.add_header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
                with urllib.request.urlopen(svg_req) as svg_res:
                    with open(dest, "wb") as f:
                        f.write(svg_res.read())
                print("Download complete!")
            else:
                print("Figma did not return an SVG URL.")
    except Exception as e:
        print(f"Error fetching from Figma: {e}")

if __name__ == "__main__":
    main()
