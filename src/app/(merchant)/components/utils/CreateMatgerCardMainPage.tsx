"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface propsValues {
  head: string;
  btn: string;
  bg: string;
  p: string;
  txtColor: string;
  btnBg: string;
  btnTxtColor: string;
}
const CreateMatgerCardMainPage = (props: propsValues) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      itemControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="anime-block call-to-action mb-10 pt-[150px]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, scale: 0.2 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="container"
      >
        <div
          className="rounded-xl subscribe-widget anime-item flex md:flex-row flex-col"
          style={{ backgroundColor: props.bg }}
        >
          <article className="flex flex-col justify-center items-end text-right">
            <h2
              className="w-full mb-4"
              style={{
                color: props.txtColor,
              }}
            >
              {props.head}
            </h2>
            <p
              className="w-full"
              style={{
                color: props.txtColor,
              }}
            >
              {props.p}
            </p>
          </article>
          <Link
            href="https://s.salla.sa/register"
            target="_blank"
            className="rounded-xl w-44 h-14 flex justify-center items-center"
            style={{ backgroundColor: props.btnBg, color: props.btnTxtColor }}
            rel="nofollow noopener"
          >
            <span>{props.btn}</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateMatgerCardMainPage;
