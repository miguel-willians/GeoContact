import { logout as logoutApi } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    mutationKey: ["user"],
    onSuccess: () => {
      queryClient.removeQueries();
      router.push("/main");
    },
  });

  console.log(logout);

  return { logout, isPending };
}
