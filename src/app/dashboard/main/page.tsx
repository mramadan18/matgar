import Progress from "@/components/dashboard/main/Progress";
import AddInfo from "../../../../public/img for salla/dashboard/icons8-box-96.png";
import ProgressActiveCard from "@/components/dashboard/main/ProgressActiveCard";
import boxAdd from "../../../../public/img for salla/dashboard/icons8-carton-50.png";
import shippingImg from "../../../../public/img for salla/dashboard/icons8-shuttle-bus-50.png";
import PayImg from "../../../../public/img for salla/dashboard/icons8-magnetic-card-50.png";
import lapImg from "../../../../public/img for salla/dashboard/icons8-laptop-50.png";
import precentageImg from "../../../../public/img for salla/dashboard/icons8-discount-50.png";

const page = () => {
  return (
    <div className="w-full">
      <Progress />
      <ProgressActiveCard
        img={AddInfo}
        title={"أضف معلومات متجرك"}
        isActive={true}
      />
      <ProgressActiveCard
        img={boxAdd}
        title={"أضف أول منتج لمتجرك"}
        isActive={true}
      />
      <ProgressActiveCard
        img={shippingImg}
        title={"فعل خيار الشحن"}
        isActive={true}
      />

      <ProgressActiveCard
        img={PayImg}
        title={"فعل المدفوعات الإلكترونية"}
        isActive={false}
      />

      <ProgressActiveCard
        img={lapImg}
        title={"اختر تصميم متجرك"}
        isActive={false}
      />
      <ProgressActiveCard
        img={precentageImg}
        title={"اكتشف باقات متجر"}
        isActive={true}
      />
    </div>
  );
};

export default page;
