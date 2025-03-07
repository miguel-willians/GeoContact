"use client";

import Link from "next/link";

interface ContactItemProps {
  name: string;
  cpf: string;
}

export default function ContactItem({ name, cpf }: ContactItemProps) {
  return (
    <li>
      <Link
        className="flex justify-between items-center gap-4 bg-blue-950 rounded-md px-4 py-2 border-l-4 border-brand-2 cursor-pointer text-inherit no-underline"
        href=""
      >
        <h3 className="text-lg font-semibold mr-auto">{name}</h3>
        <div className="flex gap-4 items-center">
          <span className="bg-blue-500 p-1 rounded-md">{cpf}</span>
          <button
            className="h-8 w-8 rounded-full border-none bg-gray-500 text-light-2 text-base font-normal cursor-pointer transition-all duration-200 hover:bg-gray-200 hover:text-gray-900"
            onClick={() => {
              return "";
            }}
          >
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
}
