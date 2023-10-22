import ProgressBar from "@/components/utils/ProgressBar/ProgressBar";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full relative mb-6">
      <div className="container mx-auto">
        <ProgressBar />

        <div className="flex-col my-14">
          <span className="text-2xl">
            ساعدنا نتعرف عليك أكثر لنُقدم لك تجربة تلائم نشاطك التجاري
          </span>
        </div>

        <div className="mt-8 flex-col">
          <span className="text-2xl">هل لديك خبرة في التجارة؟ (مطلوب)</span>
          <div className="flex gap-x-2 mt-4">
            <button className="rounded-full h-7 w-24 text-xl py-6">نعم</button>
            <button className="rounded-full h-7 w-24 text-xl py-6 bg-white text-black border border-[#707070]">
              ليس بعد
            </button>
          </div>
        </div>

        <div className="mt-14 flex-col">
          <span className="text-2xl">هل هذا أول متجر الكتروني لك؟ (مطلوب)</span>
          <div className="flex gap-x-2 mt-4">
            <button className="rounded-full h-7 w-max text-xl px-10 py-6">
              نعم
            </button>
            <button className="rounded-full h-7 w-max text-xl px-10 py-6 bg-white text-black border border-[#707070]">
              لا
            </button>
          </div>
        </div>

        <div className="mt-14 flex-col">
          <span className="text-2xl">كيف سبق لك ممارسة التجارة؟ (مطلوب)</span>
          <div className="flex gap-x-2 mt-4">
            <button className="rounded-full h-7 w-max text-xl px-10 py-6">
              عن طريق محل تجاري
            </button>
            <button className="rounded-full h-7 w-max text-xl px-10 py-6 bg-white text-black border border-[#707070]">
              عن طريق منصات التواصل الاجتماعي مثل انستقرام
            </button>
          </div>
        </div>
        <div className="mt-28 flex justify-center">
          <Link href="/matjar-is-ready">
            <button className="rounded-xl py-3 px-14 text-2xl">التالي</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
