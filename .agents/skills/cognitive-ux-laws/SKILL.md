---
name: cognitive-ux-laws
description: Use when applying foundational cognitive UX laws — Fitts's Law (target sizing/reachability), Hick's Law (decision latency/choice reduction), Miller's Law (working memory chunking), Tesler's Law (conservation of complexity), and Doherty Threshold (sub-400ms feedback).
---

# Cognitive UX Laws for High-Performance Interfaces

## 1. Fitts's Law (Target Acquisition)
$$T = a + b \log_2 \left(1 + \frac{D}{W}\right)$$
- Touch targets must be at least **44x44px** on touchscreens (48px recommended for iOS/Android).
- Pin primary CTAs to bottom sheet edges or sticky action bars to reduce cursor/thumb distance $D$.

## 2. Hick's Law (Decision Time)
$$RT = a + b \log_2(n)$$
- Minimize simultaneous choices in navigation menus and filter panels.
- Use progressive disclosure: show top 4 primary filters, tuck remaining into "More filters".

## 3. Miller's Law (Information Chunking)
- Working memory can hold $4 \pm 1$ distinct chunks of information.
- Format telephone numbers, credit cards, dates, and form steps into 3–5 logical blocks.

## 4. Tesler's Law (Conservation of Complexity)
- Every system has an inherent amount of complexity that cannot be removed.
- The software must absorb complexity (via smart defaults, automated formatting, autofill) so the end user doesn't carry it.

## 5. Doherty Threshold (Response Latency)
- Keep feedback latency under **400ms** to maintain conversational flow state.
- For actions taking $>400\text{ms}$, show optimistic UI updates or micro-loading skeletons immediately.
