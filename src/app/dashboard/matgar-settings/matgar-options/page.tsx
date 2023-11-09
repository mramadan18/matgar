import React from "react";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import Products from "@/components/dashboard/matgar-settings/matgar-options/Products";
import Orders from "@/components/dashboard/matgar-settings/matgar-options/Orders";
import Clients from "@/components/dashboard/matgar-settings/matgar-options/Clients";
import QuizRate from "@/components/dashboard/matgar-settings/matgar-options/QuizRate";
import CouponsDiscount from "@/components/dashboard/matgar-settings/matgar-options/CouponsDiscount";
import MainOptions from "@/components/dashboard/matgar-settings/matgar-options/MainOptions";

const page = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive
            name={"إعدادات المتجر"}
            url={"/dashboard/matgar-settings"}
          />
          /
          <BreadcrumbItemActive
            name={"خيارات المتجر"}
            url={"/dashboard/matgar-settings/matgar-options"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>
      <Products />
      <Orders />
      <Clients />
      <QuizRate />
      <CouponsDiscount />
      <MainOptions />

      <button className="w-full text-lg py-2 my-10">حفظ</button>
    </section>
  );
};

export default page;
