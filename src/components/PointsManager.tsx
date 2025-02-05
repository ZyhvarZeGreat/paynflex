"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { updatePointSettings, PointSettingsData } from "@/services/points";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { AxiosError } from "axios";

export default function PointsManager() {
  const [points, setPoints] = useState<number>();
  const [naira, setNaira] = useState<number>();
  const [threshold, setThreshold] = useState<number>();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    points?: string;
    naira?: string;
    threshold?: string;
  }>({});

  const schema = z.object({
    points: z.number().min(1, "Points value must be greater than 0"),
    naira: z.number().min(1, "Naira value must be greater than 0"),
    threshold: z.number().min(1, "Threshold must be greater than 0"),
  });

  const handleUpdateSettings = async () => {
    const validationResult = schema.safeParse({ points, naira, threshold });
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.formErrors.fieldErrors;
      setErrors({
        points: fieldErrors.points ? fieldErrors.points[0] : undefined,
        naira: fieldErrors.naira ? fieldErrors.naira[0] : undefined,
        threshold: fieldErrors.threshold ? fieldErrors.threshold[0] : undefined,
      });
      return;
    }

    setLoading(true);
    const settingsData: PointSettingsData = {
      point: points,
      value: naira,
      threshold,
    };
    try {
      await updatePointSettings(settingsData);
      toast({
        description: "Point Value successfully",
        className: "bg-green-500 font-inter border-none text-white",
      });
      setIsOpen(false);
    } catch (error: unknown) {
      const errorMessage = (error as AxiosError).isAxiosError
        ? (error as AxiosError).response?.data || (error as Error).message
        : (error as Error).message;
      toast({
        description: `Operation Failed: ${errorMessage}`,
        className: "bg-red-500 font-inter border-none text-white",
      });
      console.error("Error updating settings:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="h-8 border-gray-100 px-6  items-center flex rounded-sm border-[0.1px] outline-black/20 text-sm  font-inter">
        Manage points
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col font-inter h-[750px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl  font-semibold">
              Manage points
            </DialogTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            Manage how points are earned and redeemed
          </p>
        </DialogHeader>
        <div className="space-y-8 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Label htmlFor="points" className="text-sm font-medium">
                Points value
              </Label>
              <Input
                id="points"
                type="number"
                className="mt-1.5 h-12"
                placeholder="Enter points value"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
              />
              {errors.points && (
                <p className="text-red-500 text-sm">{errors.points}</p>
              )}
            </div>
            <span className="mt-8">=</span>
            <div className="flex-1">
              <Label htmlFor="naira" className="text-sm font-medium">
                Value in Naira
              </Label>
              <Input
                id="naira"
                type="number"
                className="mt-1.5 h-12"
                placeholder="Enter Naira value"
                value={naira}
                onChange={(e) => setNaira(Number(e.target.value))}
              />
              {errors.naira && (
                <p className="text-red-500 text-sm">{errors.naira}</p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="threshold" className="text-sm font-medium">
              Redemption threshold
            </Label>
            <Input
              id="threshold"
              type="number"
              className="mt-1.5 h-12"
              placeholder="Minimum value for points to be withdrawn"
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
            />
            {errors.threshold && (
              <p className="text-red-500 text-sm">{errors.threshold}</p>
            )}
          </div>
          <Button
            className="w-full h-12"
            size="lg"
            onClick={handleUpdateSettings}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update settings"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
