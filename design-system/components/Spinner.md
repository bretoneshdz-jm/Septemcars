# Spinner

An indeterminate animation that signals that work is in progress when duration is unknown.

## When to use

- Loading states where duration can't be measured
- Inline button loading state
- Background tasks waiting on a response
- First-paint placeholders for short fetches

## When NOT to use

- When progress can be measured — use ProgressBar or ProgressCircle
- For long waits — use a skeleton or progress indicator
- For empty results — use EmptyState

## Anatomy

- Rotating arc or icon

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `State` | variant | default | `default` | |

## Usage example

```tsx
<Spinner
  State="default"
/>
```

## Do

- Match its color to the surface
- Use the inverse variant on saturated backgrounds
- Keep it visible briefly to avoid flicker
- Pair with a label for context

## Don't

- Don't show one for measurable tasks
- Don't leave it on screen forever — fail gracefully
- Don't trap focus while it spins
- Don't use multiple spinners simultaneously without grouping

## Accessibility

- role=status with an accessible name ("Loading")
- aria-live=polite to announce its presence
- Provide alternative copy for very long waits
- Pair with text when used in critical flows
- Don't trap focus on it
