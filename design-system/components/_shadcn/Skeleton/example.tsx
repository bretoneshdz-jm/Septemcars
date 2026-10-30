import * as React from "react";
import { Skeleton } from "./skeleton";
import {cn} from "../shared/utils";
export function SkeletonExample({className,...props}:React.ComponentProps<typeof Skeleton>){
 return <Skeleton className={cn("w-64 h-6",className)} {...props}/>;
}
