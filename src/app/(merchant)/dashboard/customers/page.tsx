"use client";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import Image from "next/image";
import React, { useState } from "react";
import peopleImg from "#/img for salla/dashboard/icons8-users-48.png";
import plusImg from "#/img for salla/dashboard/+.png";
import serviceImg from "#/img for salla/dashboard/icons8-handbag-24.png";
import Modal from "@/components/utils/Modal";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import AddButton from "@/components/dashboard/AddButton/AddButton";
import AlertBar from "@/components/utils/AlertBar";

const page = () => {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive name="العملاء" url="/dashboard/customers" />
        </BreadcrumbList>
        <HelpButton />
      </div>

      <div className="flex justify-start items-center gap-2 mt-6">
        <Image src={peopleImg} alt="people" width={40} height={40} priority />
        <h2 className="font-bold text-xl tracking-wider">مجموعات العملاء</h2>
        <span>(1 مجموعات)</span>
      </div>

      <div className="mt-10 flex justify-start items-center gap-6">
        <div
          className="border border-[#707070] rounded-lg w-[300px] h-[230px] flex flex-col justify-center items-center gap-4 cursor-pointer"
          onClick={() => setShowCreate(true)}
        >
          <Image src={peopleImg} alt="peopole" className="mx-auto opacity-50" />

          <h2 className="font-bold tracking-wider text-xl">جميع العملاء</h2>
          <p>لا يوجد عملاء</p>
        </div>
        <div
          className="border border-[#707070] rounded-lg w-[300px] h-[230px] flex flex-col justify-center items-center gap-4 cursor-pointer"
          onClick={() => setShowCreate(true)}
        >
          <Image
            src={plusImg}
            alt="peopole"
            className="mx-auto opacity-50"
            width={40}
            height={40}
          />

          <h2 className="tracking-wider text-xl mb-10">مجموعة جديدة</h2>
        </div>
      </div>

      <AlertBar
        title={"هذه الميزة متوفرة فقط فى باقة متجر بلس, متجر سبيشال, متجر برو,"}
      />

      <div className="flex justify-between items-center mt-8">
        <AddButton title={"عميل جديد"} />
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

      <div className="mt-14 border border-[#707070] rounded-lg py-4">
        <div className="flex justify-start items-center gap-4 px-6">
          <input type="checkbox" id="orders" />
          <Image src={peopleImg} alt="people" width={40} height={40} priority />
          <label className="m-0 text-lg" htmlFor="orders">
            العملاء
          </label>
          <div className="flex justify-center items-center gap-2">
            <span>(0 عميل)</span>
          </div>
        </div>

        <p className="pr-8 mt-2 text-lg opacity-50">لا يوجد طلبات</p>
      </div>

      <Modal showModal={showCreate} setShowModal={setShowCreate}>
        <div className="p-6 bg-white text-center rounded-lg w-[450px]">
          <h3 className="mb-10 tracking-wider">تنبيه</h3>
          <p className="w-[98%] mx-auto mb-8 text-lg">
            هذه الخاصية متاحة في باقة (متجر بلس و متجر برو و متجر سبيشل) يمكن
            ترقية الباقة من خلال باقة المتجر
          </p>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-primary py-2 px-4 text-xl"
              onClick={() => setShowCreate(false)}
            >
              متجر سلة
            </button>
            <button
              className="border border-primary bg-white text-primary py-2 px-4 text-xl"
              onClick={() => setShowCreate(false)}
            >
              إغلاق
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default page;
