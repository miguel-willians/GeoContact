"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variation?: "primary" | "secondary" | "pSmall" | "sSmall" | "pSmallWithIcon";
};

function Button({
  children,
  disabled,
  href,
  variation = "primary",
  onClick,
  ...props
}: ButtonProps) {
  const base =
    "inline-block rounded-md text-sm font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles: Record<NonNullable<ButtonProps["variation"]>, string> = {
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
      <Link href={href} className={styles[variation]}>
        {children}
      </Link>
    );

  return (
    <button
      disabled={disabled}
      className={styles[variation]}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
