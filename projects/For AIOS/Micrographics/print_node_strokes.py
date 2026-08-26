import json

def find_node_by_id(node, target_id):
    if node.get("id") == target_id:
        return node
    for child in node.get("children", []):
        res = find_node_by_id(child, target_id)
        if res:
            return res
    return None

def main():
    json_path = r"C:\Users\HP\.gemini\antigravity-ide\brain\41e09fb8-8d2b-4fa2-97f5-708f442b9906\scratch\figma_file.json"
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    node = find_node_by_id(data.get("document", {}), "117:1147")
    if node:
        print(f"Node: {node.get('name')}")
        print(f"Fills: {node.get('fills')}")
        print(f"Strokes: {node.get('strokes')}")
        print(f"StrokeWeight: {node.get('strokeWeight')}")
        print(f"StrokeAlign: {node.get('strokeAlign')}")
    else:
        print("Node not found.")

if __name__ == "__main__":
    main()
