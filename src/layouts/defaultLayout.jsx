import { Outlet } from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
