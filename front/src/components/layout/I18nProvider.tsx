import { i18n } from "@lingui/core";
import { I18nProvider as LinguiI18nProvider } from "@lingui/react";
import { messages as messagesEn } from "src/locales/en/messages.js";
import { messages as messagesFr } from "src/locales/fr/messages.js";

i18n.load("en", messagesEn);
i18n.load("fr", messagesFr);
const lang = "fr";
i18n.activate(lang);

const I18nProvider = ({ children }) => (
  <LinguiI18nProvider i18n={i18n}>{children}</LinguiI18nProvider>
);

export default I18nProvider;
