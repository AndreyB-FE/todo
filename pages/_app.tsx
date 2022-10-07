import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sozing: border-box;
  font-family: sans-serif;
}
`;

const theme = {
  media: {
    phone: "(max-width: 425px)",
    tablet: "(man-width: 769px) and (min-width: 425px)",
  },
  colors: {
    iconsHover: "#eee",
    shadow: "rgba(143, 188, 255,0.5)",
    primary: "lightblue",
    primaryDark: "#599eb5",
  },
  height: {
    sides: 94,
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
