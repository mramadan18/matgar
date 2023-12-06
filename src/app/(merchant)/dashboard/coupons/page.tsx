"use client";
import React, { useState } from "react";
import Image from "next/image";
import AddButton from "@/components/dashboard/AddButton/AddButton";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import bokenImg from "#/img for salla/dashboard/vuesax-broken-setting-4.png";
import couponsImg from "#/img for salla/dashboard/icons8-coupon-64.png";
import Modal from "@/components/utils/Modal";
import { AiOutlineClose, AiOutlineFolderAdd } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineFolderRemove } from "react-icons/hi";
import CouponData from "@/components/dashboard/Coupons/CouponData";
import IncludedCoupon from "@/components/dashboard/Coupons/IncludedCoupon";
import ExcludedCoupon from "@/components/dashboard/Coupons/ExcludedCoupon";

const page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  return (
    <section className="w-full">
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive
            name={"كوبونات التخفيض"}
            url={"/dashboard/coupons"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>

      <div className="flex justify-between items-center mt-8">
        <AddButton
          title={"كوبون جديد"}
          handleClick={() => {
            setModalOpen(true);
          }}
        />
        <div className="flex justify-center items-center gap-2 ml-8">
          <Image src={bokenImg} alt={"تصفية"} />
          <span>تصفية</span>
        </div>
      </div>

      <div className="border border-[#707070] py-5 mt-8 rounded-lg tracking-widest">
        <div className="flex justify-start items-center gap-4 px-5">
          <Image src={couponsImg} alt={"coupons"} />
          <h2>كوبونات التخفيض</h2>
        </div>
        <div className="flex justify-start items-center gap-5 px-5">
          <div className="relative pr-4 before:absolute before:top-1/2 before:right-0 before:-translate-y-1/2 before:w-3 before:h-2 before:bg-[#00FF12] before:rounded-full">
            مفعل
          </div>
          <div className="relative pr-4 before:absolute before:top-1/2 before:right-0 before:-translate-y-1/2 before:w-3 before:h-2 before:bg-[#E08000] before:rounded-full">
            منتهي الصلاحية
          </div>
          <div className="relative pr-4 before:absolute before:top-1/2 before:right-0 before:-translate-y-1/2 before:w-3 before:h-2 before:bg-[#B8B8B8] before:rounded-full">
            مغلق
          </div>
        </div>
        <div className="relative overflow-x-auto mt-2">
          <table className="w-full text-right">
            <thead className="bg-[#E9E9E9]">
              <tr>
                <th className="px-6 py-3">عنوان الكوبون</th>
                <th className="px-6 py-3">تاريخ بداية الكوبون</th>
                <th className="px-6 py-3">تاريخ انتهاء الكوبون</th>
              </tr>
            </thead>

            <tbody className="mt-5">
              <tr>
                <td className="p-6 text-lg">لا توجد كوبونات بعد</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="shadow-lg md:w-[650px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-4 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>إنشاء كوبونات التخفيض</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="bg-white py-4 px-6 text-lg max-h-[70vh] overflow-y-auto">
            <div className="flex justify-between items-center border border-[#707070] rounded-lg">
              <div
                className={`${
                  first && "bg-primary text-white"
                } flex justify-center items-center gap-2 py-2 px-4 cursor-pointer`}
                onClick={() => {
                  setFirst(true);
                  setSecond(false);
                  setThird(false);
                }}
              >
                <FiMoreHorizontal />
                <span>بيانات الكوبون</span>
              </div>
              <div
                className={`${
                  second && "bg-primary text-white"
                } flex justify-center items-center gap-2 py-2 px-4 cursor-pointer`}
                onClick={() => {
                  setFirst(false);
                  setSecond(true);
                  setThird(false);
                }}
              >
                <AiOutlineFolderAdd />
                <span>مشمول في الكوبون</span>
              </div>
              <div
                className={`${
                  third && "bg-primary text-white"
                } flex justify-center items-center gap-2 py-2 px-4 cursor-pointer`}
                onClick={() => {
                  setFirst(false);
                  setSecond(false);
                  setThird(true);
                }}
              >
                <HiOutlineFolderRemove />
                <span>مستثنى من الكوبون</span>
              </div>
            </div>

            {first && <CouponData />}
            {second && <IncludedCoupon />}
            {third && <ExcludedCoupon />}
          </div>
          <div className="border-t border-[#707070] bg-[#F2F2F2] py-2 px-4">
            <button
              className="py-1 px-8 text-lg font-medium"
              onClick={() => setModalOpen(false)}
            >
              حفظ
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default page;
