import StartMakePhonePhoto from "../../../public/img for salla/AppMakerPage/mockuuups-iphone-12-mockup.png";
import StartMakePhonePhoto2 from "/public/img for salla/AppMakerPage/mockuuups-iphone-12-mockup (2).png";
import StartMakeYourAppSection from "@/components/appMakerPAge/StartMakeYourAppSection";
import HeroSection from "@/components/appMakerPAge/HeroSection";
import ShowCaseSection from "@/components/appMakerPAge/ShowCaseSection";
import CommonQuestion from "@/components/appMakerPAge/CommonQuestion";
import Layout from "@/components/Layout";

const page = () => {
  return (
    <Layout>
      <HeroSection />
      <StartMakeYourAppSection
        img={StartMakePhonePhoto2}
        h2second={"تفرد بتجربة تسوق تناسب نشاطك التجاري"}
        p={
          "وفّر لعملائك تجربة تسوق مميزة تناسب نشاطك التجاري، سواء كان مطعمًا أو مقهى أو متجرًا إلكترونيًا. وذلك من خلال مزايا عديدة مثل، قوائم طعام تفاعلية، تحديد موقع العملاء بدقة عالية، والدفع السريع، ولوحة تحكم متكاملة لتصميم واجهات تطبيقك، وأكثر"
        }
      />
      <ShowCaseSection />
      <StartMakeYourAppSection
        h2="ابدأ بصنع تطبيقك"
        h3=" سنوياً /  $500 "
        h5="شهريًا /  $250"
        img={StartMakePhonePhoto}
        h2second={"ابدأ بصنع تطبيقك"}
        p={
          "للاشتراك في خدمة صانع التطبيقات يتطلب تفعيل أحد الباقات المدفوعة على منصة متجر"
        }
      />
      <CommonQuestion />
    </Layout>
  );
};

export default page;
