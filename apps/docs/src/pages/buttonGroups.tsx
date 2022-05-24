import type { NextPage } from "next";
import {
  ButtonGroup,
  Button,
  styled,
  ButtonGroupSpacing,
  ButtonGroupDirection,
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
      direction: {
        value: ButtonGroupDirection.default,
        defaultValue: ButtonGroupDirection.default,
        type: PropTypes.Enum,
        options: ButtonGroupDirection,
        description: "defines the flex direction of the buttons",
      },
    },
    scope: {
      ButtonGroup,
      Button,
      ButtonGroupSpacing,
    },
    imports: {
      "@pear-ui/core": {
        named: ["ButtonGroup", "Button", "ButtonGroupSpacing"],
      },
    },
  });
  return (
    <Container>
      <h1>Button Groups Documentation</h1>
      <Box css={{ border: "1px solid $mauve8", borderRadius: "$2" }}>
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
export default ButtonGroups;
