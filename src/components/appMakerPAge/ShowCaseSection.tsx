"use client";
import React, { useEffect, useRef } from "react";
import mobPhoto2 from "#/img for salla/AppMakerPage/Group 93.png";
import mobPhoto1 from "#/img for salla/AppMakerPage/Group 95.png";
import mobPhoto3 from "#/img for salla/AppMakerPage/Group 94.png";
import ShowCaseCard from "./ShowCaseCard";
import { motion, useAnimation, useInView } from "framer-motion";

const ShowCaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      itemControls.start("visible");
    }
  }, [isInView]);

  return (
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
        className="items-center justify-center flex md:flex-row flex-col md:justify-between relative my-[200px]"
      >
        <ShowCaseCard
          h4={"مــتـجــر شيفت"}
          p={
            "تجربتنـــا مع متجر ممتازة أعجبنا بسهولة وسلاسة إدارة المتجـــر الإلكترونـــي وتفعيـــل عـــدة خدمـــات منها اللوجستية والادارية وخدمـــة العمـــلاء  وغيرها الكثير"
          }
          img={mobPhoto3}
        />

        <ShowCaseCard
          h4={"مـتجـر أبو حمام"}
          p={" هو مزيج بين الابداع  والتقنيات الاحترافية سلس وجميل بالعمل"}
          img={mobPhoto2}
          translate={true}
        />

        <ShowCaseCard
          h4={"مطعم الشيف وريف"}
          p={
            "نفتخر بوجود شركة لبنانية تقدم خدمات جبارة بهذا  المستوى من الاحترافية"
          }
          img={mobPhoto1}
        />
      </motion.div>
    </div>
  );
};

export default ShowCaseSection;
