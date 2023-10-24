import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface PropsValue {
  name: string;
  desc: string;
  price: string;
}

const PackageItem = ({ name, desc, price }: PropsValue) => {
  return (
    <div className="flex flex-col py-10 px-6 w-1/3 shadow-2xl bg-white text-center">
      <h2 className="text-primary font-medium">{name}</h2>
      <p className="text-lg">{desc}</p>
      <h2 className="mt-6 mb-12 text-2xl text-primary">{price}</h2>
      <div className="flex flex-col gap-6 mb-10">
        <h2 className="font-normal text-right">مزايا الباقه</h2>
        <div className="flex justify-start items-center gap-4">
          <BsFillCheckCircleFill className="text-[36px] text-primary" />
          <h3>عدد لا محدود من المنتجات</h3>
        </div>
        <div className="flex justify-start items-center gap-4">
          <BsFillCheckCircleFill className="text-[36px] text-primary" />
          <h3>عدد لا محدود من الطلبات</h3>
        </div>
        <div className="flex justify-start items-center gap-4">
          <BsFillCheckCircleFill className="text-[36px] text-primary" />
          <h3>عدد لا محدود من العملاء</h3>
        </div>
        <div className="flex justify-start items-center gap-4">
          <BsFillCheckCircleFill className="text-[36px] text-primary" />
          <h3>كوبونات التخفيض</h3>
        </div>
        <div className="flex justify-start items-center gap-4">
          <BsFillCheckCircleFill className="text-[36px] text-primary" />
          <h3>استقبال استفسارات وتقييم العملاء</h3>
        </div>
      </div>
      <button className="py-2 text-lg">اختر الباقه</button>
    </div>
  );
};

export default PackageItem;
