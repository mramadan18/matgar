import Image from "next/image";
import React from "react";

interface PropsValue {
  title: string;
  desc: string;
  img: any;
  isPro?: boolean;
  isNew?: boolean;
}

const MenuAddProudctItem = ({ title, desc, img, isPro, isNew }: PropsValue) => {
  return (
    <div className="flex justify-start items-center gap-3 text-2xl cursor-pointer">
      <Image src={img} alt="منتج" width={50} height={50} priority />

      <div className="flex flex-col items-start">
        <div className="flex gap-4">
          <h4 className="text-black">{title}</h4>
          {isPro && (
            <span className="px-2 h-8 bg-yellow-200 text-black rounded-full text-sm flex justify-center items-center">
              بلس / برو
            </span>
          )}

          {isNew && (
            <span className="px-2 w-12 h-8 bg-red-500 text-white rounded-full text-sm flex justify-center items-center">
              جديد
            </span>
          )}
        </div>
        <p className="text-black opacity-50 mt-1">{desc}</p>
      </div>
    </div>
  );
};

export default MenuAddProudctItem;
