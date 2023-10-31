import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import React from "react";

const page = () => {
  return (
    <div className="py-14 content-container">
      <BreadcrumbList>
        <BreadcrumbItemMain />
        <BreadcrumbItemActive name="باقة المتجر" url="/package-matgar" />
      </BreadcrumbList>

      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col gap-4"></div>
        <div className="flex flex-col gap-4"></div>
      </div>
    </div>
  );
};

export default page;
