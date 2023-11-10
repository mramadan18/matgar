"use client";
import Link from "next/link";
import Layout from "../Layout";
import PachageList from "@/components/matjarInfo/Packages/PachageList";
import { BsChevronRight } from "react-icons/bs";

const page = () => {
  return (
    <Layout>
      <div className="w-full lg:w-4/5 mx-auto my-20">
        <h1 className="text-3xl">اكتشف باقات متجر</h1>
        <p className="text-xl">
          تعّرف على المزايا المقدمة في باقات متجر وتوسع بتجارتك عبر اختيار
          الباقة الأنسب لمتجرك
        </p>
        <div className="flex justify-center mt-32">
          <button className="text-xl w-24 h-14">شهري</button>
          <button className="text-xl w-24 h-14 bg-[#E9E9E9] text-black">
            سنوي
          </button>
        </div>

        <PachageList />

        <div className="flex justify-between mt-32">
          <div className="flex items-center gap-x-6">
            <Link
              href={"/matgar-info/design-choose"}
              className="text-2xl flex justify-center items-center gap-4"
            >
              <BsChevronRight className="!text-xl text-black hover:text-primary" />
              <span>السابق</span>
            </Link>
          </div>

          <div className="flex gap-x-6">
            <Link href={"/dashboard/main"}>
              <button className="rounded-xl py-3 px-8 text-2xl">
                أبدأ رحلتك الآن
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
