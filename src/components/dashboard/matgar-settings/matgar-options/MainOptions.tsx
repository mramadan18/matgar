"use client";
import React, { useState } from "react";
import Image from "next/image";
import settingKImg from "#/img for salla/dashboard/vuesax-broken-setting-3.png";
import OptionItem from "./OptionItem";
import Modal from "@/components/utils/Modal";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { PiCheckCircleLight } from "react-icons/pi";

const MainOptions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showSave, setShowSave] = useState(false);

  return (
    <div className="border border-[#707070] py-6 rounded-lg mt-10">
      <div className="flex items-center gap-2 px-6">
        <Image src={settingKImg} alt={"coupons"} />
        <h3>الخيارات العامة</h3>
      </div>

      <div className="mt-10">
        <OptionItem title={"استخدام الأرقام العربية"} isSwitch active />
        <OptionItem
          title={"تخصيص حالات حساب التقارير"}
          handleClick={() => setModalOpen(true)}
        />
        <OptionItem
          title={'عرض عبارة "صنع بإتقان على منصة متجر"'}
          isSwitch
          active
        />
      </div>

      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="shadow-lg md:w-[800px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-8 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>تخصيص حالات حساب التقارير</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="bg-white py-6 px-8 text-lg">
            <div>
              <h2 className="font-medium">حالات البيع</h2>
              <p className="mb-4">اختر الطلبات المشمولة في تقارير المبيعات</p>
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

export default MainOptions;
