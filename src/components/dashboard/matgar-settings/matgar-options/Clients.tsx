"use client";
import React, { useState } from "react";
import Image from "next/image";
import ClientsImg from "#/img for salla/dashboard/vuesax-broken-people.png";
import OptionItem from "./OptionItem";
import Modal from "@/components/utils/Modal";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { PiCheckCircleLight } from "react-icons/pi";

const Clients = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showSave, setShowSave] = useState(false);

  return (
    <div className="border border-[#707070] py-6 rounded-lg mt-10">
      <div className="flex items-center gap-2 px-6">
        <Image src={ClientsImg} alt={"products"} />
        <h3>العملاء</h3>
      </div>

      <div className="mt-10">
        <OptionItem
          title={"البريد الإلكتروني اختياري للعملاء"}
          isSwitch
          active
        />
        <OptionItem
          title={"تمكين تسجيل الدخول باستخدام البريد"}
          isSwitch
          active
        />
        <OptionItem
          title={"دمج سلة مشتريات العملاء بعد تسجيل الدخول"}
          isSwitch
          active
        />
        <OptionItem
          title={"طريقة تحديد عنوان العميل"}
          handleClick={() => setModalOpen(true)}
        />
      </div>

      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="shadow-lg md:w-[800px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-8 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>طريقة تحديد عنوان العميل</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="bg-white py-10 px-8 text-lg">
            <div>
              <h3 className="font-medium">
                حدد الطريقة المناسبة للحصول على عنوان العميل في صفحة إنهاء الطلب
                بمتجرك :
              </h3>
            </div>

            <ul className="list-disc px-4 mt-6">
              <li className="mb-4">
                العنوان الوطني: يقوم العميل بتحديد المدينة، الحي، الشارع، الرمز
                البريدي ووصف البيت (مناسب لمتاجر التجزئة)
              </li>
              <li className="mb-4">
                الموقع الجغرافي: يقوم العميل بتحديد موقعه على الخريطة (مناسب
                للمطاعم والتوصيل الفوري)
              </li>

              <li className="mb-4">
                العنوان الوطني والموقع الجغرافي: يقوم العميل بتحديد المدينة،
                الحي، الشارع، الرمز البريدي وصف البيت وكذلك موقعه على الخريطة
                (مناسب للمتاجر التي توفر خيار التوصيل الفوري والشحن)
              </li>
            </ul>

            <div className="relative rounded-lg overflow-hidden mt-8">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2.5"
              >
                <option selected>العنوان الوطني</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>

              <AiOutlineDown className="absolute top-1/2 left-2 -translate-y-1/2" />
            </div>

            <div className="mt-8">
              <h2 className="font-medium">حقل وصف البيت</h2>
              <p className="mb-4">
                يمكنك تعيين وصف البيت في عنوان الشحن كحقل اجباري يتطلب ادخاله من
                قبل العملاء
              </p>
              <div className="relative rounded-lg overflow-hidden">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2.5"
                >
                  <option selected>اختياري</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>

                <AiOutlineDown className="absolute top-1/2 left-2 -translate-y-1/2" />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-medium">حقل الرمز البريدي</h2>
              <p className="mb-4">
                يمكنك تعيين الرمز البريدي في عنوان الشحن كحقل اجباري يتطلب
                ادخاله من قبل العملاء
              </p>
              <div className="relative rounded-lg overflow-hidden">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2.5"
                >
                  <option selected>اختياري</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>

                <AiOutlineDown className="absolute top-1/2 left-2 -translate-y-1/2" />
              </div>
            </div>
          </div>
          <div className="border-t border-[#707070] bg-[#F2F2F2] py-2 px-4">
            <button
              className="py-1 px-8 text-lg font-medium"
              onClick={() => {
                setModalOpen(false);
                setShowSave(true);
              }}
            >
              حفظ
            </button>
          </div>
        </div>
      </Modal>

      <Modal showModal={showSave} setShowModal={setShowSave}>
        <div className="py-10 px-6 bg-white text-center rounded-lg w-[450px] flex flex-col justify-center items-center gap-4 ">
          <PiCheckCircleLight className="text-[75px] text-primary" />
          <p className="w-[98%] mx-auto text-2xl">تم الحفظ بنجاح</p>
        </div>
      </Modal>
    </div>
  );
};

export default Clients;
