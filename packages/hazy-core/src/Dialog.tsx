import * as React from "react";
import { styled } from "../stitches.config";
import {} from "./types";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export interface DialogProps {
  children: React.ReactNode;
}

export function DialogContent({ children }: DialogProps) {
  return <div>{children}</div>;
}

export const Dialog = DialogPrimitive.Dialog;
export const DialogTrigger = DialogPrimitive.Trigger;

DialogContent.displayName = "DialogContent";
