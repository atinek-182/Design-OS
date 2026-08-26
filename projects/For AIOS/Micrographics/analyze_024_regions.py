import os
from PIL import Image

def main():
    project_dir = os.path.dirname(os.path.abspath(__file__))
    qa_dir = os.path.join(project_dir, 'qa', 'comparisons_new')
    
    raw_path = os.path.join(qa_dir, '024_raw.png')
    html_path = os.path.join(qa_dir, '024_html.png')
    
    raw_img = Image.open(raw_path).convert('RGB')
    html_img = Image.open(html_path).convert('RGB')
    
    width, height = raw_img.size
    raw_pix = raw_img.load()
    html_pix = html_img.load()
    
    # Check background color outside center square
    bg_diffs = 0
    bg_total = 0
    
    center_diffs = 0
    center_total = 0
    
    for y in range(height):
        for x in range(width):
            r1, g1, b1 = raw_pix[x, y]
            r2, g2, b2 = html_pix[x, y]
            is_diff = (abs(r1-r2) > 10 or abs(g1-g2) > 10 or abs(b1-b2) > 10)
            
            if 196 <= x < 884 and 196 <= y < 884:
                center_total += 1
                if is_diff:
                    center_diffs += 1
            else:
                bg_total += 1
                if is_diff:
                    bg_diffs += 1
                    
    print(f"Background (outside center) total: {bg_total}, diffs: {bg_diffs} ({bg_diffs/bg_total*100:.2f}%)")
    print(f"Center square total: {center_total}, diffs: {center_diffs} ({center_diffs/center_total*100:.2f}%)")
    
    print(f"Sample raw pixel (0,0): {raw_pix[0,0]}")
    print(f"Sample html pixel (0,0): {html_pix[0,0]}")

if __name__ == '__main__':
    main()
