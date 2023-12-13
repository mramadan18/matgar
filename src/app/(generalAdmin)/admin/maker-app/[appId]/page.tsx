import Image from "next/image";
import AppDetails from "@/app/(generalAdmin)/components/MakerApp/AppDetails";
import demo_img from "#/admin_images/icons/demo_img.svg";

const page = () => {
  return (
    <div className="container mt-10 pb-10">
      <h4 className="font-medium">تفاصيل التطبيق</h4>

      <div className="mt-8">
        <AppDetails />
      </div>

      <div className="mt-8">
        <h4>التفاصيل</h4>

        <div className="mt-6">
          <h4>أيقونه التطبيق</h4>
          <div className="w-32 h-32 mt-4">
            <Image src={demo_img} alt="img" className="w-full h-full" />
          </div>
        </div>

        <div className="mt-8">
          <h4>صور لتطبيقات مشابهه</h4>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-32 h-32">
              <Image src={demo_img} alt="img" className="w-full h-full" />
            </div>
            <div className="w-32 h-32">
              <Image src={demo_img} alt="img" className="w-full h-full" />
            </div>
            <div className="w-32 h-32">
              <Image src={demo_img} alt="img" className="w-full h-full" />
            </div>
            <div className="w-32 h-32">
              <Image src={demo_img} alt="img" className="w-full h-full" />
            </div>
          </div>

          <div className="mt-6">
            <h4>وصف عن التطبيق وصفحات التعريفية</h4>
            <p className="mt-4">
              وصف عن التطبيق وصفحات التعريفية هنا كل وصف التطبيق المكتوب عند
              أنشاء التطبيق
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
