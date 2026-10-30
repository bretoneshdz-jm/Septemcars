import * as React from "react";
import {Avatar,AvatarImage,AvatarFallback} from "./avatar";
export function AvatarExample({fallback = "OP", src = undefined, alt = "", imageProps, fallbackProps, children, ...props}:React.ComponentProps<typeof Avatar> & {src?:string;alt?:string;fallback?:React.ReactNode;imageProps?:React.ComponentProps<typeof AvatarImage>;fallbackProps?:React.ComponentProps<typeof AvatarFallback>}){
 return <Avatar  {...props}>{children !== undefined ? children : <><AvatarImage src={src} alt={alt} {...imageProps} /><AvatarFallback {...fallbackProps}>{fallback}</AvatarFallback></>}</Avatar>;
}
