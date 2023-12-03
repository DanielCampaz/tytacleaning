import { RouteObject } from "react-router-dom";
import { RoutesConst, RoutesType } from "../../../types";
import Home from "../../../pages/home";
import About from "../../../pages/about";
import Layout from "../../../pages/layout";
import ErrorPage from "../../../pages/error-pages";
import Services from "../../../pages/services";
import Projects from "../../../pages/projects";
import Contact from "../../../pages/contact";
import ServiceId from "../../../pages/serviceid";
import ContactId from "../../../pages/contactid";

export class RoutesSingleton {
  private routes: RoutesType[] = [];

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.routes = [
      {
        path: "/",
        name: "Home",
        element: <Home />,
        icon: {
          dark: "tytaLogo-white.ico",
          white: "tytaLogo.ico",
          alt: "Logo",
        },
      },
      {
        path: "/about",
        element: <About />,
        name: "About",
      },
      {
        path: "/services",
        element: <Services type="page" />,
        name: "Services",
      },
      {
        path: "/services/:id",
        element: <ServiceId />,
        name: "Services",
        wid: true,
      },
      {
        path: "/projects",
        element: <Projects />,
        name: "Projects",
      },
      {
        path: "/contact",
        element: <Contact />,
        name: "Contact",
      },
      {
        path: "/contact/:id",
        element: <ContactId />,
        name: "Contact",
        wid: true,
      },
    ];
  }

  getReactRouterRoutes(): RouteObject[] {
    return [
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: this.routes.map(({ element, path }) => {
          return { path, element: element };
        }),
      },
    ];
  }

  getNavbarRoutes(): RoutesConst[] {
    return this.routes
      .filter(({ wid }) => wid !== true)
      .map(({ name, path, icon }) => ({ name, path, icon }));
  }
}
