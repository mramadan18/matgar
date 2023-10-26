"use client";
import BreadcrumbItemActive from "@/components/dashboard/Breadcrumb/BreadcrumbItemActive";
import BreadcrumbItemMain from "@/components/dashboard/Breadcrumb/BreadcrumbItemMain";
import BreadcrumbList from "@/components/dashboard/Breadcrumb/BreadcrumbList";
import HelpButton from "@/components/dashboard/HelpButton/HelpButton";
import Image from "next/image";
import React, { useState } from "react";

import imgSelected from "#/img for salla/dashboard/icons8-picture-50.png";
import nameImg from "#/img for salla/dashboard/icons8-store-50.png";
import reportImg from "#/img for salla/dashboard/icons8-report-50.png";
import vectorImg from "#/img for salla/dashboard/Vector.png";
import cardImg from "#/img for salla/dashboard/icons8-magnetic-card-50.png";
import instaImg from "#/img for salla/dashboard/icons8-instagram-50.png";
import Link from "next/link";

import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import {
  AiOutlineAndroid,
  AiOutlineApple,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsFillCheckCircleFill, BsSnapchat, BsTiktok } from "react-icons/bs";
import Modal from "@/components/utils/Modal";

const page = () => {
  const [showSave, setShowSave] = useState(false);
  return (
    <section>
      <div className="flex justify-between items-center">
        <BreadcrumbList>
          <BreadcrumbItemMain />
          <BreadcrumbItemActive
            name={"إعدادات المتجر"}
            url={"/dashboard/magtar-settings"}
          />
          /
          <BreadcrumbItemActive
            name={"الإعدادات الأساسية"}
            url={"/dashboard/magtar-settings/main-settings"}
          />
        </BreadcrumbList>
        <HelpButton />
      </div>

      <div className="py-14 px-6 border border-[#E9E9E9] rounded-lg mt-8">
        <h2 className="font-normal">بيانات المتجر</h2>

        <div className="flex flex-col items-center gap-2 mt-8">
          <label
            htmlFor="uploadFile"
            className="img overflow-hidden rounded-lg relative bg-[#eeeeee] w-[300px] h-[250px] flex justify-center items-center"
          >
            <Image src={imgSelected} alt="photo" priority />

            <input
              className="hidden w-full h-full"
              type="file"
              id="uploadFile"
              accept="video/*,image/*"
            />
          </label>

          <h3 className="font-normal">تحديث الصورة</h3>
          <span>الشعار يظهر الصغير في المتجر؟</span>
          <div className="flex flex-col gap-4 w-1/2 mt-4">
            <div className="relative">
              <Image
                className="absolute top-1/2 right-4 -translate-y-1/2"
                src={nameImg}
                alt="name"
                priority
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="mahmoud"
                className="border border-gray-500 w-full px-10"
              />
            </div>

            <div className="relative">
              <Image
                className="absolute top-2 right-4"
                src={reportImg}
                alt="name"
                priority
                width={18}
                height={18}
              />
              <textarea
                placeholder="عن المتجر"
                className="border border-gray-500 w-full py-1 px-10 resize-none"
              ></textarea>
            </div>

            <div className="relative">
              <Image
                className="absolute top-1/2 right-4 -translate-y-1/2"
                src={vectorImg}
                alt="name"
                priority
                width={18}
                height={18}
              />
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="مقر المتجر"
                  className="border border-gray-500 w-full px-10 !rounded-l-none"
                />
                <button className="py-1 rounded-r-none">تحديد</button>
              </div>
            </div>

            <p>
              للتحكم بالفروع والمتسودعات{" "}
              <Link href={"/"} className="underline">
                اضغط هنا
              </Link>
            </p>

            <div className="mt-8">
              <h3 className="font-medium">ايقونة تبويب المتجر في المتصفح</h3>
              <p>المقاس الانسب 32 بكسل عرض 32 بكسل الارتفاع</p>
            </div>

            <button
              className="py-1 text-lg w-20 mx-auto mt-10"
              onClick={() => setShowSave(true)}
            >
              حفظ
            </button>
          </div>
        </div>
      </div>

      <div className="py-14 px-6 border border-[#E9E9E9] rounded-lg mt-8">
        <h2 className="font-normal">نشاط المتجر</h2>

        <div className="flex flex-col items-center gap-2 mt-8">
          <h3 className="font-medium">
            لتقديم افضل تجربة لكم على المنصة يرجى اختيار نشاط المتجر الاساسي
          </h3>

          <div className="flex flex-col gap-4 w-1/2 mt-4">
            <div className="relative">
              <Image
                className="absolute top-1/2 right-4 -translate-y-1/2"
                src={nameImg}
                alt="name"
                priority
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="أزياء نسائية , أزياء اطفال"
                className="border border-gray-500 w-full px-10"
              />
            </div>

            <button
              className="py-1 text-lg w-20 mx-auto mt-10"
              onClick={() => setShowSave(true)}
            >
              حفظ
            </button>
          </div>
        </div>
      </div>

      <div className="py-14 px-6 border border-[#E9E9E9] rounded-lg mt-8">
        <h2 className="font-normal">الدعم الفني</h2>

        <div className="flex flex-col items-center gap-2 mt-8">
          <h3 className="font-medium">
            لتقديم افضل تجربة لكم على المنصة يرجى اختيار نشاط المتجر الاساسي
          </h3>

          <div className="flex flex-col gap-4 w-1/2 mt-4">
            <div className="relative">
              <svg
                className="absolute top-1/2 right-4 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="21.47"
                height="21.5"
                viewBox="0 0 21.47 21.5"
              >
                <path
                  id="Vector"
                  d="M7.39,4.01a3.422,3.422,0,0,1,.4.7,1.581,1.581,0,0,1,.14.61,1.357,1.357,0,0,1-.21.71,3.4,3.4,0,0,1-.56.71l-.76.79a.535.535,0,0,0-.16.4.908.908,0,0,0,.03.23c.03.08.06.14.08.2a8.3,8.3,0,0,0,.93,1.28c.45.52.93,1.05,1.45,1.58.54.53,1.06,1.02,1.59,1.47a7.675,7.675,0,0,0,1.29.92c.05.02.11.05.18.08a.69.69,0,0,0,.25.04.55.55,0,0,0,.41-.17l.76-.75a3.068,3.068,0,0,1,.72-.56,1.332,1.332,0,0,1,.71-.21,1.6,1.6,0,0,1,.61.13,3.868,3.868,0,0,1,.7.39l3.31,2.35a1.517,1.517,0,0,1,.55.64,2.052,2.052,0,0,1,.16.78,2.545,2.545,0,0,1-.25,1.09,4.126,4.126,0,0,1-.68,1.02,4.508,4.508,0,0,1-1.64,1.18,5.022,5.022,0,0,1-1.95.38,8.334,8.334,0,0,1-3.26-.73,17.564,17.564,0,0,1-3.44-1.98,28.75,28.75,0,0,1-3.28-2.8,28.414,28.414,0,0,1-2.79-3.27A17.828,17.828,0,0,1,.72,7.81,8.423,8.423,0,0,1,0,4.54,5.173,5.173,0,0,1,.36,2.61,4.6,4.6,0,0,1,1.51.94,2.93,2.93,0,0,1,3.59,0,1.879,1.879,0,0,1,4.4.18a1.63,1.63,0,0,1,.67.56"
                  transform="translate(0.75 0.75)"
                  fill="none"
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="+966543680192"
                  className="border border-gray-500 w-full px-12 !rounded-l-none"
                />
                <button className="py-1 rounded-r-none">تحديد</button>
              </div>
            </div>

            <div className="relative">
              <svg
                className="absolute top-1/2 right-4 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="21.47"
                height="21.5"
                viewBox="0 0 21.47 21.5"
              >
                <path
                  id="Vector"
                  d="M7.39,4.01a3.422,3.422,0,0,1,.4.7,1.581,1.581,0,0,1,.14.61,1.357,1.357,0,0,1-.21.71,3.4,3.4,0,0,1-.56.71l-.76.79a.535.535,0,0,0-.16.4.908.908,0,0,0,.03.23c.03.08.06.14.08.2a8.3,8.3,0,0,0,.93,1.28c.45.52.93,1.05,1.45,1.58.54.53,1.06,1.02,1.59,1.47a7.675,7.675,0,0,0,1.29.92c.05.02.11.05.18.08a.69.69,0,0,0,.25.04.55.55,0,0,0,.41-.17l.76-.75a3.068,3.068,0,0,1,.72-.56,1.332,1.332,0,0,1,.71-.21,1.6,1.6,0,0,1,.61.13,3.868,3.868,0,0,1,.7.39l3.31,2.35a1.517,1.517,0,0,1,.55.64,2.052,2.052,0,0,1,.16.78,2.545,2.545,0,0,1-.25,1.09,4.126,4.126,0,0,1-.68,1.02,4.508,4.508,0,0,1-1.64,1.18,5.022,5.022,0,0,1-1.95.38,8.334,8.334,0,0,1-3.26-.73,17.564,17.564,0,0,1-3.44-1.98,28.75,28.75,0,0,1-3.28-2.8,28.414,28.414,0,0,1-2.79-3.27A17.828,17.828,0,0,1,.72,7.81,8.423,8.423,0,0,1,0,4.54,5.173,5.173,0,0,1,.36,2.61,4.6,4.6,0,0,1,1.51.94,2.93,2.93,0,0,1,3.59,0,1.879,1.879,0,0,1,4.4.18a1.63,1.63,0,0,1,.67.56"
                  transform="translate(0.75 0.75)"
                  fill="none"
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>

              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="+966543680192"
                  className="border border-gray-500 w-full px-12 !rounded-l-none"
                />
                <button className="py-1 rounded-r-none">تحديد</button>
              </div>
            </div>

            <div className="relative">
              <svg
                className="absolute top-1/2 right-4 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="21.47"
                height="21.5"
                viewBox="0 0 21.47 21.5"
              >
                <path
                  id="Vector"
                  d="M7.39,4.01a3.422,3.422,0,0,1,.4.7,1.581,1.581,0,0,1,.14.61,1.357,1.357,0,0,1-.21.71,3.4,3.4,0,0,1-.56.71l-.76.79a.535.535,0,0,0-.16.4.908.908,0,0,0,.03.23c.03.08.06.14.08.2a8.3,8.3,0,0,0,.93,1.28c.45.52.93,1.05,1.45,1.58.54.53,1.06,1.02,1.59,1.47a7.675,7.675,0,0,0,1.29.92c.05.02.11.05.18.08a.69.69,0,0,0,.25.04.55.55,0,0,0,.41-.17l.76-.75a3.068,3.068,0,0,1,.72-.56,1.332,1.332,0,0,1,.71-.21,1.6,1.6,0,0,1,.61.13,3.868,3.868,0,0,1,.7.39l3.31,2.35a1.517,1.517,0,0,1,.55.64,2.052,2.052,0,0,1,.16.78,2.545,2.545,0,0,1-.25,1.09,4.126,4.126,0,0,1-.68,1.02,4.508,4.508,0,0,1-1.64,1.18,5.022,5.022,0,0,1-1.95.38,8.334,8.334,0,0,1-3.26-.73,17.564,17.564,0,0,1-3.44-1.98,28.75,28.75,0,0,1-3.28-2.8,28.414,28.414,0,0,1-2.79-3.27A17.828,17.828,0,0,1,.72,7.81,8.423,8.423,0,0,1,0,4.54,5.173,5.173,0,0,1,.36,2.61,4.6,4.6,0,0,1,1.51.94,2.93,2.93,0,0,1,3.59,0,1.879,1.879,0,0,1,4.4.18a1.63,1.63,0,0,1,.67.56"
                  transform="translate(0.75 0.75)"
                  fill="none"
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>

              <input
                type="text"
                placeholder="الهاتف"
                className="border border-gray-500 w-full px-12"
              />
            </div>

            <div className="relative">
              <svg
                className="absolute top-1/2 right-4 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="19.284"
                height="19.288"
                viewBox="0 0 19.284 19.288"
              >
                <path
                  id="Vector"
                  d="M12.773.373c3.81-1.27,5.88.81,4.62,4.62l-2.83,8.49c-1.9,5.71-5.02,5.71-6.92,0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01,0-6.92l4.6-1.53"
                  transform="translate(0.75 0.772)"
                  fill="none"
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>

              <input
                type="text"
                placeholder="تليجرام"
                className="border border-gray-500 w-full px-12"
              />
            </div>

            <div className="relative">
              <svg
                className="absolute top-1/2 right-4 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="16.42"
                height="21.533"
                viewBox="0 0 16.42 21.533"
              >
                <path
                  id="Vector"
                  d="M0,7.062V1.072A1.071,1.071,0,0,1,1.55.112L14.92,6.8l-3.22,3.22L2.12,19.6l-.58.29A1.066,1.066,0,0,1,0,18.932v-7.36"
                  transform="translate(0.75 0.764)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>

              <input
                type="text"
                placeholder="البريد الالكتروني"
                className="border border-gray-500 w-full px-12"
              />
            </div>

            <button
              className="py-1 text-lg w-20 mx-auto mt-10"
              onClick={() => setShowSave(true)}
            >
              حفظ
            </button>
          </div>
        </div>
      </div>

      <div className="py-14 px-6 border border-[#E9E9E9] rounded-lg mt-8">
        <h2 className="font-normal">شهادة توثيق منصة الأعمال</h2>

        <div className="flex flex-col items-center gap-2 mt-8">
          <div className="flex flex-col gap-4 w-1/2 mt-4">
            <label htmlFor="number" className="text-lg">
              رقم التوثيق
            </label>
            <div className="relative">
              <Image
                className="absolute top-1/2 right-4 -translate-y-1/2"
                src={cardImg}
                alt="name"
                priority
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="إضافة رمز التوثيق"
                className="border border-gray-500 w-full px-12 !rounded-l-none"
              />
            </div>

            <h3 className="font-medium mt-6">
              شهادة توثيق المتجر على منصة الأعمال
            </h3>

            <label
              htmlFor="uploadFile"
              className="img overflow-hidden rounded-lg relative bg-[#eeeeee] flex justify-center items-center"
            >
              <div className="py-8 text-center">
                <h3>اسحب الملفات وأفلتها هنا</h3>
                <p>أو تصفح من جهازك</p>
              </div>
              <input
                className="hidden w-full h-full"
                type="file"
                id="uploadFile"
                accept="video/*,image/*"
              />
            </label>
            <p className="opacity-50 mt-0">jpg, jpeg, png* يسمح بصورة من نوع</p>

            <button
              className="py-1 text-lg w-20 mx-auto mt-10"
              onClick={() => setShowSave(true)}
            >
              حفظ
            </button>
          </div>
        </div>
      </div>

      <div className="py-14 px-6 border border-[#E9E9E9] rounded-lg mt-8">
        <h2 className="font-normal">حسابات التواصل الاجتماعي</h2>

        <div className="flex flex-col items-center gap-2 mt-8">
          <div className="flex flex-col gap-4 w-1/2 mt-4">
            <div className="relative">
              <Image
                className="absolute top-1/2 right-4 -translate-y-1/2"
                src={instaImg}
                alt="name"
                priority
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="حساب انستقرام"
                className="border border-gray-500 w-full px-12"
              />
            </div>

            <div className="relative">
              <FaXTwitter className="absolute top-1/2 right-4 -translate-y-1/2 text-lg" />

              <input
                type="text"
                placeholder="حساب تويتر"
                className="border border-gray-500 w-full px-12"
              />
            </div>

            <div className="relative">
              <FiFacebook className="absolute top-1/2 right-4 -translate-y-1/2 text-xl" />

              <input
                type="text"
                placeholder="حساب فيسبوك"
                className="border border-gray-500 w-full px-12"
              />
            </div>

            <div className="relative">
              <BsSnapchat className="absolute top-1/2 right-4 -translate-y-1/2 text-lg" />

              <input
                type="text"
                placeholder="حساب سناب شات"
                className="border border-gray-500 w-full px-12"
              />
            </div>

            <div className="relative">
              <BsTiktok className="absolute top-1/2 right-4 -translate-y-1/2 text-lg" />

              <input
                type="text"
                placeholder="حساب تيك توك"
                className="border border-gray-500 w-full px-12"
              />
            </div>

            <div className="relative">
              <AiOutlineYoutube className="absolute top-1/2 right-4 -translate-y-1/2 text-xl" />

              <input
                type="text"
                placeholder="رابط يوتيوب"
                className="border border-gray-500 w-full px-12"
              />
            </div>

            <button
              className="py-1 text-lg w-20 mx-auto mt-10"
              onClick={() => setShowSave(true)}
            >
              حفظ
            </button>
          </div>
        </div>
      </div>

      <div className="py-14 px-6 border border-[#E9E9E9] rounded-lg mt-8">
        <h2 className="font-normal">روابط اخرى</h2>

        <div className="flex flex-col items-center gap-2 mt-8">
          <div className="flex flex-col gap-4 w-1/2 mt-4">
            <div className="relative">
              <AiOutlineApple className="absolute top-1/2 right-4 -translate-y-1/2 text-lg" />

              <input
                type="text"
                placeholder="رابط تطبيق ايفون"
                className="border border-gray-500 w-full px-12"
              />
            </div>

            <div className="relative">
              <AiOutlineAndroid className="absolute top-1/2 right-4 -translate-y-1/2 text-lg" />

              <input
                type="text"
                placeholder="رابط تطبيق اندرويد"
                className="border border-gray-500 w-full px-12"
              />
            </div>

            <button
              className="py-1 text-lg w-20 mx-auto mt-10"
              onClick={() => setShowSave(true)}
            >
              حفظ
            </button>
          </div>
        </div>
      </div>

      <Modal showModal={showSave} setShowModal={setShowSave}>
        <div className="p-6 bg-white text-center rounded-lg w-[450px] flex flex-col justify-center items-center gap-4 ">
          <BsFillCheckCircleFill className="text-[40px] text-primary" />
          <p className="w-[98%] mx-auto text-xl">تم الحفظ بنجاح</p>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-primary py-2 px-4 text-xl"
              onClick={() => setShowSave(false)}
            >
              موافق
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default page;
