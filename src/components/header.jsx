import "../styles/Header.css";
import ModalComponent from "../components/ui/Modals.jsx";
import InputCustom from "../components/form/input.jsx";
import TextareaCustom from "../components/form/textarea.jsx";
import ButtonCustom from "../components/ui/buttons.jsx";
import NotificationsComponent from "../components/ui/NotificationsComponent.jsx";
import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { checkEmail } from "../utils/index.js";
import cv from "../assets/cv.pdf";

export default function Header() {
  const { t, i18n } = useTranslation();
  const form = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [notification, setNotification] = useState({
    display: false,
    message: "",
    type: "success",
  });
  const [errorDisplay, setErrorDisplay] = useState(false);

  // State pour les champs du formulaire
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Fonction pour vérifier si le formulaire est valide
  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  // Fonction pour mettre à jour les champs
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  }, [isOpen]);

  const dowloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Corentin_Nordmann_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setNotification({
      display: true,
      message: t("cvDownloaded"),
      type: "success",
    });
  };

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    // Mettre à jour le state pour déclencher la notification
    setNotification({
      display: true,
      message: t("langChangedSuccessfully"),
      type: "success",
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      // Si une préférence est sauvegardée, l'utiliser
      const isDark = savedTheme === "true";
      setDarkMode(isDark);
      if (isDark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    } else {
      // Sinon, utiliser le thème dark par défaut
      document.body.classList.add("light");
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  const handleDarkModeToggle = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
    setNotification({
      display: true,
      message: !darkMode ? t("darkModeEnabled") : t("lightModeEnabled"),
      type: "success",
    });
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setErrorDisplay(true);
      setNotification({
        display: true,
        message: t("formError"),
        type: "error",
      });
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setNotification({
            display: true,
            message: t("emailSent"),
            type: "success",
          });
          setIsOpen(false);
        },
        () => {
          setNotification({
            display: true,
            message: t("emailError"),
            type: "error",
          });
        }
      );
  };

  return (
    <>
      <header className="header">
        <nav>
          <ul className="navUl">
            <li>
              <span onClick={() => setIsOpen(true)}>Contact</span>
            </li>
            <li>
              <span onClick={() => dowloadCV()}>Curriculum Vitae</span>
            </li>
            <li>
              {i18n.language === "fr" ? (
                <span
                  className="fi fi-us"
                  onClick={() => changeLanguageHandler("en")}
                ></span>
              ) : (
                <span
                  className="fi fi-fr"
                  onClick={() => changeLanguageHandler("fr")}
                ></span>
              )}
            </li>
            <li onClick={handleDarkModeToggle}>
              <span>{darkMode ? <FaSun /> : <FaMoon />}</span>
            </li>
          </ul>
        </nav>
      </header>
      <ModalComponent isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <section className="formGroup">
            <div>
              <label htmlFor="firstName">{t("firstName")}</label>
              <InputCustom
                type="text"
                name="firstName"
                placeholder="Corentin"
                ID="firstName"
                value={formData.firstName}
                error={!formData.firstName.trim() && errorDisplay}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />{" "}
              <p className="error-message">
                {!formData.firstName.trim() &&
                  errorDisplay &&
                  t("firstNameRequired")}
              </p>
            </div>
            <div>
              <label htmlFor="lastName">{t("lastName")}</label>
              <InputCustom
                type="text"
                name="lastName"
                placeholder="Nordmann"
                ID="lastName"
                value={formData.lastName}
                error={!formData.lastName.trim() && errorDisplay}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
              <p className="error-message">
                {!formData.lastName.trim() &&
                  errorDisplay &&
                  t("lastNameRequired")}
              </p>
            </div>
          </section>

          <div>
            <label htmlFor="email">{t("email")}</label>
            <InputCustom
              type="text"
              name="email"
              placeholder="coconrd@icloud.com"
              ID="email"
              value={formData.email}
              error={
                (!formData.email.trim() && errorDisplay) ||
                (!checkEmail(formData.email) && errorDisplay)
              }
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            <p className="error-message">
              {!formData.email.trim() && errorDisplay
                ? t("emailRequired")
                : !checkEmail(formData.email) && errorDisplay
                ? t("emailInvalid")
                : ""}
            </p>
          </div>

          <div>
            <label htmlFor="message">{t("content")}</label>
            <TextareaCustom
              name="message"
              placeholder={t("yourMessage")}
              value={formData.message}
              error={!formData.message.trim() && errorDisplay}
              onChange={(e) => handleInputChange("message", e.target.value)}
            />
            <p className="error-message">
              {!formData.message.trim() && errorDisplay && t("contentRequired")}
            </p>
          </div>

          <ButtonCustom
            type="submit"
            label={t("send")}
            bgColor="#007bff"
            // disabled={!isFormValid()}
          />
        </form>

        <hr className="hr" />

        <div className="socialIcons">
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </ModalComponent>
      <NotificationsComponent
        isOpen={notification.display}
        type={notification.type}
        delay={2500}
        onClose={() => setNotification((prev) => ({ ...prev, display: false }))}
      >
        <p>{notification.message}</p>
      </NotificationsComponent>
    </>
  );
}
