"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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

interface Role {
  name: string;
  permissions: number;
  users: number;
}

const roles: Role[] = [
  { name: "Admin", permissions: 5, users: 1 },
  { name: "Manager", permissions: 8, users: 3 },
  { name: "Tech Lead", permissions: 12, users: 2 },
  { name: "Customer Support", permissions: 4, users: 8 },
  { name: "Developer", permissions: 5, users: 3 },
  { name: "Operations", permissions: 8, users: 4 },
];

export default function RolesAndPermissions() {
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
                      className="font-inter  text-lg w-[200px] flex items-start justify-center flex-col h-[130px]"
                      align="end"
                    >
                      <DropdownMenuItem>Edit role</DropdownMenuItem>
                      <DropdownMenuSeparator className="w-full" />
                      <DropdownMenuItem>Manage permissions</DropdownMenuItem>
                      <DropdownMenuSeparator className="w-full" />
                      <DropdownMenuItem>View users</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
