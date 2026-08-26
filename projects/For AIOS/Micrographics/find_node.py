import json

def search_node(node, name):
    if node.get("name") == name:
        return [node]
    
    results = []
    for child in node.get("children", []):
        results.extend(search_node(child, name))
    return results

def main():
    json_path = r"C:\Users\HP\.gemini\antigravity-ide\brain\41e09fb8-8d2b-4fa2-97f5-708f442b9906\scratch\figma_file.json"
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    results = search_node(data.get("document", {}), "1741380738072 1")
    for r in results:
        print(f"Found Node: ID={r.get('id')}, Type={r.get('type')}, Name={r.get('name')}")
        print(f"Fills: {r.get('fills')}")
        print(f"Strokes: {r.get('strokes')}")
        print(f"Effects: {r.get('effects')}")

if __name__ == "__main__":
    main()
