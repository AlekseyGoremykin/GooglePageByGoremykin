import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources_ru from "./languages/ru.json"
import resources_en from "./languages/en.json"

const resources = {
    en: resources_en,
    ru: resources_ru
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
