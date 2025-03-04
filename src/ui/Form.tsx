import { ReactNode } from "react";

interface FormProps {
  children: ReactNode; // Permite múltiplos elementos React ou strings
  className?: string;
}

export default function Form({ children, className }: FormProps) {
  return <form className={className}>{children}</form>;
}
