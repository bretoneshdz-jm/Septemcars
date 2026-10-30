# RadioGroup

A labelled set of Radios where exactly one option must be selected.

## When to use

- Single-choice questions in forms
- Configurator steps with 2–7 fixed alternatives
- Toggling between presets where the trade-off is visible
- Setting selection with a sensible default

## When NOT to use

- For multi-select — use CheckboxGroup
- For more than ~7 options — use Select
- For binary toggles that take effect immediately — use Switch

## Anatomy

- Group label
- Helper / error text
- Radio items

## Variants

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
| `State` | variant | default, hover, active, focus, invalid, disabled | `default` | |
| `Value` | variant | one, two | `one` | |

## Usage example

```tsx
<RadioGroup
  State="default"
  Value="one"
/>
```

## Do

- Always provide a default selection when safe
- Make the legend the actual question
- Keep options visible without scrolling when possible
- Validate at the group level

## Don't

- Don't use it for multi-select
- Don't leave the group without a selection by default if one is safe
- Don't change selection on hover
- Don't omit the helper when context is needed

## Accessibility

- Use <fieldset> with <legend> as the group label
- Arrow keys move the selection within the group
- Tab focuses the selected radio; Tab again leaves the group
- Errors apply at the group level via aria-describedby
- Default selection is announced
