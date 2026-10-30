# ScrollArea

No description available.

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |

### Direction

| Direction | Purpose |
| --- | --- |
| `vertical` | Stacks children in a column. |
| `horizontal` | Lays children out in a row. |
| `both` | — |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `State` | variant | default, hover, focus | `default` | |
| `Direction` | variant | vertical, horizontal, both | `vertical` | |
| `ScrollbarType` | variant | hover, scroll, auto, always | `hover` | |

## Usage example

```tsx
<ScrollArea
  State="default"
  Direction="vertical"
  ScrollbarType="hover"
/>
```
