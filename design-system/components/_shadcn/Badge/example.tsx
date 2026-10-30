import * as React from "react";
import {Badge} from "./badge";
export function BadgeExample({children = "Badge", ...props}:React.ComponentProps<typeof Badge>){
 return <Badge {...props}>{children}</Badge>;
}
