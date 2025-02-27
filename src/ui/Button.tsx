"use client";

import { ReactNode } from "react";

import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  type: "primary" | "secondary" | "small";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ children, disabled, href, type, onClick }: ButtonProps) {
  const base =
    "inline-block rounded-md text-sm bg-blue-500 font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-600 w-96";

  const styles: Record<ButtonProps["type"], string> = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  if (href)
    return (
      <Link href={href} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
