"use client";
import React, { useEffect, useRef } from "react";
import rightImg from "#/img for salla/homePage/mqdefault-removebg-preview.png";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const Documentation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.2 }}
      className="py-20 bg-[#F2F2F2] flex flex-col justify-center items-center"
    >
      <Image src={rightImg} alt="right" priority width={400} height={400} />

      <h2 className="text-5xl font-bold tracking-wider">موثق</h2>
      <p className="text-4xl my-6">. وثق متجرك لتنال ثقة عملائك</p>
      <button className="bg-primary rounded-xl text-xl h-14 w-32 ">
        توثيق الآن
      </button>
    </motion.div>
  );
};

export default Documentation;
