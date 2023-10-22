"use client";

import React, { useState } from "react";
import Image from "next/image";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import arrowDown from "../../.././../public/img for salla/dashboard/arrow-down.svg";
import MenuAddNewProduct from "@/components/dashboard/products/MenuAddNewProduct";
import serviceImg from "../../../../public/img for salla/dashboard/icons8-handbag-24.png";
import infoImg from "../../../../public/img for salla/dashboard/icons8-info-popup-32.png";
import plusImg from "../../../../public/img for salla/dashboard/plus-blue.png";
import NotFoundProducts from "@/components/dashboard/products/NotFoundProducts";
import AddProduct from "@/components/dashboard/products/AddProduct";

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isProducts, setIsProducts] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive name="المنتجات" url="/dashboard/products" />
        </BreadcrumbList>
        <button className="bg-[#0279DE] rounded-full w-44 h-14 flex justify-between items-center px-6">
          <Image src={infoImg} alt="down" priority width={24} height={24} />
          <span className="text-xl text-black">مساعدة</span>
          <Image src={arrowDown} alt="down" priority width={18} height={18} />
        </button>
      </div>

      <div className="flex justify-between items-center mt-8">
        <div className="relative">
          <button
            className="w-[240px] h-16 bg-[#0279DE] rounded-full px-2 gap-6 text-2xl flex justify-start"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="w-10 h-10 text-red-400 bg-white rounded-full flex justify-center items-center">
              <Image src={plusImg} alt="plus" priority />
            </span>
            <span>إضافة منتج جديد</span>
          </button>
          {showMenu && <MenuAddNewProduct />}
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38.242"
              height={24}
              viewBox="0 0 38.242 24"
            >
              <g id="setting-4" transform="translate(-421.413 -190)">
                <path
                  id="Vector"
                  d="M11.842,0H0"
                  transform="translate(444 196.5)"
                  fill="none"
                  stroke="#292d32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M11.837,0H0"
                  transform="translate(422.163 196.5)"
                  fill="none"
                  stroke="#292d32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  id="Vector-3"
                  data-name="Vector"
                  d="M7,3.5A3.5,3.5,0,1,1,4.48.14"
                  transform="translate(434.5 193)"
                  fill="none"
                  stroke="#292d32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  id="Vector-4"
                  data-name="Vector"
                  d="M12.9,0H0"
                  transform="translate(446 207.5)"
                  fill="none"
                  stroke="#292d32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  id="Vector-5"
                  data-name="Vector"
                  d="M10.786,0H0"
                  transform="translate(423.714 207.5)"
                  fill="none"
                  stroke="#292d32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  id="Vector-6"
                  data-name="Vector"
                  d="M8.458,3.981A4.11,4.11,0,0,1,4.229,7.961,4.11,4.11,0,0,1,0,3.981,4.11,4.11,0,0,1,4.229,0,4.11,4.11,0,0,1,8.458,3.981Z"
                  transform="translate(437.042 204)"
                  fill="none"
                  stroke="#292d32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  id="Vector-7"
                  data-name="Vector"
                  d="M0,0H24V24H0Z"
                  transform="translate(428 190)"
                  fill="none"
                  opacity={0}
                />
              </g>
            </svg>
            <span>تصفية</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Image src={serviceImg} alt="service" />
            <span>خدمات</span>
          </div>
        </div>
      </div>

      {isProducts ? <NotFoundProducts /> : <AddProduct />}
    </div>
  );
};

export default page;
