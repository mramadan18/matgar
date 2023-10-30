import AlertBar from "@/components/utils/AlertBar";
import React from "react";

const TaxNumber = () => {
  return (
    <div className="flex flex-col gap-4">
      <AlertBar
        title={"هذه الميزة متوفرة فقط فى باقة متجر بلس, متجر سبيشال, متجر برو,"}
      />

      <div>
        <label className="text-lg" htmlFor="category">
        الرقم الضريبي للمنشأة
        </label>
        <input className="px-4" type="text" id="category" placeholder="ادخل الرقم الضريبي للمنشأة" />
      </div>
      <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="الرقم"
                      name="الرقم"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6 mb-5">
                    <label htmlFor="الرقم" className="font-medium text-gray-900">
                    عرض الرقم الضريبي اسفل المتجر
                    </label>
                    <p className="text-gray-500">سيتم عرض الرقم الضريبي للمستخدمين اسفل المتجر</p>
                  </div>
                </div>
    </div>
  );
};

export default TaxNumber;
