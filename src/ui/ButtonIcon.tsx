import { ButtonHTMLAttributes } from "react";

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "search" | "primary";
};

function ButtonIcon({ variant, ...props }: ButtonIconProps) {
  const styles: Record<string, string> = {
    search:
      "p-2 rounded-r-lg rounded-sm bg-blue-400 hover:bg-blue-200 flex justify-center items-center",
    primary:
      "p-2 rounded-md bg-blue-950 hover:bg-blue-600 flex justify-center items-center",
  };

  return (
    <button className={variant ? styles[variant] : ""} {...props}>
      {props.children}
    </button>
  );
}

export default ButtonIcon;
