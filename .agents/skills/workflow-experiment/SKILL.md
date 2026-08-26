---
name: workflow-experiment
description: "Use when design an A/B experiment end to end — hypothesis, variants, primary metric, and sample size."
---

# /experiment
Design an A/B experiment.
## Steps
1. **Hypothesis** — Structure the hypothesis using `a-b-test-design` skill.
2. **Variants** — Define control and treatment designs.
3. **Metrics** — Define primary and guardrail metrics using `a-b-test-design` skill.
4. **Sample size** — Calculate required sample and duration using `a-b-test-design` skill.
5. **User flows** — Map variant flows using `user-flow-diagram` skill.
6. **Analysis plan** — Define how results will be analyzed and decisions made.
## Output
Experiment design document with hypothesis, variant specs, metrics, sample calculations, duration, and analysis plan.
Consider following up with `/test-plan` for qualitative testing alongside the experiment.

---

## ⚡ Antigravity Execution Protocol

- **Interactive Execution**: Walk through each stage systematically, verifying step outputs before advancing.
- **Artifact Generation**: When generating specs, journey maps, or critique scorecards, output structured markdown artifacts to the designated docs directory.
- **Zero-Placeholder Policy**: Ensure all examples, criteria, and outputs use realistic production copy and accessible tokens.

