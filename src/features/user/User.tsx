import Link from "next/link";

export default function User() {
  return (
    <div className="absolute top-[4.2rem] right-[4.2rem] bg-gray-900 p-[1rem_1.4rem] rounded-lg z-[999] shadow-[0_0.8rem_2.4rem_rgba(36,42,46,0.5)] text-[1.6rem] font-semibold flex items-center gap-4">
      <span>Welcome, USER</span>
      <Link
        href="/"
        className="bg-gray-800 rounded-lg border-none px-3 py-1.5 text-inherit font-inherit text-[1.2rem] font-bold uppercase cursor-pointer"
      >
        Logout
      </Link>
    </div>
  );
}
