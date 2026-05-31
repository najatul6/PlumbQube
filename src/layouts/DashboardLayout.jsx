import Navbar from "../components/common/Navbar";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardStats from "../components/dashboard/DashboardStats";
import DocumentCenter from "../components/dashboard/DocumentCenter";
import PropertyCard from "../components/dashboard/PropertyCard";
import RecommendedServices from "../components/dashboard/RecommendedServices";
import ServiceHistoryTable from "../components/dashboard/ServiceHistoryTable";

const DashboardLayout = () => {
  return (
    <section className="bg-neutral-200 min-h-screen">
      <header className="bg-white shadow z-999">
        <Navbar />
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] mt-16 md:mt-18">
        {/* fixed sidebar */}
        <div className="hidden lg:block">
          <div className="fixed top-18 left-0 w-70 h-[calc(100vh-72px)] bg-white border-r border-gray-200">
            <DashboardSidebar />
          </div>
        </div>

        {/* content */}
        <div className="p-6 md:p-8  min-h-screen">
          {/* welcome */}
          <div>
            <h1 className="text-5xl font-bold text-black">
              Welcome Back, John
            </h1>

            <p className="text-gray-500 mt-2">
              Here is an overview of your property's plumbing status.
            </p>
          </div>

          {/* stats */}
          <DashboardStats />

          {/* property + recommendations */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 mt-6">
            <PropertyCard />
            <RecommendedServices />
          </div>

          {/* table */}
          <ServiceHistoryTable />

          {/* documents */}
          <DocumentCenter />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
