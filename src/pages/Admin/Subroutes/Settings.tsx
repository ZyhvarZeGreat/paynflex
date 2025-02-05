"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Search } from "lucide-react";
import ActivityLog from "@/Global/Activity";
import RolesAndPermissions from "@/Global/RolesAndPermisions";
import { ProfileCard } from "@/Global/Profile";
import { PasswordSettings } from "@/Global/Password";
import { useEffect, useState } from "react";
import { EditProfile } from "@/Global/EditProfile";
import { AddUserModal } from "@/Global/UserModal";
import { getUsersList, updateUsers, deleteUsersList } from "@/services/user";
import { toast } from "@/hooks/use-toast";

export default function Settings() {
  interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    roleId: {
      _id: string;
      name: string;
    };
    createdAt: string;
  }

  const [scene, setScene] = useState<"profile" | "edit-profile">("profile");
  const [usersList, setUsersList] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [viewingUser, setViewingUser] = useState<User | null>(null);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsersList = async () => {
      console.log(isLoading);
      setIsLoading(true);
      try {
        const response = await getUsersList();
        console.log(response);
        setUsersList(response.data);
      } catch (err) {
        console.error("Error fetching users list:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsersList();
  }, []);

  const filteredUsers = usersList.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Main Content */}
      <main className="">
        <Tabs defaultValue="users">
          <TabsList className="mb-6 w-full items-start flex justify-start bg-white rounded-none">
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="roles">Roles and Permissions</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Users</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search users"
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <AddUserModal />
              </div>
            </div>

            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Date added</TableHead>
                    <TableHead>Last seen</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="overflow-scroll">
                  {filteredUsers.map((user, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-normal">
                        {user?.firstName} {user?.lastName}
                      </TableCell>
                      <TableCell>{user?.roleId?.name}</TableCell>
                      <TableCell>
                        {new Date(user?.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {new Date(user?.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            className="font-inter"
                            align="end"
                          >
                            <DropdownMenuItem
                              onClick={() => {
                                setEditingUser(user);
                              }}
                            >
                              Edit User
                            </DropdownMenuItem>

                            <DropdownMenuItem
                              onClick={() => setViewingUser(user)}
                            >
                              View details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                setUserToDelete(user);
                              }}
                            >
                              Delete User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="activity" className="space-y-6 p-6">
            <ActivityLog />
          </TabsContent>
          <TabsContent value="roles" className="space-y-6 p-6">
            <RolesAndPermissions />
          </TabsContent>
          <TabsContent value="password" className="space-y-6 p-6">
            <PasswordSettings />
          </TabsContent>
          <TabsContent value="personal" className="space-y-6 p-6">
            {scene === "profile" ? (
              <ProfileCard scene={scene} setScene={setScene} />
            ) : (
              <EditProfile scene={scene} setScene={setScene} />
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setEditingUser(null)}
          />
          <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Edit User</h2>
              <button
                onClick={() => setEditingUser(null)}
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    value={editingUser.firstName}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        firstName: e.target.value,
                      })
                    }
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    value={editingUser.lastName}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        lastName: e.target.value,
                      })
                    }
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={editingUser.email}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, email: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setEditingUser(null)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    setIsSubmitting(true);
                    try {
                      await updateUsers(editingUser._id, {
                        firstName: editingUser.firstName,
                        lastName: editingUser.lastName,
                        email: editingUser.email,
                      });
                      toast({
                        title: "Success",
                        description: "User updated successfully",
                        className: "bg-green-500 text-white font-inter text-sm",
                      });
                      getUsersList();
                      setEditingUser(null);
                    } catch (error) {
                      console.error("Error updating user:", error);
                      toast({
                        title: "Error",
                        description: "Failed to Update User",
                        className: "bg-red-500 text-white font-inter text-sm",
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View User Modal */}
      {viewingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setViewingUser(null)}
          />
          <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">User Details</h2>
              <button
                onClick={() => setViewingUser(null)}
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    First Name
                  </p>
                  <p className="text-sm">{viewingUser.firstName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Last Name</p>
                  <p className="text-sm">{viewingUser.lastName}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-sm">{viewingUser.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Role ID</p>
                <p className="text-sm">{viewingUser._id}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Date Added</p>
                <p className="text-sm">
                  {new Date(viewingUser.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setViewingUser(null)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete User Modal */}
      {userToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => {
              setUserToDelete(null);
            }}
          />
          <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Delete User</h2>
              <button
                onClick={() => setUserToDelete(null)}
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
                Are you sure you want to delete this user? This action cannot be
                undone.
              </p>
              <p className="text-sm">
                <span className="font-medium">User: </span>
                {userToDelete.firstName} {userToDelete.lastName}
              </p>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setUserToDelete(null)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    setIsSubmitting(true);
                    try {
                      await deleteUsersList(userToDelete._id);
                      toast({
                        title: "Success",
                        description: "User deleted successfully",
                        className: "bg-green-500 text-white font-inter text-sm",
                      });
                      setUserToDelete(null);
                    } catch (error) {
                      console.error("Error deleting user:", error);
                      toast({
                        title: "Error",
                        description: "Failed to Delete User",
                        className: "bg-red-500 text-white font-inter text-sm",
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  disabled={isSubmitting}
                  className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white"
                >
                  {isSubmitting ? "Deleting..." : "Delete User"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
