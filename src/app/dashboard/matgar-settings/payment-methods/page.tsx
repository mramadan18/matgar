
"use client";
import React, { useState } from "react";import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import Image from "next/image";
import couponsImg from "#/img for salla/dashboard/icons8-coupon-64.png";
import Modal from "@/components/utils/Modal";
import { AiOutlineClose } from "react-icons/ai";
import TaxNumber from"./taxnumber"
import { AiOutlineDown } from "react-icons/ai";

const page = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
  return (
    <section>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive
            name={"إعدادات المتجر"}
            url={"/dashboard/matgar-settings"}
          />
          /
          <BreadcrumbItemActive
            name={"عمليات الدفع الاكتروني"}
            url={"/dashboard/magtar-settings/payment-methods"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>
    
      <div className="border border-[#707070] py-5 mt-8 rounded-lg tracking-widest">
        <div className="flex justify-start items-center gap-4 px-5">
          <Image src={couponsImg} alt={"coupons"} />
          <h2> عمليات الدفع الاكتروني</h2>
        </div>
      <div>       
           <p className="p-5 text-lg opacity-50 ">تسمح لك هذه الخاصية البحث عن العمليات التي تمت في متجرك بواسطة وسائل الدفع الإلكتروني (خلال الـ 30 يوم الماضية)</p>
</div>
<h2 className="px-5"> البحث بواسطة:</h2>
<div className="relative rounded-lg overflow-hidden px-5 ">
            <select
              id="countries"
              className="block w-full rounded-md border-0 p-2.5 opacity-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6  "
            >
         <option selected>اخر اربع ارقام من البطاقة</option>
              <option value="2"> 2222</option>
              <option value="1">1111</option>
              <option value="5">5555</option>
              <option value="7">777</option>
            </select>

            <AiOutlineDown className="absolute top-1/2 left-5 -translate-y-1/2 opacity-50 " />
          </div>
          <div className="flex  items-start py-3 px-5 ">

          <div className="w-1/3 relative rounded-lg overflow-hidden">
          <input
          type="text"
          name=" البطاقة"
          id="البطاقة"
          className="w-full rounded-md border-0 p-2.5 opacity-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="اخر اربع ارقام من البطاقة"
        />
        
          </div>

          <div className="w-1/6 relative rounded-lg overflow-hidden px-3">
         <button
              className="py-1 px-8 text-lg font-medium"
              onClick={() => setModalOpen(true)}
            >
              بحث
            </button>
          </div>
        </div>
        <div className=" title--hero w-full center mt-8">
          <p
            className="opacity-70 "
          >
لم يتم العثور على اي نتائج للبحث
          </p>
        </div>
      </div>
     

      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="shadow-lg md:w-[650px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-4 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>الرقم الضريبي للمنشأة</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="bg-white py-4 px-6 text-lg max-h-[70vh] overflow-y-auto">
          <TaxNumber/>
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
