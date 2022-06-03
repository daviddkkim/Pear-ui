import * as React from "react";
import { styled } from "../stitches.config";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import { ButtonSize, ButtonColor, ButtonTextAlignment } from "./types";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const StyledDropdownTriggerButton = styled(DropdownMenuPrimitive.Trigger, {
  all: "unset",
  transition: "all 150ms ease",
  borderRadius: "$2",
  boxSizing: "border-box",
  "&:focus-visible": {
    boxShadow:
      "0 0 0 2px $colors$border-focus-base, 0 0 0 3px $colors$border-focus-additive",
  },
  variants: {
    color: {
      primary: {
        background: "$background-accent-neutral",
        border: "1px solid $colors$border-accent",
        color: "$text-contrast",
        boxShadow: "1px 1px 1px $colors$shadow-default",
        "&:hover": {
          background: "$background-accent-hover",
        },
      },
      secondary: {
        backgroundColor: "$background-primary-neutral",
        border: "1px solid $border-contrast",
        color: "$text-accent",
        boxShadow: "1px 1px 1px $colors$shadow-default",
        "&:hover": {
          backgroundColor: "$background-primary-hover",
        },
      },
      ghost: {
        backgroundColor: "$background-ghost-neutral",
        border: "1px solid transparent",
        color: "$text-accent",
        "&:hover": {
          backgroundColor: "$background-ghost-hover",
        },
      },
    },
    textAlign: {
      start: {
        textAlign: "start",
      },
      end: {
        textAlign: "end",
      },
      center: {
        textAlign: "center",
      },
    },
    stretch: {
      true: {
        width: "100%",
      },
      false: {
        width: "fit-content",
      },
    },
    size: {
      small: {
        padding: "0 $2",
        fontSize: "$2",
        height: "$5",
      },
      medium: {
        padding: "0 $3",
        fontSize: "$3",
        height: "$6",
      },
      large: {
        padding: "0 $4",
        fontSize: "$4",
        height: "calc( $6 + $2)",
      },
    },
    disabledStyle: {
      true: {
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: "0.55",
      },
      false: {
        cursor: "pointer",

        "&:active": {
          transform: "scale(1.1)",
        },
      },
    },
  },
});

export interface DropdownTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  textAlign?: ButtonTextAlignment;
  stretched?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const DropdownTriggerButton = forwardRef<
  HTMLButtonElement,
  DropdownTriggerProps
>(
  (
    {
      onClick,
      children,
      asChild = false,
      size = ButtonSize.medium,
      color = ButtonColor.primary,
      disabled = false,
      textAlign = ButtonTextAlignment.center,
      stretched = false,
    },
    ref
  ) => {
    return (
      <StyledDropdownTriggerButton
        size={size}
        color={color}
        disabledStyle={disabled}
        disabled={disabled}
        textAlign={textAlign}
        asChild={asChild}
        stretch={stretched}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </StyledDropdownTriggerButton>
    );
  }
);

DropdownTriggerButton.displayName = "DropdownTriggerButton";

export interface DropdownMenuContentProps {
  children: React.ReactNode;
  style: React.CSSProperties;
}

const StyledDropdownMenuContent = styled(DropdownMenuPrimitive.Content, {
  border: "1px solid $border-primary",
  background: "$background-primary-neutral",
  padding: "$3",
  borderRadius: "$2",
  boxShadow:
    "1px 1px 10px $colors$shadow-default 1px 1px 5px $colors$shadow-secondary",
  display: "flex",
  flexDirection: "column",
  rowGap: "$2",
});

export const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledDropdownMenuContent ref={forwardedRef} {...props} sideOffset={6}>
      {children}
    </StyledDropdownMenuContent>
  );
});

DropdownMenuContent.displayName = "DropdownMenuContent";

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  backgroundColor: "$border-primary",
  height: "1px",
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  fontSize: "$3",
  margin: "0 $2",
  color: "$text-secondary",
});

const StyledGroup = styled(DropdownMenuPrimitive.Group, {
  display: "flex",
  flexDirection: "column",
  rowGap: "$2",
});

const StyledItem = styled(DropdownMenuPrimitive.Item, {
  outline: "none",
  borderRadius: "$2",
  padding: "$1 $2",
  "&:focus": {
    backgroundColor: "$background-mutedAccent",
    boxShadow: "1px 1px 1px $colors$shadow-default",
  },
  "&:hover": {
    cursor: "pointer",
  },
});

export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuGroup = StyledGroup;
export const DropdownMenuSeparator = StyledSeparator;
