import classNames from "classnames";
import { Loader } from "lucide-react";
import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?:
    | "filled"
    | "transparent"
    | "primary"
    | "secondary"
    | "light"
    | "danger";
  text: string;
  isLoading?: boolean;
  preIcon?: React.ReactNode;
  postIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "small";
  padding?: string;
}

const Button = ({
  text,
  variant = "primary",
  className,
  isLoading,
  postIcon,
  preIcon,
  padding = "14px",
  type = "submit",
  ...rest
}: ButtonProps) => {
  const variantClassName = {
    primary: `bg-brand-primary text-white`,
    secondary: ``,
    transparent: `bg-[#fefefe] text-[#292D32] border border-border-secondary`,
    danger: `bg-[#EF4444] text-white`,
    text: `bg-[#D9D9D9]`,
  };

  return (
    <button
      type={type}
      className={classNames(
        `rounded-md px7 px-2 !py[14px] disabled:opacity-45 transition duration-300 flex flex-row items-center justify-center gap-1 bg[#16BB50] cursor-pointer w-full font-semibold text-sm`,
        variantClassName[variant as keyof typeof variantClassName],
        className
      )}
      style={{ paddingTop: padding, paddingBottom: padding }}
      {...rest}
    >
      {preIcon && preIcon}
      {isLoading && (
        <Loader className="absolute h-6 w-6 animate-spin text-white" />
      )}
      <span
        className={`${isLoading ? "invisible" : "visible"} flex items-center gap-2`}
      >
        {text}
      </span>
      {postIcon && postIcon}
    </button>
  );
};

export default Button;
