import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductCard from "./ProductCard";
import { Plus } from "lucide-react";
import { useState } from "react";

export function AddProductModal({
  onProductAdded,
}: {
  onProductAdded?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="border flex items-center border-[#E0E2E780] h-10 px-4 py-2 text-sm font-medium rounded-lg text-black hover:bg-white/90">
        <Plus className="h-4" />
        Add Product
      </DialogTrigger>
      <DialogOverlay className="bg-black/50" />
      <DialogContent className="sm:max-w-[390px] p-2 h-[784px] flex flex-col gap-8 font-inter">
        <ProductCard
          wait={async () => {
            await wait();
          }}
          setOpen={setOpen}
          onProductAdded={onProductAdded}
        />
      </DialogContent>
    </Dialog>
  );
}
