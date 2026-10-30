import { cn } from "../shared/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-[var(--ds-typographyRolesLabelFamily)] text-xs [--ds-ui-fontSize-xs:var(--ds-typographyRolesLabelStepsSmFontSize)] [--ds-ui-lineHeight-xs:var(--ds-typographyRolesLabelStepsSmLineHeight)] [--ds-ui-letterSpacing-xs:var(--ds-typographyRolesLabelStepsSmLetterSpacing)] font-medium [--ds-ui-fontWeight-medium:var(--ds-typographyRolesLabelStepsSmFontWeight)] text-muted-foreground select-none in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3 font-[family-name:var(--ds-typographyRolesLabelFamily)]",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
