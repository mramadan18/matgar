import Layout from "@/components/Layout";
import ApplyNowCard from "@/components/SpecialPage/ApplyNowCard";
import HeroSection from "@/components/SpecialPage/HeroSection";
import SpecialSection2 from "@/components/SpecialPage/SpecialSection2";
import SpecialServices from "@/components/SpecialPage/SpecialServices";

const page = () => {
  return (
    <Layout>
      <HeroSection />
      <SpecialServices />
      <SpecialSection2 />
      <ApplyNowCard />
    </Layout>
  );
};

export default page;
