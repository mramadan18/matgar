"use client";
import React, { useState } from "react";
import Image from "next/image";
import fastImg from "#/img for salla/dashboard/vuesax-broken-truck-fast.png";
import { BsPlus } from "react-icons/bs";
import Modal from "@/components/utils/Modal";
import { AiOutlineClose } from "react-icons/ai";

const PrivateShippingCompanies = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="border border-[#707070] mt-14 px-6 py-10 text-center">
        <div className="flex justify-between items-start">
          <div className="flex justify-start items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
            >
              <g
                id="vuesax_broken_truck-fast"
                data-name="vuesax/broken/truck-fast"
                transform="translate(-748 -188)"
              >
                <g id="truck-fast" transform="translate(748 188)">
                  <path
                    id="Vector"
                    d="M13.84,17.5H15.3a2.925,2.925,0,0,0,2.917-2.917V0H5.09A5.828,5.828,0,0,0,0,2.99"
                    transform="translate(3.66 2.917)"
                    fill="none"
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Vector-2"
                    data-name="Vector"
                    d="M0,17.5a4.369,4.369,0,0,0,4.375,4.375H5.833a2.917,2.917,0,0,1,5.833,0H17.5a2.917,2.917,0,0,1,5.833,0h1.458A4.369,4.369,0,0,0,29.167,17.5V13.125H24.792a1.463,1.463,0,0,1-1.458-1.458V7.292a1.463,1.463,0,0,1,1.458-1.458h1.881l-2.494-4.36A2.941,2.941,0,0,0,21.642,0H18.958V10.208a2.925,2.925,0,0,1-2.917,2.917H14.583"
                    transform="translate(2.917 7.292)"
                    fill="none"
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Vector-3"
                    data-name="Vector"
                    d="M5.833,2.917A2.917,2.917,0,1,1,2.917,0,2.917,2.917,0,0,1,5.833,2.917Z"
                    transform="translate(8.75 26.25)"
                    fill="none"
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Vector-4"
                    data-name="Vector"
                    d="M5.833,2.917A2.917,2.917,0,1,1,2.917,0,2.917,2.917,0,0,1,5.833,2.917Z"
                    transform="translate(20.417 26.25)"
                    fill="none"
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Vector-5"
                    data-name="Vector"
                    d="M5.833,4.375V7.292H1.458A1.463,1.463,0,0,1,0,5.833V1.458A1.463,1.463,0,0,1,1.458,0H3.34Z"
                    transform="translate(26.25 13.125)"
                    fill="none"
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Vector-6"
                    data-name="Vector"
                    d="M0,0H8.75"
                    transform="translate(2.917 11.667)"
                    fill="none"
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Vector-7"
                    data-name="Vector"
                    d="M0,0H5.833"
                    transform="translate(2.917 16.042)"
                    fill="none"
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Vector-8"
                    data-name="Vector"
                    d="M0,0H2.917"
                    transform="translate(2.917 20.417)"
                    fill="none"
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Vector-9"
                    data-name="Vector"
                    d="M0,0H35V35H0Z"
                    fill="none"
                    opacity="0"
                  />
                </g>
              </g>
            </svg>
            <h3 className="tracking-wide">شركات الشحن الخاصة (المناديب)</h3>
          </div>

          <div
            className="flex justify-center items-center gap-2 border-4 border-primary rounded-lg py-2 px-4"
            onClick={() => setModalOpen(true)}
          >
            <div className="w-8 h-8 rounded-full border border-[#707070] flex justify-center items-center">
              <BsPlus />
            </div>
            <p className="font-bold tracking-wider">شركة شحن جديدة</p>
          </div>
        </div>

        <Image src={fastImg} alt={"car"} className="mt-20 mx-auto" />

        <h3>لاتوجد شركات شحن مضافة حتى الان</h3>
        <p>
          قم بإضافة شركة الشحن الأولى لك من خلال النقر على زر شركة شحن جديدة
        </p>
      </div>

      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="shadow-lg md:w-[600px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-4 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>إضافة شركة شحن أو مندوب توصيل</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="bg-white py-10 px-6 text-lg">
            <label htmlFor="company-name" className="text-lg">
              إسم الشركة
            </label>
            <input
              type="text"
              id="company-name"
              className="py-2 px-3 border border-[#707070] rounded-xl"
              placeholder="ادخل اسم الشركة"
            />
          </div>
          <div className="border-t border-[#707070] bg-[#F2F2F2] py-2 px-4">
            <button
              className="py-1 px-8 text-lg font-medium"
              onClick={() => setModalOpen(false)}
            >
              حفظ
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PrivateShippingCompanies;
