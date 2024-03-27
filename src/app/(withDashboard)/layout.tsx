import Sidebar from "@/components/Share/Sidebar/Sidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Veg Store | Dashboard",
  description: "Welcome to the Dashboard in Veg store",
};

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="grid grid-cols-12 ">
        <Sidebar />
        <div className="col-span-10 h-full px-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
