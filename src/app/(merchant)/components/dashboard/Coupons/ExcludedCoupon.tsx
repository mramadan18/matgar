import AlertBar from "@/components/utils/AlertBar";
import React from "react";

const ExcludedCoupon = () => {
  return (
    <div className="flex flex-col gap-4">
      <AlertBar
        title={"هذه الميزة متوفرة فقط فى باقة متجر بلس, متجر سبيشال, متجر برو,"}
      />

      <div>
        <label className="text-lg" htmlFor="category">
          تصنيفات مستثناة
        </label>
        <input
          className="px-4"
          type="text"
          id="category"
          placeholder="اختر ..."
        />
      </div>

      <div>
        <label className="text-lg" htmlFor="brands">
          ماركات مستثناة
        </label>
        <input
          className="px-4"
          type="text"
          id="brands"
          placeholder="اختر ..."
        />
      </div>

      <div>
        <label className="text-lg" htmlFor="clients">
          منتجات مستثناة
        </label>
        <input
          className="px-4"
          type="text"
          id="clients"
          placeholder="ابحث عن المنتج ..."
        />
      </div>

      <div>
        <label className="text-lg" htmlFor="clients">
          مجموعة العملاء المستثناة
        </label>
        <input
          className="px-4"
          type="text"
          id="clients"
          placeholder="اختر ..."
        />
      </div>
    </div>
  );
};

export default ExcludedCoupon;
