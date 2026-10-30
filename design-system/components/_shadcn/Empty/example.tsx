import { FolderCode as IconFolderCode } from "lucide-react"
import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "../Button/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty"

export function EmptyExample(_props: Record<string, unknown> = {}) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>{"Todavía no hay proyectos"}</EmptyTitle>
        <EmptyDescription>
          {"Todavía no has creado ningún proyecto. Empieza creando el primero."}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>{"Crear proyecto"}</Button>
        <Button variant="outline">{"Importar proyecto"}</Button>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          {"Más información "}<ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  )
}
