"use client";

import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import arrowDown from "../../.././../public/img for salla/dashboard/arrow-down.svg";
import serviceImg from "../../../../public/img for salla/dashboard/icons8-handbag-24.png";
import infoImg from "../../../../public/img for salla/dashboard/icons8-info-popup-32.png";
import plusImg from "../../../../public/img for salla/dashboard/plus-blue.png";
import boxImg from "../../../../public/img for salla/dashboard/icons8-box-96.png";
import watchImg from "../../../../public/img for salla/dashboard/icons8-wristwatch-96.png";
import dateImg from "../../../../public/img for salla/dashboard/icons8-calendar-50.png";
import printImg from "../../../../public/img for salla/dashboard/icons8-print-32.png";
import walletImg from "../../../../public/img for salla/dashboard/icons8-coin-wallet-32.png";

import Image from "next/image";
import React from "react";
import OrdersStatusItem from "@/components/dashboard/orders/OrdersStatusItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive name="التقارير" url="/dashboard/reports" />
        </BreadcrumbList>
        <button className="bg-[#0279DE] rounded-full w-44 h-14 flex justify-between items-center px-6">
          <Image src={infoImg} alt="down" priority width={24} height={24} />
          <span className="text-xl text-black">مساعدة</span>
          <Image src={arrowDown} alt="down" priority width={18} height={18} />
        </button>
      </div>

      <div className="flex justify-between items-center mt-8">
        <div className="border border-[#707070] py-1 px-2 flex justify-center items-center gap-2">
          <Image src={dateImg} alt="date" priority />
          <span>تاريخ التقارير</span>
          <label
            htmlFor="date"
            className="opacity-50 flex justify-center items-center gap-3 m-0"
          >
            Monday 28 August 2023{" "}
            <Image src={arrowDown} alt="down" width={16} height={16} />
          </label>
          <input type="date" className="hidden" id="date" />
        </div>

        <button className="bg-white text-black w-24 h-10 flex justify-center items-center gap-2 p-0 border border-[#707070]">
          <Image src={printImg} alt="print" />
          <span className="text-lg">طباعة</span>
        </button>
      </div>

      <div className="border border-[#707070] py-1 px-4 relative mt-10">
        <h3 className="tracking-widest">نوع التقارير</h3>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
          }}
          className="mySwiper mt-10 mb-20"
        >
          <SwiperSlide>
            <div className="border border-primary rounded-lg py-2 flex justify-center items-center">
              <Image src={walletImg} alt="wallet" />
              <span>المبيعات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#707070] rounded-lg py-2 flex justify-center items-center">
              <Image src={walletImg} alt="wallet" />
              <span>المبيعات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#707070] rounded-lg py-2 flex justify-center items-center">
              <Image src={walletImg} alt="wallet" />
              <span>المبيعات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#707070] rounded-lg py-2 flex justify-center items-center">
              <Image src={walletImg} alt="wallet" />
              <span>المبيعات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#707070] rounded-lg py-2 flex justify-center items-center">
              <Image src={walletImg} alt="wallet" />
              <span>المبيعات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#707070] rounded-lg py-2 flex justify-center items-center">
              <Image src={walletImg} alt="wallet" />
              <span>المبيعات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#707070] rounded-lg py-2 flex justify-center items-center">
              <Image src={walletImg} alt="wallet" />
              <span>المبيعات</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="relative overflow-x-auto mt-10 w-[450px] border border-[#707070] rounded-lg">
        <table className="w-full text-sm text-right text-gray-500 400" p-4>
          <thead className="text-2xl">
            <tr>
              <th scope="col" className="px-6 py-3">
                المبيعات
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b y-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-lg whitespace-nowrap"
              >
                إجمالي المبيعات
              </th>
              <td className="px-6 py-4">---</td>
              <td className="px-6 py-4">---</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-lg whitespace-nowrap"
              >
                تكاليف المنتجات
              </th>
              <td className="px-6 py-4">---</td>
              <td className="px-6 py-4">---</td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-lg whitespace-nowrap"
              >
                كوبونات التخفيض
              </th>
              <td className="px-6 py-4">---</td>
              <td className="px-6 py-4">---</td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-lg whitespace-nowrap"
              >
                الشحن
              </th>
              <td className="px-6 py-4">---</td>
              <td className="px-6 py-4">---</td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-lg whitespace-nowrap"
              >
                الضرائب
              </th>
              <td className="px-6 py-4">---</td>
              <td className="px-6 py-4">---</td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-lg whitespace-nowrap"
              >
                رسوم الدفع الإلكتروني
              </th>
              <td className="px-6 py-4">---</td>
              <td className="px-6 py-4">---</td>
            </tr>
            <tr className="bg-[#F2F2F2]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-lg whitespace-nowrap"
              >
                صافي المبيعات
              </th>
              <td className="px-6 py-4">---</td>
              <td className="px-6 py-4">---</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
