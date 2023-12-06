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

const SpecialCard = ({
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
      className="card-entry card-entry--relaxed vertical dark anime-item !bg-primary !text-white"
      style={{
        boxShadow: "0px 0px 10px rgba(0,0,0,.2)",
      }}
    >
      <span className="anime-item ard-entry__icon">
        <i className="sicon-store">
          <Image src={img} alt={`${img}`} />
        </i>
      </span>
      <article className="text-center">
        <h2 className="mb-3">{head}</h2>
        <p>{subHead} </p>
      </article>
    </motion.div>
  );
};

export default SpecialCard;
