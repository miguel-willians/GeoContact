import ButtonIcon from "@/ui/ButtonIcon";
import { CiSettings } from "react-icons/ci";
import { ImExit } from "react-icons/im";
import { useLogout } from "./useLogout";

export default function User() {
  const { logout, isPending } = useLogout();

  return (
    <div className="absolute top-[4.2rem] right-[4.2rem] bg-blue-900 p-[1rem_1.4rem] rounded-lg z-[999] shadow-[0_0.8rem_2.4rem_rgba(36,42,46,0.5)] text-md font-semibold flex items-center gap-4">
      <span>Welcome, USER</span>
      <ButtonIcon variant="none">
        <CiSettings />
      </ButtonIcon>
      <ButtonIcon
        variant="primary"
        disabled={isPending}
        onClick={() => logout()}
      >
        <ImExit />
      </ButtonIcon>
    </div>
  );
}
