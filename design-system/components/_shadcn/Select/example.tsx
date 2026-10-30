import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select"

export function SelectExample(_props: Record<string, unknown> = {}) {
  return (
    <Select defaultOpen={_props.open === true}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder={"Selecciona una fruta"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{"Frutas"}</SelectLabel>
          <SelectItem value="apple">{"Manzana"}</SelectItem>
          <SelectItem value="banana">{"Plátano"}</SelectItem>
          <SelectItem value="blueberry">{"Arándano"}</SelectItem>
          <SelectItem value="grapes">{"Uvas"}</SelectItem>
          <SelectItem value="pineapple">{"Piña"}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
