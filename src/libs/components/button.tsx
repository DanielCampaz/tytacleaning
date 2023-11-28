import { FC, MouseEvent, ReactNode } from "react";

const Variants = {
  default: "rounded text-sm p-1.5 bg-white text-black",
  black: "rounded text-sm p-1.5 bg-slate-950 text-white",
};

export interface BottonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  children: ReactNode;
  variants?: keyof typeof Variants;
}

export const Button: FC<BottonProps> = ({
  variants = "default",
  children,
  onClick,
}: BottonProps) => {
  return (
    <button className={Variants[variants]} onClick={onClick}>
      {children}
    </button>
  );
};
