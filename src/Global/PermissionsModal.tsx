import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Settings } from "lucide-react";
import PermissionsCard from "./PermissionCard";

export function AddPermissionModal() {
  return (
    <Dialog>
      <DialogTrigger className="flex text-sm border p-2 rounded-lg border-[#D2D5DA] items-center gap-2">
        <Settings className="h-4 w-4" />
        Manage permissions
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px] p-2  flex flex-col gap-8  font-inter  ">
        <PermissionsCard />
      </DialogContent>
    </Dialog>
  );
}
