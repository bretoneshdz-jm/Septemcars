import { Bold, Italic, Underline } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "./toggle-group"

export function ToggleGroupExample(_props: Record<string, unknown> = {}) {
  return (
    <ToggleGroup variant="outline" type="multiple">
      <ToggleGroupItem value="bold" aria-label={"Activar o desactivar negrita"}>
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label={"Activar o desactivar cursiva"}>
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label={"Activar o desactivar tachado"}>
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
