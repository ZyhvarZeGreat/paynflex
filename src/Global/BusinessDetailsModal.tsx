import { format } from "date-fns";
import { BusinessData } from "@/services/business";

interface BusinessDetailsModalProps {
  business: BusinessData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BusinessDetailsModal({
  business,
  isOpen,
  onClose,
}: BusinessDetailsModalProps) {
  if (!business || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg w-[600px] max-h-[80vh] overflow-y-auto p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Business Details</h2>
        </div>

        {/* Content - keeping the existing content structure */}
        <div className="grid gap-6">
          {/* Business Image */}
          {business.images && (
            <div className="flex justify-center">
              <img
                src={business.images}
                alt={business.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Business Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Business Name
                </h3>
                <p className="mt-1 text-base font-medium text-black">
                  {business.name}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Category</h3>
                <p className="mt-1 text-base text-black">{business.category}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Address</h3>
                <p className="mt-1 text-base text-black">{business.address}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Contact Number
                </h3>
                <p className="mt-1 text-base text-black">
                  {business.phoneNumber || "Not provided"}
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="mt-1 text-base text-black">
                  {business.email || "Not provided"}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Website</h3>
                <p className="mt-1 text-base text-black">
                  {business.website ? (
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {business.website}
                    </a>
                  ) : (
                    "Not provided"
                  )}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Created At
                </h3>
                <p className="mt-1 text-base text-black">
                  {business.createdAt
                    ? format(new Date(business.createdAt), "PPP")
                    : "Not available"}
                </p>
              </div>

              {business.deleteAt && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Promotion Status
                  </h3>
                  <p className="mt-1 text-base text-black">
                    Promoted since {format(new Date(business.deleteAt), "PPP")}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Description Section */}
          <div className="col-span-full">
            <h3 className="text-sm font-medium text-gray-500">Description</h3>
            <p className="mt-1 text-base text-black whitespace-pre-wrap">
              {business.description || "No description available"}
            </p>
          </div>

          {/* Operating Hours Section */}
          {business.operatingHours && (
            <div className="col-span-full">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Operating Hours
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Object.entries(business.operatingHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="capitalize">{day}:</span>
                    <span>{hours || "Closed"}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
