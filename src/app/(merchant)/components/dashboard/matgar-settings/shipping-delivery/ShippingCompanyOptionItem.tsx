import { Props } from "next/script";
import React from "react";

interface PropsValue {
  title: string;
  desc: string;
  active: boolean;
}

const ShippingCompanyOptionItem = ({ title, desc, active }: PropsValue) => {
  return (
    <div className="flex justify-between items-center border-b border-[#707070] mt-6 pb-6 last:border-none">
      <div className="mr-8">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer ml-8">
        <input type="checkbox" className="sr-only peer" checked={active} />
        <div className="w-11 h-6 bg-white rounded-full border border-[#707070] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary after:shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]" />
      </label>
    </div>
  );
};

export default ShippingCompanyOptionItem;
