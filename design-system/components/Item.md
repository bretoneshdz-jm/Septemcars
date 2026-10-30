# Item

No description available.

## Variants

### Variant

| Variant | Purpose |
| --- | --- |
| `default` | Standard appearance used when no special emphasis applies. |
| `outline` | Bordered, low-fill action; secondary emphasis on busy surfaces. |
| `muted` | — |

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `default` | 86px | x: spacing.3 (12px) / spacing.3 (12px), y: spacing.2-5 (10px) / spacing.2-5 (10px) | — | Default for most layouts. |
| `sm` | — | — | — | Dense UIs and secondary contexts. |
| `xs` | — | — | — | Compact / dense tables and toolbars. |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Size` | variant | default, sm, xs | `default` | |
| `State` | variant | default, hover, focus | `default` | |
| `Title` | text |  | `Basic Item` | |
| `Action` | text |  | `Action` | |
| `Footer` | text |  | `` | |
| `Header` | text |  | `` | |
| `Variant` | variant | default, outline, muted | `default` | |
| `Description` | text |  | `A simple item with title and description.` | |

## Usage example

```tsx
<Item
  Size="default"
  State="default"
  Title="Basic Item"
  Action="Action"
  Variant="default"
  Description="A simple item with title and description."
/>
```
