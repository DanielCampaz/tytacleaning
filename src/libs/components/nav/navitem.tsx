import { ReactNode } from "react";
import { RoutesIcon } from "./navbar";
import { Link } from "react-router-dom";

export interface NavItemProps {
  to: string;
  icon?: RoutesIcon;
  children: ReactNode;
}

export default function NavItem({ children, to, icon }: NavItemProps) {
  return (
    <Link to={to} className="p-2 hover:bg-slate-300 hover:rounded-xl m-2">
      {icon !== undefined ? (
        <img src={icon.white} alt={icon.alt} className="w-[36px] max-w-none" />
      ) : (
        <div>{children}</div>
      )}
    </Link>
  );
}
