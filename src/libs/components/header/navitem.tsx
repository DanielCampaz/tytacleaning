import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { RoutesIcon } from "../header";

export interface NavItemProps {
  to: string;
  icon?: RoutesIcon;
  children: ReactNode;
  cls: 1 | 0;
}

const classNames = ["p-2 hover:bg-slate-300 hover:rounded-xl m-2", "p-2 m-2"];

export const NavItem: FC<NavItemProps> = ({
  cls,
  children,
  to,
  icon,
}: NavItemProps) => {
  return (
    <Link to={to} className={classNames[cls]}>
      {icon !== undefined ? (
        <img src={icon.white} alt={icon.alt} className="w-[36px] max-w-none" />
      ) : (
        <div>{children}</div>
      )}
    </Link>
  );
};
