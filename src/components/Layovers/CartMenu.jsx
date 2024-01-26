"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const CartMenu = ({ triggerComponent, closeComponent }) => {
  return (
    <div>
      <Sheet >
        <SheetTrigger asChild>{triggerComponent()}</SheetTrigger>
        <SheetContent className="shadow-2xl ">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex">
            <div className="grid grid-cols-4 items-center gap-4">Name</div>
            <div className="grid grid-cols-4 items-center gap-4">Username</div>
          </div>
          <SheetFooter>
            <SheetClose asChild>{closeComponent()}</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartMenu;
