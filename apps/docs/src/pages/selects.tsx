import type { NextPage } from "next";
import {
  Select,
  SelectItem,
  SelectTriggerButton,
  SelectContent,
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
    componentName: "Select",
    props: {
      children: {
        value:
          "<SelectTriggerButton></SelectTriggerButton><SelectContent><SelectItem value={'1'}>1</SelectItem> <SelectItem value={'2'} >2</SelectItem> <SelectItem value={'3'}>3</SelectItem></SelectContent>",
        type: PropTypes.ReactNode,
        description: "Visible label.",
      },
      defaultValue: {
        value: "1",
        type: PropTypes.String,
        description: "default value selected for uncontrolled selects",
      },
      onValueChange: {
        value: "(value)=>{alert(value)}",
        type: PropTypes.Function,
        description: "function to trigger on value change",
      },
    },
    scope: {
      Select,
      SelectItem,
      SelectTriggerButton,
      SelectContent,
    },
    imports: {
      "@pear-ui/core": {
        named: ["Select", "SelectItem", "SelectTriggerButton", "SelectContent"],
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
