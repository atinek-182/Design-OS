import json

def main():
    json_path = r"C:\Users\HP\.gemini\antigravity-ide\brain\41e09fb8-8d2b-4fa2-97f5-708f442b9906\scratch\figma_file.json"
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    frames = []
    def find_frames(node):
        if node.get("type") == "FRAME" and node.get("name", "").isdigit():
            frames.append(node)
        for child in node.get("children", []):
            find_frames(child)
            
    find_frames(data.get("document", {}))
    
    print(f"Total numbered frames: {len(frames)}")
    
    rotated_count = 0
    for frame in frames:
        fname = frame.get("name")
        children = frame.get("children", [])
        for child in children:
            rot = child.get("rotation", 0.0)
            if abs(rot) >= 1e-4:
                rotated_count += 1
                safe_name = child.get('name', '').encode('ascii', 'ignore').decode('ascii')
                print(f"Frame {fname} | Node {child.get('id')} | Name: '{safe_name}' | Type: {child.get('type')} | Rotation: {rot} rad")

    print(f"\nTotal rotated nodes across all frames: {rotated_count}")

if __name__ == "__main__":
    main()
