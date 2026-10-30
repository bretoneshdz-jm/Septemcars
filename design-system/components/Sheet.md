# Sheet

No description available.

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
| `Open` | boolean |  | `true` | |
| `Side` | variant | top, right, bottom, left | `right` | |
| `State` | variant | default, hover, focus | `default` | |

## Usage example

```tsx
<Sheet
  Open
  Side="right"
  State="default"
/>
```
