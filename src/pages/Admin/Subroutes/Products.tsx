"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MoreVertical, Building } from "lucide-react";
// import Image from "next/image"
import { AddProductModal } from "@/Global/ProductsModal";
import { getProducts, ProductData } from "@/services/product";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import {
  getCategories,
  CategoryResponseData,
  createCategory,
  deleteCategory,
  updateCategory,
} from "@/services/category";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

export default function ProductDashboard() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [categories, setCategories] = useState<CategoryResponseData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newCategory, setNewCategory] = useState("");

  const [editingCategory, setEditingCategory] =
    useState<CategoryResponseData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await getProducts();
      console.log(response.data);
      setProducts(response.data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      console.log(response);
      setCategories(response);
    } catch (error) {
      const axiosError = error as AxiosError;
      setError(axiosError.message || "Failed to fetch categories");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await Promise.all([fetchProducts(), fetchCategories()]);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddCategory = async () => {
    if (!newCategory.trim()) {
      toast({
        title: "Error",
        description: "Please enter a category name",
        className: "bg-red-500 text-sm font-inter text-white",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await createCategory({
        name: newCategory,
      });

      await fetchCategories(); // Refresh categories
      toast({
        title: "Success",
        description: "Category created successfully",
        className: "bg-green-500 text-sm font-inter text-white",
      });

      // Reset form and close dialog
      setNewCategory("");
      setIsDialogOpen(false);
    } catch (error) {
      const axiosError = error as AxiosError;
      toast({
        title: "Error",
        description: axiosError.message || "Failed to create category",
        className: "bg-red-500 text-sm font-inter text-white",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateCategory = async () => {
    if (!editingCategory) return;

    try {
      setIsSubmitting(true);
      await updateCategory(editingCategory._id, { name: editingCategory.name });

      // Refresh the categories list
      fetchCategories();

      // Close the modal and reset state
      setEditingCategory(null);
      toast({
        title: "Success",
        description: "Category updated successfully",
        className: "bg-green-500 text-sm font-inter text-white",
      });
    } catch (err: unknown) {
      toast({
        title: "Failed to add category",
        description: err instanceof Error ? err.message : "An error occurred",
        className: "bg-red-500 border-none text-white font-inter text-lg",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteCategory = async (categoryId: string) => {
    setIsSubmitting(true);
    try {
      await deleteCategory(categoryId);
      await fetchCategories(); // Refresh categories
      toast({
        title: "Success",
        description: "Category deleted successfully",
        className: "bg-green-500 text-sm font-inter text-white",
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      toast({
        title: "Error",
        description: axiosError.message || "Failed to delete category",
        className: "bg-red-500 text-sm font-inter text-white",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-12  min-h-screen ">
      <div className=" col-span-12 lg:col-span-8 p-6">
        {/* Stats Grid */}
        <div className="mb-8 h-[200px]  place-content-stretch border-y border-y-[#E0E2E780] grid gap-4 sm:grid-cols-2">
          <div className=" px-6 flex justify-center flex-col h-full border-r  border-r-[#E0E2E780]">
            <div className="mb-4">
              <div
                className={`rounded-lg bg-[#EAF4FC] h-[40px] w-[40px] justify-center flex items-center `}
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0977 10.5859H15.2383C17.8672 10.5859 20 12.7187 20 15.3477C20 16.4062 19.1406 17.2656 18.082 17.2656H7.25781C6.19922 17.2656 5.33984 16.4062 5.33984 15.3477C5.33984 12.7148 7.46875 10.5859 10.0977 10.5859Z"
                    fill="#046EFF"
                  />
                  <path
                    d="M12.668 9.22656C15.013 9.22656 16.9141 7.32552 16.9141 4.98047C16.9141 2.63542 15.013 0.734375 12.668 0.734375C10.3229 0.734375 8.42188 2.63542 8.42188 4.98047C8.42188 7.32552 10.3229 9.22656 12.668 9.22656Z"
                    fill="#046EFF"
                  />
                  <path
                    d="M4.76172 10.5859H9.90234C12.5312 10.5859 14.6641 12.7187 14.6641 15.3477C14.6641 16.4062 13.8047 17.2656 12.7461 17.2656H1.91797C0.859375 17.2617 0 16.4062 0 15.3437C0 12.7148 2.13281 10.5859 4.76172 10.5859Z"
                    fill="#00347B"
                  />
                  <path
                    d="M7.33203 9.22656C9.67708 9.22656 11.5781 7.32552 11.5781 4.98047C11.5781 2.63542 9.67708 0.734375 7.33203 0.734375C4.98698 0.734375 3.08594 2.63542 3.08594 4.98047C3.08594 7.32552 4.98698 9.22656 7.33203 9.22656Z"
                    fill="#00347B"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-black">Products</div>
              <div className="text-xl font-bold text-black">
                {products.length}
              </div>
            </div>
          </div>
          <div className=" px-6 flex justify-center flex-col">
            <div className="mb-4">
              <div
                className={`rounded-lg bg-[#E7F5E2] h-[40px] w-[40px] justify-center flex items-center `}
              >
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_38273)">
                    <path
                      d="M3.07483 6.6875L19.9305 3.42623L21.7975 13.076L4.9419 16.3373L3.07483 6.6875Z"
                      fill="#037A01"
                    />
                    <path
                      d="M20.088 13.4062L21.7916 13.0766L19.9258 3.42871L3.0733 6.68746L3.18147 7.24663L19.2722 5.57096L20.088 13.4062Z"
                      fill="#037A01"
                    />
                    <path
                      d="M20.0881 13.4055L19.2722 5.57031L3.18152 7.24598L4.93923 16.3347L20.0881 13.4055Z"
                      fill="#106F01"
                    />
                    <path
                      d="M1.79553 7.85352L18.8743 6.0684L19.8963 15.8459L2.81751 17.6311L1.79553 7.85352Z"
                      fill="#139F01"
                    />
                    <path
                      d="M18.3312 16.0096V8.28711H1.83673L2.80886 17.6257L18.3312 16.0096Z"
                      fill="#2B8C01"
                    />
                    <path
                      d="M0.708313 8.74512H17.8729V18.5718H0.708313V8.74512Z"
                      fill="#4FD751"
                    />
                    <path
                      d="M16.2917 15.802C15.9267 15.8028 15.577 15.9484 15.3192 16.2068C15.0614 16.4652 14.9167 16.8152 14.9167 17.1802H3.66596C3.66596 16.9992 3.6303 16.8199 3.56101 16.6527C3.49172 16.4854 3.39016 16.3335 3.26213 16.2055C3.1341 16.0775 2.98212 15.976 2.81485 15.9068C2.64759 15.8375 2.46832 15.8019 2.28729 15.802V11.5125C2.46834 11.5125 2.64762 11.4768 2.81489 11.4075C2.98215 11.3382 3.13414 11.2367 3.26216 11.1087C3.39018 10.9806 3.49173 10.8286 3.56101 10.6614C3.6303 10.4941 3.66596 10.3148 3.66596 10.1338H14.9167C14.9165 10.4988 15.0613 10.849 15.319 11.1075C15.5768 11.366 15.9266 11.5116 16.2917 11.5125V15.802Z"
                      fill="#94F47C"
                    />
                    <path
                      d="M9.29017 15.7258C10.4323 15.7258 11.3582 14.8 11.3582 13.6578C11.3582 12.5157 10.4323 11.5898 9.29017 11.5898C8.14804 11.5898 7.22217 12.5157 7.22217 13.6578C7.22217 14.8 8.14804 15.7258 9.29017 15.7258Z"
                      fill="#4FD751"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_38273">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0.25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-black">Promotions</div>
              <div className="text-xl font-bold text-black">0</div>
            </div>
          </div>
        </div>

        {/* Add Product Button */}
        <div className="mb-6 flex justify-end">
          <AddProductModal onProductAdded={fetchProducts} />
        </div>

        {/* Products Grid */}
        <div className="grid border border-[#E0E2E780] rounded-xl grid-cols-1  md:grid-cols-2">
          {/* Recently Added Section */}
          <div className="   ">
            <div className=" pl-4 py-4 border-b border-r border-r-[#E0E2E780] border-b-[#E0E2E780] flex items-center justify-between">
              <h2 className="font-semibold text-black">RECENTLY ADDED</h2>
              <Button variant="ghost" size="icon" className="text-black">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4 overflow-y-scroll px-4">
              {isLoading ? (
                <div>
                  {" "}
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-black"
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
                    <span className="ml-2">Loading products...</span>
                  </div>
                </div>
              ) : error ? (
                <div>Error: {error}</div>
              ) : (
                products.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white">
                        <img
                          src={product.images}
                          alt={product.name}
                          className="rounded-full h-8 w-8"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm flex items-center gap-2 text-gray-600">
                          <p>₦343,850.00</p>
                          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                          <div className="flex gap-1 items-center">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.43334 13.6673C6.26668 13.6673 6.10001 13.634 5.93334 13.5673C5.76668 13.5007 5.61668 13.4007 5.48334 13.2673L0.716677 8.50065C0.583343 8.36732 0.486121 8.2201 0.42501 8.05898C0.363899 7.89787 0.333344 7.73398 0.333344 7.56732C0.333344 7.40065 0.363899 7.23398 0.42501 7.06732C0.486121 6.90065 0.583343 6.75065 0.716677 6.61732L6.58334 0.733984C6.70557 0.611762 6.85001 0.51454 7.01668 0.442318C7.18334 0.370095 7.35557 0.333984 7.53334 0.333984H12.3167C12.6833 0.333984 12.9972 0.46454 13.2583 0.725651C13.5195 0.986762 13.65 1.30065 13.65 1.66732V6.45065C13.65 6.62843 13.6167 6.79787 13.55 6.95898C13.4833 7.1201 13.3889 7.26176 13.2667 7.38398L7.38334 13.2673C7.25001 13.4007 7.10001 13.5007 6.93334 13.5673C6.76668 13.634 6.60001 13.6673 6.43334 13.6673ZM6.43334 12.334L12.3167 6.43398V1.66732H7.55001L1.66668 7.56732L6.43334 12.334ZM10.65 4.33398C10.9278 4.33398 11.1639 4.23676 11.3583 4.04232C11.5528 3.84787 11.65 3.61176 11.65 3.33398C11.65 3.05621 11.5528 2.8201 11.3583 2.62565C11.1639 2.43121 10.9278 2.33398 10.65 2.33398C10.3722 2.33398 10.1361 2.43121 9.94168 2.62565C9.74723 2.8201 9.65001 3.05621 9.65001 3.33398C9.65001 3.61176 9.74723 3.84787 9.94168 4.04232C10.1361 4.23676 10.3722 4.33398 10.65 4.33398Z"
                                fill="#181D27"
                                fill-opacity="0.45"
                              />
                            </svg>

                            <p>23,560</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      ₦{product.price}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Trending Items Section */}
          <div className=" border-r  border-r-[#E0E2E780]  ">
            <div className="  px-4 py-4   border-b   border-b-[#E0E2E780] flex items-center justify-between">
              <h2 className="font-semibold text-black">TRENDING ITEMS</h2>
              <Button variant="ghost" size="icon" className="text-black">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4 border-l overflow-y-scroll border-l-[#E0E2E780]  px-4  ">
              {isLoading ? (
                <div>
                  {" "}
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-black"
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
                    <span className="ml-2">Loading products...</span>
                  </div>
                </div>
              ) : error ? (
                <div>Error: {error}</div>
              ) : (
                products.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white">
                        <img
                          src={product.images}
                          alt={product.name}
                          className="rounded-full h-8 w-8"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm flex items-center gap-2 text-gray-600">
                          <p>₦343,850.00</p>
                          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                          <div className="flex gap-1 items-center">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.43334 13.6673C6.26668 13.6673 6.10001 13.634 5.93334 13.5673C5.76668 13.5007 5.61668 13.4007 5.48334 13.2673L0.716677 8.50065C0.583343 8.36732 0.486121 8.2201 0.42501 8.05898C0.363899 7.89787 0.333344 7.73398 0.333344 7.56732C0.333344 7.40065 0.363899 7.23398 0.42501 7.06732C0.486121 6.90065 0.583343 6.75065 0.716677 6.61732L6.58334 0.733984C6.70557 0.611762 6.85001 0.51454 7.01668 0.442318C7.18334 0.370095 7.35557 0.333984 7.53334 0.333984H12.3167C12.6833 0.333984 12.9972 0.46454 13.2583 0.725651C13.5195 0.986762 13.65 1.30065 13.65 1.66732V6.45065C13.65 6.62843 13.6167 6.79787 13.55 6.95898C13.4833 7.1201 13.3889 7.26176 13.2667 7.38398L7.38334 13.2673C7.25001 13.4007 7.10001 13.5007 6.93334 13.5673C6.76668 13.634 6.60001 13.6673 6.43334 13.6673ZM6.43334 12.334L12.3167 6.43398V1.66732H7.55001L1.66668 7.56732L6.43334 12.334ZM10.65 4.33398C10.9278 4.33398 11.1639 4.23676 11.3583 4.04232C11.5528 3.84787 11.65 3.61176 11.65 3.33398C11.65 3.05621 11.5528 2.8201 11.3583 2.62565C11.1639 2.43121 10.9278 2.33398 10.65 2.33398C10.3722 2.33398 10.1361 2.43121 9.94168 2.62565C9.74723 2.8201 9.65001 3.05621 9.65001 3.33398C9.65001 3.61176 9.74723 3.84787 9.94168 4.04232C10.1361 4.23676 10.3722 4.33398 10.65 4.33398Z"
                                fill="#181D27"
                                fill-opacity="0.45"
                              />
                            </svg>

                            <p>23,560</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      ₦{product.price}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className=" col-span-12  lg:col-span-4 flex flex-col bg-[#F1F2F4] p-6">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger className="text-black flex rounded-lg p-2 items-center gap-2 self-end  bg-transparent border border-black/30 mb-8">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_38893)">
                <path
                  d="M3.95454 3.59127L3.77219 4.31877L3.95454 3.59127ZM6.20425 2.29241L5.48304 2.08658L6.20425 2.29241ZM2.15887 6.70147L2.69772 6.1798L2.15887 6.70147ZM2.15887 9.29921L1.62002 8.77753H1.62002L2.15887 9.29921ZM3.95454 12.4094L4.1369 13.1369L3.95454 12.4094ZM6.20425 13.7083L5.48304 13.9141L6.20425 13.7083ZM9.7956 13.7083L10.5168 13.9141L9.7956 13.7083ZM12.0453 12.4094L12.2277 11.6819L12.0453 12.4094ZM13.841 9.29921L13.3021 9.82088L13.841 9.29921ZM13.841 6.70147L13.3021 6.1798L13.841 6.70147ZM12.0453 3.59127L11.8629 2.86378L12.0453 3.59127ZM9.7956 2.29241L10.5168 2.08658L9.7956 2.29241ZM3.77219 4.31877C5.14233 4.66221 6.53781 3.85653 6.92545 2.49823L5.48304 2.08658C5.31756 2.66645 4.72182 3.0104 4.1369 2.86378L3.77219 4.31877ZM2.69772 6.1798C1.91582 5.37215 2.6818 4.04545 3.77219 4.31877L4.1369 2.86378C1.58271 2.22354 -0.211534 5.33127 1.62002 7.22314L2.69772 6.1798ZM2.69772 9.82088C3.68022 8.80602 3.68022 7.19465 2.69772 6.1798L1.62002 7.22314C2.03946 7.65639 2.03946 8.34429 1.62002 8.77753L2.69772 9.82088ZM3.77219 11.6819C2.68179 11.9552 1.91582 10.6285 2.69772 9.82088L1.62002 8.77753C-0.211535 10.6694 1.58271 13.7771 4.1369 13.1369L3.77219 11.6819ZM6.92546 13.5024C6.53781 12.1441 5.14233 11.3385 3.77219 11.6819L4.1369 13.1369C4.72182 12.9903 5.31756 13.3342 5.48304 13.9141L6.92546 13.5024ZM9.07439 13.5024C8.7659 14.5834 7.23395 14.5834 6.92546 13.5024L5.48304 13.9141C6.20568 16.4462 9.79417 16.4462 10.5168 13.9141L9.07439 13.5024ZM12.2277 11.6819C10.8575 11.3385 9.46203 12.1441 9.07439 13.5024L10.5168 13.9141C10.6823 13.3342 11.278 12.9903 11.8629 13.1369L12.2277 11.6819ZM13.3021 9.82088C14.084 10.6285 13.318 11.9552 12.2277 11.6819L11.8629 13.1369C14.4171 13.7771 16.2114 10.6694 14.3798 8.77753L13.3021 9.82088ZM13.3021 6.1798C12.3196 7.19465 12.3196 8.80602 13.3021 9.82088L14.3798 8.77753C13.9604 8.34429 13.9604 7.65639 14.3798 7.22314L13.3021 6.1798ZM12.2277 4.31877C13.318 4.04545 14.084 5.37215 13.3021 6.1798L14.3798 7.22314C16.2114 5.33127 14.4171 2.22354 11.8629 2.86378L12.2277 4.31877ZM9.07439 2.49823C9.46203 3.85653 10.8575 4.66221 12.2277 4.31877L11.8629 2.86378C11.278 3.0104 10.6823 2.66645 10.5168 2.08658L9.07439 2.49823ZM10.5168 2.08658C9.79417 -0.445528 6.20567 -0.445527 5.48304 2.08658L6.92545 2.49823C7.23395 1.41726 8.7659 1.41726 9.07439 2.49823L10.5168 2.08658ZM5.24992 8.00034C5.24992 9.51912 6.48114 10.7503 7.99992 10.7503V9.25034C7.30957 9.25034 6.74992 8.69069 6.74992 8.00034H5.24992ZM7.99992 10.7503C9.5187 10.7503 10.7499 9.51912 10.7499 8.00034H9.24992C9.24992 8.69069 8.69028 9.25034 7.99992 9.25034V10.7503ZM10.7499 8.00034C10.7499 6.48155 9.51871 5.25034 7.99992 5.25034V6.75034C8.69028 6.75034 9.24992 7.30998 9.24992 8.00034H10.7499ZM7.99992 5.25034C6.48114 5.25034 5.24992 6.48155 5.24992 8.00034H6.74992C6.74992 7.30998 7.30957 6.75034 7.99992 6.75034V5.25034Z"
                  fill="#494A4D"
                  fill-opacity="0.85"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_38893">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Manage Categories
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] font-inter lg:left-[50%]">
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Category Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Enter category name"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleAddCategory}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Adding..." : "Add Category"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Card className="">
          <div className="flex py-4 px-6 border-b border-b-[#E0E2E780] items-center justify-between">
            <h2 className="text-lg font-semibold text-black">
              Product categories
            </h2>
          </div>
          <div className="mt-4 px-6 space-y-2">
            {isLoading ? (
              <div className="flex items-center justify-center p-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
              </div>
            ) : error ? (
              <div className="text-red-500 p-4">{error}</div>
            ) : (
              categories?.map((category) => (
                <div
                  key={category._id}
                  className="flex items-center justify-between rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Building className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-black">{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#181D27A6]">4 Products</span>

                    {/* Edit Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingCategory(category)}
                      disabled={isSubmitting}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </Button>

                    {/* Delete Button with Confirmation */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="font-inter"
                          disabled={isSubmitting}
                        >
                          <svg
                            className="h-4 w-4 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="font-inter">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="font-inter">
                            Delete Category
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this category? This
                            action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteCategory(category._id)}
                            className="bg-red-600 text-white hover:bg-red-700"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>

      {editingCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setEditingCategory(null)}
          />

          {/* Modal */}
          <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Edit Category</h2>
              <button
                onClick={() => setEditingCategory(null)}
                className="rounded-full p-1 hover:bg-gray-100"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="edit-name" className="text-sm font-medium">
                  Category Name
                </label>
                <input
                  id="edit-name"
                  type="text"
                  value={editingCategory.name}
                  onChange={(e) =>
                    setEditingCategory({
                      ...editingCategory,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter category name"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setEditingCategory(null)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateCategory}
                  disabled={isSubmitting}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
