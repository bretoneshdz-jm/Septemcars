import { useId as useExampleId } from "react";
import { Label } from "../Label/label"
import { RadioGroup, RadioGroupItem } from "./radio-group"

export function RadioGroupExample(_props: Record<string, unknown> = {}) {
  const exampleId = useExampleId();
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id={exampleId + "-r1"} />
        <Label htmlFor={exampleId + "-r1"}>{"Normal"}</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id={exampleId + "-r2"} />
        <Label htmlFor={exampleId + "-r2"}>{"Cómodo"}</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id={exampleId + "-r3"} />
        <Label htmlFor={exampleId + "-r3"}>{"Compacto"}</Label>
      </div>
    </RadioGroup>
  )
}
