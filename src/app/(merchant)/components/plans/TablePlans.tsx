import React from "react";
import Image from "next/image";
import mainImg from "#/img for salla/pricePage/WhatsApp-Image-2023-08-16-at-11.24.37-AM-removebg-preview.png";
import profeImg from "#/img for salla/pricePage/Group 87.png";
import advancedImg from "#/img for salla/pricePage/Group 88.png";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

const TablePlans = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="relative mt-10 mx-auto w-max">
        <div className="row grid grid-cols-9 md:grid-cols-12 place-items-end">
          <div className="col col-span-3 md:col-span-6"></div>
          <div className="col col-span-2">
            <Image
              src={mainImg}
              alt="main package"
              width={200}
              height={200}
              priority
            />
          </div>
          <div className="col col-span-2">
            <Image
              src={profeImg}
              alt="profesnal package"
              width={200}
              height={200}
              priority
            />
          </div>
          <div className="col col-span-2">
            <Image
              src={advancedImg}
              alt="advanced package"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>

        <div className="row grid grid-cols-9 md:grid-cols-12 bg-[#E9E9E9] h-[100px] mt-10 pr-10 border-r-4 border-black border-[1px_solid_#E9E9E9] relative after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:border-8 after:border-r-black">
          <div className="col col-span-3 md:col-span-6 flex items-center">
            <h4>الاشتراك الشهري</h4>
          </div>

          <div className="col-span-2 flex flex-col justify-center items-center">
            <h4 className="text-[#F8C600]">متجر بيسك</h4>
            <p>مجاناً</p>
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center">
            <h4 className="text-primary">متجر بيسك</h4>
            <p>$80/شهر</p>
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center">
            <h4 className="text-[#EF00F8]">متجر بلس</h4>
            <p>$30/شهر</p>
          </div>
        </div>

        <TableRow
          title={"عدد لا محدود من النتائج"}
          isBasic
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"عدد لامحدود من الطلبات"}
          isBasic
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"بدون عمولة على المبيعات"}
          isBasic
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"دعم كل أنواع المنتجات"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"تفعيل الدفع الإلكتروني"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"تعدد شركات الشحن"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"تحسين ظهور متجرك على محركات البحث (SEO={false})"}
          isBasic={false}
          isProfessional
          isAdvanced
        />

        <TableHead title={"طرق الدفع"} />

        <TableRow
          title={"الدفع عن الاستلام"}
          isBasic
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"تفعيل الدفع عن طريق البطاقة الائتمانية"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"PayPal تفعيل"}
          isBasic={false}
          isProfessional
          isAdvanced
        />

        <TableHead title={"المزايا التسويقية"} />

        <TableRow title={"كوبونات التخفيض"} isBasic isProfessional isAdvanced />
        <TableRow
          title={"الحملات التسويقية عبر الرسائل والبريد الإلكتروني"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"السلّات المتروكة"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"العروض الخاصة"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"التسويق بالعمولة"}
          isBasic={false}
          isProfessional
          isAdvanced={false}
        />
        <TableRow
          title={"تحسين محركات البحث (SEO)"}
          isBasic={false}
          isProfessional
          isAdvanced={false}
        />
        <TableRow
          title={"الكوبون التسويقي"}
          isBasic={false}
          isProfessional
          isAdvanced={false}
        />
        <TableRow title={"محلي"} isBasic={false} isProfessional isAdvanced />

        <TableHead title={"خدمات الشحن والتوصيل"} />

        <TableRow title={"Aramex"} isBasic isProfessional isAdvanced />
        <TableRow title={"DHL"} isBasic isProfessional isAdvanced />
        <TableRow title={"LIBANPOST"} isBasic isProfessional isAdvanced />
        <TableRow
          title={"إضافة طريقة شحن مخصصة"}
          isBasic
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"قيود الشحن والتوصيل"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"مؤشر الشحن المجاني"}
          isBasic={false}
          isProfessional
          isAdvanced
        />

        <TableHead title={"متجر الثيمات"} />

        <TableRow
          title={"اختيار ثيم للمتجر"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"تخصيص ثيم المتجر"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"تخصيص التصميم من خلال Custom CSS & JS"}
          isBasic={false}
          isProfessional
          isAdvanced={false}
        />

        <TableHead title={"مزايا ادارة المتجر"} />

        <TableRow
          title={"تطبيق لتاجر لإدارة المتجر عبر الجوال iOS و Android"}
          isBasic
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"مجانية SSL شهادة"}
          isBasic
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"الأسئلة والتقييمات"}
          isBasic
          isProfessional
          isAdvanced
        />
        <TableRow title={"التقارير"} isBasic isProfessional isAdvanced />
        <TableRow
          title={"إمكانية تجميد الاشتراك السنوي لمدة 30 يوم"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"حجز رابط خاص (دومين)"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"شراء التطبيق بقيمة إضافية iOS و Android إنشاء تطبيق للمتجر"}
          isBasic={false}
          isProfessional
          isAdvanced
        />

        <TableHead title={"مزايا ادارة المتجر"} />

        <TableRow
          title={"دعم 40 لغة للمتجر"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"دعم العملات"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"الصفحات التعريفية"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"مدونة المتجر"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"واتساب متجر"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"الشراء السريع"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"إقرار العميل قبل الشراء"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"شريط إعلان أعلى المتجر"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"وضع الصيانة"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"قيود الدفع"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"استعادة البيانات المحذوفة"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"دعم الخيارات المتعددة للمنتج"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"تصدير المنتجات واستيرادها"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"تحديث المنتجات بواسطة الإكسل"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"تصنيف المنتجات حسب الماركات التجارية"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"جرد المنتجات"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"دعم إحصائيات المنتج"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"تصدير الطلبات"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"فلترة الطلبات"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"إرسال الطلب كهدية"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"طباعة قائمة تجهيز الطلبات"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"مشاركة رابط الدفع للطلبات من خارج المتجر"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"بطاقات الإهداء الرقمية برسوم إضافية"}
          isBasic={false}
          isProfessional
          isAdvanced
        />
        <TableRow
          title={"فلترة العملاء"}
          isBasic={false}
          isProfessional
          isAdvanced={false}
        />
        <TableRow
          title={"استيراد العملاء بواسطة الاكسل"}
          isBasic={false}
          isProfessional
          isAdvanced={false}
        />
        <TableRow
          title={"تصنيف العملاء إلى مجموعات"}
          isBasic={false}
          isProfessional
          isAdvanced={false}
        />
        <TableRow
          title={"نظام ولاء العملاء برسوم إضافية"}
          isBasic={false}
          isProfessional
          isAdvanced={false}
        />
      </div>
    </div>
  );
};

export default TablePlans;
