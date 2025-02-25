import { ButtonHTMLAttributes } from "react";

function ButtonIcon(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="p-2 rounded-sm transition-all hover:bg-gray-100"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default ButtonIcon;
