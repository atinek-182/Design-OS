#!/usr/bin/env python3
"""
flagship-project-init: Deterministic Project Scaffolder
Scaffolds an Awwwards-tier project workspace under projects/<category>/<name>
with the complete 8-file context foundation, project-level GEMINI.md, RESUME.md,
live DESIGN_MAP.mermaid, and all 24 hydrated prompt templates.
"""

import os
import sys
import shutil
import argparse
from datetime import datetime

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

VALID_CATEGORIES = [
    "Websites",
    "Products",
    "Sandbox",
    "For design",
    "For AIOS",
    "Learning",
    "Brand",
    "My advisors"
]

def normalize_posix(path_str: str) -> str:
    return os.path.normpath(path_str).replace("\\", "/")

def get_base_dir() -> str:
    # Skill directory is parent of scripts/
    return os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def hydrate_content(content: str, replacements: dict) -> str:
    for key, val in replacements.items():
        content = content.replace(f"{{{{{key}}}}}", str(val))
    return content

def scaffold_project(name: str, category: str, stack: str, vibe: str, root_workspace: str):
    if category not in VALID_CATEGORIES:
        print(f"Error: Invalid category '{category}'. Must be one of: {VALID_CATEGORIES}")
        sys.exit(1)

    clean_name = name.strip().replace(" ", "-").lower()
    project_dir = os.path.join(root_workspace, "projects", category, clean_name)
    skill_dir = get_base_dir()
    templates_dir = os.path.join(skill_dir, "templates")

    if os.path.exists(project_dir):
        print(f"Warning: Project directory already exists at {normalize_posix(project_dir)}")
    else:
        os.makedirs(project_dir, exist_ok=True)

    # Required Subdirectories
    subdirs = [
        "context",
        "specs",
        "audits/visual-qa",
        "docs",
        "prompts",
        "reference",
        "src/assets",
        "scripts"
    ]
    for sd in subdirs:
        os.makedirs(os.path.join(project_dir, sd), exist_ok=True)

    date_str = datetime.now().strftime("%Y-%m-%d")
    datetime_str = datetime.now().strftime("%Y-%m-%d %H:%M UTC")

    replacements = {
        "PROJECT_NAME": clean_name,
        "PROJECT_CATEGORY": category,
        "PROJECT_PATH": f"projects/{category}/{clean_name}",
        "TARGET_STACK": stack,
        "AESTHETIC_VIBE": vibe,
        "DATE": date_str,
        "DATETIME": datetime_str
    }

    # 1. Copy & Hydrate Root Templates (project-GEMINI.md, RESUME.md, DESIGN_MAP.mermaid)
    gemini_src = os.path.join(templates_dir, "project-GEMINI.md")
    if os.path.exists(gemini_src):
        with open(gemini_src, "r", encoding="utf-8") as f:
            content = hydrate_content(f.read(), replacements)
        with open(os.path.join(project_dir, "GEMINI.md"), "w", encoding="utf-8") as f:
            f.write(content)

    resume_src = os.path.join(templates_dir, "RESUME.md")
    if os.path.exists(resume_src):
        with open(resume_src, "r", encoding="utf-8") as f:
            content = hydrate_content(f.read(), replacements)
        with open(os.path.join(project_dir, "RESUME.md"), "w", encoding="utf-8") as f:
            f.write(content)

    map_src = os.path.join(templates_dir, "DESIGN_MAP.mermaid")
    if os.path.exists(map_src):
        with open(map_src, "r", encoding="utf-8") as f:
            content = hydrate_content(f.read(), replacements)
        with open(os.path.join(project_dir, "docs", "DESIGN_MAP.mermaid"), "w", encoding="utf-8") as f:
            f.write(content)

    # 2. Copy & Hydrate context/ templates
    context_tpl_dir = os.path.join(templates_dir, "context")
    if os.path.exists(context_tpl_dir):
        for fname in os.listdir(context_tpl_dir):
            src_file = os.path.join(context_tpl_dir, fname)
            if os.path.isfile(src_file):
                with open(src_file, "r", encoding="utf-8") as f:
                    content = hydrate_content(f.read(), replacements)
                with open(os.path.join(project_dir, "context", fname), "w", encoding="utf-8") as f:
                    f.write(content)

    # 3. Copy & Hydrate prompts/ templates
    prompts_tpl_dir = os.path.join(templates_dir, "prompts")
    if os.path.exists(prompts_tpl_dir):
        for fname in os.listdir(prompts_tpl_dir):
            src_file = os.path.join(prompts_tpl_dir, fname)
            if os.path.isfile(src_file):
                with open(src_file, "r", encoding="utf-8") as f:
                    content = hydrate_content(f.read(), replacements)
                with open(os.path.join(project_dir, "prompts", fname), "w", encoding="utf-8") as f:
                    f.write(content)

    # 4. Copy utility scripts into project scripts/
    scripts_src_dir = os.path.join(skill_dir, "scripts")
    for script_name in ["phase_gate.py", "hydrate_prompt.py", "sanitize_svg.py"]:
        src_script = os.path.join(scripts_src_dir, script_name)
        if os.path.exists(src_script):
            shutil.copy2(src_script, os.path.join(project_dir, "scripts", script_name))

    # 5. Initialize active prompt for Chat 1
    chat01_path = os.path.join(project_dir, "prompts", "chat-01.md")
    if os.path.exists(chat01_path):
        with open(chat01_path, "r", encoding="utf-8") as f:
            chat01_content = f.read()
        with open(os.path.join(project_dir, "NEXT_CHAT_PROMPT.md"), "w", encoding="utf-8") as f:
            f.write(chat01_content)

    # 6. Initialize State Mutex
    lock_content = f'{{\n  "project_name": "{clean_name}",\n  "active_phase": "1.1",\n  "active_chat": 1,\n  "status": "INITIALIZED",\n  "created_at": "{datetime_str}"\n}}\n'
    with open(os.path.join(project_dir, ".design-lock.json"), "w", encoding="utf-8") as f:
        f.write(lock_content)

    print(f"SUCCESS: Project initialized at {normalize_posix(project_dir)}")
    print(f"Single-Anchor Resume File: {normalize_posix(os.path.join(project_dir, 'RESUME.md'))}")
    print(f"Initial Chat Prompt: {normalize_posix(os.path.join(project_dir, 'NEXT_CHAT_PROMPT.md'))}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Flagship Project Scaffolder")
    parser.add_argument("--name", required=True, help="Project name / slug")
    parser.add_argument("--category", default="Websites", choices=VALID_CATEGORIES, help="Project category folder")
    parser.add_argument("--stack", default="vite-react", help="Target stack: vite-react | next-app-router | html5-vanilla")
    parser.add_argument("--vibe", default="mesh-gradient-dark-blue-clean", help="Aesthetic archetype")
    parser.add_argument("--root", default=os.getcwd(), help="Root workspace directory")
    args = parser.parse_args()

    scaffold_project(args.name, args.category, args.stack, args.vibe, args.root)
