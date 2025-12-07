import React, { forwardRef } from "react";
import Label from "../label";
import classNames from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string | boolean | string[];
  label?: string;
  preIcon?: React.ReactNode;
  postIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, preIcon, postIcon, error, className, ...rest }, ref) => {
    return (
      <div className="w-full">
        {label && <Label label={label ?? ""} />}

        <div
          className={classNames(
            `relative w-full flex items-center gap-2 py-2.5 border
            ${!error ? "border-black-100" : "border-red-500"}
            rounded-xl bg-[#FAFAFC]
            focus-within:border-brand-primary
            focus-within:shadow-[0_0_4px_4px_rgba(127,17,224,0.16)] px-4`,
            className
          )}
        >
          {preIcon && <div className="shrink-0">{preIcon}</div>}

          <input
            ref={ref}
            {...rest}
            className="flex-1 bg-transparent text-sm placeholder:text-[#B5B7C0] outline-none"
          />

          {postIcon && <div className="shrink-0">{postIcon}</div>}
        </div>

        {error && (
          <span className="text-error text-sm">{error}</span>
        )}
      </div>
    );
  }
);

export default Input;
