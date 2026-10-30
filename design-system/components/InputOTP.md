# InputOTP

No description available.

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `focus` | Keyboard focus (visible ring). |
| `invalid` | Validation failed. |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `State` | variant | default, focus, invalid, disabled | `default` | |

## Usage example

```tsx
<InputOTP
  State="default"
/>
```
