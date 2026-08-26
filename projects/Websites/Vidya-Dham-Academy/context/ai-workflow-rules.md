---
title: Vidya Dham Academy - AI Workflow Rules
domain: architecture
summary: AI agent execution commands, scoping guidelines, and verification rules for Vidya Dham Academy.
critical_directives:
  - Follow document guidance without bypassing established safeguards.
section_outline:
  - AI Workflow Rules
  - Approach
  - Scoping Rules
  - When to Split Work
  - Handling Missing Requirements
  - Verification & Playwright Gates
read_triggers:
  - When working on architecture in context/ai-workflow-rules.md
  - When reading context for AI Workflow Rules
tags:
  - architecture
  - ai-workflow-rules
updated: '2026-08-13'
---

# AI Workflow Rules

## Approach

Development follows the 7-File Context Methodology v3.2. Work is spec-driven, ticket-deconstructed, and verified via Playwright automated testing before completion assertions.

## Scoping Rules

- Work on one ticket at a time.
- Implement small, verifiable increments.
- Do not combine unrelated system layers (e.g. database schema + visual UI styling) in a single execution ticket.

## When to Split Work

Split tickets if they touch:
1. Multiple unrelated pages or component boundaries.
2. Complex API integration alongside visual layout overhauls.
3. Features lacking clear definition in `context/specs/`.

## Handling Missing Requirements

- Do not invent product behavior.
- Document ambiguity as an open question in `context/progress-tracker.md`.
- Ask the operator via Socratic options evaluation.

## Verification & Playwright Gates

1. Run runtime compilation / dev server checks.
2. Execute Playwright 5-viewport screenshot sweep for UI components.
3. Verify zero console errors and clean log output before marking ticket completed.
