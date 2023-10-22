"use client";
import Link from "next/link";
import Layout from "../Layout";
import { BsChevronRight } from "react-icons/bs";

const page = () => {
  return (
    <Layout>
      <div className="w-4/5 mx-auto my-20">
        <div className="border-r border-[#707070] pr-14 relative before:absolute before:top-[-30px] before:right-[-12px] before:w-6 before:h-6 before:bg-primary before:rounded-full after:absolute after:bottom-[-30px] after:right-[-12px] after:w-6 after:h-6 after:border after:border-[#707070] after:rounded-full">
          <h1 className="text-3xl">حدد موقع استلام الشحنات</h1>
          <p className="text-xl  mt-4">
            حدد العنوان الرئيسي لاستلام شحنات الطلبات من قبل شركات الشحن
          </p>

          <div className="mt-10 h-[70vh]">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26678.360537267963!2d44.44557686391948!3d33.298023970909995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155781bc7ed270e1%3A0x151cf02d7b87ca2f!2z2KfZhNmD2LHYp9iv2KnYjCDYqNi62K_Yp9iv2Iwg2KfZhNi52LHYp9mC!5e0!3m2!1sar!2seg!4v1687824296824!5m2!1sar!2seg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex justify-between items-center mt-32">
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
            <Link href="/matjar-info/trader-info">
              <button className="rounded-xl py-3 px-14 text-2xl">تأكيد</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
