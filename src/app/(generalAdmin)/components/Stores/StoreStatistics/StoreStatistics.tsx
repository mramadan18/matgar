import Image from "next/image";
import Link from "next/link";
import demo_img from "#/admin_images/icons/demo_img.svg";

const StoreStatistics = () => {
  return (
    <div className="mt-10 pt-8 pb-32 px-10 bg-admin_bg">
      <h4 className="mb-6">أسم المتجر هنا</h4>
      <div className="w-32 h-32">
        <Image src={demo_img} alt="store logo" className="w-full h-full" />
      </div>

      <div className="mt-14">
        <h5>التفاصيل</h5>
        <button className="bg-primary-900 text-white mt-4 py-1 px-5 rounded-full">
          متجر بلس
        </button>
        <p className="mt-4 max-w-[800px]">
          Lorem ipsum dolor sit amet consectetur. In tortor dolor turpis in
          scelerisque. Integer sagittis consequat senectus sem etiam ac
          convallis eleifend magna. Consequat venenatis dignissim faucibus ut
          pulvinar rhoncus sed. Volutpat fermentum potenti aliquet amet in in
          mauris odio.
        </p>
      </div>

      <div className="mt-14">
        <h5>السجل التجاري</h5>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-4">
          <div className="w-32 h-32">
            <Image src={demo_img} alt="store logo" className="w-full h-full" />
          </div>
          <div className="w-32 h-32">
            <Image src={demo_img} alt="store logo" className="w-full h-full" />
          </div>
          <div className="w-32 h-32">
            <Image src={demo_img} alt="store logo" className="w-full h-full" />
          </div>
          <div className="w-32 h-32">
            <Image src={demo_img} alt="store logo" className="w-full h-full" />
          </div>
          <div className="w-32 h-32">
            <Image src={demo_img} alt="store logo" className="w-full h-full" />
          </div>
          <div className="w-32 h-32">
            <Image src={demo_img} alt="store logo" className="w-full h-full" />
          </div>
        </div>
        <button className="bg-primary-900 text-white mt-6 py-3 w-44">
          طباعة السجل
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mt-10 px-0 lg:px-32">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-[#868A9A]">رقم الهاتف</p>
            <p>0123456789</p>
          </div>
          <div>
            <p className="text-[#868A9A]">حساب سناب شات</p>
            <p>https://favebook.com</p>
          </div>
          <div>
            <p className="text-[#868A9A]">حساب تويتر</p>
            <p>https://favebook.com</p>
          </div>
          <div>
            <p className="text-[#868A9A]">الحاله :</p>
            <p>قيد التنفيذ</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-[#868A9A]">حساب فيس بوك</p>
            <p>https://favebook.com</p>
          </div>
          <div>
            <p className="text-[#868A9A]">حساب تويتر</p>
            <p>https://favebook.com</p>
          </div>
          <div>
            <p className="text-[#868A9A]">عدد الفروع </p>
            <p>2</p>
          </div>
          <div>
            <p className="text-[#868A9A]">الحاله :</p>
            <p>قيد التنفيذ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreStatistics;
