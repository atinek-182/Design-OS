#!/usr/bin/env python3
"""
git_sync.py: Deterministic Synchronous Git Synchronization Engine for Antigravity Design OS.
Prevents async race conditions by strictly waiting for git commit to exit before pushing.
Includes VibeSec pre-flight secret scanning and dynamic branch resolution.
"""

import os
import sys
import subprocess
import re
import argparse

# Prevent Windows cp1252 charmap encoding crashes
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

SECRET_PATTERNS = [
    r"AIza[0-9A-Za-z\\-_]{35}",                     # Google API key
    r"sk-[a-zA-Z0-9]{20,}",                         # OpenAI key
    r"ghp_[a-zA-Z0-9]{20,}",                        # GitHub Personal Access Token
    r"bearer\s+[a-zA-Z0-9_\\-\\.]{20,}",            # Bearer tokens
    r"BEGIN\s+PRIVATE\s+KEY",                        # Private keys
    r"\"api[_-]?key\"\s*:\s*\"[^\"]+\""              # API key JSON pairs
]

def run_cmd(cmd, cwd=None, check=True):
    is_shell = True if sys.platform == "win32" else isinstance(cmd, str)
    res = subprocess.run(cmd, cwd=cwd, shell=is_shell, capture_output=True, text=True, encoding="utf-8", errors="replace")
    if check and res.returncode != 0:
        print(f"[FAIL] Command failed with exit code {res.returncode}: {' '.join(cmd) if isinstance(cmd, list) else cmd}")
        if res.stderr:
            print(f"[STDERR] {res.stderr.strip()}")
        sys.exit(res.returncode)
    return res.returncode, res.stdout.strip()

def vibesec_secret_scan(repo_root):
    print("\n--- Step 1: VibeSec Pre-Flight Secret Hygiene Scan ---")
    code, diff = run_cmd(["git", "diff", "--cached"], cwd=repo_root, check=False)
    if not diff:
        code, diff = run_cmd(["git", "diff"], cwd=repo_root, check=False)

    for pattern in SECRET_PATTERNS:
        matches = re.findall(pattern, diff, re.IGNORECASE)
        if matches:
            print(f"[SECURITY] Critical Violation: Staged diff matches high-entropy secret pattern: {pattern}")
            print("           Commit halted to prevent remote secret exposure.")
            sys.exit(1)

    print("[PASS] Secret scan clear: 0 private keys, bearer tokens, or API credentials detected.")

def get_current_branch(repo_root):
    code, branch = run_cmd(["git", "rev-parse", "--abbrev-ref", "HEAD"], cwd=repo_root)
    return branch or "main"

def sync_git(commit_message, repo_root="d:/Design-OS", push=True):
    print("════════════════════════════════════════════════════════════════════════════════")
    print("[GIT] ANTIGRAVITY DESIGN OS: DETERMINISTIC SYNCHRONOUS GIT SYNC")
    print("════════════════════════════════════════════════════════════════════════════════")

    # 1. Secret Scan
    vibesec_secret_scan(repo_root)

    # 2. Stage All Changes
    print("\n--- Step 2: Staging Working Tree Changes (git add -A) ---")
    run_cmd(["git", "add", "-A"], cwd=repo_root)
    print("[PASS] Working tree changes staged successfully.")

    # 3. Check for Staged Changes
    res = subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=repo_root)
    has_changes = (res.returncode != 0)

    # 4. Synchronous Commit Execution
    print("\n--- Step 3: Synchronous Commit Execution ---")
    if has_changes:
        if not commit_message.startswith("["):
            commit_message = f"[EVOLVE]: {commit_message}"
        print(f"[RUN] git commit -m \"{commit_message}\"")
        code, out = run_cmd(["git", "commit", "-m", commit_message], cwd=repo_root)
        print(f"[PASS] Commit completed successfully:")
        for line in out.splitlines()[:5]:
            print(f"       {line}")
    else:
        print("[INFO] Working tree clean. Nothing to commit.")

    # 5. Resolve Active Branch
    branch = get_current_branch(repo_root)
    print(f"\n[INFO] Active Git Branch: {branch}")

    # 6. Synchronous Remote Push
    if push:
        print(f"\n--- Step 4: Synchronous Remote Push (git push origin {branch}) ---")
        print(f"[RUN] git push origin {branch}")
        code, out = run_cmd(["git", "push", "origin", branch], cwd=repo_root)
        print(f"[PASS] Remote push completed successfully to origin/{branch}.")
        if out:
            for line in out.splitlines():
                print(f"       {line}")
    else:
        print("\n[INFO] Remote push skipped (--no-push flag active).")

    print("\n================================================================================")
    print(f"[PASS] GIT SYNCHRONIZATION CERTIFIED ON BRANCH: {branch}")
    print("================================================================================")

def main():
    parser = argparse.ArgumentParser(description="Synchronous git add, commit, and push engine.")
    parser.add_argument("--message", "-m", default="Continuous evolution checkpoint and multi-tier hardening", help="Commit message")
    parser.add_argument("--no-push", action="store_true", help="Skip git push origin")
    parser.add_argument("--repo-dir", default=None, help="Target repository directory (defaults to repo root)")
    args = parser.parse_args()

    if args.repo_dir:
        repo_root = os.path.abspath(args.repo_dir)
    else:
        repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", ".."))
        if not os.path.exists(os.path.join(repo_root, ".git")):
            repo_root = "d:/Design-OS"

    sync_git(args.message, repo_root=repo_root, push=not args.no_push)

if __name__ == "__main__":
    main()
