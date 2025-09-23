import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLp from "../translations/en/lp";
import enProjects from "../translations/en/projects";
import enProjectPage from "../translations/en/projectPage";
import enAboutPage from "../translations/en/aboutPage";

import frLp from "../translations/fr/lp";
import frProjects from "../translations/fr/projects";
import frProjectPage from "../translations/fr/projectPage";
import frAboutPage from "../translations/fr/aboutPage";

import jpLp from "../translations/jp/lp";
import jpProjects from "../translations/jp/projects";
import jpProjectPage from "../translations/jp/projectPage";
import jpAboutPage from "../translations/jp/aboutPage";

const resources = {
  en: {
    translation: {
      ...enLp,
      projects: { list: enProjects },
      ...enProjectPage,
      ...enAboutPage,
    },
  },
  fr: {
    translation: {
      ...frLp,
      projects: { list: frProjects },
      ...frProjectPage,
      ...frAboutPage,
    },
  },
  jp: {
    translation: {
      ...jpLp,
      projects: { list: jpProjects },
      ...jpProjectPage,
      ...jpAboutPage,
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
