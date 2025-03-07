import ContactItem from "./ContactItem";
import { useQuery } from "@tanstack/react-query";
import { getContacts } from "@/services/apiContacts";

export default function ContactsList() {
  const {
    data: contacts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  if (isLoading) return <h1>CARREGANDO...</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (
    <ul className="w-full h-[65vh] list-none overflow-y-hidden overflow-x-hidden grid grid-cols-2 content-start gap-4">
      {contacts?.map((contact) => (
        <ContactItem name={contact.name} cpf={contact.cpf} key={contact.id} />
      ))}
    </ul>
  );
}
