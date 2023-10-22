import Layout from "@/components/Layout";
import TablePlans from "@/components/plans/TablePlans";
import CreateMatgerCardMainPage from "@/components/utils/CreateMatgerCardMainPage";
import React from "react";

const page = () => {
  return (
    <Layout>
      <h1 className="text-center">الأسعار</h1>

      <div className="content-container text-center">
        <TablePlans />

        <div className="mt-10 flex justify-center items-center gap-4 mb-24">
          <button className="py-3 px-4 rounded-xl bg-primary text-white">
            اشترك الان مجانا
          </button>
          <button className="py-3 px-4 rounded-xl bg-white text-black border border-black">
            اشترك الان مجانا
          </button>
        </div>

        <CreateMatgerCardMainPage
          head={"توسَّع بأعمالك مع متجر سبيشل"}
          p={
            "باقة خاصة تقِّدم حلول تقنية متقدمة تليق بطموح كبار التجار وتحقِّق تقدمهم في عالم التجارة"
          }
          btn={"تقدم بطلبك الان"}
          bg="#0279DE"
          txtColor="#fff"
          btnBg="#606061"
          btnTxtColor="#fff"
        />

        <CreateMatgerCardMainPage
          head={"أهدِ من تحب باقة متجر"}
          p={
            "ادعم أحبابك في تجارتهم الإلكترونية بإهدائهم بطاقة متجر للاشتراك في أحد الباقات الشهرية أو السنوية"
          }
          btn={"أهدِ بطاقة متجر"}
          bg="#E9E9E9"
          txtColor="#000"
          btnBg="#0279DE"
          btnTxtColor="#fff"
        />
      </div>
    </Layout>
  );
};

export default page;
