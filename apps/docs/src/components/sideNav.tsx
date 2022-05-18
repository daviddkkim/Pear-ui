import * as React from "react";
import { styled, keyframes } from "@pear-ui/core";
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

const SlideAnimation = keyframes({
  "100%": {
    transform: "translateX(0px)",
  },
});

const StyledListItem = styled("li", {
  margin: 0,
  display: "flex",
  position: "relative",
  borderLeft: "2px solid transparent",
  "&:after": {
    content: "' '",
    position: "absolute",
    width: "100%",
    height: "100%",

    transform: "translateX(-150%)",
    transition: "all 150ms ease",
  },
  variants: {
    state: {
      active: {
        fontWeight: "500",
        transition: "all 250ms ease",
        "&:after": {
          background: "linear-gradient(120deg, $mauveA8, $mauveA5)",
          borderLeft: "3px solid $mauve12",
          animation: `${SlideAnimation} ease 150ms forwards`,
        },
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

const StyledLink = styled("div", {
  textDecoration: "none",
  color: "$mauve12",
  width: "100%",
  padding: "$1 $4",
  cursor:'pointer',
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
  useEffect(() => {
    setActive(determineActive(router.asPath));
  }, [determineActive, router.asPath]);

  return (
    <StyledNav>
      <StyledHeader>Hazy DS</StyledHeader>
      <StyledList>
        <StyledListItem state={active === "" ? "active" : "default"}>
          <StyledLink
            onClick={() => {
              router.push("/");
            }}
          >
            Getting Started
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledSectionHeader>Components</StyledSectionHeader>
        </StyledListItem>
        <StyledListItem
          state={active.includes("buttons") ? "active" : "default"}
        >
          <StyledLink
            onClick={() => {
              router.push("/buttons");
            }}
          >
            Button
          </StyledLink>
        </StyledListItem>
        <StyledListItem
          state={active.includes("buttonGroups") ? "active" : "default"}
        >
          <StyledLink
            onClick={() => {
              router.push("/buttonGroups");
            }}
          >
            ButtonGroup
          </StyledLink>
        </StyledListItem>
        <StyledListItem
          state={active.includes("dropdowns") ? "active" : "default"}
        >
          <StyledLink
            onClick={() => {
              router.push("/dropdowns");
            }}
          >
            Dropdown
          </StyledLink>
        </StyledListItem>
        <StyledListItem
          state={active.includes("charts") ? "active" : "default"}
        >
          <StyledLink
            onClick={() => {
              router.push("/charts");
            }}
          >
            Chart
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
}
