import * as React from "react"
import { cn } from "../shared/utils"
import * as LabelPrimitive from "@radix-ui/react-label"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm [--ds-ui-fontSize-sm:var(--ds-typographyRolesLabelStepsSmFontSize)] [--ds-ui-lineHeight-sm:var(--ds-typographyRolesLabelStepsSmLineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] leading-none [--ds-ui-lineHeight-none:var(--ds-typographyRolesLabelStepsSmLineHeight)] font-medium [--ds-ui-fontWeight-medium:var(--ds-typographyRolesLabelStepsSmFontWeight)] select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 font-[family-name:var(--ds-typographyRolesLabelFamily)]",
        className
      )}
      {...props}
    />
  )
}

export { Label }
