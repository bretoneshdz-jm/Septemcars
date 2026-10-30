# Badge

A small, saturated indicator that emphasises a count, status or label.

## When to use

- Counters on navigation items (8 unread)
- Status pills inside tables or cards
- Featured / new / beta indicators
- Numeric or short status labels that demand emphasis

## When NOT to use

- For removable filter chips — use Tag
- For long labels — use Tag with a softer palette
- For navigation — use Link

## Anatomy

- Container
- Optional icon
- Label or count

## Variants

### Variant

| Variant | Purpose |
| --- | --- |
| `default` | Standard appearance used when no special emphasis applies. |
| `secondary` | Secondary action paired with a primary. |
| `destructive` | Destructive action; removes or permanently changes data. |
| `outline` | Bordered, low-fill action; secondary emphasis on busy surfaces. |
| `ghost` | Minimal-chrome action for dense or in-context use. |
| `link` | Inline, text-only action that reads like a hyperlink. |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |
| `invalid` | Validation failed. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Label` | text |  | `Badge` | |
| `State` | variant | default, hover, focus, invalid | `default` | |
| `Variant` | variant | default, secondary, destructive, outline, ghost, link | `default` | |

## Usage example

```tsx
<Badge
  Label="Badge"
  State="default"
  Variant="default"
/>
```

## Do

- Keep content to a number or short label
- Use the matching semantic color
- Place badges consistently across the surface
- Cap large counts ("99+") for legibility

## Don't

- Don't put long sentences in a badge
- Don't reuse it as a button
- Don't combine multiple badges in one cluster
- Don't pick colors that fight surrounding content

## Accessibility

- Provide an accessible name for counters ("8 unread items")
- Don't rely on color alone for the status
- Maintain 4.5:1 text contrast against the bold background
- Live counters can use aria-live
- Keep the badge near its referent
