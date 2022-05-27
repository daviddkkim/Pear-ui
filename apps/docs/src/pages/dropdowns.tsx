import type { NextPage } from "next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownTriggerButton,
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

const HeaderSlotContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

const Container = styled("div", {
  paddingBottom: "$6",
});

const Dropdowns: NextPage = () => {
  const params = useView({
    componentName: "DropdownMenu",
    props: {
      children: {
        value:
          "<DropdownTriggerButton>trigger</DropdownTriggerButton><DropdownMenuContent><DropdownMenuLabel> Menu</DropdownMenuLabel><DropdownMenuGroup><DropdownMenuItem>Item 1</DropdownMenuItem><DropdownMenuItem>Item 2</DropdownMenuItem><DropdownMenuItem>Item 3</DropdownMenuItem></DropdownMenuGroup><DropdownMenuSeparator/><DropdownMenuLabel> Menu</DropdownMenuLabel><DropdownMenuGroup><DropdownMenuItem>Item 1</DropdownMenuItem><DropdownMenuItem>Item 2</DropdownMenuItem><DropdownMenuItem>Item 3</DropdownMenuItem></DropdownMenuGroup></DropdownMenuContent>",
        type: PropTypes.ReactNode,
        description: "Visible label.",
      },
    },
    scope: {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuGroup,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
      DropdownTriggerButton,
    },
    imports: {
      "@pear-ui/core": {
        named: [
          "DropdownMenu",
          "DropdownMenuContent",
          "DropdownMenuGroup",
          "DropdownMenuItem",
          "DropdownMenuLabel",
          "DropdownMenuSeparator",
          "DropdownMenuTrigger",
          "DropdownTriggerButton",
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
export default Dropdowns;
