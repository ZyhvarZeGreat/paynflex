import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BusinessData } from "@/services/business";
import { useState, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { CategoryResponseData } from "@/services/category";

interface EditBusinessDialogProps {
  business: BusinessData | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (businessId: string, updatedData: Partial<BusinessData>) => void;
  categories: CategoryResponseData[] | undefined;
}

export function EditBusinessDialog({
  business,
  isOpen,
  onClose,
  onEdit,
  categories,
}: EditBusinessDialogProps) {
  // Initialize formData with business details if available
  const [formData, setFormData] = useState<
    Partial<BusinessData & { category: { name: string } }>
  >(
    business
      ? { ...business, category: business.category || { name: "" } }
      : { category: { name: "" } }
  );

  // Update formData when business changes
  useEffect(() => {
    if (business) {
      setFormData({ ...business });
    }
  }, [business]);

  if (!business || !isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      onEdit(business?._id || "", formData);
      toast({
        description: "Business updated successfully",
        className: "bg-green-500 border-none text-white",
      });
      onClose();
    } catch (err: unknown) {
      toast({
        title: "Failed to add business",
        description: err instanceof Error ? err.message : "An error occurred",
        className: "bg-red-500 border-none text-white font-inter text-lg",
      });
    }
  };

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg w-[425px] p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Edit Business</h2>
        </div>

        {/* Form - keeping the existing form structure */}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name" // Added name attribute for input
              value={formData.name || ""}
              onChange={handleInputChange} // Use the new input change handler
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address" // Added name attribute for input
              value={formData.address || ""}
              onChange={handleInputChange} // Use the new input change handler
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select
              value={formData.category?.name || ""}
              onValueChange={(value) =>
                setFormData({ ...formData, category: { name: value } })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories?.map((category) => (
                  <SelectItem
                    key={category.name}
                    value={"67a539bc9d4ddefbb05dcfd3"}
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
