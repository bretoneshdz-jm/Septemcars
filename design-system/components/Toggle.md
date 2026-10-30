# Toggle

No description available.

## Variants

### Variant

| Variant | Purpose |
| --- | --- |
| `default` | Standard appearance used when no special emphasis applies. |
| `outline` | Bordered, low-fill action; secondary emphasis on busy surfaces. |

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `default` | spacing.7 (28px) | x: spacing.2-5 (10px) / spacing.2-5 (10px), y: 0px / 0px | — | Default for most layouts. |
| `sm` | — | — | — | Dense UIs and secondary contexts. |
| `lg` | — | — | — | Prominent or touch-friendly contexts. |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `active` | Being pressed / activated. |
| `focus` | Keyboard focus (visible ring). |
| `invalid` | Validation failed. |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Size` | variant | default, sm, lg | `default` | |
| `State` | variant | default, hover, active, focus, invalid, disabled | `default` | |
| `Pressed` | boolean |  | `false` | |
| `Variant` | variant | default, outline | `default` | |

## Usage example

```tsx
<Toggle
  Size="default"
  State="default"
  Variant="default"
/>
```
