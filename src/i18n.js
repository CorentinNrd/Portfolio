import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

import translationEN from "../public/locales/en/translation.json";
import translationFR from "../public/locales/fr/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  react: {
    transEmptyNodeValue: "", // what to return for empty Trans
    transSupportBasicHtmlNodes: true, // allow <br/> and simple html elements in translations
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"], // don't convert to <1></1> if simple react elements
    transWrapTextNodes: "", // Wrap text nodes in a user-specified element.
  },
});

export default i18n;
