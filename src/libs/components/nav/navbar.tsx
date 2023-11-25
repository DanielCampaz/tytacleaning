import { NavItem } from ".";

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

export interface NavBarProps {}

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-center sm:flex-wrap">
      {Routes.map((rou) => (
        <NavItem to={rou.path} icon={rou.icon}>
          {rou.name}
        </NavItem>
      ))}
    </nav>
  );
}
