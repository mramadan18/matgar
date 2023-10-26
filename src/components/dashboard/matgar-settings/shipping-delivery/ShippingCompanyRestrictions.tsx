"use client";
import Modal from "@/components/utils/Modal";
import React, { useState } from "react";

const ShippingCompanyRestrictions = () => {
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
          width="37.631"
          height="37.631"
          viewBox="0 0 37.631 37.631"
        >
          <g
            id="vuesax_broken_money-recive"
            data-name="vuesax/broken/money-recive"
            transform="translate(-364 -444)"
          >
            <g id="money-recive" transform="translate(364 444)">
              <g id="Group" transform="translate(14.896 11.76)">
                <path
                  id="Vector"
                  d="M0,8.247a2.682,2.682,0,0,0,2.619,2.744H5.566a2.335,2.335,0,0,0,2.274-2.4A2.071,2.071,0,0,0,6.288,6.319L1.568,4.672A2.06,2.06,0,0,1,.016,2.4,2.345,2.345,0,0,1,2.289,0H5.237A2.682,2.682,0,0,1,7.855,2.744"
                  transform="translate(0 1.552)"
                  fill="none"
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M0,0V14.112"
                  transform="translate(3.92)"
                  fill="none"
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </g>
              <path
                id="Vector-3"
                data-name="Vector"
                d="M0,0V6.272H6.272"
                transform="translate(26.655 4.704)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-4"
                data-name="Vector"
                d="M7.84,0,0,7.84"
                transform="translate(26.655 3.136)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-5"
                data-name="Vector"
                d="M0,0H37.631V37.631H0Z"
                fill="none"
                opacity="0"
              />
              <path
                id="Vector-6"
                data-name="Vector"
                d="M15.68,0a15.68,15.68,0,0,0-6.9,29.76"
                transform="translate(3.136 3.136)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-7"
                data-name="Vector"
                d="M15.68,0A15.685,15.685,0,0,1,0,15.68"
                transform="translate(18.815 18.815)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </g>
          </g>
        </svg>

        <div>
          <div className="flex justify-start items-center gap-4">
            <h3 className="font-medium">قيود شركات الشحن</h3>

            <span className="px-2 h-8 bg-yellow-200 text-black rounded-full text-sm flex justify-center items-center">
              بلس / برو
            </span>
          </div>
          <p className="text-lg">
            أضف قيود محددة لشركة الشحن المدعومة في متجرك
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

export default ShippingCompanyRestrictions;
