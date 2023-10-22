import EPaymentsImage from "../../../public/img for salla/managmentPricePage/imageContainer-25-1.png";
import ShortPaymentsImage from "../../../public/img for salla/managmentPricePage/لقطة_شاشة_2023-08-21_190143-removebg-preview.png";
import UnifiedPaymentImage from "../../../public/img for salla/managmentPricePage/Web 1920 – 1.png";
import PaymentProcessImage from "../../../public/img for salla/managmentPricePage/Web 1920 – 3.png";
import CustomerPaymentImage from "../../../public/img for salla/managmentPricePage/Web 1920 – 4.png";
import HeroSection from "@/components/utils/HeroSection";
import HeroImage from "../../../public/img for salla/managmentPricePage/3222.png";
import SectionPhotoFirst from "@/components/utils/SectionPhotoFirst";
import SectionPhotoSecond from "@/components/utils/SectionPhotoSecond";
import Layout from "@/components/Layout";

const PaymentPage = () => {
  return (
    <Layout>
      <HeroSection
        head={"إدارة مالية متكاملة لتجارتك"}
        subHead={
          "استقبل وأدِر مدفوعات متجرك بأمان وسلاسة، وقدِّم لعملائك أسهل تجربة دفع ممكنة!"
        }
        img={HeroImage}
      />
      <SectionPhotoSecond
        head={"تجربة دفع تميِّز متجرك"}
        subHead={
          "صمِّم لعملائك صفحة دفع تعكس هوية علامتك التجارية، وخصِّص رابط الدفع ورسائل التحقُّق المُرسلة للعملاء لتحمل اسم متجرك"
        }
        img={ShortPaymentsImage}
      />
      <SectionPhotoFirst
        head={"تفعيل فوري- وبدون أي! عقود"}
        subHead={
          "لا يتطلب تفعيل بوابة دفع متجر توقيع عقود مع طرف ثالث أو فتح حساب في بنك محدد. يمكنك البدء بمجرد توثيق متجرك!"
        }
        img={UnifiedPaymentImage}
      />
      <SectionPhotoSecond
        head={"اختصر الدفع لخطوة واحدة"}
        subHead={
          "قدِّم لعملائك أسهل تجربة تسوُّق وأسرع عملية دفع. عبر تفعيل زر “اشترِ الآن”"
        }
        img={PaymentProcessImage}
      />
      <SectionPhotoFirst
        head={"ذكِّر عميلك بالدفع تلقائيًا"}
        subHead={
          "ارفع معدل الطلبات المكتملة في متجرك عبر إرسال روابط دفع مباشرة وتلقائية للعملاء لإكمال الطلب!"
        }
        img={CustomerPaymentImage}
      />
      <SectionPhotoSecond
        head={"حساب موحَّد للعميل"}
        subHead={
          "يكتفي العميل بإنشاء حساب عند الشراء لأول مرة أي متجر على سلة، ليتمكن بعدها من الشراء على متجر بنفس الحساب!"
        }
        img={EPaymentsImage}
      />
    </Layout>
  );
};

export default PaymentPage;
