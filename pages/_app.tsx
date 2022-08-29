import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const theme = {
  media: {
    phone: "(max-width: 452px)",
    tablet: "(max-width:768px) and (min-width: 452px)",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <>
    //   <ThemeProvider theme={theme}>
    //     <Global></Global>
    <Component {...pageProps} />
    /* </ThemeProvider>
    </> */
  );
}

//https://nextjs.org/docs/basic-features/fast-refresh#how-it-works read this topic

export default MyApp;
