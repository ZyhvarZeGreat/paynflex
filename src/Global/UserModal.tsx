"use client";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import UserCard from "./UserCard";

export function AddUserModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="text-white border flex px-6 py-2.5 bg-[#0040FF] hover:bg-[#0040FF]/90 items-center text-sm font-medium rounded-lg">
        Add user
      </DialogTrigger>

      <DialogOverlay className="bg-black/50" />
      <DialogContent className="sm:max-w-[390px] sm:left-[50%] p-2 h-[754px] flex flex-col gap-8 font-inter">
        <UserCard setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
