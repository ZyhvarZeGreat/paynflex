import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductCard from "./ProductCard";
import { Plus } from "lucide-react";

export function AddProductModal() {
  return (
    <Dialog>
      <DialogTrigger className=" border flex  items-center border-[#E0E2E780] h-[35px] w-[118px] text-sm font-medium rounded-lg text-black hover:bg-white/90">
        <Plus className="h-4" />
        Add Product
      </DialogTrigger>
      <DialogOverlay className="bg-black/50" />
      <DialogContent className="sm:max-w-[390px] p-2 h-[754px] flex flex-col gap-8  font-inter  ">
        <ProductCard />
      </DialogContent>
    </Dialog>
  );
}
