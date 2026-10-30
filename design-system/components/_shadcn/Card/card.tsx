import * as React from "react"
import { cn } from "../shared/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-[color:var(--ds-componentTokensCardBg)] py-(--card-spacing) text-sm [--ds-ui-fontSize-sm:var(--ds-typographyRolesBodyStepsSmFontSize)] [--ds-ui-lineHeight-sm:var(--ds-typographyRolesBodyStepsSmLineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typographyRolesBodyStepsSmLetterSpacing)] text-[color:var(--ds-componentTokensCardText)] ring-1 [--ds-ui-focusWidth-1:var(--ds-borderWidthMd)] ring-foreground/10 [--card-spacing:var(--ds-spacing4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:var(--ds-spacing3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl font-[family-name:var(--ds-typographyRolesBodyFamily)]",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-[var(--ds-typographyRolesHeadingFamily)] text-base [--ds-ui-fontSize-base:var(--ds-typographyRolesHeadingStepsH4FontSize)] [--ds-ui-lineHeight-base:var(--ds-typographyRolesHeadingStepsH4LineHeight)] [--ds-ui-letterSpacing-base:var(--ds-typographyRolesHeadingStepsH4LetterSpacing)] leading-snug [--ds-ui-lineHeight-snug:var(--ds-typographyRolesHeadingStepsH4LineHeight)] font-medium [--ds-ui-fontWeight-medium:var(--ds-typographyRolesHeadingStepsH4FontWeight)] group-data-[size=sm]/card:text-sm group-data-[size=sm]/card:[--ds-ui-fontSize-sm:var(--ds-typographyRolesHeadingStepsH4FontSize)] group-data-[size=sm]/card:[--ds-ui-lineHeight-sm:var(--ds-typographyRolesHeadingStepsH4LineHeight)] group-data-[size=sm]/card:[--ds-ui-letterSpacing-sm:var(--ds-typographyRolesHeadingStepsH4LetterSpacing)] font-[family-name:var(--ds-typographyRolesHeadingFamily)]",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm [--ds-ui-fontSize-sm:var(--ds-typographyRolesBodyStepsSmFontSize)] [--ds-ui-lineHeight-sm:var(--ds-typographyRolesBodyStepsSmLineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typographyRolesBodyStepsSmLetterSpacing)] text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
