import Image from "next/image";
import React from "react";
import { BiPlus } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface PropsValue {
  isPro?: boolean;
  img: any;
  type: string;
  desc: string;
  price: string;
  f1: string;
  f2: string;
  f3: string;
}

const Package = ({ isPro, img, type, desc, price, f1, f2, f3 }: PropsValue) => {
  return (
    <div className="flex flex-col gap-4 pt-8 w-[400px] min-h-[600px] shadow-xl bg-white border border-[#707070] relative overflow-hidden">
      {isPro && (
        <div className="absolute top-[2.2rem] left-[-43px] -rotate-45 p-1 bg-[#FF0000] text-white w-44 text-center">
          اختيار التجار
        </div>
      )}
      <div className="flex flex-col items-center">
        <Image src={img} alt={"logo"} width={100} height={100} />
        <h4 className="text-primary tracking-widest font-medium">{type}</h4>
        <p>{desc}</p>

        <div className="flex justify-center items-center gap-2 mt-4">
          <h2 className="text-primary text-4xl font-normal">{price}</h2>
          <div className="flex flex-col text-xs">
            <span>دولار</span>
            <span className="text-primary">شهرياً</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start text-lg px-6">
        <p className="font-medium tracking-wider">مزايا الباقة :</p>

        <div className="mt-4">
          <div className="flex items-center gap-3 mb-3">
            <BsFillCheckCircleFill className="text-xl text-primary" />
            <p className="font-medium tracking-wider">{f1}</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <BsFillCheckCircleFill className="text-xl text-primary" />
            <p className="font-medium tracking-wider">{f2}</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <BsFillCheckCircleFill className="text-xl text-primary" />
            <p className="font-medium tracking-wider">{f3}</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <BiPlus className="text-xl" />
            <p className="font-medium tracking-wider">مزايا أكثر لمتجرك</p>
          </div>
        </div>
      </div>

      <div className="border border-[#707070] bg-[#F2F2F2] pt-2 pb-6 px-6">
        <h3 className="font-medium tracking-wider">اختر المدة :</h3>

        <div className="mt-2">
          <div className="flex items-center gap-2">
            <input name="paln" id="one" type="radio" />
            <label htmlFor="one" className="text-lg font-medium">
              سنتين
            </label>
            <span className="opacity-50 line-through">700 $</span>
            <span className="font-medium">599 $</span>
            <span className="w-20 h-6 flex justify-center items-center rounded-full bg-[#f00] text-xs">
              خصم 25 %
            </span>
          </div>
          <div className="flex items-center gap-2">
            <input name="paln" id="one" type="radio" />
            <label htmlFor="one" className="text-lg font-medium">
              سنة
            </label>
            <span className="opacity-50 line-through">470 $</span>
            <span className="font-medium">290 $</span>
            <span className="w-20 h-6 flex justify-center items-center rounded-full bg-[#f00] text-xs">
              خصم 30 %
            </span>
          </div>
          <div className="flex items-center gap-2">
            <input name="paln" id="one" type="radio" />
            <label htmlFor="one" className="text-lg font-medium">
              شهر
            </label>
            <span className="font-medium">290 $</span>
          </div>
        </div>

        <button className="text-lg w-full py-2 mt-14">اشترك الآن</button>
      </div>
    </div>
  );
};

export default Package;
