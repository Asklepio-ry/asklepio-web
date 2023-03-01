import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import "../style/pages/Layout.css";

export default function Layout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
