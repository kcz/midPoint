import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";

import { store, history } from "./store";
import PublicRoutes from "./router";
import Boot from "./boot";

import themes from "settings/themes";
import { themeConfig } from "settings";
import AppLocale from "components/languageProvider";
import config, { getCurrentLanguage } from "pages/LanguageSwitcher/config";

import MainHolder from "./Main.style";

const currentAppLocale =
  AppLocale[getCurrentLanguage(config.defaultLanguage || "english").locale];

const Main = () => (
  <LocaleProvider locale={currentAppLocale.antd}>
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <MainHolder>
          <Provider store={store}>
            <PublicRoutes history={history} />
          </Provider>
        </MainHolder>
      </ThemeProvider>
    </IntlProvider>
  </LocaleProvider>
);
Boot()
  .then(() => Main())
  .catch(error => console.error(error));

export default Main;
export { AppLocale };
