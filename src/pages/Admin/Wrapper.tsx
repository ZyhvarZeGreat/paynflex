import { Outlet } from "react-router";
import { Sidebar } from "../../components/ui/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Import, Plus, MoreVertical, Eye } from "lucide-react";
export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen font-inter  w-screen overflow-hidden">
        <Sidebar className="" />
        <div className="flex-1 overflow-auto">
          <div className="border-b">
            <div className="flex h-16  items-center px-4">
              <div className="flex w-full items-center justify-between ">
                <div className="flex items-center gap-2">
                  <SidebarTrigger />
                  <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>
                <div className=" flex items-center justify-center">
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
                </div>
              </div>
            </div>
          </div>
          <Outlet />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
