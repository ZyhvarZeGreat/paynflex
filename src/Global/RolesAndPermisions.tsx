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
import { getRoles } from "@/services/role";
import { useEffect, useState } from "react";
interface Role {
  name: string;
  permissions: number;
  users: number;
}

interface RoleResponse {
  name: string;
  permissions: number;
  users: number;
}

const fetchRoles = async (): Promise<Role[]> => {
  const response = await getRoles();
  console.log(response);
  return response.data.map((role: RoleResponse) => ({
    name: role.name,
    permissions: "Full Access",
    users: 5,
  }));
};

export default function RolesAndPermissions() {
  const [roles, setRoles] = useState<Role[]>([]);
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
