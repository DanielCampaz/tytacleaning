import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

export interface AnchorProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const Anchor: FC<AnchorProps> = ({ children, to, className }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default Anchor;
