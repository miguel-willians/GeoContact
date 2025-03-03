import SearchAndAddBar from "@/ui/SearchAndAddBar";
import ContactItem from "./ContactItem";

export default function ContactsList() {
  return (
    <>
      <SearchAndAddBar />
      <ul className="w-full h-[65vh] list-none overflow-y-hidden overflow-x-hidden grid grid-cols-2 content-start gap-4">
        <ContactItem />
      </ul>
    </>
  );
}
