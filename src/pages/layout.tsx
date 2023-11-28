import { Outlet } from "react-router-dom";
import { Header } from "../libs/components";
import { Footer } from "../libs/components";

export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
