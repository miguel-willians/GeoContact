"use client";

import { useUser } from "@/features/user/useUser";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isPending, isAuthenticated } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      router.push("/");
    }
  }, [isPending, isAuthenticated, router]);

  if (isPending)
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-blue-950 text-white text-9xl absolute top-0 left-0">
        <p>Carregando...</p>
      </div>
    );

  if (isAuthenticated) return children;
}
