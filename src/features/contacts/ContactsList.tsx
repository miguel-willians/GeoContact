import SearchBar from "@/ui/SearchBar";
import ContactItem from "./ContactItem";

export default function ContactsList() {
  return (
    <>
      <SearchBar />
      <ul className="w-full h-[65vh] list-none overflow-y-hidden overflow-x-hidden grid grid-cols-2 content-start gap-4">
        <ContactItem />
      </ul>
    </>
  );
}
