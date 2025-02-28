import { ButtonHTMLAttributes } from "react";

function ButtonIcon(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="p-2 rounded-r-lg rounded-sm transition-all bg-blue-400 hover:bg-blue-200 flex justify-center items-center"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default ButtonIcon;
