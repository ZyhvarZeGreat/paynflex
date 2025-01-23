"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createProduct, ProductData } from "@/services/product";
import { toast } from "@/hooks/use-toast";
export default function ProductCard({
  wait,
  setOpen,
  onProductAdded,
}: {
  wait: () => Promise<void>;
  setOpen: (open: boolean) => void;
  onProductAdded?: () => void;
}) {
  const [formData, setFormData] = useState<ProductData>({
    name: "",
    price: 0,
    category: "DATA",
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size <= 1024 * 1024) {
        // 1MB limit
        setFormData((prev) => ({ ...prev, image: file }));
      } else {
        alert("File size must be less than 1MB");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createProduct(formData);
      toast({
        description: "Product added successfully",
        className: "bg-green-500 border-none text-white font-inter text-lg",
      });

      // Reset form
      setFormData({
        name: "",
        price: 0,
        category: "DATA",
        image: null,
      });

      // Call the callback function if provided
      if (onProductAdded) {
        onProductAdded();
      }
      await wait();
      setOpen(false);
    } catch (err) {
      toast({
        description:
          err instanceof Error ? err.message : "Failed to add product",
        className: "bg-red-500 border-none text-white font-inter text-lg",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full  bg-white rounded-lg ">
      <div className="p-4 space-y-6">
        <div>
          <h1 className="text-xl font-bold">Add product</h1>
          <p className="text-base text-muted-foreground">
            Enter details to add a product
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label className="text-base font-medium">Product name</Label>
            <Input
              placeholder="e.g 5MB Data for 2 weeks"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-4">
            <Label className="text-base font-medium">Price</Label>
            <div className="relative">
              <Input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: Number(e.target.value) })
                }
                className="pr-16"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                NGN
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Switch />
              <Label className="text-muted-foreground">
                Allow users enter amount
              </Label>
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-base font-medium">Product category</Label>
            <Select
              value={formData.category}
              onValueChange={(
                value: "AIRTIME" | "DATA" | "CABLE" | "INTERNET"
              ) => setFormData({ ...formData, category: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DATA">Data Plans</SelectItem>
                <SelectItem value="AIRTIME">Airtime</SelectItem>
                <SelectItem value="CABLE">Cable TV</SelectItem>
                <SelectItem value="INTERNET">Internet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label className="text-base font-medium">Add image</Label>
            <div className="border-2 border-dashed rounded-lg p-6 cursor-pointer hover:bg-muted/50">
              {formData.image ? (
                <div className="mt-4 w-full flex justify-center">
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Preview"
                    className=" h-[120px] w-full rounded-lg object-contain"
                  />
                </div>
              ) : (
                <>
                  <input
                    type="file"
                    accept=".png,.jpg,.jpeg"
                    className="hidden"
                    id="image-upload"
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-4 bg-blue-50 rounded-full">
                        <Upload className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="text-center">
                        <p className="text-base">
                          Upload an image for this product
                        </p>
                        <p className="text-sm text-muted-foreground">
                          PNG, JPG • Max: 1MB
                        </p>
                      </div>
                    </div>
                  </label>
                </>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-14 text-base"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Adding product...
              </>
            ) : (
              "Add product"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
