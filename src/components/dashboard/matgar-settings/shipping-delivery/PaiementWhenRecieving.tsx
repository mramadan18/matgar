"use client";
import Modal from "@/components/utils/Modal";
import React, { useState } from "react";

const PaiementWhenRecieving = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div
        className="flex justify-start items-center gap-4 mt-6 border-b border-[#707070] pb-4 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <svg
          className="mr-6"
          xmlns="http://www.w3.org/2000/svg"
          width="37.654"
          height="37.654"
          viewBox="0 0 37.654 37.654"
        >
          <g
            id="vuesax_broken_money-4"
            data-name="vuesax/broken/money-4"
            transform="translate(-620 -252)"
          >
            <g id="money-4" transform="translate(620 252)">
              <path
                id="Vector"
                d="M0,7.845C0,2.353,3.138,0,7.845,0H23.534c4.707,0,7.845,2.353,7.845,7.845V18.827c0,5.491-3.138,7.845-7.845,7.845H7.845C3.138,26.672,0,24.318,0,18.827v-4.66"
                transform="translate(3.138 5.491)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-2"
                data-name="Vector"
                d="M9.414,4.707A4.707,4.707,0,1,0,4.707,9.414"
                transform="translate(14.12 14.12)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-3"
                data-name="Vector"
                d="M6.276,0H3.922A3.924,3.924,0,0,0,0,3.922V6.276"
                transform="translate(7.06 9.414)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-4"
                data-name="Vector"
                d="M0,0H2.353A3.924,3.924,0,0,1,6.276,3.922V6.276"
                transform="translate(24.318 9.414)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-5"
                data-name="Vector"
                d="M6.276,6.276H3.922A3.924,3.924,0,0,1,0,2.353V0"
                transform="translate(7.06 21.965)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-6"
                data-name="Vector"
                d="M0,6.276H2.353A3.924,3.924,0,0,0,6.276,2.353V0"
                transform="translate(24.318 21.965)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-7"
                data-name="Vector"
                d="M0,0H37.654V37.654H0Z"
                fill="none"
                opacity="0"
              />
            </g>
          </g>
        </svg>

        <div>
          <div className="flex justify-start items-center gap-4">
            <h3 className="font-medium">الدفع عند الإستلام</h3>

            <span className="px-2 h-8 bg-yellow-200 text-black rounded-full text-sm flex justify-center items-center">
              بلس / برو
            </span>
          </div>
          <p className="text-lg">
            حدد شروط الدفع عند الاستلام والمنتجات او التصنيفات المستثناه من
            الخدمة
          </p>
        </div>
      </div>
      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="p-6 bg-white text-center rounded-lg w-[600px]">
          <h3 className="mb-10 tracking-wider">تنبيه</h3>
          <p className="w-[98%] mx-auto mb-8 text-lg">
            هذه الخاصية متاحة في باقة (متجر بلس و متجر برو و متجر سبيشل) يمكن
            ترقية الباقة من خلال باقة المتجر
          </p>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-primary py-2 px-4 text-xl"
              onClick={() => setModalOpen(false)}
            >
              متجر سلة
            </button>
            <button
              className="border border-primary bg-white text-primary py-2 px-4 text-xl"
              onClick={() => setModalOpen(false)}
            >
              إغلاق
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PaiementWhenRecieving;
