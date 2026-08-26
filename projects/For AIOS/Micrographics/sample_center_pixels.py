import os
from PIL import Image

def main():
    project_dir = os.path.dirname(os.path.abspath(__file__))
    qa_dir = os.path.join(project_dir, 'qa', 'comparisons_new')
    
    raw_img = Image.open(os.path.join(qa_dir, '024_raw.png')).convert('RGB')
    html_img = Image.open(os.path.join(qa_dir, '024_html.png')).convert('RGB')
    
    raw_pix = raw_img.load()
    html_pix = html_img.load()
    
    print("Pixel at (300, 300):")
    print("Raw SVG:", raw_pix[300, 300])
    print("HTML SVG:", html_pix[300, 300])
    
    print("\nPixel at (500, 500):")
    print("Raw SVG:", raw_pix[500, 500])
    print("HTML SVG:", html_pix[500, 500])

if __name__ == '__main__':
    main()
