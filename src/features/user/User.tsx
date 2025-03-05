import ButtonIcon from "@/ui/ButtonIcon";
import { ImExit } from "react-icons/im";

export default function User() {
  return (
    <div className="absolute top-[4.2rem] right-[4.2rem] bg-blue-900 p-[1rem_1.4rem] rounded-lg z-[999] shadow-[0_0.8rem_2.4rem_rgba(36,42,46,0.5)] text-md font-semibold flex items-center gap-4">
      <span>Welcome, USER</span>
      <ButtonIcon variant="primary">
        <ImExit />
      </ButtonIcon>
    </div>
  );
}
