import * as React from "react";
import { styled } from "../stitches.config";

/* -------------------------------------------------------------------------------------------------
 * SideNav (Root)
 * -----------------------------------------------------------------------------------------------*/
export interface SideNavProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StyledNav = styled("nav", {
  height: "calc(100% - 64 px)",
  width: "200px",
  display: "flex",
  rowGap: "$3",
  backgroundColor: "$mauve3",
  borderRight: "1px solid $mauve5",
  padding: "$6 $4",
});

export function SideNav({ children, style }: SideNavProps) {
  return <StyledNav style={style}>{children}</StyledNav>;
}

SideNav.displayName = "SideNav";

/* -------------------------------------------------------------------------------------------------
 * SideNavList (if its a List with a header)
 * -----------------------------------------------------------------------------------------------*/
export interface SidenavListProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
}
const StyledNavList = styled("ul", {
  height: "100%",
  width: '100%',
  display: "flex",
  flexDirection: "column",
  rowGap: "$2",
  padding: 0,
  margin: 0,
});

const StyledListHeader = styled("h4", {
  margin: 0,
  padding: "$2 $4",
});
export function SideNavList({ children, style, title }: SidenavListProps) {
  const listHeader = title ? (
    <StyledListHeader> {title} </StyledListHeader>
  ) : null;
  return (
    <StyledNavList style={style}>
      {listHeader && listHeader}
      {children}
    </StyledNavList>
  );
}

SideNavList.displayName = "SideNavList";
/* -------------------------------------------------------------------------------------------------
 * SideNavListItem
 * -----------------------------------------------------------------------------------------------*/
export interface SidenavListItemProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
const StyledNavlistitem = styled("li", {
  display: "flex",
  padding: "$2 $4",
  "&:hover" : {
    backgroundColor: '$mauve5'
  }
});
export function SideNavListItem({ children, style }: SidenavListItemProps) {
  return <StyledNavlistitem style={style}>{children}</StyledNavlistitem>;
}

SideNavListItem.displayName = "SideNavListItem";
