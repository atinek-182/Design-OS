#!/usr/bin/env python3
"""
certify_os.py: Triple-Gate Certification Engine for Antigravity Design OS.
Runs Python syntax passes, npm run validate (100% skills, 0 errors, 0 warnings),
and synchronizes catalog lockfiles.
"""

import os
import sys
import subprocess
import glob

# Prevent Windows cp1252 charmap encoding crashes
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

def run_cmd(cmd, cwd=None):
    print(f"[RUN] {' '.join(cmd) if isinstance(cmd, list) else cmd}")
    is_shell = True if sys.platform == "win32" else isinstance(cmd, str)
    res = subprocess.run(cmd, cwd=cwd, shell=is_shell, capture_output=True, text=True, encoding="utf-8", errors="replace")
    if res.stdout:
        for line in res.stdout.strip().splitlines():
            print(f"      {line}")
    if res.stderr and res.returncode != 0:
        for line in res.stderr.strip().splitlines():
            print(f"  [!] {line}")
    return res.returncode, res.stdout

def certify_os(repo_root="d:/Design-OS"):
    print("════════════════════════════════════════════════════════════════════════════════")
    print("[GATE] ANTIGRAVITY DESIGN OS: TRIPLE-GATE CERTIFICATION PIPELINE")
    print("════════════════════════════════════════════════════════════════════════════════")

    # Gate 1: Python Script Syntax & Compilation Pass
    print("\n--- Gate 1: Python Syntax & Compilation Verification ---")
    scripts = glob.glob(os.path.join(repo_root, "scripts", "**", "*.py"), recursive=True)
    scripts.extend(glob.glob(os.path.join(repo_root, ".agents", "skills", "**", "scripts", "*.py"), recursive=True))

    syntax_errors = 0
    for s in scripts:
        try:
            with open(s, "r", encoding="utf-8") as f:
                compile(f.read(), s, "exec")
        except Exception as e:
            print(f"[FAIL] Syntax error in {s}: {e}")
            syntax_errors += 1

    if syntax_errors > 0:
        print(f"[FAIL] Gate 1 Failed: {syntax_errors} script(s) have syntax errors.")
        return False
    print(f"[PASS] Gate 1 Passed: {len(scripts)} Python scripts verified with clean syntax.")

    # Gate 2: Full Skills YAML Frontmatter & Integrity Audit
    print("\n--- Gate 2: Skill Frontmatters & Integrity Audit (npm run validate) ---")
    code, out = run_cmd(["npm", "run", "validate"], cwd=repo_root)
    if code != 0:
        print(f"[FAIL] Gate 2 Failed: npm run validate exited with code {code}.")
        return False
    if "Errors:    0" not in out or "Warnings:  0" not in out:
        print("[FAIL] Gate 2 Failed: Residual errors or warnings detected in skills catalog.")
        return False
    print("[PASS] Gate 2 Passed: 100% of skills validated with 0 errors and 0 warnings.")

    # Gate 3: Catalog Synchronization & Lockfile Update
    print("\n--- Gate 3: Catalog & Lockfile Synchronization (npm run sync:catalog) ---")
    code, out = run_cmd(["npm", "run", "sync:catalog"], cwd=repo_root)
    if code != 0:
        print(f"[FAIL] Gate 3 Failed: npm run sync:catalog exited with code {code}.")
        return False
    print("[PASS] Gate 3 Passed: Skills lockfile and README catalog synchronized.")

    print("\n================================================================================")
    print("[PASS] ALL 3 GATES CERTIFIED: REPOSITORY IS 100% COMPLIANT AND SOUND")
    print("================================================================================")
    return True

def main():
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", ".."))
    if not os.path.exists(os.path.join(repo_root, "package.json")):
        repo_root = "d:/Design-OS"
    
    success = certify_os(repo_root)
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
