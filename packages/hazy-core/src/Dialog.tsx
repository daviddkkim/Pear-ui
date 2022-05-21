import * as React from "react";
import { styled } from "../stitches.config";
import { ButtonColor, ButtonSize, ButtonTextAlignment } from "./types";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export interface DialogProps {
  children: React.ReactNode;
  headerSlot?: React.ReactNode;
}
const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "$mauveA8",
  position: "fixed",
  inset: 0,
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "$mauve1",
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "100%",
  maxWidth: "600px",
  transform: "translate(-50%, -50%)",
  border: "1px solid $mauve5",
  borderRadius: "$2",
  boxShadow: "1px 1px 10px $colors$mauveA5, 1px 1px 5px $colors$mauveA4",
  padding: "$4",
  display: "flex",
  flexDirection: "column",
  rowGap: "$4",
});

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontSize: "$4",
});

const Box = styled("div", {});

export function DialogContent({ children, headerSlot }: DialogProps) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent>
        {headerSlot && headerSlot}
        {children}
      </StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledDialogTriggerButton = styled(DialogPrimitive.Trigger, {
  all: "unset",
  transition: "all 150ms ease",
  borderRadius: "$2",
  "&:focus": {
    border: "2px solid $colors$indigo8",
    boxShadow: "0px 0px 2px $colors$indigo12",
  },
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

export interface DialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  textAlign?: ButtonTextAlignment;
  stretched?: boolean;
}

export function DialogTriggerButton({
  children,
  asChild = false,
  size = ButtonSize.medium,
  color = ButtonColor.primary,
  disabled = false,
  textAlign = ButtonTextAlignment.center,
  stretched = false,
}: DialogTriggerProps) {
  return (
    <StyledDialogTriggerButton
      size={size}
      color={color}
      disabledStyle={disabled}
      disabled={disabled}
      textAlign={textAlign}
      asChild={asChild}
      stretch={stretched}
    >
      {children}
    </StyledDialogTriggerButton>
  );
}

export const Dialog = DialogPrimitive.Dialog;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = StyledTitle;
DialogContent.displayName = "DialogContent";
