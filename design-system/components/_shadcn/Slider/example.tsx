import { Slider } from "./slider"

export function SliderExample(_props: Record<string, unknown> = {}) {
  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
    />
  )
}
