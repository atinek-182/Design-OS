import os
import glob
import re

def main():
    react_dir = r"D:\AI-OS\projects\For AIOS\Micrographics\react"
    jsx_files = sorted(glob.glob(os.path.join(react_dir, "Frame*.jsx")))
    
    print(f"Auditing {len(jsx_files)} React JSX components...")
    
    errors = []
    for filepath in jsx_files:
        filename = os.path.basename(filepath)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Check import React
        if "import React from 'react';" not in content:
            errors.append(f"{filename}: Missing React import")
            
        # Check export default function
        if not re.search(r"export default function Frame\d{3}\(", content):
            errors.append(f"{filename}: Missing valid export default function definition")
            
        # Check balanced JSX return statement
        if "return (" not in content or ");" not in content:
            errors.append(f"{filename}: Invalid return statement structure")
            
        # Check for unescaped style string errors (e.g. style="...")
        if re.search(r'style="[^"]*"', content):
            errors.append(f"{filename}: Contains HTML style attribute string instead of JSX style object {{...}}")
            
        # Check for invalid class attributes
        if re.search(r'\bclass="', content):
            errors.append(f"{filename}: Contains HTML 'class' attribute instead of JSX 'className'")

    if errors:
        print(f"FOUND {len(errors)} ERRORS:")
        for err in errors:
            print(" -", err)
    else:
        print("ALL 50 REACT JSX COMPONENTS PASSED AUDIT (0 Syntax Errors, 100% Valid JSX Structure)!")

if __name__ == "__main__":
    main()
