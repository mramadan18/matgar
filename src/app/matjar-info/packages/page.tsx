"use client";
import "./packages.css";
import { MdVerified } from "react-icons/md";
import Layout from "../Layout";
import PachageList from "@/components/matjarInfo/Packages/PachageList";

const page = () => {
  return (
    <Layout>
      <div className="w-4/5 mx-auto my-20">
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

        <div className="next">
          <button className="rounded-xl text-2xl w-28 h-14 ">التالي</button>
        </div>
      </div>
    </Layout>
  );
};

export default page;
