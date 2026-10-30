import * as React from "react";
import {Alert,AlertTitle,AlertDescription,AlertAction} from "./alert";
export function AlertExample({variant = "default",heading = "Notice",description = "Useful information.",action = "",children,...props}:React.ComponentProps<typeof Alert> & {heading?:React.ReactNode;description?:React.ReactNode;action?:React.ReactNode}){
 return <Alert variant={variant} {...props}>{children === undefined ? <>{null}{heading != null && <AlertTitle >{heading}</AlertTitle>}{description != null && <AlertDescription >{description}</AlertDescription>}{(action != null && action !== "") && <AlertAction >{action}</AlertAction>}</> : children}</Alert>;
}
