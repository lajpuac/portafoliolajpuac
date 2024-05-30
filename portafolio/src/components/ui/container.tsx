import { cn } from "@/libs/utils";
import React from "react";
import { ReactNode } from "react";

const Container = ({children, className}:{children: ReactNode, className?: string}) => {
	return <div className={cn('container mx-auto p-10', className)}> {children}</div>;
}
export default Container;