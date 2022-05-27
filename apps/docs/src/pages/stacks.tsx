import type { NextPage } from "next";
import {
  Stack,
  Button,
  styled,
  StackDirection,
  StackSpacing,
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

const ColoredBox = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: "62px",
  backgroundColor: "$pink6",
});

const Container = styled("div", {
  paddingBottom: "$6",
});

const Stacks: NextPage = () => {
  const params = useView({
    componentName: "Stack",
    props: {
      children: {
        value:
          "<ColoredBox>Item 1</ColoredBox> <ColoredBox>Item 2</ColoredBox> <ColoredBox>Item 3</ColoredBox>",
        type: PropTypes.ReactNode,
        description: "Visible label.",
      },
      spacing: {
        value: StackSpacing.medium,
        defaultValue: StackSpacing.medium,
        type: PropTypes.Enum,
        options: StackSpacing,
        description: "Defines the spacing between the items in the stack",
      },
      direction: {
        value: StackDirection.vertical,
        defaultValue: StackDirection.vertical,
        type: PropTypes.Enum,
        options: StackDirection,
        description: "defines the flex direction of the stack",
      },
    },
    scope: {
      Stack,
      ColoredBox,
      StackSpacing,
      StackDirection,
    },
    imports: {
      "@pear-ui/core": {
        named: ["Stack", "StackSpacing", "StackDirection"],
      },
    },
  });
  return (
    <Container>
      <h1>Stack Documentation</h1>
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
export default Stacks;
