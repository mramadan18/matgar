import SpecialCard from "./SpecialCard";
import photo1 from "../../../public/img for salla/homePage/icons8-store-50.png";
import photo2 from "../../../public/img for salla/homePage/icons8-laptop-50.png";
import photo3 from "../../../public/img for salla/homePage/icons8-users-48.png";

const SpecialServices = () => {
  return (
    <div className="anime-block home-block bg-[#1E2F32] px-8">
      <div className="content-container">
        <div className="title title--hero w-full center mb-8 sm:mb-12">
          <h2 className="!text-white">خدمات متجر سبيشل </h2>
          <p className="!text-white">
            متجر سبيشل تقدم لك دعمًا خاصًا من خبرائنا على مدار الساعة، لتلبية
            كافة احتياجاتك مثل
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 box gap-8 max1023:gap-4">
          <SpecialCard
            img={photo1}
            head={"مدير نجاح خاص بالمتجر"}
            subHead={
              "مدير نجاح المتجر مسؤول بشكل كامل عن ضمان نجاح المتجر في متجر وتفعيل كامل الخصائص الموجودة في النظام واستخدام أفضل الممارسات المعمول بها  واقتراح الأدوات التي تمكن المتجرمن  تحسين آليات العمل الداخلية وتحسين الأداء"
            }
          />
          <SpecialCard
            img={photo2}
            head={"مسؤول إطلاق المتجر"}
            subHead={
              "يمثل نقطة الانطلاق بالنسبة للمتجر بحيث يشرح للتاجر جميع الخصائص الموجودة في النظام بالإضافة إلى المساعدة في إعداد المتجر وتفعيل   الخصائص بالإضافة إلى نقل المنتجات  والعملاء في حال النقل من منصة أخرى إلى منصة متجر"
            }
          />
          <SpecialCard
            img={photo3}
            head={"مشرف خدمة عملاء"}
            subHead={
              "لضمان الرد على الاستفسارات بشكل أوضح وبطريقة تتناسب مع احتياجات المتجر وإعداداته يتم الرد على استفساراتك من قبل مشرفي خدمة العملاء ذوي الخبرة  العالية شخصيًا لتحقيق الاستفادة الأكبر بأفضل الممارسات"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialServices;
