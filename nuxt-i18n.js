import en from "./locales/en.json";
import ptbr from "./locales/pt-BR.json";

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: "en",
    messages: {
      en,
      ptbr,
    },
  };
});
