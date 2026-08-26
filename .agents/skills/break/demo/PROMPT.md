# Break: Component Stress-Testing Harness Superprompt

Use this prompt contract to test whether a newly authored component survives real-world edge cases before shipping to production.

```markdown
Render [COMPONENT_NAME] inside an isolated test-harness page under 5 extreme production stress scenarios:

1. **Scenario: Extreme Overflow**: 60-character unspaced strings, international characters, multiline text overflow.
2. **Scenario: Empty / Null State**: Missing avatar, undefined email, empty array, null role fallback.
3. **Scenario: 320px Constraint**: Enclosed inside a fixed 320px mobile container with no viewport horizontal scroll.
4. **Scenario: Numeric Bounds**: Zero values, negative values, and 12-digit numbers with currency symbols.
5. **Scenario: Rapid Interaction**: Keyboard focus ring states, disabled submit behavior, and loading spinner transitions.

Output the results in a clear pass/fail breakdown with recommended domain skill fixes (`better-typography`, `better-layout`, `better-accessibility`).
```
