import Image from "next/image";
import React from "react";

interface PropsValue {
  img: any;
  status: string;
  color: string;
  active?: boolean;
}

const OrdersStatusItem = ({ img, status, color, active }: PropsValue) => {
  return (
    <div
      className={`flex flex-col border border-[#707070] ${
        active ? "bg-[#0279DE]" : "bg-white"
      } text-white text-lg p-4`}
    >
      <Image className="mb-16" src={img} alt="watch" />
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
          ></span>
          <p>{status}</p>
        </div>
        <span>0</span>
      </div>
    </div>
  );
};

export default OrdersStatusItem;
