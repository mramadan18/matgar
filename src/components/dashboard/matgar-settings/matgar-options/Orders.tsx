"use client";
import React, { useState } from "react";
import ordersImg from "#/img for salla/dashboard/vuesax-broken-icon.png";
import Image from "next/image";
import OptionItem from "@/components/dashboard/matgar-settings/matgar-options/OptionItem";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import Modal from "@/components/utils/Modal";
import { PiCheckCircleLight } from "react-icons/pi";
import ShippingCompanyOptionItem from "../shipping-delivery/ShippingCompanyOptionItem";

const Orders = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen5, setModalOpen5] = useState(false);
  const [modalOpen6, setModalOpen6] = useState(false);
  const [modalOpen7, setModalOpen7] = useState(false);
  const [showSave, setShowSave] = useState(false);

  return (
    <>
      <div className="border border-[#707070] py-6 rounded-lg mt-10">
        <div className="flex items-center gap-2 px-6">
          <Image src={ordersImg} alt={"products"} />
          <h3>الطلبات</h3>
        </div>

        <div className="mt-10">
          <OptionItem
            title={"استقبال الطلبات"}
            handleClick={() => setModalOpen(true)}
          />
          <OptionItem
            title={"أوقات استقبال الطلبات"}
            handleClick={() => setModalOpen2(true)}
          />
          <OptionItem
            title={"السماح باضافة ملاحظة على الطلب"}
            handleClick={() => setModalOpen3(true)}
          />
          <OptionItem
            title={"السماح للعميل بإلغاء الطلب قبل البدء بتنفيذه"}
            handleClick={() => setModalOpen4(true)}
          />
          <OptionItem
            title={"تعيين حالة (تم التنفيذ) عند الطلب"}
            handleClick={() => setModalOpen5(true)}
          />
          <OptionItem
            title={"تعطيل مهلة الدفع في التحويل البنكي"}
            isSwitch
            active
          />
          <OptionItem title={"عرض مؤشر الشحن"} isSwitch active />
          <OptionItem title={"تفعيل إعادة الطلب"} isSwitch />
          <OptionItem title={"الإقرار قبل ارسال الطلب"} isPro />
          <OptionItem title={"تخصيص صفحة اكتمال الطلب"} isPro />
          <OptionItem
            title={"تخصيص قائمة تجهيز الطلب"}
            handleClick={() => setModalOpen6(true)}
          />
          <OptionItem
            title={"طريقة خصم رسوم بوليصات الشحن"}
            handleClick={() => setModalOpen7(true)}
          />
          <OptionItem title={"الحد الأدنى للطلب"} isPro />
          <OptionItem
            title={"السماح بإرفاق الملاحظة مع رسالة حالة الطلب"}
            isSwitch
          />
          <OptionItem title={"اشعارات حالة الطلب"} />
          <OptionItem title={"ارسال محتوى المنتجات الرقمية"} />
        </div>
      </div>

      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="shadow-lg md:w-[800px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-8 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>استقبال الطلبات</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="bg-white py-4 text-lg">
            <div className="flex justify-between items-center px-8">
              <div>
                <h4 className="font-medium">استقبال الطلبات</h4>
                <p>قم بتفعيل هذا الخيار لتتمكن من استقبال الطلبات من العملاء</p>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={true}
                />
                <div className="w-11 h-6 bg-white rounded-full border border-[#707070] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary after:shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]" />
              </label>
            </div>

            <div className="px-8 mt-4">
              <div className="flex items-start gap-2">
                <div>
                  <div className="flex items-start gap-2">
                    <h4 className="font-medium">تفعيل الحد اليومي للطلبات</h4>
                    <span className="w-16 h-6 bg-[#FFEE7D] text-xs flex justify-center items-center rounded-full">
                      بلس/ برو
                    </span>
                  </div>
                  <p>هل ترغب في استلام عدد معين من الطلبات يوميا؟</p>
                </div>
              </div>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="الحد اليومي للطلبات"
                  className="border border-[#707070] rounded-xl px-4"
                />
                <span className="absolute top-1/2 -translate-y-1/2 left-0 px-3 text-[#707070] border-r border-[#707070] h-100">
                  طلب
                </span>
              </div>

              <div className="mt-4">
                <label htmlFor="text-message">
                  <h4 className="font-medium">نص الرسالة</h4>
                </label>
                <textarea
                  id="text-message"
                  rows={5}
                  className="resize-none border border-[#707070] p-3 rounded-lg"
                  placeholder="نعتذر عميلنا العزيز، لايمكن استقبال طلبك اليوم لوصولنا للحد الاعلى لطلبات اليوم
                  يمكنك الطلب بعد"
                ></textarea>
              </div>

              <div className="mt-4 flex items-center gap-10">
                <h5 className="flex justify-start items-center gap-2 font-medium">
                  اسم العميل:{" "}
                  <span className="w-16 h-6 bg-[#FFEE7D] text-xs flex justify-center items-center rounded-full">
                    Name
                  </span>
                </h5>
                <h5 className="flex justify-start items-center gap-2 font-medium">
                  الوقت المتبقي:{" "}
                  <span className="w-16 h-6 bg-[#FFEE7D] text-xs flex justify-center items-center rounded-full">
                    Name
                  </span>
                </h5>
              </div>
            </div>
            <div className="relative flex justify-between items-center flex-nowrap">
              <div className="w-2/5 h-px bg-[#707070]"></div>
              <p>معاينة الرسالة</p>
              <div className="w-2/5 h-px bg-[#707070]"></div>
            </div>
          </div>
          <div className="border-t border-[#707070] bg-[#F2F2F2] py-2 px-4 flex justify-between items-center">
            <button
              className="py-1 px-8 text-lg font-medium"
              onClick={() => {
                setModalOpen(false);
                setShowSave(true);
              }}
            >
              حفظ
            </button>
            <button
              className="py-1 px-8 text-lg font-medium bg-transparent text-black border border-primary"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              إغلاق
            </button>
          </div>
        </div>
      </Modal>

      <Modal showModal={modalOpen2} setShowModal={setModalOpen2}>
        <div className="p-6 bg-white text-center rounded-lg w-[450px]">
          <h3 className="mb-10 tracking-wider">تنبيه</h3>
          <p className="w-[98%] mx-auto mb-8 text-lg">
            هذه الخاصية متاحة في باقة (متجر بلس و متجر برو و متجر سبيشل) يمكن
            ترقية الباقة من خلال باقة المتجر
          </p>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-primary py-2 px-4 text-xl"
              onClick={() => setModalOpen2(false)}
            >
              متجر سلة
            </button>
            <button
              className="border border-primary bg-white text-primary py-2 px-4 text-xl"
              onClick={() => setModalOpen2(false)}
            >
              إغلاق
            </button>
          </div>
        </div>
      </Modal>

      <Modal showModal={modalOpen3} setShowModal={setModalOpen3}>
        <div className="shadow-lg md:w-[800px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-8 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>السماح باضافة ملاحظة عند الطلب</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen3(false)}
            />
          </div>
          <div className="bg-white py-4 text-lg">
            <div className="flex justify-between items-center px-8">
              <div>
                <h4 className="font-medium">السماح باضافة ملاحظة عند الطلب</h4>
                <p>
                  قم بتفعيل هذا الخيار لاضافة حقل السماح للعملاء باضافة تفاصيل
                  اضافية على الطلب تظهر في سلة المشتريات
                </p>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={false}
                />
                <div className="w-11 h-6 bg-white rounded-full border border-[#707070] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary after:shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]" />
              </label>
            </div>

            <div className="px-8 mt-4">
              <label htmlFor="note" className="font-medium">
                عنوان الملاحظة
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="الحد اليومي للطلبات"
                  className="border border-[#707070] rounded-xl px-4"
                  id="note"
                />
                <span className="absolute top-1/2 -translate-y-1/2 left-0 px-3 text-[#707070] border-r border-[#707070] h-100">
                  طلب
                </span>
              </div>

              <div className="mt-4">
                <label htmlFor="text-message">
                  <h4 className="font-medium">اضافة توضيح (اختياري)</h4>
                </label>
                <textarea
                  id="text-message"
                  rows={3}
                  className="resize-none border border-[#707070] p-3 rounded-lg"
                  placeholder="ادخل نص الرسالة ..."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="border-t border-[#707070] bg-[#F2F2F2] py-2 px-4 flex justify-between items-center">
            <button
              className="py-1 px-8 text-lg font-medium"
              onClick={() => {
                setModalOpen3(false);
                setShowSave(true);
              }}
            >
              حفظ
            </button>
            <button
              className="py-1 px-8 text-lg font-medium bg-transparent text-black border border-primary"
              onClick={() => {
                setModalOpen3(false);
              }}
            >
              إغلاق
            </button>
          </div>
        </div>
      </Modal>

      <Modal showModal={modalOpen4} setShowModal={setModalOpen4}>
        <div className="shadow-lg md:w-[800px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-8 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>السماح للعميل بالغاء الطلب قبل البدء بتنفيذه</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen4(false)}
            />
          </div>
          <div className="bg-white py-4 text-lg">
            <div className="flex justify-between items-center px-8">
              <div>
                <h4 className="font-medium">
                  السماح للعميل بالغاء الطلب قبل البدء بتنفيذه
                </h4>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={true}
                />
                <div className="w-11 h-6 bg-white rounded-full border border-[#707070] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary after:shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]" />
              </label>
            </div>

            <div className="px-8 mt-4">
              <div className="flex items-start gap-2">
                <div className="flex items-start gap-2">
                  <h4 className="font-medium">
                    عدد الساعات المتاح خلالها إلغاء الطلب
                  </h4>
                </div>
              </div>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="48"
                  className="border border-[#707070] rounded-xl px-4"
                />
                <span className="absolute top-1/2 -translate-y-1/2 left-0 px-3 text-[#707070] border-r border-[#707070] h-100">
                  ساعة
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#707070] bg-[#F2F2F2] py-2 px-4">
            <button
              className="py-1 px-8 text-lg font-medium"
              onClick={() => {
                setModalOpen4(false);
                setShowSave(true);
              }}
            >
              حفظ
            </button>
          </div>
        </div>
      </Modal>

      <Modal showModal={modalOpen5} setShowModal={setModalOpen5}>
        <div className="shadow-lg md:w-[800px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-8 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>تعيين حالة (تم التنفيذ) عند الطلب</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen5(false)}
            />
          </div>
          <div className="bg-white py-4 text-lg">
            <div className="flex justify-between items-center px-8">
              <h4 className="font-medium">
                تعيين حالة (تم التنفيذ) عند الطلب بالدفع الإلكتروني
              </h4>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={true}
                />
                <div className="w-11 h-6 bg-white rounded-full border border-[#707070] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary after:shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]" />
              </label>
            </div>
            <div className="flex justify-between items-center px-8 mt-5">
              <h4 className="font-medium">
                تعيين حالة (تم التنفيذ) عند الطلب بالدفع عند الاستلام
              </h4>

              <label className="relative inline-flex items-center cursor-pointer">
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
                setModalOpen5(false);
                setShowSave(true);
              }}
            >
              حفظ
            </button>
          </div>
        </div>
      </Modal>

      <Modal showModal={modalOpen6} setShowModal={setModalOpen6}>
        <div className="shadow-lg md:w-[800px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-8 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>تخصيص قائمة تجهيز الطلب</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen6(false)}
            />
          </div>
          <div className="bg-white py-4 text-lg">
            <ShippingCompanyOptionItem
              title={"إظهار مدة الشحن"}
              desc={
                "إذا تم تفعيل هذا الخيار سيظهر في الفاتورة التي سوف يتم إرسالها للعميل"
              }
              active
            />
            <ShippingCompanyOptionItem
              title={"إظهار رقم المنتج"}
              desc={
                "إذا تم تفعيل هذا الخيار سيظهر في الفاتورة التي سوف يتم إرسالها للعميل"
              }
              active
            />
            <ShippingCompanyOptionItem
              title={"إظهار التصنيف"}
              desc={
                "إذا تم تفعيل هذا الخيار سيظهر في الفاتورة التي سوف يتم إرسالها للعميل"
              }
              active
            />
            <ShippingCompanyOptionItem
              title={"إخفاء الأسعار"}
              desc={
                "إذا تم تفعيل هذا الخيار ستختفي الأسعار من الفاتورة التي سوف يتم إرسالها للعميل"
              }
              active
            />
            <ShippingCompanyOptionItem
              title={
                "إذا تم تفعيل هذا الخيار ستختفي الأسعار من الفاتورة التي سوف يتم إرسالها للعميل"
              }
              desc={
                "إذا تم تفعيل هذا الخيار سيظهر في الفاتورة التي سوف يتم إرسالها للعميل"
              }
              active
            />
            <ShippingCompanyOptionItem
              title={"إظهار الماركة التجارية"}
              desc={
                "إذا تم تفعيل هذا الخيار سيظهر في الفاتورة التي سوف يتم إرسالها للعميل"
              }
              active
            />
            <ShippingCompanyOptionItem
              title={"إخفاء صور المنتجات"}
              desc={
                "إذا تم تفعيل هذا الخيار سوف يتم إخفاء صور المنتجات من قائمة تجهيز الطلب"
              }
              active
            />
          </div>
          <div className="border-t border-[#707070] bg-[#F2F2F2] py-2 px-4">
            <button
              className="py-1 px-8 text-lg font-medium"
              onClick={() => {
                setModalOpen6(false);
                setShowSave(true);
              }}
            >
              حفظ
            </button>
          </div>
        </div>
      </Modal>

      <Modal showModal={modalOpen7} setShowModal={setModalOpen7}>
        <div className="shadow-lg md:w-[800px] rounded-lg overflow-hidden">
          <div className="bg-primary py-2 px-8 flex justify-between items-center w-full text-white text-xl font-medium">
            <p>طريقة خصم رسوم بوليصات الشحن</p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setModalOpen7(false)}
            />
          </div>
          <div className="bg-white py-10 px-8 text-lg">
            <div>
              <h4>ماهي بوليصات الشحن ؟</h4>
              <p>
                هي وثيقة تصدرها شركة الشحن لنقل طلبات التاجر إلى العملاء مقابل
                رسوم لذلك. تتضمن بوليصة الشحن تفاصيل عنوان المرسل والمستلم وكذلك
                تفاصيل الشحنة كمحتويات الكراتين وعددها والوزن وغيرها
              </p>
            </div>
            <div className="mt-5 mb-10">
              <h4>ماهي رسوم بوليصات الشحن ؟</h4>
              <p>
                هي رسوم تفرضها شركة الشحن لقاء نقل الشحنات إلى العملاء. تعتمد
                هذه الرسوم على العقد المبرم مابين التاجر وشركة الشحن بناءا على
                كمية الشحنات المرسلة. في متجر يهمنا تقديم تجربة سهلة وأسعار
                حصرية، حيث يتفرد متجر برسوم خاصة بتجارتها وبتجربة مستخدم متميزة
                تمنح للتاجر من تفعيل شركات الشحن التي ترغب بها بضغطة زر والبيع
                مباشرة بدون الحاجة للتواصل والتفاوض والتعاقد مع شركات الشحن
              </p>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2.5"
              >
                <option selected>رصيد المتجر</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>

              <AiOutlineDown className="absolute top-1/2 left-2 -translate-y-1/2" />
            </div>
          </div>
          <div className="border-t border-[#707070] bg-[#F2F2F2] py-2 px-4">
            <button
              className="py-1 px-8 text-lg font-medium"
              onClick={() => {
                setModalOpen7(false);
                setShowSave(true);
              }}
            >
              حفظ
            </button>
          </div>
        </div>
      </Modal>

      {/* <Modal showModal={modalOpen2} setShowModal={setModalOpen2}>
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
      </Modal> */}

      <Modal showModal={showSave} setShowModal={setShowSave}>
        <div className="py-10 px-6 bg-white text-center rounded-lg w-[450px] flex flex-col justify-center items-center gap-4 ">
          <PiCheckCircleLight className="text-[75px] text-primary" />
          <p className="w-[98%] mx-auto text-2xl">تم الحفظ بنجاح</p>
        </div>
      </Modal>
    </>
  );
};

export default Orders;
