"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { motion, useAnimation, useInView } from "framer-motion";

interface PropsValue {
  img: string | StaticImport;
  head: string;
  subHead: string;
  ul?: string[];
}

const SectionPhotoFirst = ({ img, head, subHead, ul }: PropsValue) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      itemControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="anime-block home-block feature-block bg-white dark:bg-darker-200 end my-[25px] overflow-hidden">
      <div className="container">
        <div className="feature-block__wrapper second">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              decoding="async"
              className="block"
              src={img}
              alt="marketing"
            />
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-start flex-1"
          >
            <article className="article article--features flex items-start flex-col text-right justify-start">
              <div className="mb-8">
                <div className="title title--hero sm">
                  <h2
                    className="anime-text opacity-0"
                    style={{ opacity: 1, transform: "translateY(0px)" }}
                  >
                    {head}{" "}
                  </h2>
                  <p
                    className="anime-text opacity-0"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      width: "100%",
                    }}
                  >
                    {subHead}
                  </p>
                  <ul
                    className="list list--flat list--bullets mt-7 opacity-70"
                    style={{ lineHeight: "40px" }}
                  >
                    {ul?.map((e) => (
                      <li
                        className="anime-text opacity-0"
                        style={{ opacity: 1, transform: "translateY(0px)" }}
                      >
                        {e}{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>{" "}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionPhotoFirst;
