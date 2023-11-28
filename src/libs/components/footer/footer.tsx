import { FC } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <footer>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Tyta Service Cleaning. All rights
          reserved.
        </p>
        <p className="mt-2">
          <Link to="/contact" className="underline">
            Contact us
          </Link>
        </p>
      </div>
    </footer>
  );
};
