import React, { ReactElement } from "react";

interface FormRowVerticalProps {
  label?: string;
  error?: string;
  children: ReactElement<{ id?: string }>; // Define explicitamente que children pode ter um id opcional
}

function FormRowVertical({ label, error, children }: FormRowVerticalProps) {
  return (
    <div className="flex flex-col gap-2 py-3">
      {label && children.props.id && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-700 text-sm">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
