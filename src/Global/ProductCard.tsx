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

export default function ProductCard() {
  const [formData, setFormData] = useState({
    name: "",
    price: "0.00",
    allowUserAmount: false,
    category: "",
    image: null as File | null,
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
                  setFormData({ ...formData, price: e.target.value })
                }
                className="pr-16"
                disabled={formData.allowUserAmount}
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                NGN
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                checked={formData.allowUserAmount}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, allowUserAmount: checked })
                }
              />
              <Label className="text-muted-foreground">
                Allow users enter amount
              </Label>
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-base font-medium">Product category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({ ...formData, category: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="data">Data Plans</SelectItem>
                <SelectItem value="airtime">Airtime</SelectItem>
                <SelectItem value="cable">Cable TV</SelectItem>
                <SelectItem value="electricity">Electricity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label className="text-base font-medium">Add image</Label>
            <div className="border-2 border-dashed rounded-lg p-6 cursor-pointer hover:bg-muted/50">
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
            </div>
          </div>

          <Button type="submit" className="w-full h-14 m text-base">
            Add product
          </Button>
        </form>
      </div>
    </div>
  );
}
