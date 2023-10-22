"use client";
import React from "react";
import Image from "next/image";
import AddButton from "@/components/dashboard/AddButton/AddButton";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import bokenImg from "#/img for salla/dashboard/vuesax-broken-setting-4.png";

const page = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive
            name={"كوبونات التخفيض"}
            url={"/dashboard/coupons"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>

      <div className="flex justify-between items-center mt-8">
        <AddButton title={"كوبون جديد"} handleClick={() => {}} />
        <div className="flex justify-center items-center gap-2 ml-8">
          <Image src={bokenImg} alt={"تصفية"} />
          <span>تصفية</span>
        </div>
      </div>
    </section>
  );
};

export default page;
