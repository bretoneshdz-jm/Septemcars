# ToggleGroup

No description available.

## Variants

### Type

| Type | Purpose |
| --- | --- |
| `single` | — |
| `multiple` | — |

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `default` | 32px | x: 0px / 0px, y: 0px / 0px | — | Default for most layouts. |
| `sm` | — | — | — | Dense UIs and secondary contexts. |
| `lg` | — | — | — | Prominent or touch-friendly contexts. |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

### Orientation

| Orientation | Purpose |
| --- | --- |
| `horizontal` | Lays children out in a row. |
| `vertical` | Stacks children in a column. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Size` | variant | default, sm, lg | `default` | |
| `Type` | variant | single, multiple | `single` | |
| `State` | variant | default, hover, focus, disabled | `default` | |
| `Value` | text |  | `` | |
| `Spacing` | variant | 0, 2 | `2` | |
| `Variant` | variant | default, outline | `default` | |
| `Orientation` | variant | horizontal, vertical | `horizontal` | |

## Usage example

```tsx
<ToggleGroup
  Size="default"
  Type="single"
  State="default"
  Spacing="2"
  Variant="default"
  Orientation="horizontal"
/>
```
