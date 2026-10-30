# Collapsible

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
| `Open` | boolean |  | `true` | |
| `State` | variant | default, hover, focus, disabled | `default` | |

## Usage example

```tsx
<Collapsible
  Open
  State="default"
/>
```
