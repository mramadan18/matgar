import Image from "next/image";
import React from "react";
import infoImg from "#/img for salla/dashboard/icons8-info-popup-32.png";
import arrowDown from "#/img for salla/dashboard/arrow-down.svg";

const HelpButton = () => {
  return (
    <button className="bg-primary rounded-full h-14 flex justify-between items-center px-6 gap-2">
      <Image src={infoImg} alt="down" priority width={24} height={24} />
      <span className="text-xl text-black">مساعدة</span>
      <Image src={arrowDown} alt="down" priority width={18} height={18} />
    </button>
  );
};

export default HelpButton;
