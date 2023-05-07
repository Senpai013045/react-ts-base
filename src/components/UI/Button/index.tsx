import {twMerge} from "tailwind-merge";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({className, ...rest}: Props) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "bg-ui-dark text-ui-lightest px-4 py-2 rounded-lg shadow-md hover:shadow-2xl transition-all duration-100 ",
        "hover:bg-ui-darker hover:text-ui-lightest",
        className
      )}
    />
  );
};
