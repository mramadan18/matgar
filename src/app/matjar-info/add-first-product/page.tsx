"use client";
import Layout from "../Layout";
import Previews from "@/components/utils/Previews";

import cartonImg from "#/img for salla/dashboard/icons8-carton-50.png";
import ProductType from "@/components/matjarInfo/AddFirstProduct/ProductType";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper/modules";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const page = () => {
  return (
    <Layout>
      <div className="w-4/5 mx-auto my-20">
        <h1 className="text-3xl font-bold mb-3">أضف اول منتج</h1>
        <p className="text-xl">
          .ابدأ بإضافة تفاصيل أول منتج تود عرضه في متجرك
        </p>
        <h2 className="mt-10">اختر نوع المنتج</h2>
        <div className="flex justify-start items-center gap-4 mt-4">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1500: {
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
            }}
            className="mySwiper mt-10"
          >
            <SwiperSlide>
              <ProductType
                img={cartonImg}
                title={"منتج جاهز"}
                desc={"المنتجات الملموسة والقابلة للشحن"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductType
                img={cartonImg}
                title={"خدمة حسب الطلب"}
                desc={"التصميم، الطباعة، البحوث الكتابة"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductType
                img={cartonImg}
                title={"أكل"}
                desc={"المأكولات والمشروبات التي تتطلب شحن خاص"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductType
                img={cartonImg}
                title={"منتج رقمي"}
                desc={"الكتب الإلكترونية،الدورات ملفات للتحميل"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="matjar-logo">
          <p className="mt-6 text-2xl">شعار المتجر (اختياري)</p>
          <Previews />
        </div>
        <form>
          <div className="flex-col mt-4">
            <label className="text-2xl" htmlFor="product-name">
              اسم المنتج
            </label>
            <input
              type="text"
              className="py-3 px-4"
              id="product-name"
              placeholder="أدخل اسم المنتج"
            />
          </div>
          <div className="flex-col mt-6">
            <label className="text-2xl" htmlFor="product-price">
              سعر المنتج
            </label>
            <input
              type="text"
              className="py-3 px-4"
              id="product-price"
              placeholder="حدد سعر المنتج بالدولار"
            />
          </div>
          <div className="flex-col mt-6">
            <label className="text-2xl" htmlFor="product-quantity">
              كميه المنتج
            </label>
            <input
              type="text"
              className="py-3 px-4"
              id="product-quantity"
              placeholder="حدد الكمية المتوفرة من المنتج"
            />
          </div>
        </form>
        <div className="flex justify-between my-14">
          <div className="flex items-center gap-x-6">
            <Link
              href="/we-get-to-know-you"
              className="text-2xl flex justify-center items-center gap-4"
            >
              <BsChevronRight className="!text-xl text-black hover:text-primary" />
              <span>السابق</span>
            </Link>
          </div>

          <div className="flex gap-x-6">
            <Link href="/matjar-info/trader-info">
              <button className="rounded-xl py-3 px-14 text-2xl">تأكيد</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
