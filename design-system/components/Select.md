# Select

A control that opens a list of options and displays the chosen one in a trigger field.

## When to use

- Picking one value from a known finite list
- Forms with 4–20 options where space matters
- Country, language, role or status pickers
- When typing is unnecessary

## When NOT to use

- For free-form text or autocomplete — use ComboBox
- For 2–4 visible options — use RadioGroup
- For mutually-exclusive nav — use Tabs

## Anatomy

- Label
- Trigger field
- Chevron
- Helper or error text
- Embedded SelectList overlay

## Variants

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `default` | 32px | — | — | Default for most layouts. |
| `sm` | — | — | — | Dense UIs and secondary contexts. |

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
| `Size` | variant | default, sm | `default` | |
| `State` | variant | default, hover, focus, open, disabled | `default` | |

## Usage example

```tsx
<Select
  Size="default"
  State="default"
/>
```

## Do

- Order options predictably (alpha, frequency)
- Pre-select a sensible default when safe
- Use clear placeholder copy
- Keep labels short and parallel

## Don't

- Don't use it for 2 options — use Radio or Switch
- Don't hide critical info behind a Select
- Don't allow scrolling without keyboard equivalents
- Don't pack the list with subgroups when a tree would be clearer

## Accessibility

- Trigger exposes role=combobox with aria-expanded
- Arrow keys traverse options; Enter picks; Escape closes
- Type-ahead jumps to matching option
- Focus returns to the trigger on close
- Error and helper wired via aria-describedby
