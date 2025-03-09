import { signup as signUpApi } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useSignUp() {
  const router = useRouter();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    mutationKey: ["user"],
    onSuccess: () => {
      alert("Conta criada com sucesso!");
      router.push("/");
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  return { signUp, isPending };
}
