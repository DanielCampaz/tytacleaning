import { Outlet } from "react-router-dom";
import { Header } from "../libs/components";
import { Footer } from "../libs/components";

export default function Layout() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 mt-10">
        <Outlet />
      </div>
      <div className="mb-15">
        <Footer />
      </div>
    </main>
  );
}
