"use client";
import Modal from "@/components/utils/Modal";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const FreepShipping = () => {
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
          width="37.107"
          height="37.107"
          viewBox="0 0 37.107 37.107"
        >
          <g
            id="vuesax_broken_truck-tick"
            data-name="vuesax/broken/truck-tick"
            transform="translate(-108 -252)"
          >
            <g id="truck-tick" transform="translate(108 252)">
              <path
                id="Vector"
                d="M20.1,0V15.461a3.1,3.1,0,0,1-3.092,3.092H0V8.689a6.028,6.028,0,0,0,4.778,2.134A5.942,5.942,0,0,0,8.8,9.184,5.236,5.236,0,0,0,9.988,7.715,6.022,6.022,0,0,0,10.823,4.5,6.158,6.158,0,0,0,8.72,0Z"
                transform="translate(3.092 3.092)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-2"
                data-name="Vector"
                d="M27.537,0H25.542A1.551,1.551,0,0,0,24,1.546V6.185a1.551,1.551,0,0,0,1.546,1.546h4.638v4.638a4.632,4.632,0,0,1-4.638,4.638H24a3.092,3.092,0,0,0-6.185,0H11.627a3.092,3.092,0,1,0-6.185,0H3.9A4.636,4.636,0,0,1,0,14.889"
                transform="translate(3.834 13.915)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-3"
                data-name="Vector"
                d="M0,13.915H17.008A3.1,3.1,0,0,0,20.1,10.823V0h2.845a3.186,3.186,0,0,1,1.562.417"
                transform="translate(3.092 7.731)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-4"
                data-name="Vector"
                d="M6.185,3.092A3.092,3.092,0,1,1,3.092,0,3.092,3.092,0,0,1,6.185,3.092Z"
                transform="translate(9.277 27.831)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-5"
                data-name="Vector"
                d="M6.185,3.092A3.092,3.092,0,1,1,3.092,0,3.092,3.092,0,0,1,6.185,3.092Z"
                transform="translate(21.646 27.831)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-6"
                data-name="Vector"
                d="M6.185,4.638V7.731H1.546A1.551,1.551,0,0,1,0,6.185V1.546A1.551,1.551,0,0,1,1.546,0H3.541Z"
                transform="translate(27.831 13.915)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <g id="Group" transform="translate(1.544 1.545)">
                <path
                  id="Vector-7"
                  data-name="Vector"
                  d="M12.371,6.047a6.022,6.022,0,0,1-.835,3.216,5.236,5.236,0,0,1-1.191,1.469,5.942,5.942,0,0,1-4.02,1.639,6.028,6.028,0,0,1-4.778-2.134,5.408,5.408,0,0,1-.572-.758A5.977,5.977,0,0,1,0,6.325a6.186,6.186,0,0,1,12.369-.278Z"
                  transform="translate(0 0)"
                  fill="none"
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Vector-8"
                  data-name="Vector"
                  d="M0,1.639,1.562,3.123,4.793,0"
                  transform="translate(3.774 4.593)"
                  fill="none"
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </g>
              <path
                id="Vector-9"
                data-name="Vector"
                d="M0,0H37.107V37.107H0Z"
                fill="none"
                opacity="0"
              />
            </g>
          </g>
        </svg>

        <div>
          <h3 className="font-medium">الشحن المجاني</h3>
          <p className="text-lg">
            تحكم بإعدادات وشروط الشحن المجاني لعملاء متجرك
          </p>
        </div>
      </div>

      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="shadow-lg md:w-[600px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-4 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>إعدادات الشحن المجاني</p>
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

export default FreepShipping;
