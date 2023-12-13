"use client";
import CouponContentForm from "@/app/(generalAdmin)/components/DiscountCoupons/CouponContentForm";
import CouponDataForm from "@/app/(generalAdmin)/components/DiscountCoupons/CouponDataForm";
import CouponExceptionForm from "@/app/(generalAdmin)/components/DiscountCoupons/CouponExceptionForm";
import Breadcrumb from "@/app/(generalAdmin)/components/Utilities/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "@/app/(generalAdmin)/components/Utilities/Breadcrumb/BreadcrumbItem";
import { useState } from "react";

const page = () => {
  const [couponData, setCouponData] = useState(true);
  const [couponContent, setCouponContent] = useState(false);
  const [couponException, setCouponException] = useState(false);

  const handleClick = (value: string) => {
    if (value === "data") {
      setCouponData(true);
      setCouponContent(false);
      setCouponException(false);
    } else if (value === "content") {
      setCouponContent(true);
      setCouponData(false);
      setCouponException(false);
    } else {
      setCouponException(true);
      setCouponData(false);
      setCouponContent(false);
    }
  };

  return (
    <div className="container my-10">
      <Breadcrumb>
        <BreadcrumbItem
          link="/admin/discount-coupons"
          title="كوبونات الخصم"
          separator="/"
        />
        <BreadcrumbItem
          link="/admin/discount-coupons/add-coupon"
          title="اضافة كوبون"
        />
      </Breadcrumb>

      <div className="flex justify-center items-center mt-20">
        <button
          className={`${
            couponData ? "bg-primary-900 text-white" : "bg-[#F7F7F7]"
          } py-3 px-8 w-1/3`}
          onClick={() => handleClick("data")}
        >
          بيانات الكوبون
        </button>
        <button
          className={`${
            couponContent ? "bg-primary-900 text-white" : "bg-[#F7F7F7]"
          } py-3 px-8 w-1/3`}
          onClick={() => handleClick("content")}
        >
          محتوي في الكوبون
        </button>
        <button
          className={`${
            couponException ? "bg-primary-900 text-white" : "bg-[#F7F7F7]"
          } py-3 px-8 w-1/3`}
          onClick={() => handleClick("exception")}
        >
          مستثنى من الكوبون
        </button>
      </div>

      {couponData && <CouponDataForm />}
      {couponContent && <CouponContentForm />}
      {couponException && <CouponExceptionForm />}
    </div>
  );
};

export default page;
