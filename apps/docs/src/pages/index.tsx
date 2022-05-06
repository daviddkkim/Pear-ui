import { Button, styled } from "@hazy/core";
import { useIsomorphicLayoutEffect } from "@hazy/utils";
import { View, PropTypes } from "react-view";
import { SideNav } from "../components/sideNav";
import { globalCss } from "@hazy/core";

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

export default function Docs() {
  globalStyles();

  useIsomorphicLayoutEffect(() => {
    console.log("hazy docs page");
  }, []);
  return (
    <Container>
      <SideNav></SideNav>
      <div>
        <h1>hazy Documentation</h1>
        <View
          componentName="Button"
          props={{
            children: {
              value: "Hello",
              type: PropTypes.ReactNode,
              description: "Visible label.",
            },
            onClick: {
              value: '() => alert("click")',
              type: PropTypes.Function,
              description: "Function called when button is clicked.",
            },
            disabled: {
              value: false,
              type: PropTypes.Boolean,
              description: "Indicates that the button is disabled",
            },
          }}
          scope={{
            Button,
          }}
          imports={{
            "your-button-component": {
              named: ["Button"],
            },
          }}
        />
      </div>
    </Container>
  );
}
