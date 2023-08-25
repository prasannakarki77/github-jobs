"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PostDescriptionDialogProps {
  description: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function PostDescriptionDialog({
  description,
  open,
  setOpen,
}: PostDescriptionDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[1000px] max-h-[80vh] overflow-y-scroll   ">
        <DialogHeader>
          <DialogTitle>Job Description</DialogTitle>
          <DialogDescription>Preview</DialogDescription>
        </DialogHeader>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </DialogContent>
    </Dialog>
  );
}
