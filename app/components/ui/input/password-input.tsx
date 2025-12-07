import React, { forwardRef } from "react";
import Label from "../label";

interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
  label?: string;
  postIcon?: React.ReactNode;
}

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ label, postIcon, error, ...rest }, ref) => {

    return (
      <div className="w-full relative">
        <Label label={label ?? ""} />
        <div
          className={`relative w-full pl-4 
          py-2.5! border flex items-center justify-start  ${
            !error ? "border-black-100" : "border-red-500"
          } rounded-xl focus-within:border-brand-primary
            focus-within:shadow-[0_0_4px_4px_rgba(127,17,224,0.16)] bg-[#FAFAFC] px-4`}
        >
          <input
            ref={ref}
            {...rest}
            className={`bg-transparent text-base placeholder:text-[#B5B7C0] outline-none flex-1`}
          />
        </div>

        {error && <span className="text-error text-xs">{error}</span>}
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";

export default InputPassword;
