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
import { createBusiness } from "@/services/business";
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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [deleteAt, setDeleteAt] = useState<Date>(new Date());
  const [isDeleteAtEnabled, setIsDeleteAtEnabled] = useState(true);

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
    switch (name) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "deleteAt":
        setDeleteAt(new Date(value));
        break;
      default:
        break;
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files![0]);
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
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("address", address);
      formData.append("category", "67a539bc9d4ddefbb05dcfd3");
      if (image) {
        formData.append("image", image);
      }
      formData.append("deleteAt", deleteAt.toISOString());

      console.log("Form Data", formData);
      await createBusiness(formData);

      toast({
        description: "Business added successfully",
        className: "bg-green-500 border-none text-white font-inter text-lg",
      });

      // Reset form
      setName("");
      setDescription("");
      setAddress("");
      setCategory("");
      setImage(null);
      setDeleteAt(new Date());
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
    console.log({ name, description, address, category, image, deleteAt });
    handleAddBusiness();
  };

  const handleDeleteAtToggle = () => {
    setIsDeleteAtEnabled((prev) => !prev);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-[#E0E2E780] h-10 px-4 py-2   text-sm font-medium rounded-lg text-black hover:bg-white/90">
        Add business
      </DialogTrigger>

      <DialogOverlay className="bg-black/50" />
      <DialogContent className="sm:max-w-[390px] h-[764px] flex flex-col gap-8  font-inter  ">
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
                  value={name}
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
                  value={description}
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
                  value={address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium text-[#464A4F]">
                  Category
                </label>
                <Select
                  value={category}
                  onValueChange={(value) => setCategory(value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category._id}>
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
                <div className="flex items-center">
                  <label className="mr-2">Enable Expiry:</label>
                  <input
                    type="checkbox"
                    checked={isDeleteAtEnabled}
                    onChange={handleDeleteAtToggle}
                  />
                </div>
                <Input
                  type="datetime-local"
                  name="deleteAt"
                  value={deleteAt.toISOString().slice(0, 16)}
                  onChange={handleChange}
                  required={isDeleteAtEnabled}
                  disabled={!isDeleteAtEnabled}
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
                    {image ? (
                      <img
                        src={URL.createObjectURL(image)}
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
