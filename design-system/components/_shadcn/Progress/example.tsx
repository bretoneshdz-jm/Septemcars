import * as React from "react"

import { Progress } from "./progress"

export function ProgressExample(_props: Record<string, unknown> = {}) {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}
