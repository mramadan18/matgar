"use client";
import React, { useEffect, useRef } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

interface PropsValue {
  img: string | StaticImport;
  head: string;
  subHead: string;
  animateStart: { opacity?: number; y?: number; x?: number; scale?: number };
  animateEnd: { opacity?: number; y?: number; x?: number; scale?: number };
}

const SpecailCard2 = ({
  img,
  head,
  subHead,
  animateStart,
  animateEnd,
}: PropsValue) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      itemControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={itemControls}
      variants={{
        hidden: animateStart,
        visible: animateEnd,
      }}
      transition={{ duration: 1, delay: 0.5 }}
      className="grid grid-cols-[60px_1fr] gap-4 p-4"
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,.2)",
      }}
    >
      <span className="border border-primary h-20 md:h-14">
        <Image src={img} alt="store-photo" className="w-full h-full " />
      </span>
      <article>
        <h2> {head}</h2>
        <p>{subHead}</p>
      </article>
    </motion.div>
  );
};

export default SpecailCard2;
