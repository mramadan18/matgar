import React from "react";
import Image from "next/image";
import couponsImg from "#/img for salla/dashboard/vuesax-broken-percentage-circle.png";
import OptionItem from "./OptionItem";

const CouponsDiscount = () => {
  return (
    <div className="border border-[#707070] py-6 rounded-lg mt-10">
      <div className="flex items-center gap-2 px-6">
        <Image src={couponsImg} alt={"coupons"} />
        <h3>الأسئلة والتقييمات</h3>
      </div>

      <div className="mt-10">
        <OptionItem title={"عرض تبويب التخفيضات"} isSwitch active />
        <OptionItem title={"تفعيل كوبونات التخفيض"} isSwitch active />
        <OptionItem title={"تفعيل تطبيق الكوبون في السلة"} isSwitch />
      </div>
    </div>
  );
};

export default CouponsDiscount;
