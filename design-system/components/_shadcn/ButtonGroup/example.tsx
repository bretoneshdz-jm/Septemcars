import * as React from "react"

import { Button } from "../Button/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "./button-group"

export type ButtonGroupExampleItem = {
  value: string
  label: React.ReactNode
}

export type ButtonGroupExampleProps = React.ComponentProps<typeof ButtonGroup> & {
  items?: ButtonGroupExampleItem[]
  text?: React.ReactNode
  separator?: boolean
}

const defaultItems: ButtonGroupExampleItem[] = [
  { value: "archive", label: "Archive" },
  { value: "report", label: "Report" },
  { value: "snooze", label: "Snooze" },
]

const shown = (value: React.ReactNode) => value != null && value !== ""

export function ButtonGroupExample({
  items = defaultItems,
  text = "",
  separator = false,
  orientation = "horizontal",
  children,
  ...props
}: ButtonGroupExampleProps) {
  return (
    <ButtonGroup orientation={orientation} {...props}>
      {children ?? (
        <>
          {shown(text) && (
            <ButtonGroupText>
              {text}
            </ButtonGroupText>
          )}
          {items.map((item, index) => (
            <React.Fragment key={item.value}>
              {separator && index > 0 && (
                <ButtonGroupSeparator
                  orientation={orientation === "vertical" ? "horizontal" : "vertical"}
                />
              )}
              <Button variant="outline">
                {item.label}
              </Button>
            </React.Fragment>
          ))}
        </>
      )}
    </ButtonGroup>
  )
}
