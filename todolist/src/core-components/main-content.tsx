import React from "react";
import { cva, cx } from "class-variance-authority";

interface MainContentProps extends React.ComponentsProps<"main">{}

export default function MainContent({
  children, 
  className, 
  ...props
}: MainContentProps) {
  return (
    <main 
      className={cx("mt-4 md:mt-8", className)} 
      {...props}
    >
      {children}
    </main>
  )
}