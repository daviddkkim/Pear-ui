import {
  darkTheme,
  orangeTheme,
  indigoTheme,
  grassTheme,
  goldTheme,
  styled,
} from "@pear-ui/core";
import { SideNavBar } from "../components/sideNavBar";
import { globalCss } from "@pear-ui/core";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const globalStyles = globalCss({
  html: {
    overflow: "hidden",
  },

  body: {
    margin: 0,
    backgroundColor: "$mauve1",
  },

  "body, button": {
    fontFamily: "$mono",
  },

  svg: { display: "block" },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  "::selection": {
    backgroundColor: "$violet5",
  },
});

const Container = styled("div", {
  display: "flex",
  height: "100vh",
  columnGap: "$6",
  paddingLeft: "240px",
  overflow: "scroll",
});

const Box = styled("div", {
  maxWidth: "720px",
  width: "100%",
  marginLeft: "$8",
  marginRight: "auto",
  height: "100%",
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{
        light: "light-theme",
        dark: darkTheme.className,
        orange: orangeTheme.className,
        gold: goldTheme.className,
        grass: grassTheme.className,
        indigo: indigoTheme.className,
      }}
      defaultTheme="light"
    >
      <Container>
        <SideNavBar></SideNavBar>
        <Box>
          <Component {...pageProps} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default MyApp;
