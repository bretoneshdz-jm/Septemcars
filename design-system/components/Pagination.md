# Pagination

A navigational control that splits long content into numbered pages and lets users jump between them.

## When to use

- Listings, search results or tables with many records
- When linear scroll would be overwhelming
- When direct page access matters
- For SEO-friendly URL pagination

## When NOT to use

- For continuous feeds — use infinite scroll
- For very short lists
- When sorting and filtering make pages obsolete

## Anatomy

- Page numbers
- Selected page
- Previous / next
- Optional ellipsis

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Page` | variant | 1, 2, 3 | `2` | |
| `State` | variant | default, hover, focus | `default` | |

## Usage example

```tsx
<Pagination
  Page="2"
  State="default"
/>
```

## Do

- Show the current and total pages
- Provide previous and next controls
- Keep the active page visually unambiguous
- Use ellipsis to hide ranges in long sequences

## Don't

- Don't combine infinite scroll and pagination randomly
- Don't hide the total when it matters
- Don't make page targets too small to tap
- Don't lose the user's place when filters change

## Accessibility

- Wrap in <nav aria-label="Pagination">
- Mark current page with aria-current="page"
- Each page link is keyboard-focusable
- Previous / next have accessible names
- Announce page changes via aria-live when relevant
