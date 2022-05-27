import * as React from "react";
import { styled } from "../stitches.config";
import {
  ButtonGroupDirection,
  ButtonGroupSpacing,
  StackDirection,
  StackSpacing,
} from "./types";

export interface StackProps {
  children: React.ReactNode;
  spacing?: StackSpacing;
  direction?: StackDirection;
  style?: React.CSSProperties;
}
const StackContainer = styled("div", {
  display: "flex",
  variants: {
    spacing: {
      small: {
        rowGap: "$2",
        columnGap: "$2",
      },
      medium: {
        rowGap: "$3",
        columnGap: "$3",
      },
      large: {
        rowGap: "$4",
        columnGap: "$4",
      },
    },
    direction: {
      vertical: {
        flexDirection: "column",
      },
      horizontal: {
        flexDirection: "row",
      },
      reverseVertical: {
        flexDirection: "column-reverse",
      },
      reverseHorizontal: {
        flexDirection: "row-reverse",
      },
    },
  },
});
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      spacing = StackSpacing.medium,
      direction = StackDirection.vertical,
      style,
    },
    ref
  ) => {
    return (
      <StackContainer
        spacing={spacing}
        direction={direction}
        style={style}
        ref={ref}
      >
        {children}
      </StackContainer>
    );
  }
);

Stack.displayName = "Stack";
