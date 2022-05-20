import * as React from "react";
import { ButtonColor, ButtonSize, ButtonTextAlignment } from "./types";
import { styled } from "../stitches.config";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: React.CSSProperties;
  size?: ButtonSize;
  color?: ButtonColor;
  textAlign?: ButtonTextAlignment;
  stretch?: boolean;
}

const StyledButton = styled("button", {
  transition: "all 150ms ease",
  borderRadius: "$2",
  variants: {
    color: {
      primary: {
        background: "linear-gradient(120deg, $mauve12, $violet12)",
        border: "1px solid $colors$mauveA1",
        color: "$mauve1",
        boxShadow: "1px 1px 1px $colors$mauveA4",

        "&:hover": {
          background: "linear-gradient(120deg, $mauve12, $violet11)",
        },
      },
      secondary: {
        backgroundColor: "$mauve1",
        border: "1px solid $colors$mauve10",
        color: "$violet12",
        boxShadow: "1px 1px 1px $colors$mauveA4",
        "&:hover": {
          backgroundColor: "$mauve4",
        },
      },
      ghost: {
        backgroundColor: "$inherit",
        border: "1px solid transparent",
        color: "$violet12",
        "&:hover": {
          backgroundColor: "$mauve4",
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
        padding: "$1 $2",
        fontSize: "$2",
      },
      medium: {
        padding: "$2 $3",
        fontSize: "$3",
      },
      large: {
        padding: "$3 $4",
        fontSize: "$4",
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
  textAlign = ButtonTextAlignment.center,
  stretch = false,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      style={style}
      size={size}
      color={color}
      disabledStyle={disabled}
      textAlign={textAlign}
      stretch={stretch}
    >
      {children}
    </StyledButton>
  );
}

Button.displayName = "Button";
