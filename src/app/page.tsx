import Statistics from "@/components/HomePage/Statistics";
import imgHero from "/public/img for salla/homePage/Group 85.png";

import Sectors from "@/components/HomePage/Sectors";
import Featuers from "@/components/HomePage/Featuers";
import HeroSection from "@/components/utils/HeroSection";
import CreateMatgerCardMainPage from "@/components/utils/CreateMatgerCardMainPage";
import Layout from "@/components/Layout";
import Documentation from "@/components/HomePage/Documentation";

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
      <Featuers />
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
