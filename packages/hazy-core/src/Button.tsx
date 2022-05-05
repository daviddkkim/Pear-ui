import * as React from "react";
import { ButtonSize } from "./types";
import { styled } from "../stitches.config";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: React.CSSProperties;
  size?: ButtonSize;
}

const StyledButton = styled("button", {
  backgroundColor: "$mauve1",
});

export function Button(props: ButtonProps) {
  return (
    <StyledButton
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      {props.children}
    </StyledButton>
  );
}

Button.displayName = "Button";
