import type { NextPage } from "next";
import { Button, ButtonSize, ButtonColor, styled } from "@hazy/core";
import {
  useView,
  Compiler,
  Knobs,
  Editor,
  Error,
  ActionButtons,
  Placeholder,
  PropTypes,
} from "react-view";

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Buttons: NextPage = () => {
  const params = useView({
    componentName: "Button",
    props: {
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
      size: {
        value: ButtonSize.medium,
        defaultValue: ButtonSize.medium,
        type: PropTypes.Enum,
        options: ButtonSize,
        description: "Defines the size of the buttons",
      },
      color: {
        value: ButtonColor.primary,
        defaultValue: ButtonColor.primary,
        type: PropTypes.Enum,
        options: ButtonColor,
        description: "Defines the color of the buttons",
      },
    },
    scope: {
      Button,
      ButtonSize,
    },
    imports: {
      "@hazy/core": {
        named: ["Button"],
      },
    },
  });
  return (
    <Box css={{ maxWidth: "720px", width: "100%" }}>
      <h1>hazy Documentation</h1>
      <Box css={{ border: "1px solid $mauve8", borderRadius: "6px" }}>
        <Compiler
          {...params.compilerProps}
          minHeight={62}
          placeholder={Placeholder}
        />
      </Box>
      <Error msg={params.errorProps.msg} isPopup />
      <Knobs {...params.knobProps} />
      <Editor {...params.editorProps} />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </Box>
  );
};
export default Buttons;