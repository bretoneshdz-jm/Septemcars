# Switch

A binary control that turns a setting on or off and applies the change immediately.

## When to use

- Toggling a system or feature setting (Wi-Fi, notifications)
- Switching between two states without confirmation
- An always-visible preference that affects the surface
- Anywhere users expect an OS-like toggle

## When NOT to use

- For form submission style choices — use Checkbox
- For one-of-many selection — use Radio
- When the change requires explicit confirmation — use Button

## Anatomy

- Track
- Thumb
- Label

## Variants

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `default` | 20px | x: 0px / 0px, y: 0px / 0px | — | Default for most layouts. |
| `sm` | — | — | — | Dense UIs and secondary contexts. |

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
| `Size` | variant | default, sm | `default` | |
| `State` | variant | default, hover, active, focus, invalid, disabled | `default` | |
| `Checked` | boolean |  | `false` | |

## Usage example

```tsx
<Switch
  Size="default"
  State="default"
/>
```

## Do

- Apply the change immediately
- Label with the setting name, not on/off
- Position the label consistently across the surface
- Visually distinguish on vs off beyond color

## Don't

- Don't use it inside forms with a submit button
- Don't rely on color alone for the state
- Don't show a Save button after the switch
- Don't substitute for a multi-choice control

## Accessibility

- Use role="switch" with aria-checked
- Space toggles when focused
- Pair with a clear visible label
- Track contrast meets 3:1 in both states
- State change is announced
