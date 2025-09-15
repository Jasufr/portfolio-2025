import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLp from "../translations/en/lp";
import enProjects from "../translations/en/projects";

import frLp from "../translations/fr/lp";
import frProjects from "../translations/fr/projects";

import jpLp from "../translations/jp/lp";
import jpProjects from "../translations/jp/projects";

const resources = {
  en: {
    translation: {
      ...enLp,
      projects: { list: enProjects },
    },
  },
  fr: {
    translation: {
      ...frLp,
      projects: { list: frProjects },
    },
  },
  jp: {
    translation: {
      ...jpLp,
      projects: { list: jpProjects },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
