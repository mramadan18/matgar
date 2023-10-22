import React from "react";
import rightImg from "#/img for salla/homePage/mqdefault-removebg-preview.png";
import Image from "next/image";

const Documentation = () => {
  return (
    <div className="py-20 bg-[#F2F2F2] flex flex-col justify-center items-center">
      <Image src={rightImg} alt="right" priority width={400} height={400} />

      <h2 className="text-5xl font-bold tracking-wider">موثق</h2>
      <p className="text-4xl my-6">. وثق متجرك لتنال ثقة عملائك</p>
      <button className="bg-primary rounded-xl text-xl h-14 w-32 ">
        توثيق الآن
      </button>
    </div>
  );
};

export default Documentation;
