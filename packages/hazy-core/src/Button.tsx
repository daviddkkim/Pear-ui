import * as React from "react";
import { ButtonColor, ButtonSize } from "./types";
import { styled } from "../stitches.config";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: React.CSSProperties;
  size?: ButtonSize;
  color?: ButtonColor;
}

const StyledButton = styled("button", {
  transition: "all 150ms ease",
  borderRadius: "$1",
  variants: {
    color: {
      primary: {
        background: "linear-gradient(145deg, $indigo10, $mauve9)",
        border: "none",
        color: "$mauve1",
        "&:hover": {
          background: "linear-gradient(120deg, $indigo9, $mauve8)",
        },
      },
      secondary: {
        backgroundColor: "$mauve1",
        border: "1px solid $colors$mauve12",
        "&:hover": {
          backgroundColor: "$mauve4",
        },
      },
      ghost: {
        backgroundColor: "$mauve1",
        border: "1px solid transparent",
        "&:hover": {
          backgroundColor: "$mauve4",
        },
      },
    },
    size: {
      small: {
        padding: "$1 $2",
      },
      medium: {
        padding: "$2 $3",
      },
      large: {
        padding: "$3 $4",
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

export function Button({
  children,
  onClick,
  disabled = false,
  style,
  size = ButtonSize.medium,
  color = ButtonColor.primary,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      style={style}
      size={size}
      color={color}
      disabledStyle={disabled}
    >
      {children}
    </StyledButton>
  );
}

Button.displayName = "Button";
