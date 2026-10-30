# AlertDialog

A focused modal that demands an explicit decision before the user can continue.

## When to use

- Confirming destructive or irreversible actions
- Critical decisions that must interrupt the flow
- Status-laden confirmations (error, warning, success)
- Approving permissions or terms

## When NOT to use

- For lightweight confirmations — use Toast with Undo
- For non-blocking notices — use AlertBanner
- For multi-step content — use a Drawer or full page

## Anatomy

- Surface
- Optional status icon
- Title
- Description
- Footer with Button group

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

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Open` | boolean |  | `true` | |
| `Size` | variant | default, sm | `default` | |
| `State` | variant | default, hover, focus | `default` | |

## Usage example

```tsx
<AlertDialog
  Open
  Size="default"
  State="default"
/>
```

## Do

- Make the consequence unmistakable
- Label buttons with verbs ("Delete", "Move")
- Match the confirm button to the status color
- Default focus on the safer choice

## Don't

- Don't stack multiple AlertDialogs
- Don't omit Cancel
- Don't use it for marketing content
- Don't write multi-paragraph essays inside

## Accessibility

- role=alertdialog with aria-labelledby and aria-describedby
- Trap focus while open; return focus on close
- Escape dismisses unless the action is irreversible
- Primary action and Cancel both visible at all times
- Keep the title short and decision-focused
