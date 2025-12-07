import classNames from "classnames";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={classNames(
        "flex-1 rounded-[30px] bg-white px-4 py-5 shadow-[0_10px_60px_0_rgba(226,236,249,0.5)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
