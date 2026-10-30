import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../shared/utils"

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance font-[family-name:var(--ds-typographyRolesBodyFamily)]",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn("flex max-w-sm flex-col items-center gap-2", className)}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn(
        "font-[var(--ds-typographyRolesHeadingFamily)] text-sm [--ds-ui-fontSize-sm:var(--ds-typographyRolesHeadingStepsH4FontSize)] [--ds-ui-lineHeight-sm:var(--ds-typographyRolesHeadingStepsH4LineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typographyRolesHeadingStepsH4LetterSpacing)] font-medium [--ds-ui-fontWeight-medium:var(--ds-typographyRolesHeadingStepsH4FontWeight)] tracking-tight [--ds-ui-letterSpacing-tight:var(--ds-typographyRolesHeadingStepsH4LetterSpacing)] font-[family-name:var(--ds-typographyRolesHeadingFamily)]",
        className
      )}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-[length:var(--ds-typographyRolesBodyStepsSmFontSize)] text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm [--ds-ui-fontSize-sm:var(--ds-typographyRolesBodyStepsSmFontSize)] [--ds-ui-lineHeight-sm:var(--ds-typographyRolesBodyStepsSmLineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typographyRolesBodyStepsSmLetterSpacing)] text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}
