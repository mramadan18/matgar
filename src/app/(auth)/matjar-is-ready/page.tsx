import React from "react";
import ProgressBar2 from "@/components/utils/ProgressBar2/ProgressBar2";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const page = () => {
  return (
    <header className="w-full relative">
      <div className="container mx-auto">
        <ProgressBar2 />

        <div className="flex-col mt-14 mb-4">
          <span className="text-2xl font-bold">ما مدى جاهزية متجرك؟</span>
        </div>

        <div className="flex-col w-full xl:w-1/2">
          <div className="flex items-center gap-x-6 border border-[#707070] mb-4 px-4 rounded-lg cursor-pointer">
            <input type="checkbox" id="1" name="scales" />
            <label className="text-3xl mt-[10px]" htmlFor="1">
              لدي منتجات أو خدمات جاهزة لإضافتها
            </label>
          </div>

          <div className="flex items-center gap-x-6 border border-[#707070] mb-4 px-4 rounded-lg cursor-pointer">
            <input type="checkbox" id="2" name="scales" />
            <label className="text-3xl mt-[10px]" htmlFor="2">
              لدي تصميم جاهز لواجهة متجري الإلكتروني
            </label>
          </div>

          <div className="flex items-center gap-x-6 border border-[#707070] mb-4 px-4 rounded-lg cursor-pointer ">
            <input type="checkbox" id="3" name="scales" />
            <label className="text-3xl mt-[10px]" htmlFor="3">
              لدي الوثائق الحكومية الخاصة بالتجارة الإلكترونية
            </label>
          </div>

          <div className="flex items-center gap-x-6 border border-[#707070] mb-4 px-4 rounded-lg cursor-pointer ">
            <input type="checkbox" id="4" name="scales" />
            <label className="text-3xl mt-[10px]" htmlFor="4">
              لدي خبرة في المدفوعات الإلكترونية
            </label>
          </div>

          <div className="flex items-center gap-x-6 border border-[#707070] mb-4 px-4 rounded-lg cursor-pointer ">
            <input type="checkbox" id="5" name="scales" />
            <label className="text-3xl mt-[10px]" htmlFor="5">
              لدي خبرة مع شركات الشحن
            </label>
          </div>

          <div className="flex items-center gap-x-6 border border-[#707070] mb-4 px-4 rounded-lg cursor-pointer ">
            <input type="checkbox" id="6" name="scales" />
            <label className="text-3xl mt-[10px]" htmlFor="6">
              لدي خبرة في أدوات التسويق الرقمي
            </label>
          </div>
        </div>

        <div className="flex justify-between my-14">
          <div className="flex items-center gap-x-6">
            <Link
              href="/we-get-to-know-you"
              className="text-2xl flex justify-center items-center gap-4"
            >
              <BsChevronRight className="!text-xl text-black hover:text-primary" />
              <span>السابق</span>
            </Link>
          </div>

          <div className="flex gap-x-6">
            <Link href="/matjar-is-ready">
              <button className="rounded-xl py-3 px-14 text-xl bg-white text-black border border-[#707070]">
                تخطي
              </button>
            </Link>
            <Link href="/matjar-info/trader-info">
              <button className="rounded-xl py-3 px-14 text-2xl">تأكيد</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default page;
