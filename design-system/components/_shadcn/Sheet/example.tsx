import { useId as useExampleId } from "react";
import { Button } from "../Button/button"
import { Input } from "../Input/input"
import { Label } from "../Label/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet"

export function SheetExample(_props: Record<string, unknown> = {}) {
  const exampleId = useExampleId();
  return (
    <Sheet defaultOpen={_props.open === true}>
      <SheetTrigger asChild>
        <Button variant="outline">{"Abrir"}</Button>
      </SheetTrigger>
      <SheetContent onOpenAutoFocus={_props.open === true ? (event) => event.preventDefault() : undefined}>
        <SheetHeader>
          <SheetTitle>{"Editar perfil"}</SheetTitle>
          <SheetDescription>
            {"Modifica tu perfil aquí. Cuando termines, pulsa Guardar."}</SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor={exampleId + "-sheet-demo-name"}>{"Nombre"}</Label>
            <Input id={exampleId + "-sheet-demo-name"} defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor={exampleId + "-sheet-demo-username"}>{"Nombre de usuario"}</Label>
            <Input id={exampleId + "-sheet-demo-username"} defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">{"Guardar cambios"}</Button>
          <SheetClose asChild>
            <Button variant="outline">{"Cerrar"}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
