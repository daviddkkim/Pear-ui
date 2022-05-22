import type { NextPage } from "next";
import {
  Button,
  ButtonSize,
  ButtonColor,
  ButtonTextAlignment,
  styled,
} from "@pear-ui/core";
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

const Container = styled("div", {
  paddingBottom: "$6",
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
      stretch: {
        value: false,
        type: PropTypes.Boolean,
        description: "Indicates whether button stretches or fit to content",
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
      textAlign: {
        value: ButtonTextAlignment.center,
        defaultValue: ButtonTextAlignment.center,
        type: PropTypes.Enum,
        options: ButtonTextAlignment,
        description: "text alignment of the button",
      },
    },
    scope: {
      Button,
      ButtonSize,
    },
    imports: {
      "@pear-ui/core": {
        named: ["Button"],
      },
    },
  });
  return (
    <Container>
      {" "}
      <h1>Buttons Documentation</h1>
      <Box css={{ border: "1px solid $mauve8", borderRadius: "4px" }}>
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
    </Container>
  );
};
export default Buttons;
