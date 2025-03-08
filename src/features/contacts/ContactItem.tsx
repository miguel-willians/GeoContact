"use client";

import { deleteContact } from "@/services/apiContacts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

interface ContactItemProps {
  name: string;
  cpf: string;
  id: string;
}

export default function ContactItem({
  name,
  cpf,
  id: contactId,
}: ContactItemProps) {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: (id: string) => deleteContact(id),
    onSuccess: () => {
      alert("Contato deletado com sucesso!");
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
    },
    onError: (err) => alert(err.message),
  });

  return (
    <li>
      <Link
        className="flex justify-between items-center gap-4 bg-blue-950 rounded-md px-4 py-2 border-l-4 border-brand-2 cursor-pointer text-inherit no-underline"
        href=""
      >
        <h3 className="text-lg font-semibold mr-auto">{name}</h3>
        <div className="flex gap-4 items-center">
          <span className="bg-blue-500 p-1 rounded-md">CPF: {cpf}</span>
          <button
            className="h-8 w-8 rounded-full border-none bg-gray-500 text-light-2 text-base font-normal cursor-pointer transition-all duration-200 hover:bg-gray-200 hover:text-gray-900"
            onClick={() => mutate(contactId)}
            disabled={isDeleting}
          >
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
}
