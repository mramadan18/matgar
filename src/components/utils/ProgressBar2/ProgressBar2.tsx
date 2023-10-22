import React from "react";
import "./ProgressBar2.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ProgressBar2 = () => {
  return (
    <div className="h-28 shadow-lg flex justify-around items-center">
      <div className="flex items-center gap-x-3">
        <BsFillCheckCircleFill className="text-[36px]" />
        <span className="text-4xl	">انشاء حساب</span>
      </div>
      <div className="h-[1px] w-32 bg-black"></div>
      <div className="flex items-center gap-x-3">
        <BsFillCheckCircleFill className="text-[36px]" />
        <span className="text-4xl">نتعرف عليك</span>
      </div>
      <div className="h-[1px] w-32 bg-black"></div>
      <div className="flex items-center">
        <div className="border border-primary w-10 h-10 rounded-full flex justify-center items-center ml-4 text-2xl font-bold">
          <span>3</span>
        </div>
        <span className="text-primary text-4xl">جاهزيه متجرك</span>
      </div>
    </div>
  );
};

export default ProgressBar2;
