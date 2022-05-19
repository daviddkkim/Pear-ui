import type { NextPage } from "next";
import { SideNav, SideNavList, SideNavListItem, styled } from "@pear-ui/core";
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

const SideNavs: NextPage = () => {
  const params = useView({
    componentName: "SideNav",
    props: {
      children: {
        value: "<SideNavList title={'Demo'}> <SideNavListItem> Item1 </SideNavListItem> <SideNavListItem> Item2 </SideNavListItem> <SideNavListItem> Item3 </SideNavListItem></SideNavList>",
        type: PropTypes.ReactNode,
        description: "Visible label.",
      },
    },
    scope: {
      SideNav,
      SideNavList,
      SideNavListItem,
    },
    imports: {
      "@pear-ui/core": {
        named: ["SideNav, SideNavList, SideNavListItem"],
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
export default SideNavs;
