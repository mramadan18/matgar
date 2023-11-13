import Statistics from "@/components/HomePage/Statistics";
import imgHero from "/public/img for salla/homePage/Group 85.png";
import Sectors from "@/components/HomePage/Sectors";
import Featuer1 from "@/components/HomePage/Featuers/Featuer1";
import HeroSection from "@/components/utils/HeroSection";
import CreateMatgerCardMainPage from "@/components/utils/CreateMatgerCardMainPage";
import Layout from "@/components/Layout";
import Documentation from "@/components/HomePage/Documentation";
import Featuer2 from "@/components/HomePage/Featuers/Featuer2";
import Featuer3 from "@/components/HomePage/Featuers/Featuer3";
import Featuer4 from "@/components/HomePage/Featuers/Featuer4";
import Featuer5 from "@/components/HomePage/Featuers/Featuer5";

export default function Home() {
  return (
    <Layout>
      <HeroSection
        head="متجر.. تجارة ذكيَّة وسهلة"
        subHead="أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من الحلول الرقميَّة الذكيَّة للمدفوعات، والشحن، وإدارة المخزون،والتسويق، بكل سهولة؛ لأن نجاحك لا يحتاج إلى تعقيد."
        img={imgHero}
      />
      <Statistics />
      <Sectors />
      <Featuer1 />
      <Featuer2 />
      <Featuer3 />
      <Featuer4 />
      <Featuer5 />
      <Documentation />
      <CreateMatgerCardMainPage
        head={"انضم لنا وامتلك متجرك الاحترافي"}
        p={
          "أنشئ متجرك الآن بأدوات مرنة وحلول متكاملة تساعدك في كل خطوة نحو نمو مبيعاتك وتسويق منتجاتك"
        }
        btn={"أنشئ متجرك مجاناً"}
        bg="#0279DE"
        txtColor="#fff"
        btnBg="#606061"
        btnTxtColor="#fff"
      />
    </Layout>
  );
}
