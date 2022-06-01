import * as React from "react";
import { styled, SideNav, SideNavList, SideNavListItem } from "@pear-ui/core";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

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
  borderRadius: "$2",
});

export function SideNavBar() {
  const router = useRouter();
  const determineActive = useCallback(
    (url: string) => {
      if (router.asPath.includes("buttons")) {
        return "buttons";
      } else if (router.asPath.includes("buttonGroups")) {
        return "buttonGroups";
      } else if (router.asPath.includes("sidenav")) {
        return "sidenav";
      } else if (router.asPath.includes("stacks")) {
        return "stacks";
      } else if (router.asPath.includes("selects")) {
        return "selects";
      } else if (router.asPath.includes("dialogs")) {
        return "dialogs";
      } else if (router.asPath.includes("dropdowns")) {
        return "dropdowns";
      }
      return "";
    },
    [router.asPath]
  );

  //just initialize with actual value rather than empty
  const [active, setActive] = useState(determineActive(router.asPath));
  useEffect(() => {
    setActive(determineActive(router.asPath));
  }, [determineActive, router.asPath]);

  const Title = () => {
    return (
      <TitleContainer>
        <span style={{ fontSize: "24px", lineHeight: "28px" }}>🍐</span>
        <StyledTitle>Pear-ui</StyledTitle>
      </TitleContainer>
    );
  };

  return (
    <SideNav title={<Title />}>
      <SideNavListItem
        to="/"
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          router.push("/");
        }}
        active={active === "" ? true : false}
      >
        {" "}
        Getting Started
      </SideNavListItem>
      <SideNavList title="Components">
        <SideNavListItem
          to="/button"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            router.push("/buttons");
          }}
          active={active.includes("buttons") ? true : false}
        >
          {" "}
          Button
        </SideNavListItem>{" "}
        <SideNavListItem
          to="/buttonGroups"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            router.push("/buttonGroups");
          }}
          active={active.includes("buttonGroups") ? true : false}
        >
          {" "}
          ButtonGroup
        </SideNavListItem>
        <SideNavListItem
          to="/sidenav"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            router.push("/sidenav");
          }}
          active={active.includes("sidenav") ? true : false}
        >
          {" "}
          SideNav
        </SideNavListItem>
        <SideNavListItem
          to="/selects"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            router.push("/selects");
          }}
          active={active.includes("selects") ? true : false}
        >
          {" "}
          Selects
        </SideNavListItem>
        <SideNavListItem
          to="/dialogs"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            router.push("/dialogs");
          }}
          active={active.includes("dialogs") ? true : false}
        >
          {" "}
          Dialog
        </SideNavListItem>
        <SideNavListItem
          to="/dropdowns"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            router.push("/dropdowns");
          }}
          active={active.includes("dropdowns") ? true : false}
        >
          {" "}
          Dropdown
        </SideNavListItem>
        <SideNavListItem
          to="/stacks"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            router.push("/stacks");
          }}
          active={active.includes("stacks") ? true : false}
        >
          {" "}
          Stack
        </SideNavListItem>
      </SideNavList>
    </SideNav>
  );
}
