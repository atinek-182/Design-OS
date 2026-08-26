import os
from PIL import Image, ImageChops

def main():
    project_dir = os.path.dirname(os.path.abspath(__file__))
    qa_dir = os.path.join(project_dir, 'qa', 'comparisons_new')
    
    raw_path = os.path.join(qa_dir, '024_raw.png')
    html_path = os.path.join(qa_dir, '024_html.png')
    
    if os.path.exists(raw_path) and os.path.exists(html_path):
        raw_img = Image.open(raw_path).convert('RGB')
        html_img = Image.open(html_path).convert('RGB')
        
        diff = ImageChops.difference(raw_img, html_img)
        diff_path = os.path.join(qa_dir, '024_diff.png')
        diff.save(diff_path)
        print(f"Saved diff image to {diff_path}")
        
        # Create side by side comparison
        dst = Image.new('RGB', (raw_img.width * 3, raw_img.height))
        dst.paste(raw_img, (0, 0))
        dst.paste(html_img, (raw_img.width, 0))
        dst.paste(diff, (raw_img.width * 2, 0))
        
        side_by_side = os.path.join(qa_dir, '024_side_by_side.png')
        dst.save(side_by_side)
        print(f"Saved side-by-side comparison to {side_by_side}")
    else:
        print("Missing raw or html screenshot for 024.")

if __name__ == '__main__':
    main()
