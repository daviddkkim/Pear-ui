import * as React from "react";
import { ButtonSize } from "./types";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: React.CSSProperties;
  size?: ButtonSize;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
