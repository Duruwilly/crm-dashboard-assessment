import React, { useState, forwardRef } from "react";
import Label from "../label";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
  label?: string;
  postIcon?: React.ReactNode;
}

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ label, postIcon, error, ...rest }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <div className="w-full relative">
        <Label label={label ?? ""} />
        <div
          className={`relative w-full pl-4 
          py-2.5! border-[0.6px] flex items-center justify-start  ${
            !error ? "border-black-100" : "border-red-500"
          } rounded-xl focus-within:border-brand-primary
            focus-within:shadow-[0_0_4px_4px_rgba(127,17,224,0.16)] bg-[#FAFAFC] px-4`}
        >
          <input
            type={show ? "text" : "password"}
            ref={ref}
            {...rest}
            className={`bg-transparent text-base placeholder:text-black-shade-200 outline-none flex-1`}
          />
          <div
            className="shrink-0 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {!show ? (
              <AiFillEyeInvisible size={24} className="text-gray-500" />
            ) : (
              <AiFillEye size={24} className="text-gray-500" />
            )}
          </div>
        </div>

        {error && <span className="text-error text-sm">{error}</span>}
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";

export default InputPassword;
