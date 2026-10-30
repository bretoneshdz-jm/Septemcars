# ButtonGroup

A horizontally or vertically aligned set of related Buttons, typically the commit pair of a form or dialog.

## When to use

- The footer of a dialog, drawer or form
- A confirm / cancel pair at the end of a flow
- A small set of mutually relevant CTAs
- When you need consistent spacing between commit actions

## When NOT to use

- For segmented selection — use ActionGroup
- For dense toolbars — use ActionBar
- When buttons are unrelated and live across the page

## Anatomy

- Container
- Button instances
- Gap between buttons

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |

### Orientation

| Orientation | Purpose |
| --- | --- |
| `horizontal` | Lays children out in a row. |
| `vertical` | Stacks children in a column. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Text` | text |  | `` | |
| `State` | variant | default | `default` | |
| `Orientation` | variant | horizontal, vertical | `horizontal` | |

## Usage example

```tsx
<ButtonGroup
  State="default"
  Orientation="horizontal"
/>
```

## Do

- Place the primary action last by default
- Keep labels short and parallel
- Limit to 2–3 buttons
- Match button sizing across the group

## Don't

- Don't mix sizes inside the same group
- Don't use more than one primary button
- Don't add a destructive button without confirmation
- Don't reorder primary/secondary across platforms inconsistently

## Accessibility

- Tab order matches the visual order
- Primary action ends the tab sequence (right or bottom)
- Each button keeps its own accessible name
- Maintain a minimum gap so adjacent targets don't merge
- Respect platform conventions for button order
