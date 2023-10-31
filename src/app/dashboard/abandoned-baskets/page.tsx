"use client";
import AddButton from "@/components/dashboard/AddButton/AddButton";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import AlertBar from "@/components/utils/AlertBar";
import React, { useState } from "react";
import crossImg from "#/img for salla/dashboard/vuesax-broken-brifecase-cross.png";
import Image from "next/image";
import Modal from "@/components/utils/Modal";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail, MdMoreHoriz } from "react-icons/md";
import { BsMap } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";

const page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  return (
    <section>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive
            name={"السلات المتروكة"}
            url={"/dashboard/abandoned-baskets"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>
      <AlertBar
        title={"هذه الميزة متوفرة فقط فى باقة متجر بلس, متجر سبيشال, متجر برو,"}
      />
      <div className="mt-6">
        <AddButton
          title={"إنشاء تذكير جديد"}
          handleClick={() => {
            setModalOpen(true);
          }}
        />
      </div>
      <div className="mt-8 border border-[#707070] rounded-lg p-4">
        <h2 className="tracking-wider font-medium">تذكيرات السلات المتروكة</h2>
        <p className="text-lg mt-2">لا يوجد تذكيرات بعد</p>
      </div>

      <div className="border border-[#707070] py-5 mt-8 rounded-lg tracking-widest">
        <div className="flex justify-start items-center gap-4 px-5 mb-6">
          <Image src={crossImg} alt={"coupons"} />
          <h2>السلات المتروكة</h2>
        </div>
        <div className="relative overflow-x-auto mt-2">
          <table className="w-full text-right">
            <thead className="bg-[#E9E9E9]">
              <tr>
                <th className="px-6 py-3">اسم العميل</th>
                <th className="px-6 py-3">تاريخ إنشاء متجر</th>
                <th className="px-6 py-3">عدد المنتجات</th>
                <th className="px-6 py-3">إجمالي متجر</th>
                <th className="px-6 py-3">الحالة</th>
              </tr>
            </thead>

            <tbody className="mt-5">
              <tr>
                <td className="p-6 text-lg">لا توجد سلاّت متروكة بعد</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="shadow-lg md:w-[650px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-4 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>انشاء تذكير جديد</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="bg-white py-4 px-6 text-lg max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="font-medium tracking-wider">شروط التذكير</h4>
                <p className="text-base">
                  سيتم إرسال التذكير بعد ترك العميل لسلة لفترة محددة و تجاوز سلة
                  المشتريات لقيمة معينة
                </p>
              </div>

              <div>
                <label className="text-lg" htmlFor="name">
                  اسم المسوق
                </label>
                <div className="relative">
                  <AiOutlineUser className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50 text-xl" />
                  <input
                    className="py-3 px-8"
                    type="text"
                    id="name"
                    placeholder="اسم المسوق"
                  />
                </div>
              </div>

              <div>
                <label className="text-lg" htmlFor="name">
                  بريد المسوق
                </label>
                <div className="relative">
                  <MdAlternateEmail className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50 text-xl" />
                  <input
                    className="py-3 px-8"
                    type="text"
                    id="name"
                    placeholder="بريد المسوق"
                  />
                </div>
              </div>

              <div>
                <label className="text-lg" htmlFor="name">
                  مدينة المسوق
                </label>
                <div className="relative">
                  <BsMap className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50 text-xl" />
                  <input
                    className="py-3 px-8"
                    type="text"
                    id="name"
                    placeholder="مدينة المسوق"
                  />
                </div>
              </div>

              <div>
                <label className="text-lg" htmlFor="name">
                  مدينة المسوق
                </label>
                <div className="relative">
                  <MdMoreHoriz className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50 text-xl" />
                  <input
                    className="py-3 px-8"
                    type="text"
                    id="name"
                    placeholder="معلومات اضافية"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-medium tracking-wide">
                  نوع العمولة الممنوحة
                </h3>
                <p className="text-base">
                  حدد نوع ومقدار العمولة التي ستمنحها للمسوق مقابل كل طلب يتم من
                  خلال رابط التسويق بالعمولة
                </p>
              </div>

              <div>
                <label className="text-lg" htmlFor="name">
                  نوع العمولة
                </label>
                <div className="relative">
                  <CiMoneyBill className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50 text-xl" />
                  <input
                    className="py-3 px-8"
                    type="text"
                    id="name"
                    placeholder="مبلغ ثابت"
                  />
                </div>
              </div>

              <div>
                <label className="text-lg" htmlFor="name">
                  مبلغ العمولة
                </label>
                <div className="relative">
                  <svg
                    className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50 text-xl"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 26 26"
                  >
                    <g
                      id="card-coin"
                      transform="translate(-108 -188)"
                      opacity="0.5"
                    >
                      <path
                        id="Vector"
                        d="M0,0H10.833"
                        transform="translate(110.167 206.482)"
                        fill="none"
                        stroke="#292d32"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <path
                        id="Vector-2"
                        data-name="Vector"
                        d="M3.987,9.208H2.4C.477,9.208,0,8.732,0,6.825V2.383C0,.477.477,0,2.4,0H8.428c1.928,0,2.405.477,2.405,2.383V6.836c0,1.907-.477,2.383-2.405,2.383"
                        transform="translate(110.178 202.625)"
                        fill="none"
                        stroke="#292d32"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <g id="Group" transform="translate(110.167 190.167)">
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M7.583,0A7.578,7.578,0,0,1,0,7.583l1.137-1.9"
                          transform="translate(14.083 14.083)"
                          fill="none"
                          stroke="#292d32"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M0,7.583A7.578,7.578,0,0,1,7.583,0L6.446,1.9"
                          fill="none"
                          stroke="#292d32"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                      <path
                        id="Vector-5"
                        data-name="Vector"
                        d="M4.875,9.75A4.875,4.875,0,1,0,0,4.875a4.706,4.706,0,0,0,.347,1.8"
                        transform="translate(123.167 190.167)"
                        fill="none"
                        stroke="#292d32"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <path
                        id="Vector-6"
                        data-name="Vector"
                        d="M0,0H26V26H0Z"
                        transform="translate(108 188)"
                        fill="none"
                        opacity="0"
                      />
                    </g>
                  </svg>

                  <input
                    className="py-3 px-8"
                    type="text"
                    id="name"
                    placeholder="أدخل مبلغ العمولة"
                  />
                </div>
              </div>

              <div>
                <label className="text-lg" htmlFor="name">
                  تطبيق العمولة على
                </label>
                <div className="relative">
                  <svg
                    className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50 text-xl"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 26 26"
                  >
                    <g
                      id="vuesax_broken_truck-fast"
                      data-name="vuesax/broken/truck-fast"
                      transform="translate(-748 -188)"
                      opacity="0.5"
                    >
                      <g id="truck-fast" transform="translate(748 188)">
                        <path
                          id="Vector"
                          d="M10.281,13h1.083a2.173,2.173,0,0,0,2.167-2.167V0H3.781A4.329,4.329,0,0,0,0,2.221"
                          transform="translate(2.719 2.167)"
                          fill="none"
                          stroke="#292d32"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M0,13a3.246,3.246,0,0,0,3.25,3.25H4.333a2.167,2.167,0,0,1,4.333,0H13a2.167,2.167,0,0,1,4.333,0h1.083A3.246,3.246,0,0,0,21.667,13V9.75h-3.25a1.087,1.087,0,0,1-1.083-1.083V5.417a1.087,1.087,0,0,1,1.083-1.083h1.4L17.962,1.094A2.184,2.184,0,0,0,16.077,0H14.083V7.583A2.173,2.173,0,0,1,11.917,9.75H10.833"
                          transform="translate(2.167 5.417)"
                          fill="none"
                          stroke="#292d32"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M4.333,2.167A2.167,2.167,0,1,1,2.167,0,2.167,2.167,0,0,1,4.333,2.167Z"
                          transform="translate(6.5 19.5)"
                          fill="none"
                          stroke="#292d32"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M4.333,2.167A2.167,2.167,0,1,1,2.167,0,2.167,2.167,0,0,1,4.333,2.167Z"
                          transform="translate(15.167 19.5)"
                          fill="none"
                          stroke="#292d32"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M4.333,3.25V5.417H1.083A1.087,1.087,0,0,1,0,4.333V1.083A1.087,1.087,0,0,1,1.083,0h1.4Z"
                          transform="translate(19.5 9.75)"
                          fill="none"
                          stroke="#292d32"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Vector-6"
                          data-name="Vector"
                          d="M0,0H6.5"
                          transform="translate(2.167 8.667)"
                          fill="none"
                          stroke="#292d32"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Vector-7"
                          data-name="Vector"
                          d="M0,0H4.333"
                          transform="translate(2.167 11.917)"
                          fill="none"
                          stroke="#292d32"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M0,0H2.167"
                          transform="translate(2.167 15.167)"
                          fill="none"
                          stroke="#292d32"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Vector-9"
                          data-name="Vector"
                          d="M0,0H26V26H0Z"
                          fill="none"
                          opacity="0"
                        />
                      </g>
                    </g>
                  </svg>

                  <input
                    className="py-3 px-8"
                    type="text"
                    id="name"
                    placeholder="جميع الطلبات"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#707070] bg-[#F2F2F2] py-2 px-4">
            <button
              className="py-1 px-8 text-lg font-medium"
              onClick={() => {
                setModalOpen(false);
                setSaveModalOpen(true);
              }}
            >
              حفظ
            </button>
          </div>
        </div>
      </Modal>

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
