---
name: workflow-evaluate
description: "Use when run a heuristic evaluation end to end — expert review against heuristics with severity ratings and recommended fixes."
---

# /evaluate
Run a heuristic evaluation of a design.
## Steps
1. **Scope** — Define screens and flows to evaluate.
2. **Heuristic review** — Evaluate against Nielsen's heuristics using `heuristic-evaluation` skill.
3. **Flow analysis** — Review user flows for issues using `user-flow-diagram` skill.
4. **Accessibility check** — Evaluate accessibility using `accessibility-test-plan` skill.
5. **Severity rating** — Rate and prioritize all findings.
6. **Recommendations** — Provide specific improvement suggestions.
## Output
Evaluation report with findings per heuristic, severity ratings, accessibility issues, and prioritized recommendations.
Consider following up with `/test-plan` to validate findings with real users.

---

## ⚡ Antigravity Execution Protocol

- **Interactive Execution**: Walk through each stage systematically, verifying step outputs before advancing.
- **Artifact Generation**: When generating specs, journey maps, or critique scorecards, output structured markdown artifacts to the designated docs directory.
- **Zero-Placeholder Policy**: Ensure all examples, criteria, and outputs use realistic production copy and accessible tokens.

