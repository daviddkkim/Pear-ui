import * as React from "react";
import { styled } from "@hazy/core";
import Link from "next/link";
const StyledList = styled("ul", {
  listStyleType: "none",
  margin: 0,
  padding: 0,
});

const StyledListItem = styled("li", {
  margin: 0,
  display: "flex",
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
  margin: 0,
  marginBottom: "$2",
});

const StyledLink = styled("a", {
  textDecoration: "none",
  color: "$mauve12",
  width: "100%",
  padding: "$2 $4",
  borderRadius: "6px",
  "&:hover": {
    backgroundColor: "$mauve6",
  },
});

export function SideNav() {
  return (
    <StyledNav>
      <StyledHeader>Hazy DS</StyledHeader>
      <StyledList>
        <StyledListItem>
          <StyledSectionHeader>Components</StyledSectionHeader>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href={"/button"}>Button</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href={"/dropdown"}>Dropdown</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href={"/chart"}>Chart</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
}
