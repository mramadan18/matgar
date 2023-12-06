"use client";
import React, { useEffect, useRef } from "react";
import photoCard from "#/img for salla/SpecialEcommercePage/133___1-removebg-preview.png";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const ApplyNowCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      itemControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="mb-40 visible mt-[120px]">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={itemControls}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white w-full flex flex-col items-center rounded-big p-12 lg:pr-48 relative bg-[#0279DE] rounded-2xl md:flex-row"
        >
          <div className="flex-grow text-right w-full">
            <h2
              className="text-5xl font-bold mb-5 leading-12 anime-item w-full"
              style={{
                transform: "translateY(0px) translateZ(0px)",
                opacity: 1,
              }}
            >
              متجر سبيشل{" "}
            </h2>
            <div className="flex items-start w-full mb-9">
              <p
                className="anime-item opacity-0 w-full"
                style={{
                  transform: "translateY(0px) translateZ(0px)",
                  opacity: 1,
                }}
              >
                التجارة التى تليق بطموحك{" "}
              </p>
            </div>

            <div
              className="anime-item mb-6"
              style={{
                transform: "translateY(0px) translateZ(0px)",
                opacity: 1,
              }}
            >
              <a
                href="https://s.salla.sa/register"
                rel="noopener"
                target="_blank"
                className="bg-[#606061]  py-3
          px-16 rounded-full transition duration-300 focus:outline-none inline-flex text-center font-bold hover:bg-[#fff] text-white"
              >
                <span className="fix-font">تقدم بالطلب الآن</span>
              </a>
            </div>
          </div>
          <div className="md:mt-0 mt-[25px] flex-shrink-0 relative -mb-12 md:-mb-12 block w-full md:w-[40%]">
            <Image
              alt="صورة توضيحية"
              className=" block anime-item ls-is-cached lazyloaded"
              src={photoCard}
              style={{
                transform: "translateY(0px) translateZ(0px)",
                opacity: 1,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplyNowCard;
