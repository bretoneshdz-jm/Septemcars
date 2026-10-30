# Alert

No description available.

## Variants

### Variant

| Variant | Purpose |
| --- | --- |
| `default` | Standard appearance used when no special emphasis applies. |
| `destructive` | Destructive action; removes or permanently changes data. |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `State` | variant | default, hover | `default` | |
| `Title` | text |  | `Notice` | |
| `Action` | text |  | `` | |
| `Variant` | variant | default, destructive | `default` | |
| `Description` | text |  | `Useful information.` | |

## Usage example

```tsx
<Alert
  State="default"
  Title="Notice"
  Variant="default"
  Description="Useful information."
/>
```
