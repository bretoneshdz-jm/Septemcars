import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command"

export function CommandExample(_props: Record<string, unknown> = {}) {
  return (
    <Command className="max-w-sm rounded-lg border">
      <CommandInput placeholder={"Escribe una orden o busca..."} />
      <CommandList>
        <CommandEmpty>{"No se han encontrado resultados."}</CommandEmpty>
        <CommandGroup heading={"Sugerencias"}>
          <CommandItem>
            <Calendar />
            <span>{"Calendario"}</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>{"Buscar emoji"}</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator />
            <span>{"Calculadora"}</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={"Ajustes"}>
          <CommandItem>
            <User />
            <span>{"Perfil"}</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>{"Facturación"}</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>{"Ajustes"}</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
