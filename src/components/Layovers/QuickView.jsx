"use client";
import useMediaQuery from "@/utils/useMediaQuery";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function QuickView({
  dialogTriggerComponent,
  data,
  dialogCloseComponent,
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (!isDesktop)
    return (
      <Drawer>
        <DrawerTrigger asChild>{dialogTriggerComponent()}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>{dialogCloseComponent()}</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  return (
    <Dialog>
      <DialogTrigger asChild>{dialogTriggerComponent()}</DialogTrigger>
      <DialogContent className="sm:max-w-[60vw] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div
          className="product-description-html-dev font-GothamLight text-base"
          dangerouslySetInnerHTML={{ __html: data?.html }}
        />

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>{dialogCloseComponent()}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
