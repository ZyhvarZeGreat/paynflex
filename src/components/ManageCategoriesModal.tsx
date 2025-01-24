import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";

interface Category {
  id: string;
  name: string;
}

interface ManageCategoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ManageCategoriesModal({
  isOpen,
  onClose,
}: ManageCategoriesModalProps) {
  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "Breakfast" },
    { id: "2", name: "Lunch" },
    { id: "3", name: "Dinner" },
  ]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([
        ...categories,
        { id: Date.now().toString(), name: newCategory.trim() },
      ]);
      setNewCategory("");
    }
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddCategory();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Manage Categories</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {/* Add new category input */}
          <div className="flex items-center gap-2 mb-4">
            <Input
              placeholder="Add new category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleAddCategory}
              disabled={!newCategory.trim()}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Categories list */}
          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between p-2 rounded-md border"
              >
                <span>{category.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
