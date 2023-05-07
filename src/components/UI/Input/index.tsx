import React from "react";
import {twMerge} from "tailwind-merge";

type InputProps = React.ComponentProps<"input">;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({className, ...rest}, ref) => {
  return (
    <input
      {...rest}
      ref={ref}
      className={twMerge(
        "bg-ui-darker text-ui-lightest px-4 py-2 rounded-lg shadow-md hover:shadow-2xl transition-all duration-100",
        className
      )}
    />
  );
});

Input.displayName = "Input";
