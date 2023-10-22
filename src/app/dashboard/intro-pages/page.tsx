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
import mapImg from "../../../../public/img for salla/dashboard/vuesax-broken-map.png";
import moreImg from "../../../../public/img for salla/dashboard/vuesax-broken-more.png";
import boldImg from "../../../../public/img for salla/dashboard/B.png";
import sImg from "../../../../public/img for salla/dashboard/S.png";
import settingImg from "../../../../public/img for salla/dashboard/setting-2.png";
import videoImg from "../../../../public/img for salla/dashboard/icons8-video-50.png";
import gridImg from "../../../../public/img for salla/dashboard/Repeat Grid 1.png";
import pictureImg from "../../../../public/img for salla/dashboard/icons8-picture-50.png";
import bannerImg from "../../../../public/img for salla/dashboard/icons8-ad-banner-32.png";
import Link from "next/link";
import Modal from "@/components/utils/Modal";

const page = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive
            name="الصفحات التعريفية"
            url="/dashboard/intro-pages"
          />
        </BreadcrumbList>
        <button className="bg-primary rounded-full w-44 h-14 flex justify-between items-center px-6">
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
          <Link href={"#"} className="text-pribg-primary underline">
            إضغط هنا
          </Link>
        </p>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          className="w-[200px] h-16 bg-primary rounded-full px-2 gap-6 text-2xl flex justify-start"
          onClick={() => setShowCreate(true)}
        >
          <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
            <Image src={plusImg} alt="plus" priority />
          </span>
          <span>صفحة جديدة</span>
        </button>
      </div>

      <div className="mt-14 border border-[#707070] rounded-lg p-4">
        <h2 className="text-2xl">الصفحات التعريفية</h2>

        <p className="mt-4 text-xl opacity-50">لا يوجد طلبات بعد</p>
      </div>

      <Modal showModal={showCreate} setShowModal={setShowCreate}>
        <div className="w-[450px] rounded-lg">
          <div className="flex justify-between items-center bg-primary py-2 px-4 text-white text-lg">
            <span>إنشاء صفحة</span>
            <span
              className="cursor-pointer"
              onClick={() => setShowCreate(false)}
            >
              x
            </span>
          </div>
          <div className="py-4 px-6 bg-white flex flex-col gap-4 overflow-auto h-[75vh]">
            <div className="relative">
              <Image
                className="absolute top-1/2 right-4 -translate-y-1/2"
                src={mapImg}
                alt="map"
                priority
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="عنوان الصفحة"
                className="border border-gray-500 w-full px-10 text-black opacity-50 placeholder:text-black placeholder:font-bold tracking-wider"
              />
            </div>
            <div className="relative">
              <Image
                className="absolute top-1/2 right-4 -translate-y-1/2"
                src={moreImg}
                alt="map"
                priority
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="نوع الصفحة"
                className="border border-gray-500 w-full px-10 text-black opacity-50 placeholder:text-black placeholder:font-bold tracking-wider rounded-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-2 right-0 flex justify-start items-center gap-4 px-4">
                <Image src={boldImg} alt="bold" width={18} height={18} />
                <Image src={sImg} alt="s" width={18} height={18} />
                <Image src={settingImg} alt="setting" width={18} height={18} />
                <Image src={videoImg} alt="video" width={18} height={18} />
                <Image src={gridImg} alt="grid" width={18} height={18} />
                <Image src={pictureImg} alt="photo" width={18} height={18} />
                <Image src={bannerImg} alt="banner" width={18} height={18} />
              </div>
              <textarea
                rows={12}
                className="pt-10 px-4"
                placeholder="محتوي الصفحة"
              ></textarea>
            </div>

            <div className="border border-[#707070] pt-2 pb-8 px-4">
              <h4 className="flex justify-start items-center gap-2 font-normal m-0">
                SEO تحسينات{" "}
                <span className="w-10 h-6 py-0 bg-yellow-200 text-black rounded-2xl text-sm flex justify-center items-center">
                  برو
                </span>
              </h4>

              <div className="mt-4">
                <label htmlFor="page-address">
                  عنوان صفحة تعريفية (Page Title)
                </label>
                <div className="relative">
                  <Image
                    className="absolute top-1/2 right-4 -translate-y-1/2"
                    src={moreImg}
                    alt="map"
                    priority
                    width={18}
                    height={18}
                  />
                  <input
                    id="page-address"
                    type="text"
                    placeholder="(Page Title) عنوان صفحة تعريفية"
                    className="border border-gray-500 w-full px-10 text-sm text-black opacity-50 placeholder:text-black placeholder:font-bold tracking-wider rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="page-address">
                  رابط صفحة تعريفية (SEO Page URL)
                </label>
                <div className="relative">
                  <Image
                    className="absolute top-1/2 right-4 -translate-y-1/2"
                    src={moreImg}
                    alt="map"
                    priority
                    width={18}
                    height={18}
                  />
                  <input
                    id="page-address"
                    type="text"
                    placeholder="(SEO Page URL) رابط صفحة تعريفية"
                    className="border border-gray-500 w-full px-10 text-sm text-black opacity-50 placeholder:text-black placeholder:font-bold tracking-wider rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="page-address">
                  وصف صفحة تعريفية (Page Description)
                </label>
                <div className="relative">
                  <Image
                    className="absolute top-1/2 right-4 -translate-y-1/2"
                    src={moreImg}
                    alt="map"
                    priority
                    width={18}
                    height={18}
                  />
                  <input
                    id="page-address"
                    type="text"
                    placeholder="(Page Description) وصف صفحة تعريفية"
                    className="border border-gray-500 w-full px-10 text-sm text-black opacity-50 placeholder:text-black placeholder:font-bold tracking-wider rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 px-5 bg-[#F2F2F2] rounded-lg">
            <button
              className="w-24 h-8 flex justify-center items-center rounded-lg"
              onClick={() => {
                setShowCreate(false);
                setShowConfirm(true);
              }}
            >
              حفظ
            </button>
          </div>
        </div>
      </Modal>

      <Modal showModal={showConfirm} setShowModal={setShowConfirm}>
        <div className="p-6 bg-white text-center rounded-lg w-[450px]">
          <h3 className="mb-10 tracking-wider">تنبيه</h3>
          <p className="w-[98%] mx-auto mb-8 text-lg">
            هذه الخاصية متاحة في باقة (متجر بلس و متجر برو و متجر سبيشل) يمكن
            ترقية الباقة من خلال باقة المتجر
          </p>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-primary py-2 px-4 text-xl"
              onClick={() => setShowConfirm(false)}
            >
              متجر سلة
            </button>
            <button
              className="border border-primary bg-white text-primary py-2 px-4 text-xl"
              onClick={() => setShowConfirm(false)}
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
