# @personal/design-system

Design system synced from **Personal** via DS Generator Repeat.
This package is auto-generated — re-syncing the project from the editor
will overwrite `tokens.*` and `components/*.tsx`.

## What's inside

- **`tokens.css`** — all design tokens as CSS custom properties under the
  `--ds-*` namespace. Override any of them in your own stylesheet to
  retheme. Drop this in your app once (e.g. import it from your global
  CSS or root layout).
- **`tokens.json`** — same tokens in raw DTCG form, for build-time
  tooling (Style Dictionary, Tailwind config generators, etc.).
- **`components/*.tsx`** — typed React functional components.
  44 component(s) included.

## Quickstart

```tsx
// once, in your app root:
import "@personal/design-system/tokens.css";

// anywhere:
import { Accordion } from "@personal/design-system";

export function MyPage() {
  return <Accordion />;
}
```

## Drop-in by default

This bundle is **100% drop-in** — you don't have to wire anything between
components manually:

- Components that embed other components in this bundle (e.g.
  `CheckboxGroup` → `Checkbox`, `RadioGroup` → `Radio`) import
  each other directly. There is **no** `embed_<Name>` prop to pass.


## Component reference

- `Accordion` — see `components/Accordion.tsx` for the typed props.
- `Alert` — see `components/Alert.tsx` for the typed props.
- `AlertDialog` — see `components/AlertDialog.tsx` for the typed props.
- `Avatar` — see `components/Avatar.tsx` for the typed props.
- `Badge` — see `components/Badge.tsx` for the typed props.
- `Breadcrumb` — see `components/Breadcrumb.tsx` for the typed props.
- `Button` — see `components/Button.tsx` for the typed props.
- `ButtonGroup` — see `components/ButtonGroup.tsx` for the typed props.
- `Calendar` — see `components/Calendar.tsx` for the typed props.
- `Card` — see `components/Card.tsx` for the typed props.
- `Carousel` — see `components/Carousel.tsx` for the typed props.
- `Chart` — see `components/Chart.tsx` for the typed props.
- `Checkbox` — see `components/Checkbox.tsx` for the typed props.
- `Collapsible` — see `components/Collapsible.tsx` for the typed props.
- `Command` — see `components/Command.tsx` for the typed props.
- `Dialog` — see `components/Dialog.tsx` for the typed props.
- `DropdownMenu` — see `components/DropdownMenu.tsx` for the typed props.
- `Empty` — see `components/Empty.tsx` for the typed props.
- `Field` — see `components/Field.tsx` for the typed props.
- `Input` — see `components/Input.tsx` for the typed props.
- `InputGroup` — see `components/InputGroup.tsx` for the typed props.
- `InputOTP` — see `components/InputOTP.tsx` for the typed props.
- `Item` — see `components/Item.tsx` for the typed props.
- `Kbd` — see `components/Kbd.tsx` for the typed props.
- `Label` — see `components/Label.tsx` for the typed props.
- `NavigationMenu` — see `components/NavigationMenu.tsx` for the typed props.
- `Pagination` — see `components/Pagination.tsx` for the typed props.
- `Progress` — see `components/Progress.tsx` for the typed props.
- `RadioGroup` — see `components/RadioGroup.tsx` for the typed props.
- `Resizable` — see `components/Resizable.tsx` for the typed props.
- `ScrollArea` — see `components/ScrollArea.tsx` for the typed props.
- `Select` — see `components/Select.tsx` for the typed props.
- `Separator` — see `components/Separator.tsx` for the typed props.
- `Sheet` — see `components/Sheet.tsx` for the typed props.
- `Skeleton` — see `components/Skeleton.tsx` for the typed props.
- `Slider` — see `components/Slider.tsx` for the typed props.
- `Sonner` — see `components/Sonner.tsx` for the typed props.
- `Spinner` — see `components/Spinner.tsx` for the typed props.
- `Switch` — see `components/Switch.tsx` for the typed props.
- `Table` — see `components/Table.tsx` for the typed props.
- `Tabs` — see `components/Tabs.tsx` for the typed props.
- `Textarea` — see `components/Textarea.tsx` for the typed props.
- `Toggle` — see `components/Toggle.tsx` for the typed props.
- `ToggleGroup` — see `components/ToggleGroup.tsx` for the typed props.

## Notes for AI agents (Claude, Cursor, etc.)

When building UI for this codebase, prefer these components and tokens over
inventing new styles. Each component file declares its props as a TypeScript
interface — read them before instantiating. Token usage: `var(--ds-…)` from
`tokens.css` (never hard-code hex values).


Generated at 2026-10-30T10:47:34.788Z.
