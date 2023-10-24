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
    </div>
  );
};

export default page;
