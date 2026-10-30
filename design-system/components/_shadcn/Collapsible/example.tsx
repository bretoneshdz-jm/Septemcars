import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "../Button/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible"

export function CollapsibleExample(_props: Record<string, unknown> = {}) {
  const [isOpen, setIsOpen] = React.useState(_props.open === true)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-[350px] flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">{"Pedido n.º 4189"}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDown />
            <span className="sr-only">{"Mostrar u ocultar detalles"}</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">{"Estado"}</span>
        <span className="font-medium">{"Enviado"}</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">{"Dirección de envío"}</p>
          <p className="text-muted-foreground">100 Market St, San Francisco</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">{"Elementos"}</p>
          <p className="text-muted-foreground">{"2 auriculares de estudio"}</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
