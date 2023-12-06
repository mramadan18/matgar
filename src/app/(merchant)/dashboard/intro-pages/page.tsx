"use client";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import Image from "next/image";
import React, { useState } from "react";
import mapImg from "#/img for salla/dashboard/vuesax-broken-map.png";
import moreImg from "#/img for salla/dashboard/vuesax-broken-more.png";
import boldImg from "#/img for salla/dashboard/B.png";
import sImg from "#/img for salla/dashboard/S.png";
import settingImg from "#/img for salla/dashboard/setting-2.png";
import videoImg from "#/img for salla/dashboard/icons8-video-50.png";
import gridImg from "#/img for salla/dashboard/Repeat Grid 1.png";
import pictureImg from "#/img for salla/dashboard/icons8-picture-50.png";
import bannerImg from "#/img for salla/dashboard/icons8-ad-banner-32.png";
import Modal from "@/components/utils/Modal";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import AlertBar from "@/components/utils/AlertBar";
import AddButton from "@/components/dashboard/AddButton/AddButton";

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
        <HelpButton />
      </div>

      <AlertBar
        title={"هذه الميزة متوفرة فقط فى باقة متجر بلس, متجر سبيشال, متجر برو,"}
      />

      <div className="mt-10">
        <AddButton title={"صفحة جديدة"} />
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
