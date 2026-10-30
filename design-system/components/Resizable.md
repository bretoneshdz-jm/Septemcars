# Resizable

No description available.

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `focus` | Keyboard focus (visible ring). |

### Orientation

| Orientation | Purpose |
| --- | --- |
| `horizontal` | Lays children out in a row. |
| `vertical` | Stacks children in a column. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `State` | variant | default, focus | `default` | |
| `Orientation` | variant | horizontal, vertical | `horizontal` | |

## Usage example

```tsx
<Resizable
  State="default"
  Orientation="horizontal"
/>
```
