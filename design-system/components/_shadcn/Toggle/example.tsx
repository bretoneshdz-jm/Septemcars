import { BookmarkIcon } from "lucide-react"

import { Toggle } from "./toggle"

export function ToggleExample(_props: Record<string, unknown> = {}) {
  return (
    <Toggle aria-label={"Añadir o quitar marcador"} size="sm" variant="outline">
      <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
      {"Añadir a marcadores"}</Toggle>
  )
}
