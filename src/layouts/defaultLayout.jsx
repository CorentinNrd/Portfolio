import { Outlet } from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import useDeviceDetection from "../hooks/useDeviceDetection";
import { useTranslation } from "react-i18next";
import { FaHammer } from "react-icons/fa";

export default function DefaultLayout() {
  const device = useDeviceDetection();
  const { t } = useTranslation();
  return (
    <>
      {device === "Mobile" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "100dvh",
          }}
        >
          <h2 style={{ textAlign: "center" }}>{t("mobileInConstruction")}</h2>
          <FaHammer style={{ fontSize: "50px", marginTop: "10px" }} />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}
