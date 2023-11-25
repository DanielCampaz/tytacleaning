import { RouteObject } from "react-router-dom";
import Layout from "./pages/layout";
import ErrorPage from "./pages/error-pages";
import Home from "./pages/home";
import About from "./pages/about";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
] as const;

export default routes;

export const routeChild = routes[0].children;
