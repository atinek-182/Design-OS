import os
import sys
from PIL import Image, ImageChops

# Ensure output is UTF-8 encoded
if sys.platform.startswith('win'):
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

def get_mismatch_ratio(img1_path, img2_path):
    if not os.path.exists(img1_path) or not os.path.exists(img2_path):
        return -1.0
    
    img1 = Image.open(img1_path).convert('RGB')
    img2 = Image.open(img2_path).convert('RGB')
    
    if img1.size != img2.size:
        return 1.0
    
    diff = ImageChops.difference(img1, img2)
    threshold = 10
    
    # Avoid getdata() deprecation warning
    width, height = diff.size
    diff_pixels = diff.load()
    mismatched = 0
    total = width * height
    
    for y in range(height):
        for x in range(width):
            r, g, b = diff_pixels[x, y]
            if r > threshold or g > threshold or b > threshold:
                mismatched += 1
                
    return mismatched / total

def main():
    project_dir = os.path.dirname(os.path.abspath(__file__))
    qa_dir = os.path.join(project_dir, 'qa', 'comparisons_new')
    
    results = []
    
    for i in range(1, 51):
        num = f"{i:03d}"
        raw_path = os.path.join(qa_dir, f"{num}_raw.png")
        html_path = os.path.join(qa_dir, f"{num}_html.png")
        
        ratio = get_mismatch_ratio(raw_path, html_path)
        if ratio >= 0:
            results.append((num, ratio))
            
    results.sort(key=lambda x: x[1], reverse=True)
    
    print(f"{'Layout':<8}{'Mismatch %':<15}{'Status':<15}")
    print("-" * 40)
    for num, ratio in results:
        pct = ratio * 100
        if pct > 5.0:
            status = "RUINED"
        elif pct > 1.0:
            status = "MINOR DIFF"
        else:
            status = "MATCH"
        print(f"{num:<8}{pct:<15.2f}%{status:<15}")

if __name__ == '__main__':
    main()
