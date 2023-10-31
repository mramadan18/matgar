import React from "react";
import { GrCheckmark, GrDocument } from "react-icons/gr";
import { PiUsersThreeBold } from "react-icons/pi";
import { AiOutlineLink } from "react-icons/ai";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import Image from "next/image";
import logoPlusImg from "#/img for salla/pricePage/Group 88.png";

const PackageProContent = () => {
  return (
    <div className="border border-[#707070] py-4 px-8 text-lg">
      <div className="grid grid-cols-[1fr_150px] items-center mt-10">
        <div>
          <h4 className="text-primary">متجر برو</h4>
          <p className="mb-10">باقة التجارة الاحترافية للشركات</p>
          <div className="w-full h-px bg-[#707070]"></div>
          <p className="mt-6">
            الباقة المثالية لإدارة متكاملة لمتجرك بخدمات لا محدودة، مصممة لتقدم
            تجربة استثنائية وإدارة تفصيلية بأحدث الأدوات التسويقية والربط مع
            خدمات الحملات الإعلانية لمنصات التواصل الإجتماعي والربط مع خدمات
            التحليل ومزايا أكثر تدعم توسُّع تجارتك بدون قيود
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
          <p>جميع مزايا باقة (متجر بلس)</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <AiOutlineLink />
          <p>دعم الضريبة</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <PiUsersThreeBold />
          <p> تصنيف مجموعة عملاء</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <BsLaptop />
          <p> إدارة المتجر والموظفين</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <CiDiscount1 />
          <p> كوبونات التسويق بالعمولة</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <GrDocument />
          <p>تفعيل خدمات SEO</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <HiMiniArrowsRightLeft />
          <p> الربط مع الخدمات الإعلانية</p>
        </div>
        <div className="py-1 px-4 bg-[#F2F2F2] flex items-center gap-2 mt-4 rounded-lg">
          <HiMiniArrowsRightLeft />
          <p>الربط مع Google tag Manager</p>
        </div>
      </div>
    </div>
  );
};

export default PackageProContent;
