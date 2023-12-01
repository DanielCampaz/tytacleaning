import { RouteObject } from "react-router-dom";
import { RoutesSingleton } from "./libs/utils";

export const routes: RouteObject[] =
  new RoutesSingleton().getReactRouterRoutes();

export default routes;
