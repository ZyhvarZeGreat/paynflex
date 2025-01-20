import { Outlet } from "react-router";
import { Sidebar } from "../../components/ui/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen  w-screen overflow-hidden">
        <Sidebar className="" />
        <div className="flex-1 overflow-auto">
          <div className="border-b">
            <div className="flex h-16  items-center px-4">
              <div className="flex">
                <SidebarTrigger />
                <h1
                  className="ml-4 capitalize
                  font-semibold font-inter text-2xl"
                >
                  {window.location.pathname
                    .split("/admin/")[1]
                    .replace(/\//g, " ")
                    .replace(/-/g, " ") || "Dashboard"}
                </h1>
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
