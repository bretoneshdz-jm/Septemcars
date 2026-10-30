---
name: personal-build-ui
description: Use when creating or changing UI in this repo (screens, components, styles or CSS) so it is built with the Personal design system instead of ad-hoc styles.
---

# Build UI with the Personal design system

This repo uses the Personal design system (v0.1.1), published as `@personal/design-system` in `design-system/`. Build every UI change with it.

## Before writing code

1. Read `design-system/design-system.json`: it lists every component, its props, and which token each part uses (`components[].tokenUsage`).
2. If a component already covers the need, use it. If none does, tell the user instead of rebuilding one by hand.

## While writing code

- Style only with semantic `var(--ds-*)` tokens, chosen by intent: `surface` for backgrounds, `content` for text, `border` for borders, `icon` for icons.
- Never write colour values (`#hex`, `rgb()`, `hsl()`), and never use primitive colour tokens directly.
- Do not invent token names: every valid one is declared in `design-system/tokens.css`.
- Do not edit files inside `design-system/`: DS Generator regenerates them on every publish.
- The full rules are in `design-system/AGENTS.md`.

## Before you finish

Run the `personal-audit` skill on the files you touched and fix what it reports:

    node .claude/skills/personal-audit/scripts/audit.mjs <folder> --json

(use `.agents/skills/...` if that is where this skill was loaded from).
