import React from "react";
import Image from "next/image";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import settingsImg from "#/img for salla/dashboard/setting-2.png";
import SettingsItem from "@/components/dashboard/matgar-settings/settingsItem";

const page = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive
            name={"إعدادات المتجر"}
            url={"/dashboard/coupons"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800 mt-8 mb-6">
          إعدادات المتجر
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800 mt-8 mb-6">
          إعدادات المنتجات
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800 mt-8 mb-6">
          الإعدادات المتقدمة
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800 mt-8 mb-6">الأرشيف</h1>

        <div className="grid grid-cols-4 gap-4">
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
          <SettingsItem
            href={"/dashboard/matgar-settings/main-settings"}
            img={settingsImg}
            title={"إعدادات المتجر"}
            desc={"الرابط,الشعار,الاسم,المقر"}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
