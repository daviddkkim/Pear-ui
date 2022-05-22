import * as React from "react";
import { styled } from "../stitches.config";

/* -------------------------------------------------------------------------------------------------
 * SideNav (Root)
 * -----------------------------------------------------------------------------------------------*/
export interface SideNavProps {
  children: React.ReactNode;
  title: React.ReactNode;
  style?: React.CSSProperties;
}

const StyledNav = styled("nav", {
  minWidth: "240px",
  display: "flex",
  flexDirection: "column",
  rowGap: "$3",
  backgroundColor: "$mauve3",
  borderRight: "1px solid $mauve5",
  padding: "$6 $4",
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  boxSizing: "border-box",
});

const StyledTitle = styled("div", {
  marginBottom: "$2",
  padding: "0 $4",
});

export function SideNav({ children, style, title }: SideNavProps) {
  return (
    <StyledNav
      role="menu"
      aria-orientation="vertical"
      aria-label="Sidebar"
      style={style}
    >
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledNav>
  );
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
  all: "unset",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: "$2",
  padding: 0,
  margin: 0,
});

const StyledListHeader = styled("h4", {
  margin: 0,
  padding: "$2 $4",
  fontWeight: 400,
  color: "$mauve10",
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
  to: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: any;
  active?: boolean;
  tabIndex?: number;
  indented?: boolean;
}
const StyledNavlistitem = styled("li", {
  all: "unset",
  width: "100%",
});

const NavLink = styled("a", {
  all: "unset",
  display: "flex",
  padding: "$1 $4",
  backgroundColor: "inherit",
  border: "1px solid transparent",
  color: "$mauve11",
  transition: "all 150ms ease",
  borderRadius: "$2",
  fontWeight: "500",
  "&:hover": {
    backgroundColor: "$mauve5",
    boxShadow: "1px 1px 1px $colors$mauveA5",
    svg: {
      color: "$mauve12",
    },
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 2px $colors$indigo8",
  },
  variants: {
    state: {
      active: {
        color: "$mauve12",
      },
      default: {},
    },
  },
});

const ContentContainer = styled("div", {
  display: "flex",
  columnGap: "$3",
  alignItems: "center",
  justifyContent: "center",
});

export function SideNavListItem({
  children,
  style,
  onClick,
  to,
  tabIndex,
  active = false,
  icon,
  indented = false,
}: SidenavListItemProps) {
  return (
    <StyledNavlistitem style={style}>
      <NavLink
        onClick={onClick}
        href={to}
        tabIndex={tabIndex}
        state={active ? "active" : "default"}
      >
        <ContentContainer>
          {icon ? (
            icon
          ) : indented ? (
            <div style={{ width: "20px" }}></div>
          ) : null}
          <span>{children}</span>
        </ContentContainer>
      </NavLink>
    </StyledNavlistitem>
  );
}

SideNavListItem.displayName = "SideNavListItem";
