import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../shared/utils"
import * as TogglePrimitive from "@radix-ui/react-toggle"

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm [--ds-ui-fontSize-sm:var(--ds-typographyRolesLabelStepsSmFontSize)] [--ds-ui-lineHeight-sm:var(--ds-typographyRolesLabelStepsSmLineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] font-medium [--ds-ui-fontWeight-medium:var(--ds-typographyRolesLabelStepsSmFontWeight)] whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[length:var(--ds-borderWidthFocus)] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted data-[state=on]:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 font-[family-name:var(--ds-typographyRolesLabelFamily)]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-muted",
      },
      size: {
        default:
          "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-7 min-w-7 rounded-[var(--ds-radiusMd)] px-2.5 text-[length:var(--ds-typographyRolesLabelStepsSmFontSize)] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
