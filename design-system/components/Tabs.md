# Tabs

Switches between related views inside the same surface without leaving the page.

## When to use

- Splitting one screen into 2–7 sibling views
- Settings panels with grouped categories
- Detail pages with related sections (Overview / Activity / Files)
- Anywhere lateral, peer navigation belongs

## When NOT to use

- For top-level app navigation — use SideNavigation
- For 2 options that fit as a toggle — use Switch or ActionGroup
- For more than ~7 sections — use a sidebar or split layout

## Anatomy

- Tab strip
- Tab items (icon + label)
- Active indicator
- Divider

## Variants

### Variant

| Variant | Purpose |
| --- | --- |
| `default` | Standard appearance used when no special emphasis applies. |
| `line` | — |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |

### Orientation

| Orientation | Purpose |
| --- | --- |
| `horizontal` | Lays children out in a row. |
| `vertical` | Stacks children in a column. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `State` | variant | default, hover, focus | `default` | |
| `Value` | variant | overview, analytics, reports, settings | `overview` | |
| `Variant` | variant | default, line | `default` | |
| `Orientation` | variant | horizontal, vertical | `horizontal` | |

## Usage example

```tsx
<Tabs
  State="default"
  Value="overview"
  Variant="default"
  Orientation="horizontal"
/>
```

## Do

- Keep tab labels short and parallel
- Show all tabs without scrolling when feasible
- Persist the selected tab when navigating away and back
- Match icons to consistent metaphors

## Don't

- Don't nest more than one level of tabs
- Don't use tabs for sequences — use a Stepper
- Don't truncate labels — shorten copy
- Don't change tab order based on selection

## Accessibility

- Use role=tablist / tab / tabpanel
- Left/Right (or Up/Down) arrows move focus between tabs
- Selected tab exposes aria-selected and tabindex semantics
- Active indicator has a non-color cue
- Panel content is focusable after selection
