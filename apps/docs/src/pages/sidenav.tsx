import type { NextPage } from "next";
import {
  SideNav,
  SideNavList,
  SideNavListItem,
  styled,
  Button,
} from "@pear-ui/core";
import { HomeIcon, PieChartIcon, GearIcon } from "@radix-ui/react-icons";
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

const StyledHomeIcon = styled(HomeIcon, {
  size: "$4",
});
const StyledPieChartIcon = styled(PieChartIcon, {
  size: "$4",
});

const StyledGearIcon = styled(GearIcon, {
  size: "$4",
});
const SideNavs: NextPage = () => {
  const params = useView({
    componentName: "SideNav",
    props: {
      children: {
        value:
          "<SideNavList title={'Demo'}> <SideNavListItem to={'/buttons'} active icon={<StyledHomeIcon/>}>  Item1  </SideNavListItem> <SideNavListItem to={'/buttonGroups'} icon={<StyledPieChartIcon/>}>  Item1  </SideNavListItem>  <SideNavListItem to={'/buttonGroups'} icon={<StyledGearIcon/>}>  Item1  </SideNavListItem> <SideNavListItem to={'/buttonGroups'} indented>  Item1  </SideNavListItem></SideNavList> <SideNavList title={'Demo'}> <SideNavListItem to={'/buttons'} >  Item1  </SideNavListItem> <SideNavListItem to={'/buttonGroups'} >  Item1  </SideNavListItem>  <SideNavListItem to={'/buttonGroups'} >  Item1  </SideNavListItem> <SideNavListItem to={'/buttonGroups'}>  Item1  </SideNavListItem></SideNavList> ",
        type: PropTypes.ReactNode,
        description: "Visible label.",
      },
    },
    scope: {
      SideNav,
      SideNavList,
      SideNavListItem,
      StyledHomeIcon,
      StyledPieChartIcon,
      StyledGearIcon,
    },
    imports: {
      "@pear-ui/core": {
        named: [
          "SideNav, SideNavList, SideNavListItem, StyledHomeIcon, StyledPieChartIcon,StyledGearIcon",
        ],
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
