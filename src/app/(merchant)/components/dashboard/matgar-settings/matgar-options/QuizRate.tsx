import React from "react";
import Image from "next/image";
import settingsImg from "#/img for salla/dashboard/vuesax-broken-setting-3.png";
import OptionItem from "./OptionItem";

const QuizRate = () => {
  return (
    <div className="border border-[#707070] py-6 rounded-lg mt-10">
      <div className="flex items-center gap-2 px-6">
        <Image src={settingsImg} alt={"coupons"} />
        <h3>الأسئلة والتقييمات</h3>
      </div>

      <div className="mt-10">
        <OptionItem title={"نشر الأسئلة مباشرةً دون مراجعة"} isSwitch active />
        <OptionItem
          title={"تفعيل الأسئلة في الصفحات التعريفية"}
          isSwitch
          active
        />
        <OptionItem title={"تفعيل إضافة الأسئلة في المنتجات"} isSwitch active />
        <OptionItem title={"منع الزوار من إضافة أسئلة"} isSwitch active />
      </div>
    </div>
  );
};

export default QuizRate;
