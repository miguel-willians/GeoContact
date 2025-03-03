import Button from "@/ui/Button";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function CreateNewContact() {
  return (
    <Button type="small">
      <AiOutlineUserAdd className="text-xl" />
      Criar novo Contato
    </Button>
  );
}
