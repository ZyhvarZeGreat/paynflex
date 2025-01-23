"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { register, RegisterData } from "@/services/register";
import { useToast } from "@/hooks/use-toast";

export default function UserCard({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<RegisterData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    roleId: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await register({
        ...formData,
        roleId: "679173f5d2930ac4671e0f4e",
        password: "admin",
      });
      toast({
        title: "Operation successful",
        description: "User created successfully",
        className: "bg-green-500 text-white font-inter",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Operation failed",
        description: "Failed to create user",
        className: "bg-red-500 text-white font-inter",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full  bg-white rounded-lg ">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Add user</h1>
            <p className="text-base text-muted-foreground">
              Enter details to add a user
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label className="text-base font-medium text-gray-700">
              First name
            </Label>
            <Input
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-base font-medium text-gray-700">
              Last name
            </Label>
            <Input
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-base font-medium text-gray-700">Email</Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-base font-medium text-gray-700">
              Phone number
            </Label>
            <Input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base mt-24"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Add user"}
          </Button>
        </form>
      </div>
    </div>
  );
}
