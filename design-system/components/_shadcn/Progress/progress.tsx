import * as React from "react"
import { cn } from "../shared/utils"
import * as ProgressPrimitive from "@radix-ui/react-progress"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      // Repeat DS: forwarded so aria-valuenow, aria-valuetext and data-state follow the value (missing upstream at e8c3143b).
      value={value}
      className={cn(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted font-[family-name:var(--ds-typographyRolesBodyFamily)]",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="size-full flex-1 bg-primary transition-all"
        // Repeat DS: percentage of max instead of the official `100 - (value || 0)`, which assumes max is 100 (upstream at e8c3143b).
        style={{ transform: `translateX(-${100 - ((value || 0) * 100) / (props.max && props.max > 0 ? props.max : 100)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
