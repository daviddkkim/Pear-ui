import * as React from "react";
import { styled } from "../stitches.config";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export interface DropdownMenuContentProps {
  children: React.ReactNode;
  style: React.CSSProperties;
}

export const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Content ref={forwardedRef} {...props}>
      {children}
      <DropdownMenuPrimitive.Arrow />
    </DropdownMenuPrimitive.Content>
  );
});

DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;
