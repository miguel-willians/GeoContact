import React, { ReactElement } from "react";
import { MdErrorOutline } from "react-icons/md";

interface FormRowHorizontalProps {
  label?: string;
  error?: string;
  children: ReactElement<{ id?: string }>; // Define explicitamente que children pode ter um id opcional
}

function FormRowHorizontal({ label, error, children }: FormRowHorizontalProps) {
  return (
    <div className="flex items-center gap-4 py-3">
      {label && children.props.id && (
        <label htmlFor={children.props.id} className="font-medium w-1/4">
          {label}
        </label>
      )}
      <div className="flex-1">{children}</div>
      {error && (
        <span className="text-white bg-blue-950 p-1 rounded-md text-sm ml-2 flex items-center gap-1">
          <MdErrorOutline />
          {error}
        </span>
      )}
    </div>
  );
}

export default FormRowHorizontal;
