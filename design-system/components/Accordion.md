# Accordion

No description available.

## Variants

### Type

| Type | Purpose |
| --- | --- |
| `single` | — |
| `multiple` | — |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |
| `open` | — |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Type` | variant | single, multiple | `single` | |
| `State` | variant | default, hover, focus, open, disabled | `default` | |
| `Selection` | text |  | `` | |
| `Collapsible` | boolean |  | `true` | |

## Usage example

```tsx
<Accordion
  Type="single"
  State="default"
  Collapsible
/>
```
