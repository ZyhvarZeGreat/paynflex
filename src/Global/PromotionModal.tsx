import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BusinessData } from "@/services/business";

const PromotionModal = ({ businesses }: { businesses: BusinessData[] }) => {
  const [isPromotionDialogOpen, setIsPromotionDialogOpen] = useState(false);
  const { toast } = useToast();

  const promotionFormSchema = z.object({
    businessId: z.string().min(1, "Please select a business"),
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters"),
    discount: z.number().min(0).max(100, "Discount must be between 0 and 100"),
  });

  type PromotionFormValues = z.infer<typeof promotionFormSchema>;

  const form = useForm<PromotionFormValues>({
    resolver: zodResolver(promotionFormSchema),
    defaultValues: {
      businessId: "",
      title: "",
      description: "",
      discount: 0,
    },
  });

  const onSubmitPromotion = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Success!",
        description: "Promotion has been created successfully.",
        duration: 1000,
        className: "bg-green-500 text-white font-inter",
      });

      setIsPromotionDialogOpen(false);
      form.reset();
    } catch {
      toast({
        title: "Error",
        description: "Failed to create promotion. Please try again.",
        duration: 1000,
        className: "bg-red-500 text-white font-inter",
      });
    }
  };
  return (
    <Dialog
      open={isPromotionDialogOpen}
      onOpenChange={setIsPromotionDialogOpen}
    >
      <DialogTrigger className="cursor-pointer" asChild>
        <div className="text-black border text-sm border-black rounded-md h-10 px-4 py-2 font-medium">
          Promote business
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-inter">
        <DialogHeader>
          <DialogTitle>Promote Business</DialogTitle>
          <DialogDescription>
            Create a promotion for your selected business. This will be visible
            to all users.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitPromotion)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="businessId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option value="">Select a business</option>
                      {businesses.map((business) => (
                        <option key={business.name} value={business.name}>
                          {business.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount %</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      min={0}
                      max={100}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsPromotionDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {form.formState.isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
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
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  "Create Promotion"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionModal;
