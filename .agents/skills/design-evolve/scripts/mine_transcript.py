#!/usr/bin/env python3
"""
mine_transcript.py: Deterministic Transcript Mining Engine for Antigravity Design OS.
Extracts failed tool calls, non-zero command exits, IDE warnings, and user corrections.
"""

import os
import sys
import json
import re
import glob
import argparse
from datetime import datetime

# Prevent Windows cp1252 charmap encoding crashes
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

USER_CORRECTION_KEYWORDS = [
    r"\bdon't\b", r"\bdont\b", r"\bnever\b", r"\berror\b", r"\bwarning\b",
    r"\byellow\b", r"\bupgrade\b", r"\bfix\b", r"\bbroken\b", r"\bwrong\b",
    r"\bmissing\b", r"\bfail\b", r"\bwait\b", r"\brace condition\b"
]

ERROR_KEYWORDS = [
    "UnicodeEncodeError", "charmap", "status code 404", "exit code 1", "exit code 128",
    "exit code 2", "SyntaxError", "Cannot find module", "UnhandledPromiseRejection",
    "Invalid tool call", "command failed", "Error:", "TypeError:"
]

def find_latest_transcript(app_data_dir=None):
    if not app_data_dir:
        home = os.path.expanduser("~")
        app_data_dir = os.path.join(home, ".gemini", "antigravity-ide", "brain")
    
    if not os.path.exists(app_data_dir):
        return None
    
    search_pattern = os.path.join(app_data_dir, "*", ".system_generated", "logs", "transcript.jsonl")
    transcripts = glob.glob(search_pattern)
    if not transcripts:
        return None
    
    transcripts.sort(key=lambda p: os.path.getmtime(p), reverse=True)
    return transcripts[0]

def mine_transcript(transcript_path, output_manifest_path=None):
    if not os.path.exists(transcript_path):
        print(f"[FAIL] Transcript file not found at: {transcript_path}")
        sys.exit(1)

    print(f"[INFO] Mining conversation transcript: {transcript_path}")
    
    incidents = []
    user_corrections = []
    files_touched = set()
    skills_touched = set()
    step_count = 0

    with open(transcript_path, "r", encoding="utf-8", errors="replace") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            step_count += 1
            try:
                data = json.loads(line)
            except Exception:
                continue

            step_idx = data.get("step_index", step_count)
            step_type = data.get("type", "")
            content = data.get("content", "")
            status = data.get("status", "")

            # 1. Track Touched Files & Skills
            tool_calls = data.get("tool_calls", [])
            for call in tool_calls:
                args = call.get("args", {})
                for k, v in args.items():
                    if isinstance(v, str):
                        # Match absolute paths or file URLs
                        matches = re.findall(r"([a-zA-Z]:[\\/][^'\"\n\r\t]+)", v)
                        for m in matches:
                            clean_m = m.replace("\\", "/")
                            files_touched.add(clean_m)
                            # Check if under .agents/skills/
                            skill_match = re.search(r"/\.agents/skills/([^/]+)/", clean_m)
                            if skill_match:
                                skills_touched.add(skill_match.group(1))

            # 2. Check for User Corrections
            if step_type == "USER_INPUT" and content:
                content_lower = content.lower()
                matched_keywords = [kw for kw in USER_CORRECTION_KEYWORDS if re.search(kw, content_lower)]
                if matched_keywords:
                    user_corrections.append({
                        "step_index": step_idx,
                        "matched_signals": matched_keywords,
                        "content_snippet": content[:300] + ("..." if len(content) > 300 else "")
                    })

            # 3. Check for Tool Errors or Failure Outputs
            text_to_check = content if isinstance(content, str) else json.dumps(content)
            found_errors = [ek for ek in ERROR_KEYWORDS if ek.lower() in text_to_check.lower()]
            if status in ["ERROR", "FAILED"] or found_errors:
                incidents.append({
                    "step_index": step_idx,
                    "type": step_type,
                    "status": status,
                    "detected_errors": found_errors,
                    "snippet": text_to_check[:400] + ("..." if len(text_to_check) > 400 else "")
                })

    manifest = {
        "timestamp": datetime.now().isoformat(),
        "transcript_path": transcript_path,
        "total_steps_analyzed": step_count,
        "total_errors_detected": len(incidents),
        "total_user_corrections": len(user_corrections),
        "skills_touched": sorted(list(skills_touched)),
        "files_touched_count": len(files_touched),
        "incidents": incidents,
        "user_corrections": user_corrections
    }

    if not output_manifest_path:
        os.makedirs(".tastemaker", exist_ok=True)
        output_manifest_path = os.path.join(".tastemaker", "incident-manifest.json")
    else:
        os.makedirs(os.path.dirname(os.path.abspath(output_manifest_path)), exist_ok=True)

    with open(output_manifest_path, "w", encoding="utf-8") as out:
        json.dump(manifest, out, indent=2)

    print("================================================================================")
    print(f"[PASS] Transcript Mining Complete")
    print(f"       Steps Analyzed    : {step_count}")
    print(f"       Errors Detected   : {len(incidents)}")
    print(f"       User Corrections  : {len(user_corrections)}")
    print(f"       Skills Implicated : {', '.join(skills_touched) if skills_touched else 'None'}")
    print(f"       Manifest Written  : {output_manifest_path}")
    print("================================================================================")
    return manifest

def main():
    parser = argparse.ArgumentParser(description="Mine conversation transcript for errors and user corrections.")
    parser.add_argument("--transcript", help="Path to transcript.jsonl file", default=None)
    parser.add_argument("--out", help="Path to output incident manifest", default=None)
    args = parser.parse_args()

    transcript_path = args.transcript
    if not transcript_path:
        transcript_path = find_latest_transcript()
        if not transcript_path:
            print("[FAIL] Could not locate active conversation transcript automatically. Pass --transcript <path>.")
            sys.exit(1)

    mine_transcript(transcript_path, args.out)

if __name__ == "__main__":
    main()
