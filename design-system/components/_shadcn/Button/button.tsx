import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../shared/utils"
import * as Slot from "@radix-ui/react-slot"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-[color:var(--ds-componentTokensButtonBorder)] bg-clip-padding text-sm [--ds-ui-fontSize-sm:var(--ds-typographyRolesLabelStepsSmFontSize)] [--ds-ui-lineHeight-sm:var(--ds-typographyRolesLabelStepsSmLineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] font-medium [--ds-ui-fontWeight-medium:var(--ds-typographyRolesLabelStepsSmFontWeight)] whitespace-nowrap transition-all outline-none select-none focus-visible:border-[color:var(--ds-componentTokensButtonBorder)] focus-visible:ring-3 focus-visible:[--ds-ui-focusWidth-3:var(--ds-borderWidthFocus)] focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-[color:var(--ds-componentTokensButtonBorder)] aria-invalid:ring-3 aria-invalid:[--ds-ui-focusWidth-3:var(--ds-borderWidthFocus)] aria-invalid:ring-destructive/20 dark:aria-invalid:border-[color:var(--ds-componentTokensButtonBorder)] dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 text-[color:var(--ds-componentTokensButtonText)] font-[family-name:var(--ds-typographyRolesLabelFamily)]",
  {
    variants: {
      variant: {
        default: "bg-[color:var(--ds-componentTokensButtonBg)] text-[color:var(--ds-componentTokensButtonText)] hover:bg-[color:var(--ds-componentTokensButtonBgHover)]",
        outline:
          "border-[color:var(--ds-componentTokensButtonBorder)] bg-[color:var(--ds-componentTokensButtonBg)] hover:bg-[color:var(--ds-componentTokensButtonBgHover)] hover:text-[color:var(--ds-componentTokensButtonText)] aria-expanded:bg-[color:var(--ds-componentTokensButtonBg)] aria-expanded:text-[color:var(--ds-componentTokensButtonText)] dark:border-[color:var(--ds-componentTokensButtonBorder)] dark:bg-[color:var(--ds-componentTokensButtonBg)] dark:hover:bg-[color:var(--ds-componentTokensButtonBgHover)]",
        secondary:
          "bg-[color:var(--ds-componentTokensButtonBg)] text-[color:var(--ds-componentTokensButtonText)] hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-[color:var(--ds-componentTokensButtonBg)] aria-expanded:text-[color:var(--ds-componentTokensButtonText)]",
        ghost:
          "hover:bg-[color:var(--ds-componentTokensButtonBgHover)] hover:text-[color:var(--ds-componentTokensButtonText)] aria-expanded:bg-[color:var(--ds-componentTokensButtonBg)] aria-expanded:text-[color:var(--ds-componentTokensButtonText)] dark:hover:bg-[color:var(--ds-componentTokensButtonBgHover)]",
        destructive:
          "bg-[color:var(--ds-componentTokensButtonBg)] text-[color:var(--ds-componentTokensButtonText)] hover:bg-[color:var(--ds-componentTokensButtonBgHover)] focus-visible:border-[color:var(--ds-componentTokensButtonBorder)] focus-visible:ring-destructive/20 dark:bg-[color:var(--ds-componentTokensButtonBg)] dark:hover:bg-[color:var(--ds-componentTokensButtonBgHover)] dark:focus-visible:ring-destructive/40",
        link: "text-[color:var(--ds-componentTokensButtonText)] underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[var(--ds-radiusMd)] px-2 text-xs [--ds-ui-fontSize-xs:var(--ds-typographyRolesLabelStepsSmFontSize)] [--ds-ui-lineHeight-xs:var(--ds-typographyRolesLabelStepsSmLineHeight)] [--ds-ui-letterSpacing-xs:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[var(--ds-radiusMd)] px-2.5 text-[length:var(--ds-typographyRolesLabelStepsSmFontSize)] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[var(--ds-radiusMd)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[var(--ds-radiusMd)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default text-[color:var(--ds-componentTokensButtonText)]",
      size: "default text-[color:var(--ds-componentTokensButtonText)]",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
