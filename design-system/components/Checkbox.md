# Checkbox

A toggle that selects or deselects an independent option; multiple checkboxes can be checked at once.

## When to use

- Selecting any number of options in a list
- Opting in or out of a single preference
- Picking multiple filters or facets
- Bulk-select rows in a table

## When NOT to use

- For one-of-many selection — use Radio
- For a binary on/off toggle that takes effect immediately — use Switch
- When the option fundamentally changes the surface — use a different control

## Anatomy

- Box
- Check mark
- Label

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |
| `invalid` | Validation failed. |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Label` | text |  | `Accept terms` | |
| `State` | variant | default, hover, focus, invalid, disabled | `default` | |
| `Checked` | variant | unchecked, checked, indeterminate | `unchecked` | |

## Usage example

```tsx
<Checkbox
  Label="Accept terms"
  State="default"
  Checked="unchecked"
/>
```

## Do

- Label each checkbox unambiguously
- Group related options with CheckboxGroup
- Keep the click target including the label
- Show indeterminate for partial child selection

## Don't

- Don't use Checkbox for mutually-exclusive choices
- Don't substitute for a Switch on toggles
- Don't disable without explanation
- Don't hide the label behind ambiguous icons

## Accessibility

- Use real <input type=checkbox> with a visible <label>
- Space toggles the state when focused
- Indeterminate state expressed via aria-checked="mixed"
- Maintain 3:1 contrast for the box border
- Focus ring visible and offset from the box
