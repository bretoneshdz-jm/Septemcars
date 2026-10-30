import * as React from "react"

import { Button } from "../Button/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "./item"

export type ItemExampleProps = Omit<React.ComponentProps<typeof Item>, "title"> & {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  actions?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  media?: React.ReactNode
  mediaVariant?: React.ComponentProps<typeof ItemMedia>["variant"]
}

const shown = (value: React.ReactNode) => value != null && value !== ""

export function ItemExample({
  variant = "default",
  size = "default",
  title = "Basic Item",
  description = "A simple item with title and description.",
  action = "Action",
  actions,
  header = "",
  footer = "",
  media,
  mediaVariant = "icon",
  children,
  ...props
}: ItemExampleProps) {
  return (
    <Item variant={variant} size={size} {...props}>
      {children ?? (
        <>
          {shown(header) && <ItemHeader>{header}</ItemHeader>}
          {shown(media) && (
            <ItemMedia variant={mediaVariant}>{media}</ItemMedia>
          )}
          <ItemContent>
            <ItemTitle>{title}</ItemTitle>
            {shown(description) && (
              <ItemDescription>
                {description}
              </ItemDescription>
            )}
          </ItemContent>
          {(actions !== undefined || shown(action)) && (
            <ItemActions>
              {actions ?? (
                <Button variant="outline" size="sm">
                  {action}
                </Button>
              )}
            </ItemActions>
          )}
          {shown(footer) && <ItemFooter>{footer}</ItemFooter>}
        </>
      )}
    </Item>
  )
}
