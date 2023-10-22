import HeroSection from "@/components/utils/HeroSection";
import MarketingSolverImage from "/public/img for salla/marketingSolver/11.png";
import Features from "@/components/MaketingSolving/Features";
import CreateMatgerCardMainPage from "@/components/utils/CreateMatgerCardMainPage";
import Layout from "@/components/Layout";

const page = () => {
  return (
    <Layout>
      <HeroSection
        head={"حلول تسويقية تبرِز حضورك وتجذب جمهورك"}
        subHead={
          ". اكسب عملاء أكثر عبر أدوات تسويق رقمي سهلة الخطوات ومتعددة القنوات"
        }
        img={MarketingSolverImage}
      />
      <Features />
      <CreateMatgerCardMainPage
        head={"أتقِن فنون التسويق، وفالك التوفيق"}
        p={
          "تفوَّق في تجارتك الإلكترونية مع أدوات تسويق رقمي سهلة ومتكاملة. في متجر. ابدأ اليوم بدون الحاجة لأي فريق"
        }
        btn={"أنشئ متجرك مجاناً"}
        bg={"#0279DE"}
        txtColor={"#fff"}
        btnBg={"#606061"}
        btnTxtColor={"#fff"}
      />
    </Layout>
  );
};

export default page;
