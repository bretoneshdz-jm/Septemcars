import * as React from "react"

import { Input } from "../Input/input"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./field"

export type FieldExampleProps = Omit<
  React.ComponentProps<typeof Field>,
  "children"
> & {
  label?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  legend?: React.ReactNode
  placeholder?: string
  control?: React.ReactNode
  "data-invalid"?: boolean
  "data-disabled"?: boolean
  children?: React.ReactNode
}

const shown = (value: React.ReactNode) => value != null && value !== ""

export function FieldExample({
  orientation = "vertical",
  label = "Username",
  description = "Choose a unique username for your account.",
  error = "Choose another username.",
  legend = "",
  placeholder = "Max Leiter",
  control,
  id,
  children,
  ...props
}: FieldExampleProps) {
  const generatedId = React.useId()
  const controlId = (id ?? generatedId) + "-control"
  // data-invalid and data-disabled are Field's own state hooks; the control gets its own attributes.
  const invalid = props["data-invalid"] === true
  const disabled = props["data-disabled"] === true
  const labelNode = shown(label) && (
    <FieldLabel htmlFor={controlId}>{label}</FieldLabel>
  )
  const descriptionNode = shown(description) && (
    <FieldDescription>{description}</FieldDescription>
  )
  const errorNode = invalid && shown(error) && (
    <FieldError>{error}</FieldError>
  )
  const controlNode = control ?? (
    <Input
      id={controlId}
      placeholder={placeholder}
      aria-invalid={invalid || undefined}
      disabled={disabled}
    />
  )
  const field = (
    <Field id={id} orientation={orientation} {...props}>
      {children ??
        (orientation === "vertical" ? (
          <>
            {labelNode}
            {controlNode}
            {descriptionNode}
            {errorNode}
          </>
        ) : (
          <>
            <FieldContent>
              {labelNode}
              {descriptionNode}
              {errorNode}
            </FieldContent>
            {controlNode}
          </>
        ))}
    </Field>
  )

  if (shown(legend)) {
    return (
      <FieldSet>
        <FieldLegend>{legend}</FieldLegend>
        <FieldGroup>{field}</FieldGroup>
      </FieldSet>
    )
  }

  // The responsive orientation follows the width of its FieldGroup.
  if (orientation === "responsive") {
    return <FieldGroup>{field}</FieldGroup>
  }

  return field
}
