import { BusinessData } from "@/services/business";

interface DeleteBusinessDialogProps {
  business: BusinessData | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (businessId: string) => void;
}

export function DeleteBusinessDialog({
  business,
  isOpen,
  onClose,
  onDelete,
}: DeleteBusinessDialogProps) {
  if (!business || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg w-[400px] p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Are you sure?</h2>
          <p className="text-gray-500 mt-2">
            This will permanently delete "{business.name}". This action cannot
            be undone.
          </p>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => onDelete(business?._id || "")}
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
