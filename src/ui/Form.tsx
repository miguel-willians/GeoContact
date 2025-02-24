import { ReactNode } from "react";

interface FormProps {
  children: ReactNode; // Permite múltiplos elementos React ou strings
}

export default function Form({ children }: FormProps) {
  return <form>{children}</form>;
}
