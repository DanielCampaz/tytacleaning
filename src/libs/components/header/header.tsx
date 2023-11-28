import { FC, useState } from "react";
import { NavItem } from "./navitem";
import { SlideImage } from "../slideimage";

export interface RoutesIcon {
  dark: string;
  white: string;
  alt: string;
}

export interface RoutesConst {
  path: string;
  name: string;
  icon?: RoutesIcon;
}

const Routes: RoutesConst[] = [
  {
    path: "/",
    name: "Home",
    icon: {
      dark: "tytaLogo-white.ico",
      white: "tytaLogo.ico",
      alt: "Logo",
    },
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/service",
    name: "Service",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="pl-4 pr-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavItem to={Routes[0].path} cls={1} icon={Routes[0].icon}>
              {Routes[0].name}
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
            {Routes.map((rou, index) => (
              <NavItem cls={0} to={rou.path} key={`navbarcon-${index}`}>
                {rou.name}
              </NavItem>
            ))}
          </div>
        </div>
        {/* Menú de hamburguesa para pantallas pequeñas */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          {/* Aquí colocarías tus elementos de menú */}
          {Routes.map((rou, index) => (
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
