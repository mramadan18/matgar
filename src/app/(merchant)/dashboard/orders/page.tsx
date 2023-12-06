"use client";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import serviceImg from "#/img for salla/dashboard/icons8-handbag-24.png";
import boxImg from "#/img for salla/dashboard/icons8-box-96.png";
import watchImg from "#/img for salla/dashboard/icons8-wristwatch-96.png";
import Image from "next/image";
import React from "react";
import OrdersStatusItem from "@/components/dashboard/orders/OrdersStatusItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper/modules";
import Link from "next/link";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import AddButton from "@/components/dashboard/AddButton/AddButton";

const page = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive name="الطلبات" url="/dashboard/orders" />
        </BreadcrumbList>
        <HelpButton />
      </div>

      <div className="flex justify-between items-center mt-8">
        <Link className="relative" href={"/dashboard/orders/create-order"}>
          <AddButton title={"طلب جدبد"} />
        </Link>
        <div className="flex justify-center items-center gap-6">
          <div className="flex justify-center items-center gap-2">
            <Image src={boxImg} alt="box" width={38} />
            <span>الحجوزات</span>
          </div>
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

      <Swiper
        slidesPerView={1.5}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
        }}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <OrdersStatusItem
            img={watchImg}
            status="إانتظار الدفع"
            color="#ff0000"
            active
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrdersStatusItem
            img={watchImg}
            status="إانتظار الدفع"
            color="#ff0000"
            active
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrdersStatusItem
            img={watchImg}
            status="إانتظار الدفع"
            color="#ff0000"
            active
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrdersStatusItem
            img={watchImg}
            status="إانتظار الدفع"
            color="#ff0000"
            active
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrdersStatusItem
            img={watchImg}
            status="إانتظار الدفع"
            color="#ff0000"
            active
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrdersStatusItem
            img={watchImg}
            status="إانتظار الدفع"
            color="#ff0000"
            active
          />
        </SwiperSlide>
        <SwiperSlide>
          <OrdersStatusItem
            img={watchImg}
            status="إانتظار الدفع"
            color="#ff0000"
            active
          />
        </SwiperSlide>
      </Swiper>

      <div className="mt-14 border border-[#707070] rounded-lg py-4">
        <div className="flex justify-start items-center gap-4 border-b border-[#707070] px-6 pb-4">
          <input type="checkbox" id="orders" />
          <label className="m-0 text-lg" htmlFor="orders">
            الطلبات
          </label>
          <div className="flex justify-center items-center gap-2 bg-[#0279DE] px-2 rounded-full text-white">
            <span>بانتظار الدفع 0</span>
            <span className="w-4 h-4 bg-[#f00] text-white rounded-full flex justify-center items-center text-xs">
              x
            </span>
          </div>
        </div>

        <p className="p-4 text-lg opacity-50">لا يوجد طلبات بعد</p>
      </div>
    </div>
  );
};

export default page;
