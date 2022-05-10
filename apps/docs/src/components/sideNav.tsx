import * as React from "react";
import { styled } from "@hazy/core";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const StyledList = styled("ul", {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",

  rowGap: "$2",
});

const StyledListItem = styled("li", {
  margin: 0,
  display: "flex",
  position: "relative",
  borderLeft: "2px solid transparent",
  variants: {
    state: {
      active: {
        fontWeight: "500",
        borderLeft: "3px solid $mauve12",
        background: "linear-gradient(120deg, $mauve8, $mauve5)",
        transition: "all 250ms ease",
      },
      default: {},
    },
  },
});

const StyledNav = styled("nav", {
  backgroundColor: "$mauve3",
  padding: "$4",
  width: "200px",
  display: "flex",
  flexDirection: "column",
  rowGap: "$4",
});

const StyledHeader = styled("h4", {
  paddingLeft: "$4",
});

const StyledSectionHeader = styled("h4", {
  fontWeight: "500",
  paddingLeft: "$4",
  margin: "$2 0",
});

const StyledLink = styled("a", {
  textDecoration: "none",
  color: "$mauve12",
  width: "100%",
  padding: "$1 $4",

  "&:hover": {
    backgroundColor: "$mauve6",
  },
});

export function SideNav() {
  const router = useRouter();
  const determineActive = useCallback(
    (url: string) => {
      if (router.asPath.includes("buttons")) {
        return "buttons";
      } else if (router.asPath.includes("buttonGroups")) {
        return "buttonGroups";
      } else if (router.asPath.includes("dropdowns")) {
        return "dropdowns";
      } else if (router.asPath.includes("charts")) {
        return "charts";
      }
      return "";
    },
    [router.asPath]
  );

  //just initialize with actual value rather than empty
  const [active, setActive] = useState(determineActive(router.asPath));

  /* useEffect(() => {
    const activeItem = determineActive(router.asPath);
    setActive(activeItem);
  }, [router.asPath, determineActive]); */
  return (
    <StyledNav>
      <StyledHeader>Hazy DS</StyledHeader>
      <StyledList>
        <StyledListItem state={active === "" ? "active" : "default"}>
          <StyledLink href={"/"}>Getting Started</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledSectionHeader>Components</StyledSectionHeader>
        </StyledListItem>
        <StyledListItem
          state={active.includes("buttons") ? "active" : "default"}
        >
          <StyledLink href={"/buttons"}>Button</StyledLink>
        </StyledListItem>
        <StyledListItem
          state={active.includes("buttonGroups") ? "active" : "default"}
        >
          <StyledLink href={"/buttonGroups"}>ButtonGroup</StyledLink>
        </StyledListItem>
        <StyledListItem
          state={active.includes("dropdowns") ? "active" : "default"}
        >
          <StyledLink href={"/dropdowns"}>Dropdown</StyledLink>
        </StyledListItem>
        <StyledListItem
          state={active.includes("charts") ? "active" : "default"}
        >
          <StyledLink href={"/charts"}>Chart</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
}
