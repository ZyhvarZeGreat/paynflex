"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createRole } from "@/services/role";
import { AxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";

export default function RoleCard({ onSuccess }: { onSuccess: () => void }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createRole(formData);
      toast({
        title: "Success",
        description: "Role created successfully",
        className: "bg-green-500 text-white font-inter",
      });
      onSuccess();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast({
          title: "Error",
          description: error.message || "Failed to create role",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
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
              placeholder="Support"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 m text-base"
            disabled={loading}
          >
            {loading ? "Creating..." : "Add role"}
          </Button>
        </form>
      </div>
    </div>
  );
}
