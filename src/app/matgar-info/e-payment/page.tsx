"use client";
import Link from "next/link";
import Layout from "../Layout";
import { BsChevronRight } from "react-icons/bs";

const page = () => {
  return (
    <Layout>
      <div className="w-4/5 mx-auto my-20">
        <h1 className="text-3xl">فعل المدفوعات الالكترونيه</h1>
        <p className="text-xl mt-6">
          مكّن عملائك من الدفع بسهولة عبر تفعيل خيارات الدفع الإلكتروني. ستُفعل
          الخيارات بشكل كامل بعد توثيق متجرك والاشتراك في أحد باقات سلة المدفوعة
        </p>

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
