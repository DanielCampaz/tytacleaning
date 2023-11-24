import { RouteObject } from "react-router-dom";
import Layout from "./pages/layout";
import ErrorPage from "./pages/error-pages";
import Home from "./pages/home";

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
    ],
  },
] as const;

export default routes;
