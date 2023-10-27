import AlertBar from "@/components/utils/AlertBar";
import React from "react";

const IncludedCoupon = () => {
  return (
    <div className="flex flex-col gap-4">
      <AlertBar
        title={"هذه الميزة متوفرة فقط فى باقة متجر بلس, متجر سبيشال, متجر برو,"}
      />

      <div>
        <label className="text-lg" htmlFor="category">
          تصنيفات مشمولة
        </label>
        <input className="px-4" type="text" id="category" placeholder="اختر" />
      </div>

      <div>
        <label className="text-lg" htmlFor="brands">
          منتجات مشمولة
        </label>
        <input
          className="px-4"
          type="text"
          id="brands"
          placeholder="ابحث عن المنتج ..."
        />
      </div>

      <div>
        <label className="text-lg" htmlFor="clients">
          مجموعة العملاء المشمولة
        </label>
        <input
          className="px-4"
          type="text"
          id="clients"
          placeholder="اختر ..."
        />
      </div>

      <div>
        <label className="text-lg" htmlFor="clients">
          دومين بريد العميل
        </label>
        <input
          className="px-4"
          type="text"
          id="clients"
          placeholder="@ matjer.com"
        />
      </div>
    </div>
  );
};

export default IncludedCoupon;
