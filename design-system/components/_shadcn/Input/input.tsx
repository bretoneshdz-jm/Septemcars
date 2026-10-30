import * as React from "react"
import { cn } from "../shared/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-[color:var(--ds-componentTokensInputBorder)] bg-[color:var(--ds-componentTokensInputBg)] px-2.5 py-1 text-base [--ds-ui-fontSize-base:var(--ds-typographyRolesLabelStepsMdFontSize)] [--ds-ui-lineHeight-base:var(--ds-typographyRolesLabelStepsMdLineHeight)] [--ds-ui-letterSpacing-base:var(--ds-typographyRolesLabelStepsMdLetterSpacing)] transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:[--ds-ui-borderWidth-0:var(--ds-borderWidthNone)] file:bg-[color:var(--ds-componentTokensInputBg)] file:text-sm file:[--ds-ui-fontSize-sm:var(--ds-typographyRolesLabelStepsSmFontSize)] file:[--ds-ui-lineHeight-sm:var(--ds-typographyRolesLabelStepsSmLineHeight)] file:[--ds-ui-letterSpacing-sm:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] file:font-medium file:[--ds-ui-fontWeight-medium:var(--ds-typographyRolesLabelStepsSmFontWeight)] file:text-[color:var(--ds-componentTokensInputText)] placeholder:text-[color:var(--ds-componentTokensInputPlaceholder)] focus-visible:border-[color:var(--ds-componentTokensInputBorderFocus)] focus-visible:ring-3 focus-visible:[--ds-ui-focusWidth-3:var(--ds-borderWidthFocus)] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-[color:var(--ds-componentTokensInputBg)] disabled:opacity-50 aria-invalid:border-[color:var(--ds-componentTokensInputBorder)] aria-invalid:ring-3 aria-invalid:[--ds-ui-focusWidth-3:var(--ds-borderWidthFocus)] aria-invalid:ring-destructive/20 md:text-sm md:[--ds-ui-fontSize-sm:var(--ds-typographyRolesLabelStepsSmFontSize)] md:[--ds-ui-lineHeight-sm:var(--ds-typographyRolesLabelStepsSmLineHeight)] md:[--ds-ui-letterSpacing-sm:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] dark:bg-[color:var(--ds-componentTokensInputBg)] dark:disabled:bg-[color:var(--ds-componentTokensInputBg)] dark:aria-invalid:border-[color:var(--ds-componentTokensInputBorder)] dark:aria-invalid:ring-destructive/40 text-[color:var(--ds-componentTokensInputText)] font-[family-name:var(--ds-typographyRolesLabelFamily)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
