import type { NextPage } from "next";

import { Button, styled } from "@hazy/core";
import { View, PropTypes } from "react-view";

const Home: NextPage = () => {
  return (
    <div>
      <h1>hazy Documentation</h1>
      <p>Getting Started</p>
      <code> npm install @hazy/core</code>
    </div>
  );
};
export default Home;
