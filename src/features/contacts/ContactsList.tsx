import SearchBar from "@/ui/SearchBar";

export default function ContactsList() {
  return (
    <>
      <SearchBar />
      <ul className="w-full h-[65vh] list-none overflow-y-scroll overflow-x-hidden grid grid-cols-2 content-start gap-4">
        <li>Contato 1</li>
        <li>Contato 2</li>
        <li>Contato 3</li>
      </ul>
    </>
  );
}
