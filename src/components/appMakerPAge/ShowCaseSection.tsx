import Image from "next/image";
import mobPhoto2 from "../../../public/img for salla/AppMakerPage/Group 93.png";
import mobPhoto1 from "../../../public/img for salla/AppMakerPage/Group 95.png";
import mobPhoto3 from "../../../public/img for salla/AppMakerPage/Group 94.png";
import ShowCaseCard from "./ShowCaseCard";
const ShowCaseSection = () => {
  return (
    <div className="content-container items-center justify-center flex md:flex-row flex-col md:justify-between relative my-[200px]">
      <ShowCaseCard
        h4={"مــتـجــر شيفت"}
        p={
          "تجربتنـــا مع متجر ممتازة أعجبنا بسهولة وسلاسة إدارة المتجـــر الإلكترونـــي وتفعيـــل عـــدة خدمـــات منها اللوجستية والادارية وخدمـــة العمـــلاء  وغيرها الكثير"
        }
        img={mobPhoto3}
      />

      <ShowCaseCard
        h4={"مـتجـر أبو حمام"}
        p={" هو مزيج بين الابداع  والتقنيات الاحترافية سلس وجميل بالعمل"}
        img={mobPhoto2}
        translate={true}
      />

      <ShowCaseCard
        h4={"مطعم الشيف وريف"}
        p={
          "نفتخر بوجود شركة لبنانية تقدم خدمات جبارة بهذا  المستوى من الاحترافية"
        }
        img={mobPhoto1}
      />
    </div>
  );
};

export default ShowCaseSection;
