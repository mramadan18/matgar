"use client";
import React, { useState } from "react";
import productsImg from "#/img for salla/dashboard/vuesax-broken-box-add.png";
import Image from "next/image";
import OptionItem from "@/components/dashboard/matgar-settings/matgar-options/OptionItem";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import Modal from "@/components/utils/Modal";
import { PiCheckCircleLight } from "react-icons/pi";

const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [showSave, setShowSave] = useState(false);

  return (
    <>
      <div className="border border-[#707070] py-6 rounded-lg mt-10">
        <div className="flex items-center gap-2 px-6">
          <Image src={productsImg} alt={"products"} />
          <h3>المنتجات</h3>
        </div>

        <div className="mt-10">
          <OptionItem
            title={"إمكانية تكرار المنتجات في السلة"}
            isSwitch
            active
          />
          <OptionItem
            title={"تخصيص ظهور مرات الشراء للمنتجات"}
            handleClick={() => setModalOpen(true)}
          />
          <OptionItem
            title={"عرض المنتجات التي نفذت في نهاية الصفحات"}
            isSwitch
          />
          <OptionItem title={"عرض زر تفاصيل اكثر لوصف المنتج"} isSwitch />
          <OptionItem
            title={"عرض علامة - عندما يكون سعر المنتج صفر"}
            isSwitch
          />
          <OptionItem
            title={"عرض منتجات ربما تعجبك في صفحة المنتج"}
            handleClick={() => setModalOpen2(true)}
          />
          <OptionItem
            title={"إظهار العروض الخاصة أسفل المنتج"}
            isSwitch
            active
          />
          <OptionItem
            title={"إضافة منتج العرض المجاني تلقائيا إلى السلة"}
            isSwitch
            active
          />
          <OptionItem title={"تفعيل إظهار نطاق السعر على المنتج"} isSwitch />
          <OptionItem
            title={"عرض الوزن في تفاصيل المنتج وصفحة السلة والفواتير"}
            isSwitch
          />
          <OptionItem
            title={"عرض الرقم المخزني SKU في تفاصيل المنتج والطلب"}
            isSwitch
            active
          />
          <OptionItem
            title={"إظهار حقل رمز التنسيق الجمركي (HS Code) ضمن بيانات المنتج"}
            isSwitch
            active
          />
          <OptionItem
            title={
              "الوزن الافتراضي لكل منتج على حدة عند إرسال الطلب لشركة الشحن"
            }
            isPro
          />
        </div>
      </div>

      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="shadow-lg md:w-[800px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-8 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>تخصيص ظهور مرات الشراء للمنتجات</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="bg-white py-4 text-lg">
            <div className="flex justify-between items-center mt-6">
              <div className="mr-8">
                <h4 className="font-normal">
                  إظهار عدد مرات الشراء لكل المنتجات
                </h4>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-8">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={true}
                />
                <div className="w-11 h-6 bg-white rounded-full border border-[#707070] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary after:shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]" />
              </label>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="mr-8">
                <h4 className="font-normal">
                  إظهار مرات الشراء لتصنيفات معينة
                </h4>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-8">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={false}
                />
                <div className="w-11 h-6 bg-white rounded-full border border-[#707070] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary after:shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]" />
              </label>
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

      <Modal showModal={modalOpen2} setShowModal={setModalOpen2}>
        <div className="shadow-lg md:w-[800px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-8 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>تخصيص خيار منتجات ربما تعجبك</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="bg-white py-4 text-lg">
            <div className="flex justify-between items-center mt-6">
              <div className="mr-8">
                <h4 className="font-normal">
                  عرض منتجات ربما تعجبك في صفحة المنتج
                </h4>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-8">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={true}
                />
                <div className="w-11 h-6 bg-white rounded-full border border-[#707070] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary after:shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]" />
              </label>
            </div>
            <div className="mt-6 px-8">
              <label htmlFor="free" className="text-xl">
                طريقة عرض المنتجات
              </label>
              <div className="w-full relative rounded-lg overflow-hidden">
                <select
                  id="free"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2.5"
                >
                  <option selected>منتجات من نفس الماركة</option>
                  <option value="no">لا</option>
                </select>
                <AiOutlineDown className="absolute top-1/2 left-2 -translate-y-1/2" />
              </div>
            </div>
          </div>
          <div className="border-t border-[#707070] bg-[#F2F2F2] py-2 px-4">
            <button
              className="py-1 px-8 text-lg font-medium"
              onClick={() => {
                setModalOpen2(false);
                setShowSave(true);
              }}
            >
              حفظ
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Products;
