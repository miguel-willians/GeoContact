import Sidebar from "@/ui/Sidebar";

import Map from "@/features/map/Map";
import User from "@/features/user/User";

export default function App() {
  return (
    <main className="h-screen p-6 overscroll-none flex relative bg-blue-950 text-white">
      <Sidebar />
      <Map />
      <User />
    </main>
  );
}
