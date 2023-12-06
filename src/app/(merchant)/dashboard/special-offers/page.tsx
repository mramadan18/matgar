import AddButton from "@/components/dashboard/AddButton/AddButton";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import AlertBar from "@/components/utils/AlertBar";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive
            name={"العروض الخاصة"}
            url={"/dashboard/special-offers"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>

      <AlertBar
        title={
          "هذه الميزة متوفرة فقط فى باقة متجر بلس, متجر سبيشال, متجر برو, "
        }
      />
      <div className="mt-6">
        <AddButton title={"إنشاء عرض جديد"} />
      </div>

      <div className="mt-8 border border-[#707070] rounded-lg p-4">
        <h2 className="tracking-wider font-medium">العروض الخاصة</h2>
        <p className="text-lg mt-2">لا يوجد عروض بعد</p>
      </div>
    </section>
  );
};

export default page;
