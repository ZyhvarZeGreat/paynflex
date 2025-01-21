"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EditProfile(props: {
  scene: "profile" | "edit-profile";
  setScene: (scene: "profile" | "edit-profile") => void;
}) {
  const { setScene } = props;
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Edit your profile</h1>
      </div>

      <div className="space-y-6">
        <div className="flex gap-8">
          <div className="w-72">
            <h2 className="text-lg font-medium">Personal information</h2>
            <p className="text-sm text-gray-500">
              Update your personal information
            </p>
          </div>
          <div className="flex-1 max-w-md space-y-4">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium">
                First name
              </label>
              <Input id="first-name" defaultValue="Chike" />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium">
                Last name
              </label>
              <Input id="last-name" defaultValue="Opara" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-72">
            <h2 className="text-lg font-medium">Contact information</h2>
            <p className="text-sm text-gray-500">
              Update your contact information
            </p>
          </div>
          <div className="flex-1 max-w-md space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                defaultValue="chike.opara@paynflex.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <Input id="phone" type="tel" defaultValue="0812 234 6776" />
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button
                onClick={() => {
                  setScene("profile");
                }}
                className="bg-[#F1F2F4]"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                className="bg-[#0F40D3]"
                onClick={() => {
                  setScene("profile");
                }}
              >
                Save changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
