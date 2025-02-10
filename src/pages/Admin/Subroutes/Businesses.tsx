/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { AddBusinessModal } from "@/Global/BusinessModal";
import { useEffect, useState } from "react";
import { getAllBusinesses, BusinessData } from "@/services/business";

import { DeleteBusinessDialog } from "@/Global/DeleteBusinessDialog";
import { EditBusinessDialog } from "@/Global/EditBusinessDialog";
import { BusinessDetailsModal } from "@/Global/BusinessDetailsModal";
import { deleteBusiness, updateBusiness } from "@/services/business";
import { useToast } from "@/hooks/use-toast";
import { CategoryResponseData, getCategories } from "@/services/category";

export default function Businesses() {
  const { toast } = useToast();
  const [businesses, setBusinesses] = useState<BusinessData[]>([]);
  const [promotedBusinesses, setPromotedBusinesses] = useState<BusinessData[]>(
    []
  );
  const [activeTab, setActiveTab] = useState<"all" | "promoted">("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessData | null>(
    null
  );
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [categories, setCategories] = useState<CategoryResponseData[]>();
  const [searchTerm, setSearchTerm] = useState("");
  const [updatedBusinessData, setUpdatedBusinessData] = useState<
    Partial<BusinessData>
  >({});

  const totalPages = Math.ceil(businesses.length / itemsPerPage);

  const getCurrentBusinesses = () => {
    console.log(updatedBusinessData);
    const currentBusinesses =
      activeTab === "all" ? businesses : promotedBusinesses;

    // Filter businesses based on search term
    const filteredBusinesses = currentBusinesses.filter((business) => {
      return (
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredBusinesses.slice(startIndex, endIndex);
  };

  const fetchBusinesses = async () => {
    try {
      setIsLoading(true);
      const businesses = await getAllBusinesses();
      const categories = await getCategories();
      console.log("Business Data", businesses.data);
      console.log("Categories", categories);
      setCategories(categories);
      // Separate businesses into regular and promoted
      const promoted = businesses.data.filter(
        (business: BusinessData) => business?.deleteAt
      );

      setBusinesses(businesses.data);
      setPromotedBusinesses(promoted);
    } catch (err: unknown) {
      console.log(err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch businesses"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const metrics = [
    {
      title: "All businesses",
      value: businesses.length,
      fill: "#EAF4FC",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_38245)">
            <path
              d="M18.0025 4.94938L10.3165 0.0916406C10.1232 -0.0305469 9.8768 -0.0305469 9.68356 0.0916406L1.99743 4.94938C1.7745 5.09023 1.67161 5.36152 1.74489 5.6148C1.81821 5.86812 2.05016 6.04242 2.31387 6.04242H17.6861C17.9498 6.04242 18.1817 5.86812 18.255 5.6148C18.3284 5.36152 18.2254 5.09023 18.0025 4.94938Z"
              fill="#8CBCFF"
            />
            <path
              d="M16.6753 6.39648H14.6139C14.2868 6.39648 14.0216 6.66168 14.0216 6.98883V15.6644C14.0216 15.9916 14.2868 16.2568 14.6139 16.2568H16.6753C17.0025 16.2568 17.2677 15.9916 17.2677 15.6644V6.98883C17.2677 6.66168 17.0025 6.39648 16.6753 6.39648Z"
              fill="#8CBCFF"
            />
            <path
              d="M11.0307 6.39648H8.96927C8.64212 6.39648 8.37692 6.66168 8.37692 6.98883V15.6644C8.37692 15.9916 8.64212 16.2568 8.96927 16.2568H11.0307C11.3578 16.2568 11.623 15.9916 11.623 15.6644V6.98883C11.6231 6.66168 11.3579 6.39648 11.0307 6.39648Z"
              fill="#8CBCFF"
            />
            <path
              d="M5.34558 6.39648H3.28418C2.95703 6.39648 2.69183 6.66168 2.69183 6.98883V15.6644C2.69183 15.9916 2.95703 16.2568 3.28418 16.2568H5.34558C5.67273 16.2568 5.93793 15.9916 5.93793 15.6644V6.98883C5.93793 6.66168 5.67269 6.39648 5.34558 6.39648Z"
              fill="#8CBCFF"
            />
            <path
              d="M5.34555 6.39648H4.31485V16.2571H5.34555C5.67254 16.2571 5.9379 15.9917 5.9379 15.6647V6.98883C5.9379 6.66184 5.67251 6.39648 5.34555 6.39648Z"
              fill="#6AA9FF"
            />
            <path
              d="M18.7845 4.85742H1.2155C0.607332 4.85742 0.112488 5.35223 0.112488 5.96043V7.09438C0.112488 7.70254 0.607292 8.19738 1.2155 8.19738H18.7845C19.3927 8.19738 19.8876 7.70258 19.8876 7.09438V5.96043C19.8875 5.35219 19.3927 4.85742 18.7845 4.85742Z"
              fill="#2682FF"
            />
            <path
              d="M17.6861 14.5039H2.31384C1.98669 14.5039 1.7215 14.7691 1.7215 15.0963V17.2515C1.7215 17.5787 1.98669 17.8439 2.31384 17.8439H17.686C18.0132 17.8439 18.2784 17.5787 18.2784 17.2515V15.0963C18.2784 14.7691 18.0132 14.5039 17.6861 14.5039Z"
              fill="#2682FF"
            />
            <path
              d="M19.2952 16.6602H0.704801C0.377653 16.6602 0.112457 16.9254 0.112457 17.2525V19.4078C0.112457 19.7349 0.377653 20.0001 0.704801 20.0001H19.2952C19.6223 20.0001 19.8875 19.7349 19.8875 19.4078V17.2525C19.8875 16.9254 19.6223 16.6602 19.2952 16.6602Z"
              fill="#0051BF"
            />
            <path
              d="M18.255 5.61504C18.1819 5.86816 17.9497 6.0427 17.6859 6.0427H10V0C10.1098 0 10.2196 0.0303906 10.3163 0.0916016L17.8577 4.85801L18.0026 4.94961C18.2253 5.09023 18.3284 5.36152 18.255 5.61504Z"
              fill="#6AA9FF"
            />
            <path
              d="M16.6753 6.39648H15.6447V16.2571H16.6753C17.0023 16.2571 17.2677 15.9917 17.2677 15.6647V6.98883C17.2677 6.66184 17.0023 6.39648 16.6753 6.39648Z"
              fill="#6AA9FF"
            />
            <path
              d="M11.0307 6.39648H10V16.2571H11.0307C11.3577 16.2571 11.623 15.9917 11.623 15.6647V6.98883C11.623 6.66184 11.3577 6.39648 11.0307 6.39648Z"
              fill="#6AA9FF"
            />
            <path
              d="M19.8875 5.96133V7.09508C19.8875 7.7032 19.3927 8.19805 18.7845 8.19805H10V4.8584H18.7845C19.3927 4.8584 19.8875 5.3532 19.8875 5.96133Z"
              fill="#046EFF"
            />
            <path
              d="M18.2782 15.0972V17.2526C18.2782 17.5796 18.0133 17.8449 17.6859 17.8449H10V14.5049H17.6859C18.0133 14.5049 18.2782 14.7702 18.2782 15.0972Z"
              fill="#046EFF"
            />
            <path
              d="M19.8875 17.2525V19.4079C19.8875 19.7348 19.6225 20.0002 19.2951 20.0002H10V16.6602H19.2951C19.6225 16.6602 19.8875 16.9251 19.8875 17.2525Z"
              fill="#00347B"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_38245">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      increase: "75%",
    },
    {
      title: "Promotions",
      value: promotedBusinesses.length,
      fill: "#E7F5E2",
      icon: (
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
      ),
      increase: "75%",
    },
  ];
  console.log(error);

  // Add handlers for business operations
  const handleDelete = async (businessId: string) => {
    try {
      await deleteBusiness(businessId);
      await fetchBusinesses(); // Refresh the list
      toast({
        description: "Business deleted successfully",
        className: "bg-green-500 border-none text-white",
      });
    } catch (error) {
      toast({
        description: "Failed to delete business",
        className: "bg-red-500 border-none text-white",
      });
    }
    setIsDeleteDialogOpen(false);
    setSelectedBusiness(null);
  };

  const handleEdit = async (
    businessId: string,
    updatedData: Partial<BusinessData>
  ) => {
    setUpdatedBusinessData(updatedData);
    try {
      await updateBusiness(businessId, updatedData);
      await fetchBusinesses(); // Refresh the list
      toast({
        description: "Business updated successfully",
        className: "bg-green-500 border-none text-white",
      });
    } catch (error) {
      toast({
        description: "Failed to update business",
        className: "bg-red-500 border-none text-white",
      });
    }
  };

  return (
    <div className="min-h-screen  ">
      {/* Metrics Grid */}
      <div className="mb-8 grid border px-6 lg:h-[250px] border-y-[#E0E2E780]  sm:grid-cols-2 lg:grid-cols-2">
        {metrics.map((metric, index) => (
          <Card
            key={index}
            className={`shadow-none col-span-2 border-t-none border-l-none lg:col-span-1 rounded-none  border-t-0 flex justify-center flex-col p-6 ${
              index === 0 ? "lg:border-r   border-l-black" : ""
            } border-[#E0E2E780]`}
          >
            <div className="mb-4 flex items-center justify-between">
              <div
                className={`rounded-lg  h-[40px] w-[40px] justify-center flex items-center `}
                style={{ backgroundColor: metric.fill }}
              >
                {metric.icon}
              </div>
              <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-500">
                ↑{metric.increase}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-black  font-semibold ">
                {metric.title}
              </div>
              <div className="text-xl font-bold text-black">{metric.value}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Navigation and Actions */}
      <div className="mb-6  px-6 flex flex-col justify-between gap-4 sm:flex-row">
        <div className="flex gap-4 text-sm">
          <button
            className={`border-b-2 pb-2 font-medium ${
              activeTab === "all"
                ? "border-white text-black"
                : "border-transparent text-black hover:border-zinc-700"
            }`}
            onClick={() => setActiveTab("all")}
          >
            ALL BUSINESSES
          </button>
          <button
            className={`border-b-2 pb-2 font-medium ${
              activeTab === "promoted"
                ? "border-white text-black"
                : "border-transparent text-black hover:border-zinc-700"
            }`}
            onClick={() => setActiveTab("promoted")}
          >
            PROMOTIONS
          </button>
        </div>
        <div className="flex gap-3 items-center">
          {/* Add search input */}
          <input
            type="text"
            placeholder="Search businesses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 border border-[#E0E2E7] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
          />
          <AddBusinessModal onBusinessAdded={fetchBusinesses} />
        </div>
      </div>

      {/* Table */}
      <div className="border-y border-[#E0E2E780]">
        <div className="h-[400px] overflow-y-auto">
          <Table>
            <TableHeader className="sticky top-0 bg-white">
              <TableRow className="border-[#E0E2E780] px-6 hover:bg-transparent">
                <TableHead className="text-black  font-semibold ">
                  Name of business
                </TableHead>
                <TableHead className="text-black  font-semibold ">
                  Address
                </TableHead>
                <TableHead className="text-black  font-semibold ">
                  Category
                </TableHead>
                <TableHead className="text-black  font-semibold ">
                  Image
                </TableHead>
                <TableHead className="text-right text-black  font-semibold ">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
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
                      <span className="ml-2">Loading businesses...</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-red-500">
                    {error}
                  </TableCell>
                </TableRow>
              ) : businesses.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    No businesses found
                  </TableCell>
                </TableRow>
              ) : (
                getCurrentBusinesses().map((business, i) => (
                  <TableRow
                    key={i}
                    className="border-[#E0E2E780] hover:bg-zinc-800/50"
                  >
                    <TableCell className="font-medium text-black">
                      {business.name}
                    </TableCell>
                    <TableCell className="text-black font-light">
                      {business.address}
                    </TableCell>
                    <TableCell className="text-black font-light">
                      {business.category.name}
                    </TableCell>
                    <TableCell className="text-black font-light">
                      {business.images ? (
                        <img
                          className="w-8 h-8 rounded-full"
                          src={business.images}
                          alt="Business Image"
                        />
                      ) : (
                        "No image"
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 text-black font-light"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className=" font-inter w-[180px]"
                        >
                          <DropdownMenuItem
                            onClick={() => {
                              setSelectedBusiness(business);
                              setIsEditDialogOpen(true);
                            }}
                            className="p-2 cursor-pointer"
                          >
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              setSelectedBusiness(business);
                              setIsDetailsModalOpen(true);
                            }}
                            className="p-2 cursor-pointer"
                          >
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600 p-2"
                            onClick={() => {
                              setSelectedBusiness(business);
                              setIsDeleteDialogOpen(true);
                            }}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      {businesses.length > 0 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            className="gap-2 text-black"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "ghost"}
                  size="sm"
                  className={
                    page === currentPage
                      ? "bg-white text-black hover:bg-white/90"
                      : "text-black font-light"
                  }
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              );
            } else if (page === currentPage - 2 || page === currentPage + 2) {
              return (
                <Button
                  key={page}
                  variant="ghost"
                  size="sm"
                  className="text-black font-light"
                  disabled
                >
                  ...
                </Button>
              );
            }
            return null;
          })}
          <Button
            variant="outline"
            className="gap-2 text-black"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      <BusinessDetailsModal
        business={selectedBusiness}
        isOpen={isDetailsModalOpen}
        onClose={() => {
          setIsDetailsModalOpen(false);
          setSelectedBusiness(null);
        }}
      />

      <EditBusinessDialog
        business={selectedBusiness}
        isOpen={isEditDialogOpen}
        onClose={() => {
          setIsEditDialogOpen(false);
          setSelectedBusiness(null);
          setUpdatedBusinessData({});
        }}
        onEdit={handleEdit}
        categories={categories}
      />

      <DeleteBusinessDialog
        business={selectedBusiness}
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedBusiness(null);
        }}
        onDelete={handleDelete}
      />
    </div>
  );
}
