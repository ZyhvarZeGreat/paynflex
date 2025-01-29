"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import { AddRoleModal } from "./RolesModal";
import { AddPermissionModal } from "./PermissionsModal";
import { getRoles, updateRole, deleteRole } from "@/services/role";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { updateUsers, deleteUsersList } from "@/services/user";

interface Role {
  name: string;
  permissions: number;
  users: number;
  id: string;
}

interface RoleResponse {
  name: string;
  permissions: number;
  users: number;
  _id: string;
}

const fetchRoles = async (): Promise<Role[]> => {
  const response = await getRoles();
  console.log(response);
  return response.data.map((role: RoleResponse) => ({
    name: role.name,
    permissions: "Full Access",
    users: 5,
    id: role._id,
  }));
};

export default function RolesAndPermissions() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [viewingRole, setViewingRole] = useState<Role | null>(null);
  const [roleToDelete, setRoleToDelete] = useState<Role | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchRoles().then((roles) => setRoles(roles));
  }, []);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Roles and Permissions</h1>
        <div className="flex items-center gap-3">
          <AddPermissionModal />
          <AddRoleModal />
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Role</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead>Users</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.name}>
                <TableCell className="font-medium">{role.name}</TableCell>
                <TableCell>{role.permissions}</TableCell>
                <TableCell>{role.users}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="font-inter text-lg w-[200px] flex items-start justify-center flex-col h-[130px]"
                      align="end"
                    >
                      <DropdownMenuItem onClick={() => setEditingRole(role)}>
                        Edit role
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setViewingRole(role)}>
                        View details
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={async () => {
                          try {
                            await updateUsers(role.id, {
                              /* user data to update */
                            });
                            toast({
                              title: "Success",
                              description: "User updated successfully",
                              className:
                                "bg-green-500 text-white font-inter text-sm",
                            });
                          } catch (error) {
                            console.error("Error updating user:", error);
                            toast({
                              title: "Error",
                              description: "Failed to Update User",
                              className:
                                "bg-red-500 text-white font-inter text-sm",
                            });
                          }
                        }}
                      >
                        Update Users
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={async () => {
                          try {
                            await deleteUsersList(role.id);
                            toast({
                              title: "Success",
                              description: "User deleted successfully",
                              className:
                                "bg-green-500 text-white font-inter text-sm",
                            });
                          } catch (error) {
                            console.error("Error deleting user:", error);
                            toast({
                              title: "Error",
                              description: "Failed to Delete User",
                              className:
                                "bg-red-500 text-white font-inter text-sm",
                            });
                          }
                        }}
                        className="text-red-600"
                      >
                        Delete Users
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Edit Role Modal */}
      {editingRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setEditingRole(null)}
          />
          <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Edit Role</h2>
              <button
                onClick={() => setEditingRole(null)}
                className="rounded-full p-1 hover:bg-gray-100"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Role Name</label>
                <input
                  type="text"
                  value={editingRole.name}
                  onChange={(e) =>
                    setEditingRole({ ...editingRole, name: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Permissions</label>
                <select
                  value={editingRole.permissions}
                  onChange={(e) =>
                    setEditingRole({
                      ...editingRole,
                      permissions: Number(e.target.value),
                    })
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="Full Access">Full Access</option>
                  <option value="Limited Access">Limited Access</option>
                  <option value="Read Only">Read Only</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setEditingRole(null)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    try {
                      setIsSubmitting(true);
                      await updateRole(editingRole.id, {
                        name: editingRole.name,
                        id: editingRole.id,
                      });

                      // Show success message
                      toast({
                        title: "Success",
                        description: "Role updated successfully",
                        className: "bg-green-500 text-white font-inter text-sm",
                      });

                      // Refresh roles list
                      fetchRoles();

                      // Close modal
                      setEditingRole(null);
                    } catch (error) {
                      console.error("Error updating role:", error);
                      toast({
                        title: "Error",
                        description: "Failed to Update Role",
                        className: "bg-red-500 text-white font-inter text-sm",
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
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

      {/* View Role Modal */}
      {viewingRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setViewingRole(null)}
          />
          <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Role Details</h2>
              <button
                onClick={() => setViewingRole(null)}
                className="rounded-full p-1 hover:bg-gray-100"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Role Name</p>
                <p className="text-sm">{viewingRole.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Permissions</p>
                <p className="text-sm">{viewingRole.permissions}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Number of Users
                </p>
                <p className="text-sm">{viewingRole.users}</p>
              </div>
              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setViewingRole(null)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Role Modal */}
      {roleToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setRoleToDelete(null)}
          />
          <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Delete Role</h2>
              <button
                onClick={() => setRoleToDelete(null)}
                className="rounded-full p-1 hover:bg-gray-100"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Are you sure you want to delete this role? This action cannot be
                undone.
              </p>
              <p className="text-sm">
                <span className="font-medium">Role: </span>
                {roleToDelete.name}
              </p>
              {roleToDelete.users > 0 && (
                <p className="text-sm text-red-600">
                  Warning: This role is currently assigned to{" "}
                  {roleToDelete.users} users.
                </p>
              )}
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setRoleToDelete(null)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    try {
                      setIsSubmitting(true);
                      await deleteRole(roleToDelete.id);

                      // Show success message
                      toast({
                        title: "Success",
                        description: "Role deleted successfully",
                        className: "bg-green-500 text-white font-inter text-sm",
                      });

                      // Refresh roles list
                      fetchRoles();

                      // Close modal
                      setRoleToDelete(null);
                    } catch (error) {
                      console.error("Error deleting role:", error);
                      toast({
                        title: "Error",
                        description: "Failed to Delete Role",
                        className: "bg-red-500 text-white font-inter text-sm",
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  disabled={isSubmitting}
                  className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Deleting..." : "Delete Role"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
