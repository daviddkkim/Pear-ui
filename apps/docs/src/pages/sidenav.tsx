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
import { useRouter } from "next/router";

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

const TitleContainer = styled("div", {
  display: "flex",
  columnGap: "$3",
  alignItems: "center",
});

const StyledTitle = styled("h1", {
  margin: 0,
  padding: 0,
});
const ColorBox = styled("div", {
  size: "$5",
  background: "linear-gradient(100deg, $mauve12, $violet11)",
});
const Container = styled("div", {
  paddingBottom: "$6",
});

const SideNavs: NextPage = () => {
  const Title = () => {
    return (
      <TitleContainer>
        <ColorBox />
        <StyledTitle>Pear-ui</StyledTitle>
      </TitleContainer>
    );
  };

  const router = useRouter();
  const params = useView({
    componentName: "SideNav",
    props: {
      children: {
        value:
          "<SideNavList title={'Demo (Router Push)'}> <SideNavListItem onClick={(e)=> {e.preventDefault(); router.push('/buttons')}} to={'/buttons'} active icon={<StyledHomeIcon/>}>  Item1  </SideNavListItem> <SideNavListItem  onClick={(e)=> {e.preventDefault();router.push('/buttonGroups')}} to={'/buttonGroups'} icon={<StyledPieChartIcon/>}>  Item1  </SideNavListItem>  <SideNavListItem  onClick={(e)=> {e.preventDefault();router.push('/buttonGroups')}} to={'/buttonGroups'} icon={<StyledGearIcon/>}>  Item1  </SideNavListItem> <SideNavListItem to={'/buttonGroups'} indented>  Item1  </SideNavListItem></SideNavList> <SideNavList title={'Demo (Anchor Tag)'}> <SideNavListItem  to={'/buttons'} >  Item1  </SideNavListItem> <SideNavListItem  to={'/buttons'} >  Item1  </SideNavListItem>  <SideNavListItem to={'/buttonGroups'} >  Item1  </SideNavListItem> <SideNavListItem to={'/buttonGroups'}>  Item1  </SideNavListItem></SideNavList> ",
        type: PropTypes.ReactNode,
        description: "Visible label.",
      },
      title: {
        value: "<Title/>",
        type: PropTypes.ReactNode,
        description: "title",
      },
      style: {
        value: "{ position: 'absolute' }",
        type: PropTypes.Object,
        description: "style",
      },
    },
    scope: {
      SideNav,
      SideNavList,
      SideNavListItem,
      StyledHomeIcon,
      StyledPieChartIcon,
      StyledGearIcon,
      router,
      Title,
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
    <Container>
      <h1>Side Nav</h1>
      <Box
        css={{
          border: "1px solid $mauve8",
          borderRadius: "6px",
          position: "relative",
          height: "100%",
        }}
      >
        <Compiler
          {...params.compilerProps}
          minHeight={520}
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
export default SideNavs;
