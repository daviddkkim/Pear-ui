import * as React from "react";
import { styled } from "../stitches.config";
import {} from "./types";
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
  maxHeight: "75vh",
  height: "100%",
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

export const Dialog = DialogPrimitive.Dialog;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = StyledTitle;
DialogContent.displayName = "DialogContent";
