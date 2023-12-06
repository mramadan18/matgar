"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import store from "#/img for salla/homePage/icons8-store-50.png";
import user from "#/img for salla/homePage/icons8-users-48.png";
import Coffe from "#/img for salla/homePage/icons8-coffee-mug-24.png";
import laptop from "#/img for salla/homePage/icons8-laptop-50.png";
import book from "#/img for salla/homePage/icons8-book-50.png";
import service from "#/img for salla/homePage/icons8-services-50.png";
import { motion, useAnimation, useInView } from "framer-motion";

const Sectors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      itemControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 1 }}
      className="anime-block home-block store-categories bg-grayer-100 dark:bg-darker-250 px-8 overflow-hidden"
    >
      <div className="container">
        <div className="title title--hero w-full center mb-8 sm:mb-12">
          <p className="font-bold">
            مهما كان مجال تجارتك يمكنك الاعتماد على متجر ودعمها لمختلف القطاعات
          </p>
        </div>
        <div className="grid grid-cols-3box gap-8 max1023:gap-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.1, ease: "linear" }}
            className="element card-entry card-entry--linked relative"
          >
            <span className="card-entry__icon">
              <i className="sicon-store">
                <Image src={store} alt="store-photo" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> متاجر التجزئة</h2>
              <p>مزايا عديدة تلائم تجارتك </p>
            </article>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
            className="anime-item element card-entry card-entry--linked"
          >
            <span className="card-entry__icon">
              <i className="sicon-users">
                <Image src={user} alt="userPhoto" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> قطاع الجملة</h2>
              <p>نقلة نوعية في البيع للشركات والمؤسسات </p>
            </article>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
            className="anime-item element card-entry card-entry--linked"
          >
            <span className="card-entry__icon">
              <i className="sicon-coffee-togo">
                <Image src={Coffe} alt="coffe-logo" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> المطاعم والمقاهي</h2>
              <p>جميع ما تحتاجه لإدارة أعمالك رقميًا </p>
            </article>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.4, ease: "linear" }}
            className="anime-item element card-entry card-entry--linked"
          >
            <span className="card-entry__icon">
              <i className="sicon-content">
                <Image src={book} alt="book-logo" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> صناعة المحتوى</h2>
              <p>المكان الأنسب لتحويل شغفك بصناعة المحتوى إلى أرباح </p>
            </article>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
            className="anime-item element card-entry card-entry--linked"
          >
            <span className="card-entry__icon">
              <i className="sicon-service-open">
                <Image src={service} alt="service-logo" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> تقديم الخدمات</h2>
              <p>حلول مميزة لتقديم خدماتك وإدارة أعمالك </p>
            </article>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
            className="anime-itemelement card-entry card-entry--linked"
          >
            <span className="card-entry__icon">
              <i className="sicon-laptop">
                <Image src={laptop} alt="laptop-logo" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> المنتجات الرقمية</h2>
              <p>المكان الأنسب لبيع كافة المنتجات الرقمية </p>
            </article>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sectors;
