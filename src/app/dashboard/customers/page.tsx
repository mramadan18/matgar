"use client";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import Image from "next/image";
import React, { useState } from "react";
import arrowDown from "../../.././../public/img for salla/dashboard/arrow-down.svg";
import hashImg from "../../../../public/img for salla/dashboard/hash.png";
import infoImg from "../../../../public/img for salla/dashboard/icons8-info-popup-32.png";
import dateImg from "../../../../public/img for salla/dashboard/icons8-calendar-50.png";
import cartonImg from "../../../../public/img for salla/dashboard/icons8-carton-50.png";
import editImg from "../../../../public/img for salla/dashboard/icons8-edit-50.png";
import moneyImg from "../../../../public/img for salla/dashboard/icons8-money-30.png";
import peopleImg from "../../../../public/img for salla/dashboard/icons8-users-48.png";
import plusImg from "../../../../public/img for salla/dashboard/+.png";
import boxImg from "../../../../public/img for salla/dashboard/icons8-box-96.png";
import serviceImg from "../../../../public/img for salla/dashboard/icons8-handbag-24.png";
import bookImg from "../../../../public/img for salla/dashboard/icons8-book-50.png";
import rightImg from "../../../../public/img for salla/dashboard/check.png";
import Link from "next/link";
import Modal from "@/components/utils/Modal";

const page = () => {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive name="العملاء" url="/dashboard/customers" />
        </BreadcrumbList>
        <button className="bg-[#0279DE] rounded-full w-44 h-14 flex justify-between items-center px-6">
          <Image src={infoImg} alt="down" priority width={24} height={24} />
          <span className="text-xl text-black">مساعدة</span>
          <Image src={arrowDown} alt="down" priority width={18} height={18} />
        </button>
      </div>

      <div className="flex justify-start items-center gap-2">
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

      <div className="p-4 mt-8 bg-[#E9E9E9] rounded-md flex justify-start items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={35}
          height={35}
          viewBox="0 0 35 35"
        >
          <image
            id="icons8-error-50"
            width={35}
            height={35}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8ElEQVR4nO2ZW4hNURjHf2aMy7gO0QhDrrmlUWRCIsWDywMPg6JGlHjgZV6QiaYQuT3wYF4oE0UUUZLGRNFEI5OUZDAuTe7369aq/9RubOfs2zl7b51ffbVa6/vW+n/nsvZa34YcORLLMqCchDMJ+CWbQkLpANQDluy6+hLHciXwQmapL1EUAs0SXwGsUvsp0I0EsV3CbwF5spvq20ZCGAx8kugZtv4y4DfwGRhKAjipJI47jNVq7AQxZ5rtUx/iMD4I+KhkZhJT8oAGidyawq9KPreBfGLIGgl8kmZn6go8ku9qYkZP4LnEuTmOLJXvS6A3MWKPj6f3VcXsJiaMAL7qPDXZQ1ypYr4Do4kB5/XJHvERW6PYc0TMPAl5BxQ7jHcCimSm3Z5ixVqaKxIKgHsSUfkPny22069pO1GpcTOXmTPrbJSAB0DnNM8MS20nzDd1Xz4byDJ9gFdafGEKPzeJGBbJ5w3QjyxyWAtfTuPnNhHDRfkdIkuMA34AP4EJISYyVluxmXciWeCKhB1w4eslEcNB+dZn+lq8RAu9BvpmIJEioFX+i8kQXYCHWmSdyxiviRjWy79ZV+bQ2awFmjzs934SyQfuKGYTITMQ+KDJ53qI85OIYbZizJW5hBA5ponPeIzzm4jhrOKOEhJTdX39BozKYiLDdao2a08nIGYLvCEhO3zEB0nEsFOxDbpK+2alrVrYK4JEegDPFL8Cn3QHWmzVwiA7naW2HyoU3yJNnqkO4WstsN1HCkKozlR7DR4GfNEfzV4tjIoy24Yz0kvg6RTVwqiolaZTbgNmhfgwatt1jO0KOFeJraZsNKY9HjS6qBa6Za8tEdMOSpXmugt0TOW4Vo6PQzqwhZ1IobRZ0pr2CB3Wy0vz+mCOzKmo7YdyaWyV5r/YL4drCXjXVyet+9oPjNE102u1MCpKpdVcucfbBy4EqBZGRY00X2rrWKCO98AAkkN/4K20z0c3Pivh1mQv7yfZ6qL+eeT4b/kDXLNVbksXjZ8AAAAASUVORK5CYII="
          />
        </svg>
        <p className="text-lg">
          هذه الميزة متوفرة فقط فى باقة متجر بلس, متجر سبيشال, متجر برو,{" "}
          <Link href={"#"} className="text-[#0279DE] underline">
            إضغط هنا
          </Link>
        </p>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button className="w-[180px] h-16 bg-[#0279DE] rounded-full px-2 gap-6 text-2xl flex justify-start">
          <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
            <Image src={plusImg} alt="plus" priority />
          </span>
          <span>عميل جديد</span>
        </button>
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
