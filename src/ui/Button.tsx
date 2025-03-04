"use client";

import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  type: "primary" | "secondary" | "pSmall" | "sSmall" | "pSmallWithIcon";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ children, disabled, href, type, onClick }: ButtonProps) {
  const base =
    "inline-block rounded-md text-sm font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles: Record<ButtonProps["type"], string> = {
    primary:
      base +
      " bg-blue-500 text-white hover:bg-blue-300 focus:bg-blue-300 focus:ring-blue-300 px-4 py-3 md:px-6 md:py-4 w-96",
    secondary:
      base +
      " border-2 border-stone-300 text-stone-800 bg-stone-300 hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 focus:ring-stone-200 px-4 py-2.5 md:px-6 md:py-3.5 w-96 rounded-full",
    pSmall:
      base +
      " bg-blue-500 text-white hover:bg-blue-300 focus:bg-blue-300 focus:ring-blue-300 px-4 py-2 md:px-5 md:py-2.5 text-xs w-52 flex items-center justify-center",
    sSmall:
      base +
      " border-2 border-stone-300 text-stone-800 bg-stone-300 hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 focus:ring-stone-200 px-3 py-1.5 md:px-4 md:py-2 text-xs w-52 flex items-center justify-center rounded-full",
    pSmallWithIcon:
      base +
      " bg-blue-500 text-white hover:bg-blue-300 focus:bg-blue-300 focus:ring-blue-300 px-3 py-2 md:px-4 md:py-2.5 text-xs w-52 flex items-center justify-between gap-2",
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
