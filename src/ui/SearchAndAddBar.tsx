import Input from "@/ui/Input";
import ButtonIcon from "./ButtonIcon";
import { MdPersonSearch } from "react-icons/md";
import AddNewContact from "@/features/contacts/CreateNewContact";

export default function SearchAndAddBar() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex">
        <Input
          type="text"
          styleType="regular"
          placeholder="Pesquise seu contato..."
        />
        <ButtonIcon variant="search">
          <MdPersonSearch />
        </ButtonIcon>
      </div>
      <AddNewContact />
    </div>
  );
}
