import "../styles/Header.css";
import Modals from "./ui/modals.jsx";
import InputCustom from "./form/input.jsx";
import TextareaCustom from "./form/textarea.jsx";
import ButtonCustom from "./ui/buttons.jsx";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
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
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    }
  }, []);

  const handleDarkModeToggle = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value.target.value,
    }));
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
      <Modals isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
          <section className="formGroup">
            <div>
              <label htmlFor="firstName">{t("firstName")}</label>
              <InputCustom 
                placeholder="Corentin" 
                ID="firstName" 
                onChange={(value) => handleInputChange('firstName', value)}
              />
            </div>
            <div>
              <label htmlFor="lastName">{t("lastName")}</label>
              <InputCustom 
                placeholder="Nordmann" 
                ID="lastName"
                onChange={(value) => handleInputChange('lastName', value)}
              />
            </div>
          </section>

          <div>
            <label htmlFor="email">{t("email")}</label>
            <InputCustom 
              placeholder="coconrd@icloud.com" 
              ID="email"
              onChange={(value) => handleInputChange('email', value)}
            />
          </div>

          <div>
            <label htmlFor="message">{t("content")}</label>
            <TextareaCustom 
              placeholder={t("yourMessage")}
              onChange={(value) => handleInputChange('message', value)}
            />
          </div>

          <ButtonCustom
            onClick={() => console.log("Message sent", formData)}
            label={t("send")}
            bgColor="#007bff"
          />
        </form>

        <hr className="hr" />

        <div className="socialIcons">
          <FaGithub />
          <FaLinkedin />
        </div>
      </Modals>
    </>
  );
}
