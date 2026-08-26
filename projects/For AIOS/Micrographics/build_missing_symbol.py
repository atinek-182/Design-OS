import urllib.request
import base64
import os

def main():
    img_url = "https://s3-alpha-sig.figma.com/img/14f4/c006/047010b0b92ed473c7375c84804351f3?Expires=1785715200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WcKiAJoNQKIDR05N7u7QhqErEqdwkfzzu9-1C~33dGDpfY22Yb~5c4n-GKOlxVykjbJr~EzlCY0rQB~pQUkvYMd-4JIx~ZtG~Qjw0Q~Uih-LdTf-mY9KTKycuS9jT1znTdsejLw158hZ-LfYHN8hHqGOS1PinOJ1X5BUCVsgo5YShtPCFJyXIQRYCxkZYauq9jprieRZzPbdQItbMQ0XDfu7iDA78JaVEeP-Hxua6aNQnPLSxHO2HHZjvc66~iVr8sn0lHSDklNVMnXRBlys5EYpIWHx33DkoUC856uCMuBp6xP3dwma35KGxJcfzUMzczhthSXFKUWWperugG~kVQ__"
    
    dest_svg = r"D:\AI-OS\projects\For AIOS\Micrographics\symbols\symbol_024_1741380738072_1_31_138.svg"
    
    try:
        print("Downloading image from S3...")
        req = urllib.request.Request(img_url)
        req.add_header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
        
        with urllib.request.urlopen(req) as response:
            img_data = response.read()
            print("Download successful. Size:", len(img_data), "bytes")
            
            mime_type = "image/png"
            if img_data.startswith(b"\xff\xd8"):
                mime_type = "image/jpeg"
            elif img_data.startswith(b"GIF8"):
                mime_type = "image/gif"
                
            base64_str = base64.b64encode(img_data).decode('utf-8')
            
            svg_content = f'''<svg width="688" height="688" viewBox="0 0 688 688" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image width="688" height="688" opacity="0.69" href="data:{mime_type};base64,{base64_str}"/>
</svg>'''
            
            os.makedirs(os.path.dirname(dest_svg), exist_ok=True)
            with open(dest_svg, "w", encoding="utf-8") as f:
                f.write(svg_content)
                
            print("Successfully created direct image SVG at:", dest_svg)
    except Exception as e:
        print("Failed to build symbol SVG:", e)

if __name__ == "__main__":
    main()
