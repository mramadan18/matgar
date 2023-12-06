import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import AlertBar from "@/components/utils/AlertBar";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";

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
            name={"العملات"}
            url={"/dashboard/matgar-settings/currencies"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>

      <AlertBar
        title={
          "هذه الميزة متوفرة فقط فى باقة متجر بلس, متجر سبيشال, متجر برو, "
        }
      />

      <div className="border border-[#707070] pt-3 pb-8 px-4 mt-8 rounded-lg">
        <div className="flex justify-start items-start gap-2 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
          >
            <g
              id="vuesax_broken_frame"
              data-name="vuesax/broken/frame"
              transform="translate(-236 -572)"
            >
              <g id="frame" transform="translate(236 572)">
                <path
                  id="Vector"
                  d="M0,10.194a3.314,3.314,0,0,0,3.238,3.4H6.9a2.9,2.9,0,0,0,2.829-2.96A2.552,2.552,0,0,0,7.8,7.817L1.925,5.775A2.552,2.552,0,0,1,0,2.96,2.9,2.9,0,0,1,2.829,0H6.49A3.314,3.314,0,0,1,9.727,3.4"
                  transform="translate(12.644 10.704)"
                  fill="none"
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M0,0V17.5"
                  transform="translate(17.5 8.75)"
                  fill="none"
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Dollar_-_Circle"
                  data-name="Dollar - Circle"
                  d="M2.917,5.833A14.583,14.583,0,1,0,14.583,0,14.387,14.387,0,0,0,8.706,1.24"
                  transform="translate(2.917 2.917)"
                  fill="none"
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Vector-3"
                  data-name="Vector"
                  d="M0,0H35V35H0Z"
                  fill="none"
                  opacity="0"
                />
              </g>
            </g>
          </svg>

          <h2>العملات المتاحة</h2>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h4>عملة المتجر الحالية</h4>
            <p>لن تتمكن من تغيير العملة في حال وجود طلبات شراء</p>
          </div>

          <div className="w-1/3 relative rounded-lg overflow-hidden">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2.5"
            >
              <option selected>$ دولار أمريكي</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <AiOutlineDown className="absolute top-1/2 left-2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
