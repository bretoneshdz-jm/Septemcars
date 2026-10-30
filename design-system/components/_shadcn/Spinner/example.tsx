import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "../Item/item"
import { Spinner } from "./spinner"

export function SpinnerExample(_props: Record<string, unknown> = {}) {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">{"Procesando el pago..."}</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">{"100,00 $"}</span>
        </ItemContent>
      </Item>
    </div>
  )
}
