import { styled } from "@hazy/core";
import { useIsomorphicLayoutEffect } from "@hazy/utils";
import { SideNav } from "../components/sideNav";
import { globalCss } from "@hazy/core";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";

const globalStyles = globalCss({
  html: {
    overflowX: "hidden",
  },

  body: {
    margin: 0,
    backgroundColor: "$mauve1",
  },

  "body, button": {
    fontFamily: "$untitled",
  },

  svg: { display: "block" },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  "::selection": {
    backgroundColor: "$violet5",
  },
});

const Container = styled("div", {
  display: "flex",
  minHeight: "100vh",
  columnGap: "$6",
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
    <Container>
      <SideNav></SideNav>
      <Component {...pageProps} />
    </Container>
  );
}
export default MyApp;
