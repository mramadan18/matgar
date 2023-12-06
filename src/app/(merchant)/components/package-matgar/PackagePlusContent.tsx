import React from "react";
import { GrCheckmark, GrDocument } from "react-icons/gr";
import { BiCart, BiWallet } from "react-icons/bi";
import { AiOutlineEye, AiOutlineLink } from "react-icons/ai";
import {
  LiaBoxSolid,
  LiaPlusCircleSolid,
  LiaShippingFastSolid,
} from "react-icons/lia";
import { BsLaptop } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import Image from "next/image";
import logoPlusImg from "#/img for salla/pricePage/Group 88.png";

const PackagePlusContent = () => {
  return (
    <div className="border border-[#707070] py-4 px-8 text-lg">
      <div className="grid grid-cols-[1fr_150px] items-center mt-10">
        <div>
          <h4 className="text-primary">متجر بلس</h4>
          <p className="mb-10">باقة الخدمات المتقدمة</p>
          <div className="w-full h-px bg-[#707070]"></div>
          <p className="mt-6">
            باقة تميز متجرك وتقدم لعملائك تنوع وسائل الدفع الإلكتروني والربط مع
            أكبر شركات الشحن والمزيد لتبدأ رحلة ارباحك
          </p>
        </div>
        <div>
          <Image src={logoPlusImg} alt={"plus"} width={150} />
        </div>
      </div>

      <h3 className="tracking-wider mt-6 relative after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:h-px after:w-[calc(100%-90px)] after:bg-[#707070]">
        مزايا الباقة
      </h3>
      <div className="mt-4">
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <GrCheckmark />
          <p>جميع مزايا باقة (متجر بيسك)</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <AiOutlineLink />
          <p> ربط المتجر بدومين خاص</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <BiWallet />
          <p> تفعيل الدفع الإلكتروني</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <LiaShippingFastSolid />
          <p> شركات الشحن</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <BiCart />
          <p> استهداف السلات المتروكة</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <LiaPlusCircleSolid />
          <p> دعم كافة أنواع المنتجات</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <GrDocument />
          <p> الإحصائيات و التقارير</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <BsLaptop />
          <p> تصميم واجهة المتجر</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <RiPagesLine />
          <p> الصفحات التعريفية</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <AiOutlineEye />
          <p> تخصيص خيارات المتجر</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <CiDiscount1 />
          <p> كوبونات التخفيض والعروض الخاصة</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <LiaPlusCircleSolid />
          <p> ربط الخدمات الإضافية</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <LiaBoxSolid />
          <p> جرد المنتجات\المخزون</p>
        </div>
      </div>
    </div>
  );
};

export default PackagePlusContent;
