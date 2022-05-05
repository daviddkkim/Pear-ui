import { Button } from "@hazy/core";
import { useIsomorphicLayoutEffect } from "@hazy/utils";
import { View, PropTypes } from "react-view";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("hazy docs page");
  }, []);
  return (
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
  );
}
