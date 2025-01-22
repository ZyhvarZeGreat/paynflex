"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@/components/ui/dialog";

interface Permission {
  id: string;
  label: string;
  checked: boolean;
}

interface PermissionSection {
  title: string;
  permissions: Permission[];
}

export default function PermissionsCard() {
  const [sections, setSections] = useState<PermissionSection[]>([
    {
      title: "USERS",
      permissions: [
        { id: "view-users", label: "View users", checked: false },
        { id: "edit-users", label: "Edit users", checked: false },
        { id: "suspend-users", label: "Suspend users", checked: true },
      ],
    },
    {
      title: "TRANSACTIONS",
      permissions: [
        {
          id: "pause-transactions",
          label: "Pause transactions",
          checked: true,
        },
        { id: "view-transactions", label: "View transactions", checked: false },
        {
          id: "review-transactions",
          label: "Review transactions",
          checked: false,
        },
      ],
    },
    {
      title: "PRODUCTS",
      permissions: [
        { id: "view-products", label: "View products", checked: false },
        { id: "add-products", label: "Add products", checked: true },
        { id: "archive-products", label: "Archive products", checked: true },
        { id: "edit-products", label: "Edit products", checked: false },
        { id: "delete-products", label: "Delete products", checked: false },
      ],
    },
    {
      title: "BUSINESS",
      permissions: [
        { id: "view-business", label: "View business", checked: false },
        { id: "add-business", label: "Add business", checked: true },
        { id: "archive-business", label: "Archive business", checked: true },
        { id: "delete-business", label: "Delete business", checked: false },
      ],
    },
    {
      title: "PROMOTIONS",
      permissions: [
        { id: "view-promotion", label: "View promotion", checked: false },
        { id: "add-promotion", label: "Add promotion", checked: true },
        { id: "suspend-promotion", label: "Suspend promotion", checked: true },
        { id: "delete-promotion", label: "Delete promotion", checked: false },
      ],
    },
  ]);

  const handlePermissionChange = (
    sectionIndex: number,
    permissionIndex: number
  ) => {
    setSections((prevSections) => {
      const newSections = [...prevSections];
      newSections[sectionIndex].permissions[permissionIndex].checked =
        !newSections[sectionIndex].permissions[permissionIndex].checked;
      return newSections;
    });
  };

  const handleSave = () => {
    console.log("Saved permissions:", sections);
  };

  return (
    <div className="w-[390px] h-full bg-white rounded-lg overflow-hidden">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Manage Permissions</h1>
            <p className="text-base text-muted-foreground">Admin user</p>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-2">
              <h2 className="text-base font-medium text-muted-foreground">
                {section.title}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {section.permissions.map((permission, permissionIndex) => (
                  <div
                    key={permission.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      className="accent-primary  data-[state=checked]:bg-[#2563EB] h-5 w-5 border-[#D2D5DA]"
                      id={permission.id}
                      checked={permission.checked}
                      onCheckedChange={() =>
                        handlePermissionChange(sectionIndex, permissionIndex)
                      }
                    />
                    <Label
                      htmlFor={permission.id}
                      className="text-base font-normal text-gray-600"
                    >
                      {permission.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <DialogClose
          onClick={handleSave}
          className="w-full bg-[#2563EB] text-white rounded-md h-12 text-base"
        >
          Save changes
        </DialogClose>
      </div>
    </div>
  );
}
