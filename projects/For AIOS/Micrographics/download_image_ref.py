import urllib.request
import json
import os

def main():
    token = os.environ.get("FIGMA_API_KEY", "")

    file_key = "4Hd9pXMkSFNo7mXIIDaVf3"
    
    url = f"https://api.figma.com/v1/files/{file_key}/images"
    req = urllib.request.Request(url)
    req.add_header("X-Figma-Token", token)
    req.add_header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    
    try:
        print("Fetching image references mapping...")
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            images = data.get("meta", {}).get("images", {})
            ref = '14f4c006047010b0b92ed473c7375c84804351f3'
            if ref in images:
                print(f"Found Image URL: {images[ref]}")
            else:
                print("ImageRef not found in images mapping.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
