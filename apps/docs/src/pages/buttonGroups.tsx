import type { NextPage } from "next";
import { ButtonGroup, Button, styled, ButtonGroupSpacing } from "@hazy/core";
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

const ButtonGroups: NextPage = () => {
  const params = useView({
    componentName: "ButtonGroup",
    props: {
      children: {
        value:
          "<Button>hello</Button> <Button color='secondary'>hello</Button>",
        type: PropTypes.ReactNode,
        description: "Visible label.",
      },
      spacing: {
        value: ButtonGroupSpacing.medium,
        defaultValue: ButtonGroupSpacing.medium,
        type: PropTypes.Enum,
        options: ButtonGroupSpacing,
        description: "Defines the spacing between the buttons",
      },
    },
    scope: {
      ButtonGroup,
      Button,
      ButtonGroupSpacing,
    },
    imports: {
      "@hazy/core": {
        named: ["ButtonGroup", "Button", "ButtonGroupSpacing"],
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
export default ButtonGroups;
