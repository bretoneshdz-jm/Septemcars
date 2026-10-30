import * as React from "react";
import {Kbd,KbdGroup} from "./kbd";
export function KbdExample({children = "Enter", ...props}:React.ComponentProps<typeof Kbd>){
 return <KbdGroup ><Kbd  {...props}>{null}{children}</Kbd></KbdGroup>;
}
