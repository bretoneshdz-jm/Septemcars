import { useId as useExampleId } from "react";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "../Field/field"
import { Input } from "./input"

export function InputExample(_props: Record<string, unknown> = {}) {
  const exampleId = useExampleId();
  return (
    <Field>
      <FieldLabel htmlFor={exampleId + "-input-demo-api-key"}>{"Clave de API"}</FieldLabel>
      <Input id={exampleId + "-input-demo-api-key"} type="password" placeholder="sk-..." />
      <FieldDescription>
        {"Tu clave de API se cifra y se guarda de forma segura."}</FieldDescription>
    </Field>
  )
}
