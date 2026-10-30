# Avatar

A circular visual that represents a user, account or entity through image, initials or icon.

## When to use

- Identifying a user in a row, card or header
- Authoring or assignment metadata
- Presence with status dots
- Inline mentions or comments

## When NOT to use

- For brand or product imagery — use a thumbnail
- For decorative illustration — use an image
- For stats or counts — use Badge

## Anatomy

- Circular container
- Image / initials / icon
- Optional status dot
- Optional border

## Variants

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `default` | spacing.8 (32px) | x: 0px / 0px, y: 0px / 0px | — | Default for most layouts. |
| `sm` | — | — | — | Dense UIs and secondary contexts. |
| `lg` | — | — | — | Prominent or touch-friendly contexts. |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Size` | variant | default, sm, lg | `default` | |
| `State` | variant | default | `default` | |
| `Fallback` | text |  | `OP` | |

## Usage example

```tsx
<Avatar
  Size="default"
  State="default"
  Fallback="OP"
/>
```

## Do

- Fall back to initials, then to a generic icon
- Use a consistent ring for status across sizes
- Pair with a name when context is unclear
- Use stable size scale across the app

## Don't

- Don't pair tiny avatars with long names without context
- Don't differentiate roles only by color
- Don't show avatars without alt or accessible name
- Don't mix shapes (circle vs square) randomly

## Accessibility

- Provide an accessible name describing the person or entity
- If status is informational, expose it via aria-label
- Don't rely on color alone for presence
- Decorative avatars can be aria-hidden
- Maintain 3:1 contrast for initials over the background
