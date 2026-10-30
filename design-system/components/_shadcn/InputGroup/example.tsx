import { Search } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./input-group"

export function InputGroupExample(_props: Record<string, unknown> = {}) {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder={"Buscar…"} />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">{"12 resultados"}</InputGroupAddon>
    </InputGroup>
  )
}
