import en from "./locales/en.json";
import pt from "./locales/pt-BR.json";

export default defineI18nConfig(() => ({
  fallbackLocale: "en",
  messages: {
    en,
    pt,
  },
}));
