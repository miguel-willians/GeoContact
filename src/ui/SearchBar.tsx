import Input from "@/ui/Input";
import ButtonIcon from "./ButtonIcon";
import { MdPersonSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <div className="flex">
      <Input type="text" placeholder="Pesquise seu contato..." />
      {/* <button>ButtonIcon</button> */}
      <ButtonIcon>
        <MdPersonSearch />
      </ButtonIcon>
    </div>
  );
}
