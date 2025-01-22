"use client";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";

import UserCard from "./UserCard";

export function AddUserModal() {
  return (
    <Dialog>
      <DialogTrigger className="  text-white border flex px-6 py-2.5  bg-[#0040FF] hover:bg-[#0040FF]/90 items-center  text-sm font-medium rounded-lg ">
        Add user
      </DialogTrigger>

      <DialogOverlay className="bg-black/50" />
      <DialogContent className="sm:max-w-[390px] p-2 h-[754px] flex flex-col gap-8  font-inter  ">
        <UserCard />
      </DialogContent>
    </Dialog>
  );
}
