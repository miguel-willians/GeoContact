import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  styleType: "regular" | "small";
}

export default function Input({ styleType, ...props }: InputProps) {
  const base =
    "border rounded-md px-4 py-2 shadow-sm transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles: Record<InputProps["styleType"], string> = {
    regular: base + "border-gray-300 bg-gray-100 focus:ring-blue-300",
    small: base + "border-gray-400 bg-gray-50 text-sm px-3 py-1 w-52",
  };

  return <input {...props} className={styles[styleType]} />;
}
