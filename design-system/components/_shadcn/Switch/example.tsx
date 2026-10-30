import { useId as useExampleId } from "react";
import { Label } from "../Label/label"
import { Switch } from "./switch"

export function SwitchExample(_props: Record<string, unknown> = {}) {
  const exampleId = useExampleId();
  return (
    <div className="flex items-center space-x-2">
      <Switch id={exampleId + "-airplane-mode"} />
      <Label htmlFor={exampleId + "-airplane-mode"}>{"Modo avión"}</Label>
    </div>
  )
}
