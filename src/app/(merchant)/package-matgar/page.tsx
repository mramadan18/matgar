"use client";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import Image from "next/image";
import React, { useState } from "react";
import logoPlusImg from "#/img for salla/pricePage/Group 88.png";
import logoProImg from "#/img for salla/pricePage/Group 87.png";
import Package from "@/components/package-matgar/Package";
import PackagePlusContent from "@/components/package-matgar/PackagePlusContent";
import PackageProContent from "@/components/package-matgar/PackageProContent";

const page = () => {
  const [packagePlus, setPackagePlus] = useState(true);
  const [packagePro, setPackagePro] = useState(false);

  return (
    <div className="py-14 container">
      <BreadcrumbList>
        <BreadcrumbItemMain />
        <BreadcrumbItemActive name="باقة المتجر" url="/package-matgar" />
      </BreadcrumbList>

      <div className="flex flex-col md:flex-row justify-center items-center gap-14 mt-14">
        <Package
          img={logoPlusImg}
          type={"متجر بلس"}
          desc={"باقة الخدمات المتقدمة"}
          price={"30.00"}
          f1={"تفعيل الدفع الإلكتروني"}
          f2={"تعدد شركات الشحن"}
          f3={"حجز نطاق (دومين) لمتجرك"}
        />
        <Package
          isPro
          img={logoProImg}
          type={"متجر برو"}
          desc={"باقة التجارة الاحترافية للشركات"}
          price={"80.00"}
          f1={"احتساب ضريبة القيمة المضافة"}
          f2={"إدارة حسابات موظفي المتجر"}
          f3={"تحكم بتصميم واجهة متجرك"}
        />
      </div>

      <div className="mt-36">
        <div className="flex items-center">
          <div
            className={`${
              packagePlus && "bg-primary text-white"
            } py-4 px-6 text-lg text-primary font-medium border border-[#707070] cursor-pointer`}
            onClick={() => {
              setPackagePlus(true);
              setPackagePro(false);
            }}
          >
            متجر بلس
          </div>
          <div
            className={`${
              packagePro && "bg-primary text-white"
            } py-4 px-6 text-lg text-primary font-medium border border-[#707070] cursor-pointer`}
            onClick={() => {
              setPackagePro(true);
              setPackagePlus(false);
            }}
          >
            متجر برو
          </div>
        </div>

        {packagePlus && <PackagePlusContent />}
        {packagePro && <PackageProContent />}
      </div>
    </div>
  );
};

export default page;
