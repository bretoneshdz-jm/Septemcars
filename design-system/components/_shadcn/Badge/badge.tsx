import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../shared/utils"
import * as Slot from "@radix-ui/react-slot"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs [--ds-ui-fontSize-xs:var(--ds-typographyRolesLabelStepsSmFontSize)] [--ds-ui-lineHeight-xs:var(--ds-typographyRolesLabelStepsSmLineHeight)] [--ds-ui-letterSpacing-xs:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] font-medium [--ds-ui-fontWeight-medium:var(--ds-typographyRolesLabelStepsSmFontWeight)] whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[length:var(--ds-borderWidthFocus)] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! text-[color:var(--ds-componentTokensBadgeText)] font-[family-name:var(--ds-typographyRolesLabelFamily)]",
  {
    variants: {
      variant: {
        default: "bg-[color:var(--ds-componentTokensBadgeBg)] text-[color:var(--ds-componentTokensBadgeText)] [a]:hover:bg-[color:var(--ds-componentTokensBadgeBg)]",
        secondary:
          "bg-[color:var(--ds-componentTokensBadgeBg)] text-[color:var(--ds-componentTokensBadgeText)] [a]:hover:bg-[color:var(--ds-componentTokensBadgeBg)]",
        destructive:
          "bg-[color:var(--ds-componentTokensBadgeBg)] text-[color:var(--ds-componentTokensBadgeText)] focus-visible:ring-destructive/20 dark:bg-[color:var(--ds-componentTokensBadgeBg)] dark:focus-visible:ring-destructive/40 [a]:hover:bg-[color:var(--ds-componentTokensBadgeBg)]",
        outline:
          "border-border text-[color:var(--ds-componentTokensBadgeText)] [a]:hover:bg-[color:var(--ds-componentTokensBadgeBg)] [a]:hover:text-[color:var(--ds-componentTokensBadgeText)]",
        ghost:
          "hover:bg-[color:var(--ds-componentTokensBadgeBg)] hover:text-[color:var(--ds-componentTokensBadgeText)] dark:hover:bg-[color:var(--ds-componentTokensBadgeBg)]",
        link: "text-[color:var(--ds-componentTokensBadgeText)] underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default text-[color:var(--ds-componentTokensBadgeText)]",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
