import * as React from "react";
import { forwardRef } from "react";
import { styled } from "../stitches.config";
import { ButtonGroupDirection, ButtonGroupSpacing } from "./types";

export interface ButtonGroupProps {
  children: React.ReactNode;
  spacing?: ButtonGroupSpacing;
  direction?: ButtonGroupDirection;
}
const ButtonGroupContainer = styled("div", {
  display: "flex",
  columnGap: "$2",
  variants: {
    spacing: {
      none: {
        columnGap: 0,
        "& button": {
          borderRadius: 0,
          borderRight: "none",
        },
        ":first-child": {
          borderRadius: "$2 0 0 $2",
        },
        ":last-child": {
          borderRadius: "0 $2 $2 0",
          borderRight: "1px solid $mauve10",
        },
      },
      small: {
        columnGap: "$1",
      },
      medium: {
        columnGap: "$2",
      },
      large: {
        columnGap: "$3",
      },
    },
    direction: {
      default: {},
      reverse: {
        flexDirection: "row-reverse",
      },
    },
  },
});
export const ButtonGroup = forwardRef<HTMLButtonElement, ButtonGroupProps>(
  (
    {
      children,
      spacing = ButtonGroupSpacing.medium,
      direction = ButtonGroupDirection.default,
    },
    ref
  ) => {
    return (
      <ButtonGroupContainer spacing={spacing} direction={direction}>
        {children}
      </ButtonGroupContainer>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";
