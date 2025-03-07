import supabase from "./supabase";

export async function getContacts() {
  const { data, error } = await supabase.from("contacts").select("*");

  if (error) {
    console.log(error);
    throw new Error("Contacts could not be loaded.");
  }

  return data;
}
