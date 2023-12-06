"use client";
import Link from "next/link";
import Layout from "../Layout";
import Previews from "@/components/utils/Previews";

const page = () => {
  return (
    <Layout>
      <div className="w-4/5 mx-auto my-20">
        <h1 className="text-3xl font-bold mb-2">أضف معلومات متجرك</h1>
        <p className="text-xl">
          ابدأ بإضافة معلومات وهوية متجرك كما تود أن تظهر لعملائك بإمكانك
          التعديل على كافة المعلومات هنا لاحقًا
        </p>
        <div className="matjar-logo">
          <p className="mt-10 text-2xl font-bold">شعار المتجر (اختياري)</p>
          <Previews />
        </div>
        <form>
          <div className="flex-col mt-4">
            <label htmlFor="matjar-name" className="text-2xl mb-4">
              اسم المتجر
            </label>
            <input
              type="text"
              id="matjar-name"
              placeholder="إدخل إسم المتجر"
              className="py-3 px-4"
            />
          </div>
          <div className="flex-col mt-4">
            <label className="text-2xl mb-4" htmlFor="matjar-link">
              رابط المتجر
            </label>
            <span className="-mt-4 text-sm mb-2">
              حدد الرابط الخاص بمتجرك لتمكّن عملائك للوصول للمتجر والطلب
            </span>
            <input type="text" id="matjar-link" className="py-3 px-4" />
          </div>
          <div className="flex-col mt-6">
            <label className="text-2xl mb-4" htmlFor="commercial-activities">
              النشاط التجاري
            </label>
            <input
              type="text"
              id="commercial-activities"
              placeholder="ادخل الفئة الأقرب لمجال متجرك"
              className="py-3 px-4"
            />
          </div>
          <div className="flex-col mt-6">
            <label className="text-2xl mb-4" htmlFor="sub-activities">
              الأنشطة الفرعية
            </label>
            <input className="w-2/3" type="text" id="sub-activities" />
          </div>

          <div className="mt-6 flex-col">
            <label className="text-2xl mb-4">نوع الكيان</label>
            <div className="flex gap-x-4 mt-4">
              <button className="rounded-full text-xl w-max h-14">فرد</button>
              <button className="rounded-full text-xl w-max h-14 bg-white text-black border border-[#707070]">
                مؤسسه
              </button>
              <button className="rounded-full text-xl w-max h-14 bg-white text-black border border-[#707070]">
                شركه
              </button>
              <button className="rounded-full text-xl w-max h-14 bg-white text-black border border-[#707070]">
                مؤسسه خيريه
              </button>
            </div>
          </div>
        </form>
        <Link
          href={"/matgar-info/add-first-product"}
          className="flex justify-end mt-20"
        >
          <button className="rounded-xl py-3 px-14 text-2xl">التالي</button>
        </Link>
      </div>
    </Layout>
  );
};

export default page;
