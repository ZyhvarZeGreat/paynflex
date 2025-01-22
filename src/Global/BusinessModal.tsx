"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";

interface BusinessFormData {
  name: string;
  description: string;
  address: string;
  category: string;
  images: File[];
}

export function AddBusinessModal() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BusinessFormData>({
    name: "",
    description: "",
    address: "",
    category: "",
    images: [],
  });

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages].slice(0, 6), // Limit to 6 images
      }));
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-[#E0E2E780]  px-4 text-sm font-medium rounded-lg text-black hover:bg-white/90">
        Add business
      </DialogTrigger>

      <DialogOverlay className="bg-black/50" />
      <DialogContent className="sm:max-w-[390px] h-[724px] flex flex-col gap-8  font-inter  ">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl  font-bold">
                Add business
              </DialogTitle>
              <DialogDescription className="text-base text-[#454C5C] text-muted-foreground">
                Explore businesses around you
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4  ">
          {step === 1 ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-base font-medium text-[#464A4F]">
                  Name of business
                </label>
                <Input
                  placeholder="Business name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium text-[#464A4F]">
                  Business Description
                </label>
                <Textarea
                  placeholder="Describe your business"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium text-[#464A4F]">
                  Business Address
                </label>
                <Textarea
                  placeholder="Where is this business located?"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium text-[#464A4F]">
                  Category
                </label>
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
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="button"
                className="w-full text-lg py-6"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-base font-medium text-[#464A4F]">
                  Add images
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="relative aspect-video cursor-pointer rounded-lg border-2 border-dashed bg-muted hover:bg-muted/80"
                    >
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleImageUpload}
                      />
                      <div className="flex h-full items-center justify-center">
                        {formData.images[index] ? (
                          <img
                            src={
                              URL.createObjectURL(formData.images[index]) ||
                              "/placeholder.svg"
                            }
                            alt={`Upload ${index + 1}`}
                            className="h-full w-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="text-muted-foreground">
                            <svg
                              className="mx-auto h-8 w-8"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect
                                width="18"
                                height="18"
                                x="3"
                                y="3"
                                rx="2"
                                ry="2"
                              />
                              <circle cx="8.5" cy="8.5" r="1.5" />
                              <path d="m21 15-5-5L5 21" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 text-lg py-6"
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button type="submit" className="flex-1 text-lg py-6">
                  Add business
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
