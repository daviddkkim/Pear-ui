import * as React from "react";
import { styled } from "../stitches.config";
import {} from "./types";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export interface DialogProps {
  children: React.ReactNode;
}
const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "$mauveA8",
  position: "fixed",
  inset: 0,
});

const StyledContent = styled(DialogPrimitive.Content, {
    
})
export function DialogContent({ children }: DialogProps) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <DialogPrimitive.Content>
        {children}
        <DialogPrimitive.Close>close</DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export const Dialog = DialogPrimitive.Dialog;
export const DialogTrigger = DialogPrimitive.Trigger;

DialogContent.displayName = "DialogContent";
