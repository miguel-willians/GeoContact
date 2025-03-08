import supabase from "./supabase";

export async function getContacts() {
  const { data, error } = await supabase.from("contacts").select("*");

  if (error) {
    console.log(error);
    throw new Error("Contacts could not be loaded.");
  }

  return data;
}

export async function createContact(newContact: object) {
  const { data, error } = await supabase
    .from("contacts")
    .insert([newContact])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Contact could not be created.");
  }

  return data;
}

export async function deleteContact(id: string) {
  const { error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Contact could not be deleted.");
  }
}
