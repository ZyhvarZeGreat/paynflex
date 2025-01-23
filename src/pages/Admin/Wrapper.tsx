import { Outlet, useLocation } from "react-router";
import { Sidebar } from "../../components/ui/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Bell, Import, Plus } from "lucide-react";
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
        <div className="flex-1 overflow-scroll lg:overflow-hidden">
          <div className="border-b">
            <div className="flex h-16  items-center px-4">
              <div className="flex w-full items-center justify-between ">
                <div className="flex items-center gap-2">
                  <SidebarTrigger />
                  <h1 className="text-2xl font-semibold">{getPageTitle()}</h1>
                </div>
                <div className=" flex items-center justify-center">
                  {getPageTitle() === "Dashboard" ? (
                    <div className="flex gap-3 items-center">
                      <Button variant="outline" className="gap-2">
                        <Import className="h-4 w-4" />
                        Import
                      </Button>
                      <Button className="gap-2 bg-[#6C5DD3] hover:bg-[#6C5DD3]/90">
                        <Plus className="h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <main className="flex-1 p-4 md:p-6">
            <Outlet />
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
