# Slider

A draggable thumb on a track that lets users pick a value within a continuous range.

## When to use

- Volume, opacity or brightness
- Continuous values within a known range
- When relative position matters more than exact numbers
- Quick coarse-grained adjustments

## When NOT to use

- For precise numeric input — use NumberField
- For categorical choices — use RadioGroup
- For binary settings — use Switch

## Anatomy

- Track
- Fill
- Thumb
- Label and value text

## Variants

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
| `State` | variant | default, hover, focus, disabled | `default` | |
| `Orientation` | variant | horizontal, vertical | `horizontal` | |

## Usage example

```tsx
<Slider
  State="default"
  Orientation="horizontal"
/>
```

## Do

- Show the current value when precision matters
- Use clear units near the slider
- Allow fine adjustment with the keyboard
- Snap to meaningful steps where helpful

## Don't

- Don't use it for exact data entry
- Don't hide the value when granularity matters
- Don't shrink the thumb to a hard-to-grab size
- Don't omit a visible label

## Accessibility

- role=slider with aria-valuemin, aria-valuemax, aria-valuenow
- Arrow keys nudge; Home/End jump to bounds
- PageUp/PageDown move by a larger step
- Provide a readable current value
- Focus ring visible on the thumb
