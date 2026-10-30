import * as React from "react";
import {Checkbox} from "./checkbox";
export function CheckboxExample({label = "Accept terms",id,...props}:React.ComponentProps<typeof Checkbox> & {label?:React.ReactNode}){
 const generatedId=React.useId();
 const controlId=id ?? generatedId;
 return <span data-slot="checkbox-field" className="inline-flex align-middle items-center gap-2 has-[[data-slot=checkbox]:disabled]:cursor-not-allowed"><Checkbox id={controlId} {...props}/>{label != null && <label data-slot="checkbox-label" htmlFor={controlId} className="text-sm">{label}</label>}</span>;
}
