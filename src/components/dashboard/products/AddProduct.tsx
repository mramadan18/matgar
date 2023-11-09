"use client";

import React, { useState } from "react";
import Image from "next/image";
import photo from "../../../../public/img for salla/dashboard/icons8-photo-48.png";
import img from "../../../../public/img for salla/dashboard/icons8-picture-50.png";
import nameImg from "../../../../public/img for salla/dashboard/icons8-handbag-24.png";
import moneyImg from "../../../../public/img for salla/dashboard/icons8-money-30.png";
import reportImg from "../../../../public/img for salla/dashboard/icons8-report-50.png";
import dollarImg from "../../../../public/img for salla/dashboard/dollar.png";
import arrowImg from "../../../../public/img for salla/dashboard/arrow-down.svg";

const AddProduct = () => {
  const [imgSelected, setImgSelected] = useState(photo);

  return (
    <div className="mt-10 w-full">
      <div className="flex flex-col items-start rounded-xl overflow-hidden shadow-lg w-full md:w-[515px]">
        <label
          htmlFor="uploadFile"
          className="img overflow-hidden rounded-xl relative bg-[#D6D6D6] w-full md:w-[515px] h-[390px] flex justify-center items-center"
        >
          <Image src={imgSelected} alt="photo" priority />
          <label
            htmlFor="uploadFile"
            className="absolute bottom-2 left-2 md:w-[200px] h-[30px] bg-white rounded-full flex justify-center items-center gap-4"
          >
            <Image src={img} alt="img" priority />
            <span className="text-black">إضافة صورة او فيديو</span>
          </label>

          <input
            className="hidden w-full h-full"
            type="file"
            id="uploadFile"
            accept="video/*,image/*"
          />
        </label>
        <div className="p-4 w-full flex flex-col gap-4">
          <div className="relative">
            <Image
              className="absolute top-1/2 right-4 -translate-y-1/2 opacity-50"
              src={nameImg}
              alt="name"
              priority
              width={18}
              height={18}
            />
            <input
              type="text"
              placeholder="منتج جاهز - أدخل اسم المنتج"
              className="border border-gray-500 w-full px-14 lg:px-10"
            />
          </div>
          <div className="relative">
            <Image
              className="absolute top-1/2 right-4 -translate-y-1/2"
              src={moneyImg}
              alt="name"
              priority
              width={18}
              height={18}
            />
            <input
              type="text"
              placeholder="السعر"
              className="border border-gray-500 w-full px-14 lg:px-10"
            />
            <span className="w-10 h-full border border-black absolute top-0 left-0 flex justify-center items-center">
              <Image src={dollarImg} alt="dollar" />
            </span>
          </div>
          <div className="relative">
            <Image
              className="absolute top-1/2 right-4 -translate-y-1/2"
              src={reportImg}
              alt="name"
              priority
              width={18}
              height={18}
            />
            <input
              type="text"
              placeholder="كمية غير محدودة"
              className="border border-gray-500 w-full px-14 lg:px-10"
            />
          </div>
          <div className="relative">
            <Image
              className="absolute top-1/2 right-4 -translate-y-1/2"
              src={moneyImg}
              alt="name"
              priority
              width={18}
              height={18}
            />
            <select className="border border-gray-500 w-full py-[6px] px-14 lg:px-10 relative">
              <option defaultChecked>اختر تصنيف المنتج</option>
            </select>
            <Image
              src={arrowImg}
              alt="arrow"
              className="absolute top-1/2 left-28 -translate-y-1/2"
              width={18}
              height={18}
              priority
            />
            <input
              className="w-24 h-full border border-black absolute top-0 left-0 flex justify-center items-center text-center"
              placeholder="أضف تصنيف"
            />
          </div>
          <div className="relative">
            <Image
              className="absolute top-1/2 right-[12rem] -translate-y-1/2"
              src={arrowImg}
              alt="arrow"
              width={18}
              height={18}
              priority
            />
            <select className="border border-gray-500 w-full py-[6px] px-14 lg:px-10 relative text-center">
              <option defaultChecked>المزيد</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0279DE] py-2 text-lg mt-[-1rem]"
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
