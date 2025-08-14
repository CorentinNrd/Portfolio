import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>
            &copy; {currentYear} Corentin Nordmann - {t("allRightsReserved")}
          </p>
        </div>

        <div className="footer-section">
          <p>{t("siteCreatedBy")} Corentin Nordmann</p>
        </div>

        <div className="footer-legal">
          <span>{t("legalNotice")}</span>
          <span className="separator">•</span>
          <span>{t("host")}: Netlify, Inc. - San Francisco, CA, USA</span>
        </div>
      </div>
    </footer>
  );
}
