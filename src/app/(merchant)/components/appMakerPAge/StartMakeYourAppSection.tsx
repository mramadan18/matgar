"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { motion, useAnimation, useInView } from "framer-motion";

interface propsValues {
  h2?: string;
  img: string | StaticImport;
  h2second: string;
  h3?: string;
  h5?: string;
  p: string;
}
const StartMakeYourAppSection = (props: propsValues) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      itemControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="mb-40 visible">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={itemControls}
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container m-auto"
      >
        <div className="block-title text-center mb-10 py-16  block">
          <h2
            className="text-primary text-4xl font-bold anime-item opacity-0"
            style={{ transform: "translateY(0px) translateZ(0px)", opacity: 1 }}
          >
            {props.h2}
          </h2>
        </div>
        <div className="text-white w-full flex flex-col-reverse items-center rounded-big p-12  relative bg-[#0279DE] rounded-2xl md:flex-row">
          <div className="md:mt-0 mt-[25px] flex-shrink-0 relative  -mb-20 transform  md:-mb-40 block w-[60%] md:w-[20%]">
            <Image
              alt="صورة توضيحية"
              className=" block anime-item ls-is-cached lazyloaded"
              src={props.img}
              style={{
                transform: "translateY(0px) translateZ(0px)",
                opacity: 1,
              }}
            />
          </div>
          <div className="flex-grow text-right w-full">
            <h2
              className="text-5xl font-bold mb-5 leading-12 anime-item w-full"
              style={{
                transform: "translateY(0px) translateZ(0px)",
                opacity: 1,
              }}
            >
              {props.h2second}{" "}
            </h2>
            <div className="flex flex-col justify-center mb-8 items-end w-full">
              <h3
                className="text-3xl  font-medium max-w-sm mb-2 leading-12 anime-item"
                style={{
                  transform: "translateY(0px) translateZ(0px)",
                  opacity: 1,
                }}
              >
                {props.h3}
              </h3>
              <h5
                className="text-xl md:text-2xl font-regular max-w-sm leading-8 anime-item"
                style={{
                  transform: "translateY(0px) translateZ(0px)",
                  opacity: 1,
                }}
              >
                {props.h5}
              </h5>
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
                <span className="fix-font">اصنع تطبيقك الآن</span>
              </a>
            </div>
            <div className="flex items-start w-full">
              <p
                className="anime-item opacity-0 w-full"
                style={{
                  transform: "translateY(0px) translateZ(0px)",
                  opacity: 1,
                }}
              >
                {props.p}{" "}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StartMakeYourAppSection;
