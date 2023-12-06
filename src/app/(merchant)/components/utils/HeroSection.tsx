"use client";
import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import MainButton from "./MainButton";
import { motion } from "framer-motion";

interface propsValues {
  head: string;
  subHead: string;
  img: string | StaticImport;
}

const HeroSection = ({ head, subHead, img }: propsValues) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -150 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="container overflow-hidden"
    >
      <div className="flex items-center flex-col justify-center">
        <div className="title title--hero w-full center mb-8">
          <h2>{head}</h2>
          <p className="text-primary">{subHead}</p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center gap-5 w-full mb-12">
          <Link href={"/register"}>
            <MainButton textColor="white">أنشئ متجرك مجاناً</MainButton>
          </Link>
          <Link href={"/register"}>
            <MainButton bgColor="white" textColor="black">
              تجربة المنصة
            </MainButton>
          </Link>
        </div>
        <div className="w-full">
          <Image src={img} alt={`${img}`} className="block mx-auto" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
