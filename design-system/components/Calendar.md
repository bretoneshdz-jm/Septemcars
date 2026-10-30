# Calendar

No description available.

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Mode` | variant | single, multiple, range | `single` | |
| `Month` | text |  | `2026-06-01` | |
| `State` | variant | default, hover, focus, disabled | `default` | |
| `Today` | text |  | `2026-06-17` | |
| `Locale` | variant | es, en | `en` | |
| `Selection` | text |  | `2026-06-17` | |

## Usage example

```tsx
<Calendar
  Mode="single"
  Month="2026-06-01"
  State="default"
  Today="2026-06-17"
  Locale="en"
  Selection="2026-06-17"
/>
```
