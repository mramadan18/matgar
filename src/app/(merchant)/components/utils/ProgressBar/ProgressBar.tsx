import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ProgressBar = () => {
  return (
    <div className="h-28 shadow-lg flex justify-around items-center">
      <div className="flex items-center gap-x-3">
        <BsFillCheckCircleFill className="text-[20px] text-primary" />
        <span className="text-2xl font-bold lg:text-4xl">انشاء حساب</span>
      </div>
      <div className="h-[1px] w-32 bg-black hidden lg:block"></div>
      <div className="flex items-center">
        <div className="border border-primary w-10 h-10 rounded-full flex justify-center items-center ml-4 text-2xl font-bold">
          <span>2</span>
        </div>

        <span className="text-2xl font-bold lg:text-4xl">نتعرف عليك</span>
      </div>
      <div className="h-[1px] w-32 bg-black hidden lg:block"></div>
      <div className="flex items-center">
        <div className="border border-primary w-10 h-10 rounded-full flex justify-center items-center ml-4 text-2xl font-bold">
          <span>3</span>
        </div>
        <span className="text-3xl">جاهزيه متجرك</span>
      </div>
    </div>
  );
};

export default ProgressBar;
