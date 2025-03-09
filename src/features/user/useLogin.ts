import { login as loginApi } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface LoginCredentials {
  email: string;
  password: string;
}

export function useLogin() {
  const router = useRouter();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }: LoginCredentials) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      router.push("/main");
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  return { login, isLoggingIn };
}
