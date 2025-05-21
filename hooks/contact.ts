import { createClient } from "@/utlis/supabase/client";
import { useMutation } from "@tanstack/react-query";

const insertContact = async (contact) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("contact")
    .insert([contact])
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const useInsertContact = () => {
  return useMutation({
    mutationFn: insertContact,
  });
};
