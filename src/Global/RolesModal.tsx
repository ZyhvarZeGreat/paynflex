import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import RoleCard from "./RoleCard";

export function AddRoleModal() {
  return (
    <Dialog>
      <DialogTrigger className="  text-white border flex px-6 py-2.5  bg-[#0040FF] hover:bg-[#0040FF]/90 items-center  text-sm font-medium rounded-lg ">
        Add Role
      </DialogTrigger>
      <DialogOverlay className="bg-black/50" />
      <DialogContent className="sm:max-w-[400px] left-[50%] p-2 h-[354px] flex flex-col gap-8  font-inter  ">
        <RoleCard />
      </DialogContent>
    </Dialog>
  );
}
