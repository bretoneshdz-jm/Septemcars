# Card

A self-contained surface that groups a heading, body, optional media and actions about a single entity.

## When to use

- Items in a feed, gallery or grid
- Summarising an entity with a CTA (product, project, article)
- Dashboard tiles that pair text, image and actions
- Catalogues with mixed text and media

## When NOT to use

- For dense rows — use a Table
- For static text blocks — render plain content
- For interactive controls only — use Button or ActionGroup

## Anatomy

- Surface
- Optional image
- Optional avatar
- Header (title + subtitle)
- Body
- Optional footer
- Action buttons

## Variants

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `default` | 397px | x: 0px / 0px, y: spacing.4 (16px) / spacing.none (0px) | — | Default for most layouts. |
| `sm` | — | — | — | Dense UIs and secondary contexts. |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Size` | variant | default, sm | `default` | |
| `State` | variant | default, hover | `default` | |

## Usage example

```tsx
<Card
  Size="default"
  State="default"
/>
```

## Do

- Lead with the title and most useful metadata
- Keep image aspect ratios consistent across cards
- Use the accent variant sparingly
- Match action emphasis to the card's purpose

## Don't

- Don't nest cards within cards
- Don't mix layouts inside one row
- Don't make the entire card clickable AND nest sub-buttons without care
- Don't crowd with more than 2 actions

## Accessibility

- If the whole card is clickable, expose a single accessible name
- Avoid nesting interactive controls inside a clickable card without explicit semantics
- Keep heading hierarchy consistent with the rest of the page
- Ensure media has alt text or is hidden as decorative
- Maintain 4.5:1 contrast for body copy
