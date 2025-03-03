"use client";

import dynamic from "next/dynamic";

import Sidebar from "@/ui/Sidebar";
import User from "@/features/user/User";

export default function App() {
  const Map = dynamic(() => import("../features/map/Map"), {
    ssr: false, // Impede a renderização do componente no lado do servidor
  });

  return (
    <main className="h-screen p-6 overscroll-none flex relative bg-blue-950 text-white">
      <Sidebar />
      <Map />
      <User />
    </main>
  );
}
