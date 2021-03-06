import type { NextPage } from "next";
import Head from "next/head";

import { Button, styled } from "@pear-ui/core";
import { View, PropTypes } from "react-view";
const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
});
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>🍐 Pear-ui</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <h1>🍐 Pear-ui Documentation</h1>
          <p>Getting Started</p>
          <code> npm install @pear-ui/core</code>
        </>
      </main>
    </div>
  );
};
export default Home;
