import { Outlet } from "react-router-dom";
import { NavBar } from "../libs/components";

export default function Layout() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}
