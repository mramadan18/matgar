"use client";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import AlertBar from "@/components/utils/AlertBar";
import Image from "next/image";
import React, { useState } from "react";
import priceImg from "#/img for salla/dashboard/Price-cuate.png";
import { LiaUserCheckSolid } from "react-icons/lia";
import Modal from "@/components/utils/Modal";

const page = () => {
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  return (
    <section>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive
            name={"نظام الولاء"}
            url={"/dashboard/loyalty-system"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>

      <AlertBar
        title={"هذه الميزة متوفرة فقط فى باقة متجر بلس, متجر سبيشال, متجر برو,"}
      />

      <div className="border border-[#707070] pt-14 pb-4 px-2 mt-14 rounded-lg">
        <div className="text-center relative">
          <h2>نظام الولاء</h2>
          <p>روُج لمتجرك بطريقة يحبها عملاءك</p>

          <div className="bg-[#FFEE7D] p-4 rounded-xl absolute top-0 left-2 font-bold tracking-wider">
            90$ شهريا
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-20">
          <div className="mt-14 pr-4">
            <p className="pl-12">
              نظام ولاء متكامل خاص بمتجرك يقدم لعملائك نقاط يمكنهم استبدالها
              بمكافآت محددة من قبلك، مقابل عمليات الشراء وتقييم المتجر وإكمال
              الملف الشخصي ومشاركة رابط متجرك لأهلهم وأصدقائهم يمكن للعملاء
              استبدال النقاط بمنتج من منتجاتك أو كوبونات خصم أو الحصول على شحن
              مجاني، بتحكم كامل منك في عدد النقاط المطلوبة لكل مكافأة وكيفية
              تحصيلها ومدة صلاحيتها، مع تقارير تفصيلية توضح كيفية استثمار عملائك
              . لنقاط الولاء وأكثرهم جمعًا للنقاط وغيرها
            </p>

            <button
              className="w-96 mt-12 py-2 text-lg rounded-xl"
              onClick={() => {
                setSaveModalOpen(true);
              }}
            >
              اشترك
            </button>
          </div>

          <div className="flex justify-end">
            <Image src={priceImg} alt={"price"} />
          </div>
        </div>

        <div className="p-4 bg-[#F2F2F2] rounded-lg flex justify-start items-center gap-4 mt-6">
          <div className="flex flex-col p-4 bg-white px-4 gap-4">
            <div className="flex justify-start items-center gap-4">
              <LiaUserCheckSolid className="text-xl" />
              <h3>عزز ولاء عملائك</h3>
            </div>
            <p>قدم مكافئات لعملائك لتشجعهم على الاستمرار بالشراء من متجرك</p>
          </div>
          <div className="flex flex-col p-4 bg-white px-4 gap-4">
            <div className="flex justify-start items-center gap-4">
              <LiaUserCheckSolid className="text-xl" />
              <h3>عزز ولاء عملائك</h3>
            </div>
            <p>قدم مكافئات لعملائك لتشجعهم على الاستمرار بالشراء من متجرك</p>
          </div>
          <div className="flex flex-col p-4 bg-white px-4 gap-4">
            <div className="flex justify-start items-center gap-4">
              <LiaUserCheckSolid className="text-xl" />
              <h3>عزز ولاء عملائك</h3>
            </div>
            <p>قدم مكافئات لعملائك لتشجعهم على الاستمرار بالشراء من متجرك</p>
          </div>
          <div className="flex flex-col p-4 bg-white px-4 gap-4">
            <div className="flex justify-start items-center gap-4">
              <LiaUserCheckSolid className="text-xl" />
              <h3>عزز ولاء عملائك</h3>
            </div>
            <p>قدم مكافئات لعملائك لتشجعهم على الاستمرار بالشراء من متجرك</p>
          </div>
        </div>
      </div>

      <Modal showModal={saveModalOpen} setShowModal={setSaveModalOpen}>
        <div className="p-6 bg-white text-center rounded-lg w-[450px]">
          <h3 className="mb-10 tracking-wider">تنبيه</h3>
          <p className="w-[98%] mx-auto mb-8 text-lg">
            هذه الخاصية متاحة في باقة (متجر بلس و متجر برو و متجر سبيشل) يمكن
            ترقية الباقة من خلال باقة المتجر
          </p>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-primary py-2 px-4 text-xl"
              onClick={() => setSaveModalOpen(false)}
            >
              متجر سلة
            </button>
            <button
              className="border border-primary bg-white text-primary py-2 px-4 text-xl"
              onClick={() => setSaveModalOpen(false)}
            >
              إغلاق
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default page;
