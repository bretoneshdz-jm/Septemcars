import * as React from "react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./resizable"

type PanelResize = NonNullable<
  React.ComponentProps<typeof ResizablePanel>["onResize"]
>

export type ResizableExampleProps = React.ComponentProps<
  typeof ResizablePanelGroup
> & {
  withHandle?: boolean
  onPanelResize?: (panel: string, size: Parameters<PanelResize>[0]) => void
}

// The official demo (resizable-demo.tsx) in a reduced form: its bordered box and its
// first split. Panel sizes are percentages of the group, as the demo writes them.
export function ResizableExample({
  orientation = "horizontal",
  withHandle = true,
  onPanelResize,
  ...props
}: ResizableExampleProps) {
  return (
    <ResizablePanelGroup
      orientation={orientation}
      className="min-h-[200px] max-w-sm rounded-lg border"
      {...props}
    >
      <ResizablePanel
        defaultSize="50%"
        onResize={(size) => onPanelResize?.("one", size)}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle={withHandle} />
      <ResizablePanel
        defaultSize="50%"
        onResize={(size) => onPanelResize?.("two", size)}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
