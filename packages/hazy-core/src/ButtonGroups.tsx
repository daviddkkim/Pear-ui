import * as React from "react";
import { styled } from "../stitches.config";

export interface ButtonGroupProps {
  children: React.ReactNode;
  segmented?: boolean;
  spacing?: "small" | "medium" | "large";
}
const ButtonGroupContainer = styled("div", {
  display: "flex",
  columnGap: "$2",
  variants: {
    spacing: {
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
    segmented: {
      true: {
        columnGap: 0,
        "& button": {
          borderRadius: 0,
        },
        ":first-child": {
          borderRadius: "6px 0 0 6px",
        },
        ":last-child": {
          borderRadius: "0 6px 6px 0",
        },
      },
      false: {},
    },
  },
});
export function ButtonGroup({
  children,
  segmented = false,
  spacing = "medium",
}: ButtonGroupProps) {
  return (
    <ButtonGroupContainer spacing={spacing} segmented={segmented}>
      {children}
    </ButtonGroupContainer>
  );
}

ButtonGroup.displayName = "ButtonGroup";
