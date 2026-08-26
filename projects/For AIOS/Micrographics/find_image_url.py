import json

def main():
    json_path = r"C:\Users\HP\.gemini\antigravity-ide\brain\41e09fb8-8d2b-4fa2-97f5-708f442b9906\scratch\figma_file.json"
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    # Check if 'images' is in the root data
    images = data.get("meta", {}).get("images", {})
    if not images:
        images = data.get("images", {})
        
    print(f"Number of images in mapping: {len(images)}")
    ref = '14f4c006047010b0b92ed473c7375c84804351f3'
    if ref in images:
        print(f"Found URL: {images[ref]}")
    else:
        # Search everywhere for imageRef
        print("imageRef not found in root mappings, searching values...")
        for k, v in data.items():
            if isinstance(v, dict):
                if ref in v:
                    print(f"Found in key '{k}': {v[ref]}")

if __name__ == "__main__":
    main()
