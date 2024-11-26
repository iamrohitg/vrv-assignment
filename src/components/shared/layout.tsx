import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar Section */}
        <AppSidebar />

        {/* Main Content Section */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="bg-white shadow-sm p-4">
            {/* Sidebar Trigger for Mobile */}
            <SidebarTrigger />
          </header>

          <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
