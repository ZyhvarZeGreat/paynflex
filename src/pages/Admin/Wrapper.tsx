import { Outlet, useLocation } from "react-router";
import { Sidebar } from "../../components/ui/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  const getPageTitle = () => {
    // Remove leading slash and get the last segment of the path
    const path =
      location.pathname.split("/").filter(Boolean).pop() || "Dashboard";
    // Capitalize first letter and add spaces before capital letters
    return (
      path.charAt(0).toUpperCase() + path.slice(1).replace(/([A-Z])/g, " $1")
    );
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen font-inter  w-screen overflow-auto lg:overflow-hidden">
        <Sidebar className="" />
        <div className="flex-1  lg:overflow-hidden">
          <div className="border-b">
            <div className="flex h-16  items-center px-4">
              <div className="flex w-full items-center justify-between ">
                <div className="flex items-center gap-2">
                  <SidebarTrigger />
                  <h1 className="text-2xl font-semibold">{getPageTitle()}</h1>
                </div>
                <div className=" flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
          <main className="flex-1 overflow-scroll p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
