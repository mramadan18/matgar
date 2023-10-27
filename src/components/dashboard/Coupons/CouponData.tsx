import Image from "next/image";
import React from "react";
import profileImg from "#/img for salla/dashboard/vuesax-broken-profile-2user.png";
import frameImg from "#/img for salla/dashboard/vuesax-broken-frame.png";
import { FcMenu } from "react-icons/fc";
import couponsImg from "#/img for salla/dashboard/icons8-coupon-64.png";
import AlertBar from "@/components/utils/AlertBar";
import { AiOutlineDown } from "react-icons/ai";

const CouponData = () => {
  return (
    <form className="flex flex-col gap-4 mt-8">
      <div>
        <label htmlFor="code" className="text-xl">
          كود الكوبون (حروف انجليزية وارقام وبدون مسافات)
        </label>
        <div className="relative">
          <Image
            src={couponsImg}
            alt={"coupons"}
            width={24}
            height={24}
            className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50"
          />
          <input
            type="text"
            placeholder="كود الكوبون (حروف انجليزية وارقام وبدون مسافات)"
            className="pr-10"
          />
        </div>
      </div>
      <div>
        <label htmlFor="code" className="text-xl">
          نوع الخصم للعميل
        </label>
        <div className="relative">
          <FcMenu className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50 text-2xl" />
          <input type="text" placeholder="نوع الخصم للعميل" className="pr-10" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 w-full">
        <div className="w-1/2">
          <label htmlFor="code" className="text-xl">
            تاريخ بداية الكوبون
          </label>
          <input
            type="date"
            placeholder=""
            className="border border-[#707070] rounded-lg text-right p-2 w-full"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="code" className="text-xl">
            تاريخ انتهاء الكوبون
          </label>
          <input
            type="date"
            placeholder=""
            className="border border-[#707070] rounded-lg text-right p-2 w-full"
          />
        </div>
      </div>

      <div>
        <label htmlFor="free" className="text-xl">
          مع شحن مجاني ؟
        </label>
        <div className="w-full relative rounded-lg overflow-hidden">
          <select
            id="free"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2.5"
          >
            <option selected>نعم</option>
            <option value="no">لا</option>
          </select>

          <AiOutlineDown className="absolute top-1/2 left-2 -translate-y-1/2" />
        </div>
      </div>

      <div>
        <label htmlFor="free" className="text-xl">
          استثناء المنتجات المخفضة
        </label>
        <div className="w-full relative rounded-lg overflow-hidden">
          <select
            id="free"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2.5"
          >
            <option selected>لا</option>
            <option value="yes">نعم</option>
          </select>

          <AiOutlineDown className="absolute top-1/2 left-2 -translate-y-1/2" />
        </div>
      </div>

      <div>
        <label htmlFor="code" className="text-xl">
          الحد الادنى من المشتريات (الحد الادنى للمشتريات غير شامل قيمة الضريبة)
        </label>
        <div className="relative">
          <Image
            src={profileImg}
            alt={"coupons"}
            width={24}
            height={24}
            className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50"
          />
          <input
            type="text"
            placeholder="الحد الادنى من المشتريات (الحد الادنى للمشتريات غير شامل قيمة الضريبة)"
            className="pr-10"
          />
        </div>
      </div>

      <div>
        <label htmlFor="code" className="text-xl">
          عدد مرات الاستخدام للجميع
        </label>
        <div className="relative">
          <Image
            src={frameImg}
            alt={"coupons"}
            width={24}
            height={24}
            className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50"
          />
          <input
            type="text"
            placeholder="عدد مرات الاستخدام للجميع"
            className="pr-10"
          />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="tracking-widest mb-2">كوبون تسويقي</h3>
        <p className="opacity-50 text-base">
          ادخل بيانات المسوّق والعمولة الخاصة به من المبيعات، كما يمكن مشاركة
          رابط الاحصائيات بعد إنشاء الكوبون
        </p>
      </div>

      <AlertBar
        title={"هذه الميزة متوفرة فقط فى باقة متجر بلس, متجر سبيشال, متجر برو,"}
      />
    </form>
  );
};

export default CouponData;
