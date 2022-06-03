// your-select.js
import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { styled } from "../stitches.config";
import { ButtonColor, ButtonSize } from "./types";

const StyledContent = styled(SelectPrimitive.Content, {
  backgroundColor: "$mauve1",
  border: "1px solid $border-primary",
  padding: "$2",
  borderRadius: "$2",
  ":last-child": {
    marginBottom: "1px",
  },
});

export interface SelectProps {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  dir?: "ltr" | "rtl";
  onValueChange?: (value: string) => void;
  id?: string;
}

export const SelectContent = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ children, id, ...props }, forwardedRef) => {
    return (
      <StyledContent ref={forwardedRef} {...props}>
        <SelectPrimitive.ScrollUpButton>
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton>
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </StyledContent>
    );
  }
);

SelectContent.displayName = "SelectContent";

export interface SelectTriggerProps {
  children?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  buttonColor?: ButtonColor;
  buttonSize?: ButtonSize;
}

const StyledSelectTrigger = styled(SelectPrimitive.Trigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "all 150ms ease",
  columnGap: "$2",
  borderRadius: "$2",
  boxSizing: "border-box",
  border: "1px solid transparent",
  "&:focus": {
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

export const SelectTriggerButton = React.forwardRef<
  HTMLButtonElement,
  SelectTriggerProps
>(
  (
    {
      disabled = false,
      id,
      buttonColor = ButtonColor.secondary,
      buttonSize = ButtonSize.medium,
    },
    forwardedRef
  ) => {
    return (
      <StyledSelectTrigger
        disabled={disabled}
        id={id}
        color={buttonColor}
        size={buttonSize}
        ref={forwardedRef}
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </StyledSelectTrigger>
    );
  }
);

SelectTriggerButton.displayName = "SelectTriggerButton";

const StyledItem = styled(SelectPrimitive.Item, {
  display: "flex",
  alignItems: "center",
  position: "relative",
  padding: "$1 $5",
  borderRadius: "$2",
  outline: "none",
  "&:focus-visible": {
    backgroundColor: "$background-mutedAccent",
    boxShadow: "1px 1px 1px $colors$shadow-default",
  },
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: "$5",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$text-accent-bright",
});

export interface SelectItemProps {
  children: React.ReactNode;
  value: string;
  asChild?: boolean;
  disabled?: boolean;
  textValue?: string;
}
export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledItem {...props} ref={forwardedRef}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <StyledItemIndicator>
          <CheckIcon />
        </StyledItemIndicator>
      </StyledItem>
    );
  }
);

SelectItem.displayName = "SelectItem";

export const Select = SelectPrimitive.Root;
