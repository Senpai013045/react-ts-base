import * as React from "react";
import {twMerge} from "tailwind-merge";

export const Container = ({
  className,
  ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={twMerge("max-w-3xl mx-auto", className)} {...rest} />;
};
