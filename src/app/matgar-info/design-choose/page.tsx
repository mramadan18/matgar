"use client";
import Layout from "../Layout";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const page = () => {
  return (
    <Layout>
      <div className="w-full lg:w-4/5 mx-auto my-20">
        <h1 className="text-3xl">اختر قالب التصميم</h1>
        <p className="text-xl">
          اجذب العملاء عبر اختيار أحد التصاميم المميزة لواجهة متجرك الإلكتروني.
          ستتمكن من تخصيص التصميم لاحقًا من خلال لوحة التحكم
        </p>
        <div className="w-full lg:w-2/3 flex justify-center items-center gap-10 mt-14">
          <div className="w-1/2 h-[200px] lg:h-[400px] bg-[#F2F2F2]"></div>
          <div className="w-1/2 h-[200px] lg:h-[400px] bg-[#F2F2F2]"></div>
        </div>
        <div className="flex-col  mt-14 text-center">
          <h1>+17</h1>
          <p className="text-xl">تصميمات أخرى يمكن إختيارها من لوحة التحكم</p>
        </div>

        <div className="flex justify-between mt-32">
          <div className="flex items-center gap-x-6">
            <Link
              href={"/matgar-info/e-payment"}
              className="text-2xl flex justify-center items-center gap-4"
            >
              <BsChevronRight className="!text-xl text-black hover:text-primary" />
              <span>السابق</span>
            </Link>
          </div>

          <div className="flex gap-x-6">
            <Link href={"/matgar-info/packages"}>
              <button className="rounded-xl py-3 px-14 text-2xl">تأكيد</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
