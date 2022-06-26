import React, { useEffect } from "react";
import I18nProvider from "src/components/layout/I18nProvider";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ApolloProvider from "../utils/apollo";
import { UserProvider } from "../utils/auth/useUser";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <ApolloProvider>
        <UserProvider>
            <I18nProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
              </ThemeProvider>
            </I18nProvider>
        </UserProvider>
      </ApolloProvider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async () => ({});

export default MyApp;
