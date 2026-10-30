# Field

No description available.

## Variants

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `invalid` | Validation failed. |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |

### Orientation

| Orientation | Purpose |
| --- | --- |
| `vertical` | Stacks children in a column. |
| `horizontal` | Lays children out in a row. |
| `responsive` | — |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Error` | text |  | `Choose another username.` | |
| `Label` | text |  | `Username` | |
| `State` | variant | default, invalid, disabled | `default` | |
| `Legend` | text |  | `` | |
| `Description` | text |  | `Choose a unique username for your account.` | |
| `Orientation` | variant | vertical, horizontal, responsive | `vertical` | |

## Usage example

```tsx
<Field
  Error="Choose another username."
  Label="Username"
  State="default"
  Description="Choose a unique username for your account."
  Orientation="vertical"
/>
```
