"use client";
import Modal from "@/components/utils/Modal";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";

const ShippingRatesCalculator = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div
        className="flex justify-start items-center gap-4 mt-6 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <svg
          className="mr-6"
          xmlns="http://www.w3.org/2000/svg"
          width="37.672"
          height="37.672"
          viewBox="0 0 37.672 37.672"
        >
          <g
            id="vuesax_broken_math"
            data-name="vuesax/broken/math"
            transform="translate(-108 -636)"
          >
            <g id="math" transform="translate(108 636)">
              <path
                id="Vector"
                d="M0,0H11.427"
                transform="translate(3.61 8.853)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-2"
                data-name="Vector"
                d="M0,0H11.427"
                transform="translate(22.635 24.063)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-3"
                data-name="Vector"
                d="M0,0H11.427"
                transform="translate(22.635 33.575)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-4"
                data-name="Vector"
                d="M0,0H1.162"
                transform="translate(32.9 8.853)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-5"
                data-name="Vector"
                d="M0,0H5.133"
                transform="translate(22.635 8.853)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-6"
                data-name="Vector"
                d="M0,11.411V0"
                transform="translate(28.395 3.139)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-7"
                data-name="Vector"
                d="M2.245,0,0,2.229"
                transform="translate(12.793 23.121)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-8"
                data-name="Vector"
                d="M0,5.51,5.51,0"
                transform="translate(3.61 29.023)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-9"
                data-name="Vector"
                d="M11.427,11.411,0,0"
                transform="translate(3.61 23.121)"
                fill="none"
                stroke="#292d32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-10"
                data-name="Vector"
                d="M0,0H37.672V37.672H0Z"
                fill="none"
                opacity="0"
              />
            </g>
          </g>
        </svg>

        <div>
          <div className="flex justify-start items-center gap-4">
            <h3 className="font-medium">حاسبة أسعار الشحن</h3>
          </div>
          <p className="text-lg">
            حدد وزن الشحنة ووجهتها لحساب تكلفة الشحن التقريبية
          </p>
        </div>
      </div>

      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="shadow-lg md:w-[600px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-4 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>حاسبة أسعار الشحن</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="bg-white py-10 px-6 text-lg">
            <label
              htmlFor="company-name"
              className="text-lg font-semibold tracking-wider"
            >
              تفاصيل عنوان الشحن
            </label>
            <div className="flex justify-center items-center gap-4 w-full">
              <div className="w-1/2 relative rounded-lg overflow-hidden">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option selected>ادخل اسم الشركة</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>

                <AiOutlineDown className="absolute top-1/2 left-2 -translate-y-1/2" />
              </div>
              <div className="w-1/2 relative rounded-lg overflow-hidden">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2.5"
                >
                  <option selected>كل الدول</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>

                <AiOutlineDown className="absolute top-1/2 left-2 -translate-y-1/2" />
              </div>
            </div>

            <div className="w-full text-center mt-10">
              <input type="range" className="w-1/2 range range-md" />

              <div className="flex justify-center items-center mt-4">
                <div className="py-2 px-4 bg-[#E9E9E9]">الوزن: 46kg</div>
                <div className="py-2 px-4 bg-[#E9E9E9] border-r border-[#707070]">
                  السعر: 0$
                </div>
              </div>
            </div>
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

export default ShippingRatesCalculator;
