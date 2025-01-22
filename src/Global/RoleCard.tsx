"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function RoleCard() {
  const [formData, setFormData] = useState({
    name: "",
    price: "0.00",
    allowUserAmount: false,
    category: "",
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full h-full  bg-white rounded-lg ">
      <div className="p-4 space-y-6">
        <div>
          <h1 className="text-xl font-bold">Add role</h1>
          <p className="text-base text-muted-foreground">Add a role</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label className="text-base font-medium">
              What do you want to call this role?
            </Label>
            <Input
              placeholder="e.g 5MB Data for 2 weeks"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <Button type="submit" className="w-full h-12 m text-base">
            Add product
          </Button>
        </form>
      </div>
    </div>
  );
}
