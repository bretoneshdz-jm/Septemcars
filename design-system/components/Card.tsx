import * as React from "react";
import { Card as CardRoot, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "./_shadcn/Card/card";
export type CardProps = Omit<React.ComponentProps<typeof CardRoot>, "title"> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  action?: React.ReactNode;
};
export function Card({
  title = undefined,
  description = undefined,
  footer = undefined,
  action = undefined,
  children = undefined,
  size = "default", ...props
}: CardProps) {
  return (
    <CardRoot size={size} {...props}>
      {(title != null || description != null || action != null) && <CardHeader >
        {title != null && <CardTitle >{title}</CardTitle>}
        {description != null && description !== "" && description !== false && <CardDescription >{description}</CardDescription>}
        {action != null && action !== "" && action !== false && <CardAction >{action}</CardAction>}
      </CardHeader>}
      {children != null && <CardContent >{children}</CardContent>}
      {footer != null && footer !== "" && footer !== false && <CardFooter >{footer}</CardFooter>}
    </CardRoot>
  );
}
export default Card;
export * from "./_shadcn/Card/card";
export {CardExample} from "./_shadcn/Card/example";
