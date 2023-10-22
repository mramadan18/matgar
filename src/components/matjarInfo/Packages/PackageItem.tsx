import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface PropsValue {
  name: string;
  desc: string;
  price: string;
}

const PackageItem = ({ name, desc, price }: PropsValue) => {
  return (
    <div className="flex flex-col p-10 shadow-2xl bg-white text-center">
      <h2 className="text-primary font-medium">{name}</h2>
      <p className="text-lg">{desc}</p>
      <h2 className="mt-6 mb-12 text-2xl text-primary">{price}</h2>
      <div className="package-advantages">
        <h2>مزايا الباقه</h2>
        <div className="package-advantage">
          <BsFillCheckCircleFill className="text-[36px]" />
          <h3>عدد لا محدود من المنتجات</h3>
        </div>
        <div className="package-advantage">
          <BsFillCheckCircleFill className="text-[36px]" />
          <h3>عدد لا محدود من الطلبات</h3>
        </div>
        <div className="package-advantage">
          <BsFillCheckCircleFill className="text-[36px]" />
          <h3>عدد لا محدود من العملاء</h3>
        </div>
        <div className="package-advantage">
          <BsFillCheckCircleFill className="text-[36px]" />
          <h3>كوبونات التخفيض</h3>
        </div>
        <div className="package-advantage">
          <BsFillCheckCircleFill className="text-[36px]" />
          <h3>استقبال استفسارات وتقييم العملاء</h3>
        </div>
      </div>
      <button className="choose-package">اختر الباقه</button>
    </div>
  );
};

export default PackageItem;
