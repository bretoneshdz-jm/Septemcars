import * as React from "react";
import {PlusIcon} from "lucide-react";
import {Button} from "./button";
export function ButtonExample({size = "default", children, ...props}:React.ComponentProps<typeof Button>){
 const label = children === undefined ? ((typeof size === "string" && ["icon", "icon-xs", "icon-sm", "icon-lg"].includes(size)) && !(false) ? undefined : "Button") : children;
 const icon = (children === undefined && (typeof size === "string" && ["icon", "icon-xs", "icon-sm", "icon-lg"].includes(size)) && !(false) ? <PlusIcon aria-hidden="true" className="" /> : null);
 const iconOnly = (typeof size === "string" && ["icon", "icon-xs", "icon-sm", "icon-lg"].includes(size)) && icon !== null && (label === undefined || typeof label === "string");
 return <Button size={size} aria-label={iconOnly ? (typeof label === "string" && label ? label : "Add") : undefined} {...props}>{props.asChild ? children : <>{icon}{!iconOnly && label}</>}</Button>;
}
