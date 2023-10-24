import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import Image from "next/image";
import React from "react";

import imgSelected from "#/img for salla/dashboard/icons8-picture-50.png";

const page = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive
            name={"إعدادات المتجر"}
            url={"/dashboard/magtar-settings"}
          />
          /
          <BreadcrumbItemActive
            name={"الإعدادات الأساسية"}
            url={"/dashboard/magtar-settings/main-settings"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>

      <div className="p-4 border border-[#707070] rounded-lg">
        <h2 className="font-normal">بيانات المتجر</h2>

        <div className="flex flex-col items-center gap-2 mt-8">
          <label
            htmlFor="uploadFile"
            className="img overflow-hidden rounded-lg relative bg-[#eeeeee] w-[300px] h-[250px] flex justify-center items-center"
          >
            <Image src={imgSelected} alt="photo" priority />

            <input
              className="hidden w-full h-full"
              type="file"
              id="uploadFile"
              accept="video/*,image/*"
            />
          </label>

          <h3>تحديث الصورة</h3>
          <span>الشعار يظهر الصغير في المتجر؟</span>
        </div>
      </div>
    </section>
  );
};

export default page;
