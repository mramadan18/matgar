import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import AlertBar from "@/components/utils/AlertBar";
import Image from "next/image";
import React from "react";
import logo from "#/img for salla/dashboard/logo2.png";
import { AiOutlineStar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import FreepShipping from "@/components/dashboard/matgar-settings/shipping-delivery/FreepShipping";
import PaiementWhenRecieving from "@/components/dashboard/matgar-settings/shipping-delivery/PaiementWhenRecieving";
import ShippingCompanyOptions from "@/components/dashboard/matgar-settings/shipping-delivery/ShippingCompanyOptions";
import ShippingCompanyRestrictions from "@/components/dashboard/matgar-settings/shipping-delivery/ShippingCompanyRestrictions";
import ShippingRatesCalculator from "@/components/dashboard/matgar-settings/shipping-delivery/ShippingRatesCalculator";
import PrivateShippingCompanies from "@/components/dashboard/matgar-settings/shipping-delivery/PrivateShippingCompanies";

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
            name={"خيارات الشحن والتوصيل"}
            url={"/dashboard/magtar-settings/shipping-delivery"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>

      <AlertBar
        title={
          "يرجى إضافة عنوان للمتجر لتتمكن من تفعيل بوليصات متجر، من الاعدادات الاساسية اختر اضافة عنوان مقر,"
        }
      />

      <div className="border border-[#707070] mt-10 py-10">
        <div className="flex justify-start items-center gap-4">
          <Image src={logo} alt={"logo"} />
          <div>
            <h3 className="tracking-wide">بوليصات متجر</h3>
            <p>تسهيل عملية الشحن وبأقل الرسوم</p>
          </div>
        </div>

        <div className="flex justify-start items-start gap-4 border-b border-[#707070] pb-8 mt-10">
          <div className="w-20 h-20 border border-[#707070] rounded-xl mr-7 ml-4"></div>
          <div>
            <h3 className="tracking-wide">أرامكس</h3>
            <div className="flex justify-start items-center gap-4 mt-6">
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
            </div>
          </div>
        </div>

        <div className="flex justify-start items-start gap-4 border-b border-[#707070] pb-8 mt-10">
          <div className="w-20 h-20 border border-[#707070] rounded-xl mr-7 ml-4"></div>
          <div>
            <h3 className="tracking-wide">أرامكس</h3>
            <div className="flex justify-start items-center gap-4 mt-6">
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
            </div>
          </div>
        </div>

        <div className="flex justify-start items-start gap-4 border-b border-[#707070] pb-8 mt-10">
          <div className="w-20 h-20 border border-[#707070] rounded-xl mr-7 ml-4"></div>
          <div>
            <h3 className="tracking-wide">أرامكس</h3>
            <div className="flex justify-start items-center gap-4 mt-6">
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
            </div>
          </div>
        </div>

        <div className="flex justify-start items-start gap-4 mt-10">
          <div className="w-20 h-20 border border-[#707070] rounded-xl mr-7 ml-4"></div>
          <div>
            <h3 className="tracking-wide">أرامكس</h3>
            <div className="flex justify-start items-center gap-4 mt-6">
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
              <AiOutlineStar className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      <PrivateShippingCompanies />

      <div className="border border-[#707070] mt-14 py-10">
        <div className="flex justify-start items-center gap-4 mb-10 px-6">
          <FiSettings className="text-xl" />
          <h3>إعدادات شركات الشحن</h3>
        </div>

        <FreepShipping />

        <PaiementWhenRecieving />

        <ShippingCompanyOptions />

        <ShippingCompanyRestrictions />

        <ShippingRatesCalculator />
      </div>
    </section>
  );
};

export default page;
