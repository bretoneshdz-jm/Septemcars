import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog"
import { Button } from "../Button/button"

export function AlertDialogExample(_props: Record<string, unknown> = {}) {
  return (
    <AlertDialog defaultOpen={_props.open === true}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{"Mostrar diálogo"}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent onOpenAutoFocus={_props.open === true ? (event) => event.preventDefault() : undefined}>
        <AlertDialogHeader>
          <AlertDialogTitle>{"¿Seguro que quieres continuar?"}</AlertDialogTitle>
          <AlertDialogDescription>
            {"Esta acción no se puede deshacer. Tu cuenta se eliminará de nuestros servidores de forma permanente."}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{"Cancelar"}</AlertDialogCancel>
          <AlertDialogAction>{"Continuar"}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
