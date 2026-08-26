import os
from PIL import Image

def main():
    project_dir = os.path.dirname(os.path.abspath(__file__))
    raw_img_path = os.path.join(project_dir, 'qa', 'comparisons', '024_raw.png')
    
    if os.path.exists(raw_img_path):
        img = Image.open(raw_img_path)
        print(f"Image size: {img.size}")
        
        # Crop the region of node 31:138 (x=196, y=196, w=688, h=688)
        # Note: raw screenshot size might be 1080x1080
        crop_box = (196, 196, 196 + 688, 196 + 688)
        cropped = img.crop(crop_box)
        
        # Check colors
        colors = cropped.getcolors(maxcolors=256)
        if colors:
            print(f"Number of unique colors in cropped region: {len(colors)}")
            # Print top 5 colors
            sorted_colors = sorted(colors, key=lambda x: x[0], reverse=True)
            print("Top colors (count, color):")
            for count, color in sorted_colors[:10]:
                print(f"  {count}: {color}")
        else:
            print("More than 256 unique colors (likely a gradient or complex image).")
            
        # Save crop for reference
        cropped.save(os.path.join(project_dir, 'qa', '024_cropped_ref.png'))
        print("Saved crop as qa/024_cropped_ref.png")
    else:
        print(f"Raw image not found at {raw_img_path}")

if __name__ == '__main__':
    main()
