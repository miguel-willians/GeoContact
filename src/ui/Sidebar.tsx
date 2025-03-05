import React, { useState } from "react";
import Logo from "./Logo";
import Footer from "./Footer";
import ContactsList from "@/features/contacts/ContactsList";
import CreateNewContactForm from "@/features/contacts/CreateNewContactForm";

export default function Sidebar() {
  // const [isNewContactFormOpen, setNewContactFormOpen] = useState(false);

  return (
    <div className="flex flex-col items-center h-[calc(100vh-2.99rem)] basis-[56rem] bg-blue-900 p-[3rem_5rem_3.5rem_5rem] gap-9 w-full">
      <Logo />

      {false ? (
        <CreateNewContactForm />
      ) : (
        <>
          <ContactsList />
          <Footer />
        </>
      )}
    </div>
  );
}
