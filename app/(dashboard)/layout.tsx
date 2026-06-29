import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { ClerkProvider } from "@clerk/nextjs";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = 0;
  const isPro = false;
  
  return (
    <ClerkProvider>
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
          <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
        </div>
        <main className="md:pl-72">
          <Navbar />
          {children}
        </main>
      </div>
    </ClerkProvider>
  );
};

export default DashboardLayout;
