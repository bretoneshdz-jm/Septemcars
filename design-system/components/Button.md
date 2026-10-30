# Button

An interactive control that triggers an immediate action, submission, or navigation.

## When to use

- Confirming or submitting a form
- Triggering a primary action on a screen
- Launching a dialog, drawer or destructive flow
- Grouping a decision pair (Cancel / Confirm)

## When NOT to use

- For in-page navigation to another URL — use Link
- For toggling state on/off — use Switch or a selectable control
- When the visual is just decoration with no action

## Anatomy

- Container
- Label
- Leading icon (optional)
- Trailing icon (optional)

## Variants

### Variant

| Variant | Purpose |
| --- | --- |
| `default` | Standard appearance used when no special emphasis applies. |
| `outline` | Bordered, low-fill action; secondary emphasis on busy surfaces. |
| `secondary` | Secondary action paired with a primary. |
| `ghost` | Minimal-chrome action for dense or in-context use. |
| `destructive` | Destructive action; removes or permanently changes data. |
| `link` | Inline, text-only action that reads like a hyperlink. |

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `default` | sizes.components.md (32px) | x: spacing.2-5 (10px) / spacing.2-5 (10px), y: 0px / 0px | — | Default for most layouts. |
| `xs` | — | — | — | Compact / dense tables and toolbars. |
| `sm` | — | — | — | Dense UIs and secondary contexts. |
| `lg` | — | — | — | Prominent or touch-friendly contexts. |
| `icon` | — | — | — | Icon-only square. |
| `icon-xs` | — | — | — | — |
| `icon-sm` | — | — | — | — |
| `icon-lg` | — | — | — | — |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `active` | Being pressed / activated. |
| `focus` | Keyboard focus (visible ring). |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Size` | variant | default, xs, sm, lg, icon, icon-xs, icon-sm, icon-lg | `default` | |
| `Label` | text |  | `Button` | |
| `State` | variant | default, hover, active, focus, disabled | `default` | |
| `Variant` | variant | default, outline, secondary, ghost, destructive, link | `default` | |

## Usage example

```tsx
<Button
  Size="default"
  Label="Button"
  State="default"
  Variant="default"
/>
```

## Do

- Lead with a verb in the label
- Use a single primary button per view
- Pair destructive actions with a confirmation
- Match icon meaning to the action

## Don't

- Don't stack multiple primary buttons next to each other
- Don't use a button for plain navigation
- Don't write essay-length labels
- Don't disable without explaining why

## Accessibility

- Reachable with Tab; activated with Enter and Space
- Visible focus ring meeting 3:1 contrast
- Label conveys the action verb ("Save", not "OK")
- Disabled state is announced; never rely on color alone
- Maintain 4.5:1 text/background contrast
