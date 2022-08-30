import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sozing: border-box;
}
`;

const theme = {
  media: {
    phone: "(max-width: 425px)",
    tablet: "(man-width: 769px) and (min-width: 425px)",
  },
  colors: {
    primary: "green",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global></Global>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
