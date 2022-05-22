import type { NextPage } from "next";
import {
  Dialog,
  DialogTriggerButton,
  DialogContent,
  DialogTitle,
  DialogClose,
  styled,
  Button,
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

const HeaderSlotContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

const Container = styled("div", {
  paddingBottom: "$6",
});

const Dialogs: NextPage = () => {
  const params = useView({
    componentName: "Dialog",
    props: {
      children: {
        value:
          "<DialogTriggerButton> Click</DialogTriggerButton> <DialogContent headerSlot={<HeaderSlotContainer><DialogTitle>Title</DialogTitle><DialogClose>close</DialogClose></HeaderSlotContainer>}> <div>Content</div> <div style={{display:'flex', justifyContent: 'flex-end'}}><DialogClose asChild><Button> Save </Button></DialogClose></div> </DialogContent>",
        type: PropTypes.ReactNode,
        description: "Visible label.",
      },
    },
    scope: {
      Dialog,
      DialogContent,
      DialogTriggerButton,
      DialogClose,
      DialogTitle,
      HeaderSlotContainer,
      Button,
    },
    imports: {
      "@pear-ui/core": {
        named: [
          "Dialog",
          "DialogContent",
          "DialogTriggerButton",
          "DialogClose",
          "DialogTitle",
          "Button",
        ],
      },
    },
  });
  return (
    <Container>
      <h1>Dialog</h1>
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
export default Dialogs;
