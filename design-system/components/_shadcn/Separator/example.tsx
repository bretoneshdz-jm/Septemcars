import { Separator } from "./separator"

export function SeparatorExample(_props: Record<string, unknown> = {}) {
  return (
    <div className="flex max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">shadcn/ui</div>
        <div className="text-muted-foreground">
          {"La base de tu sistema de diseño"}</div>
      </div>
      <Separator />
      <div>
        {"Una colección de componentes cuidados que puedes personalizar, ampliar y usar como base."}</div>
    </div>
  )
}
