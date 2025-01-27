"use client";

import { useState, useEffect } from "react";

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
import { BusinessData, createBusiness } from "@/services/business";
import { toast } from "@/hooks/use-toast";
import { CategoryResponseData, getCategories } from "@/services/category";

export function AddBusinessModal({
  onBusinessAdded,
}: {
  onBusinessAdded?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<CategoryResponseData[]>([]);
  const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BusinessData>({
    name: "",
    description: "",
    address: "",
    category: "",
    image: null,
    deleteAt: new Date(),
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        toast({
          description: err instanceof Error ? err.message : "An error occurred",
          className: "bg-red-500 border-none text-white font-inter text-lg",
        });
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "deleteAt" ? new Date(value) : value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({
        ...prev,
        image: e.target.files![0],
      }));
    }
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleAddBusiness = async () => {
    setIsLoading(true);
    try {
      await createBusiness(formData);
      toast({
        description: "Business added successfully",
        className: "bg-green-500 border-none text-white font-inter text-lg",
      });

      // Reset form
      setFormData({
        name: "",
        description: "",
        address: "",
        category: "",
        image: null,
        deleteAt: new Date(),
      });
      setStep(1);

      // Call the callback function if provided
      if (onBusinessAdded) {
        onBusinessAdded();
      }
      await wait();
      setOpen(false);
    } catch (err: unknown) {
      toast({
        title: "Failed to add business",
        description: err instanceof Error ? err.message : "An error occurred",
        className: "bg-red-500 border-none text-white font-inter text-lg",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    handleAddBusiness();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-[#E0E2E780] h-10 px-4 py-2   text-sm font-medium rounded-lg text-black hover:bg-white/90">
        Add business
      </DialogTrigger>

      <DialogOverlay className="bg-black/50" />
      <DialogContent className="sm:max-w-[390px] h-[744px] flex flex-col gap-8  font-inter  ">
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
                  name="name"
                  placeholder="Business name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium text-[#464A4F]">
                  Business Description
                </label>
                <Textarea
                  name="description"
                  placeholder="Describe your business"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium text-[#464A4F]">
                  Business Address
                </label>
                <Textarea
                  name="address"
                  placeholder="Where is this business located?"
                  value={formData.address}
                  onChange={handleChange}
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
                    {categories.map((category) => (
                      <SelectItem
                        key={category.name}
                        value={category.name.toLowerCase()}
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium text-[#464A4F]">
                  Expiry Window (Optional)
                </label>
                <Input
                  type="datetime-local"
                  name="deleteAt"
                  value={formData?.deleteAt?.toISOString().slice(0, 16)}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="button"
                className="w-full text-lg py-6"
                onClick={handleNext}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
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
                    Processing...
                  </>
                ) : (
                  "Next"
                )}
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-base font-medium text-[#464A4F]">
                  Add image
                </label>
                <div className="relative aspect-video cursor-pointer rounded-lg border-2 border-dashed bg-muted hover:bg-muted/80">
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleImageUpload}
                  />
                  <div className="flex h-full items-center justify-center">
                    {formData.image ? (
                      <img
                        src={URL.createObjectURL(formData.image)}
                        alt="Upload"
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
                <Button
                  type="submit"
                  className="flex-1 text-lg py-6"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
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
                      Adding business...
                    </>
                  ) : (
                    "Add business"
                  )}
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
