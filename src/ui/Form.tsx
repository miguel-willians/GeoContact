import { ReactNode, FormHTMLAttributes } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode; // Permite múltiplos elementos React ou strings
}

export default function Form({ children, className, ...rest }: FormProps) {
  return (
    <form className={className} {...rest}>
      {children}
    </form>
  );
}
