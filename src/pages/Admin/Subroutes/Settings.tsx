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
import { useState } from "react";
import { EditProfile } from "@/Global/EditProfile";
import { AddUserModal } from "@/Global/UserModal";

const users = [
  {
    name: "Chike Opara",
    role: "Admin",
    dateAdded: "Oct 24, 2024",
    lastSeen: "Oct 24, 2024",
  },
  {
    name: "Chike Opara",
    role: "Customer support",
    dateAdded: "Oct 24, 2024",
    lastSeen: "Oct 24, 2024",
  },
  {
    name: "Chike Opara",
    role: "Developer",
    dateAdded: "Oct 24, 2024",
    lastSeen: "Oct 24, 2024",
  },
  {
    name: "Chike Opara",
    role: "Tech Lead",
    dateAdded: "Oct 24, 2024",
    lastSeen: "Oct 24, 2024",
  },
  {
    name: "Chike Opara",
    role: "IT Support",
    dateAdded: "Oct 24, 2024",
    lastSeen: "Oct 24, 2024",
  },
  {
    name: "Chike Opara",
    role: "Admin",
    dateAdded: "Oct 24, 2024",
    lastSeen: "Oct 24, 2024",
  },
];

export default function Settings() {
  const [scene, setScene] = useState<"profile" | "edit-profile">("profile");
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Main Content */}
      <main className="p-6">
        <Tabs defaultValue="users">
          <TabsList className="mb-6">
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="roles">Roles and Permissions</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Users</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Add product"
                    className="pl-8"
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
                <TableBody>
                  {users.map((user, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.dateAdded}</TableCell>
                      <TableCell>{user.lastSeen}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit user</DropdownMenuItem>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete user
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
          <TabsContent value="activity" className="space-y-6">
            <ActivityLog />
          </TabsContent>
          <TabsContent value="roles" className="space-y-6">
            <RolesAndPermissions />
          </TabsContent>
          <TabsContent value="password" className="space-y-6">
            <PasswordSettings />
          </TabsContent>
          <TabsContent value="personal" className="space-y-6">
            {scene === "profile" ? (
              <ProfileCard scene={scene} setScene={setScene} />
            ) : (
              <EditProfile scene={scene} setScene={setScene} />
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
