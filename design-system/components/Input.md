# Input

A single-line text field for free-form entry such as names, emails or short values.

## When to use

- Collecting a single line of text or a short value
- Email, name, URL, search-like queries (when SearchField doesn't fit)
- Inline editing of a discrete property
- Inside a Form alongside other controls

## When NOT to use

- For numeric input with stepping — use NumberField
- For multi-line content — use TextArea
- When the value belongs to a finite list — use Select / ComboBox

## Anatomy

- Label
- Field container
- Placeholder text
- Optional leading/trailing icon
- Helper or error text

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |
| `invalid` | Validation failed. |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `State` | variant | default, hover, focus, invalid, disabled | `default` | |

## Usage example

```tsx
<Input
  State="default"
/>
```

## Do

- Use a concise visible label
- Show error messages near the field
- Match input type to data (email, url, tel)
- Surface a helper for non-obvious formats

## Don't

- Don't use placeholder as a substitute for label
- Don't restrict input silently — explain rules
- Don't autofocus mid-page on every screen
- Don't disable without explaining why

## Accessibility

- Pair every input with a visible <label> via for/id
- Helper / error text uses aria-describedby
- Errors announced via aria-invalid and a visible message
- Focus ring is at least 2px and 3:1 contrast
- Don't rely on placeholder as the label
