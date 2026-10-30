import { useId as useExampleId } from "react";
import { Button } from "../Button/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"
import { Field, FieldGroup } from "../Field/field"
import { Input } from "../Input/input"
import { Label } from "../Label/label"

export function DialogExample(_props: Record<string, unknown> = {}) {
  const exampleId = useExampleId();
  return (
    <Dialog defaultOpen={_props.open === true}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">{"Abrir diálogo"}</Button>
        </DialogTrigger>
        <DialogContent onOpenAutoFocus={_props.open === true ? (event) => event.preventDefault() : undefined} className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{"Editar perfil"}</DialogTitle>
            <DialogDescription>
              {"Modifica tu perfil aquí. Cuando termines, pulsa Guardar."}</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor={exampleId + "-name-1"}>{"Nombre"}</Label>
              <Input id={exampleId + "-name-1"} name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor={exampleId + "-username-1"}>{"Nombre de usuario"}</Label>
              <Input id={exampleId + "-username-1"} name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{"Cancelar"}</Button>
            </DialogClose>
            <Button type="submit">{"Guardar cambios"}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
