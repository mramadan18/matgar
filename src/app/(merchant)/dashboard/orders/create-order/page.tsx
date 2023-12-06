"use client";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import Image from "next/image";
import React, { useState } from "react";
import arrowDown from "#/img for salla/dashboard/arrow-down.svg";
import hashImg from "#/img for salla/dashboard/hash.png";
import infoImg from "#/img for salla/dashboard/icons8-info-popup-32.png";
import dateImg from "#/img for salla/dashboard/icons8-calendar-50.png";
import cartonImg from "#/img for salla/dashboard/icons8-carton-50.png";
import editImg from "#/img for salla/dashboard/icons8-edit-50.png";
import moneyImg from "#/img for salla/dashboard/icons8-money-30.png";
import peopleImg from "#/img for salla/dashboard/icons8-users-48.png";
import plusImg from "#/img for salla/dashboard/+.png";
import boxImg from "#/img for salla/dashboard/icons8-box-96.png";
import bookImg from "#/img for salla/dashboard/icons8-book-50.png";
import rightImg from "#/img for salla/dashboard/check.png";
import Link from "next/link";
import Modal from "@/components/utils/Modal";

const page = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive name="الطلبات" url="/dashboard/orders" />
          /
          <BreadcrumbItemActive
            name="إنشاء طلب"
            url="/dashboard/orders/create-order"
          />
        </BreadcrumbList>
        <button className="bg-[#0279DE] rounded-full w-44 h-14 flex justify-between items-center px-6">
          <Image src={infoImg} alt="down" priority width={24} height={24} />
          <span className="text-xl text-black">مساعدة</span>
          <Image src={arrowDown} alt="down" priority width={18} height={18} />
        </button>
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

      <div className="border border-[#707070] mt-8 pt-8 pb-14 px-10 flex justify-between items-center rounded-lg">
        <div className="flex flex-col justify-center items-center gap-6">
          <span className="flex justify-center items-center gap-2">
            <Image src={hashImg} alt="hash" />
            <span>تعديل الطلب رقم</span>
          </span>
          <span className="font-bold tracking-[1px]">79554945</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <span className="flex justify-center items-center gap-2">
            <Image src={dateImg} alt="date" />
            <span>تاريخ الطلب</span>
          </span>
          <span className="font-bold tracking-[1px]">
            Monday 28 August 2023 | 05:29 AM
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <span className="flex justify-center items-center gap-2">
            <Image src={cartonImg} alt="hash" width={32} height={32} />
            <span>حالة الطلب</span>
          </span>
          <span className="font-bold tracking-[1px]">جديد</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="border border-[#707070] rounded-lg pt-3 pb-14 px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">العميل</h2>
            <button className="bg-transparent text-black flex justify-center items-center gap-2 py-2 px-4 border border-[#0279DE] rounded-md">
              <Image src={editImg} alt="edit" />
              <span className="text-lg opacity-50">تعديل</span>
            </button>
          </div>

          <Image src={peopleImg} alt="peopole" className="mx-auto opacity-50" />
        </div>
        <div className="border border-[#707070] rounded-lg pt-3 pb-14 px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">العميل</h2>
            <button className="bg-transparent text-black flex justify-center items-center gap-2 py-2 px-4 border border-[#0279DE] rounded-md">
              <Image src={editImg} alt="edit" />
              <span className="text-lg opacity-50">تعديل</span>
            </button>
          </div>

          <p className="text-center opacity-50 mt-10">لا يتطلب شحن / توصيل</p>
        </div>
        <div className="border border-[#707070] rounded-lg pt-3 pb-14 px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">العميل</h2>
            <button className="bg-transparent text-black flex justify-center items-center gap-2 py-2 px-4 border border-[#0279DE] rounded-md">
              <Image src={editImg} alt="edit" />
              <span className="text-lg opacity-50">تعديل</span>
            </button>
          </div>

          <Image
            src={moneyImg}
            alt="money"
            className="mx-auto opacity-50"
            width={70}
            height={70}
          />
        </div>
      </div>

      <div className="border border-[#707070] rounded-lg mt-10 p-4 pl-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl flex justify-center items-center gap-2">
            <Image src={boxImg} alt="box" width={50} height={50} />
            <span>المنتجات</span>
          </h2>
          <button className="bg-transparent text-black flex justify-center items-center gap-2 py-1 px-2 border border-[#0279DE] rounded-md">
            <Image src={plusImg} alt="plus" width={18} height={18} />
            <span className="text-lg opacity-50">إضافة منتج</span>
          </button>
        </div>

        <div className="relative overflow-x-auto mt-6">
          <table className="w-full text-sm text-right text-gray-500">
            <thead className="text-base bg-[#E9E9E9]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  المنتج
                </th>
                <th scope="col" className="px-6 py-3">
                  اجمالي الوزن
                </th>
                <th scope="col" className="px-6 py-3">
                  الكمية
                </th>
                <th scope="col" className="px-6 py-3">
                  وزن القطعة الواحدة
                </th>
                <th scope="col" className="px-6 py-3">
                  السعر
                </th>
                <th scope="col" className="px-6 py-3">
                  المجموع
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  مجموع السلة
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">$0</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  كوبونات التخفيض
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  <span className="bg-[#0279DE] text-white p-1 rounded-full text-xs">
                    إبحث عن كوبون
                  </span>
                </td>
              </tr>
              <tr className="bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  إجمالي الطلب
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">$0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          className="bg-transparent text-[#0279DE] flex justify-center items-center text-lg gap-2 border border-[#0279DE] w-[140px] h-[40px] rounded-full"
          onClick={() => setShowCreate(true)}
        >
          <Image
            src={rightImg}
            alt="right"
            width={16}
            height={16}
            style={{
              filter:
                "invert(44%) sepia(73%) saturate(7047%) hue-rotate(194deg) brightness(98%) contrast(98%)",
            }}
          />
          <span>إنشاء الطلب</span>
        </button>
        <button
          className="bg-transparent text-[#f00] flex justify-center items-center text-lg gap-2 border border-[#f00] w-[140px] h-[40px] rounded-full"
          onClick={() => setShowDelete(true)}
        >
          x<span>حذف الطلب</span>
        </button>
        <button className="bg-transparent text-black flex justify-center items-center text-lg gap-2 border border-black w-[140px] h-[40px] rounded-full">
          <Image src={bookImg} alt="right" width={16} height={16} />
          <span>حفظ كمسودة</span>
        </button>
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
      <Modal showModal={showDelete} setShowModal={setShowDelete}>
        <div className="p-6 bg-white text-center rounded-lg w-[450px]">
          <h3 className="mb-10 tracking-wider">تنبيه</h3>
          <p className="w-[98%] mx-auto mb-8 text-lg">
            هل أنت متأكد من حذف هذا الطلب
          </p>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-primary py-2 px-4 text-xl"
              onClick={() => setShowDelete(false)}
            >
              تأكيد الحذف
            </button>
            <button
              className="border border-primary bg-white text-primary py-2 px-4 text-xl"
              onClick={() => setShowDelete(false)}
            >
              تراجع
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default page;
