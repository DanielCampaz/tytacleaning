import { FC, useState } from "react";
import { NavItem } from "./navitem";
import { SlideImage } from "../slideimage";
import { RoutesSingleton } from "../../utils";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [RoutesN] = useState(new RoutesSingleton().getNavbarRoutes());

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="pl-4 pr-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavItem to={RoutesN[0].path} cls={1} icon={RoutesN[0].icon}>
              {RoutesN[0].name}
            </NavItem>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M2 5h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`md:flex items-center space-x-4 hidden ${
              isMenuOpen ? "hidden" : "block"
            }`}
          >
            {/* Aquí colocarías tus elementos de menú */}
            {RoutesN.map((rou, index) => (
              <NavItem cls={0} to={rou.path} key={`navbarcon-${index}`}>
                {rou.name}
              </NavItem>
            ))}
          </div>
        </div>
        {/* Menú de hamburguesa para pantallas pequeñas */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          {/* Aquí colocarías tus elementos de menú */}
          {RoutesN.map((rou, index) => (
            <NavItem cls={1} to={rou.path} key={`navbarconham-${index}`}>
              {rou.name}
            </NavItem>
          ))}
        </div>
      </nav>
      <div>
        <SlideImage />
      </div>
    </header>
  );
};
