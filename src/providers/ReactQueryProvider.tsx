"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient()); // boa prática para evitar a recriação do cliente em cada renderização do componente

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
