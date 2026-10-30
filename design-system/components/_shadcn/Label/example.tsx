import { useId as useExampleId } from "react";
import { Checkbox } from "../Checkbox/checkbox"
import { Label } from "./label"

export function LabelExample(_props: Record<string, unknown> = {}) {
  const exampleId = useExampleId();
  return (
    <div className="flex gap-2">
      <Checkbox id={exampleId + "-terms"} />
      <Label htmlFor={exampleId + "-terms"}>{"Aceptar los términos y condiciones"}</Label>
    </div>
  )
}
