import React from "react";
import PackageItem from "./PackageItem";

const PachageList = () => {
  return (
    <div className="flex justify-between items-center gap-8 mt-20">
      <PackageItem
        name={"متجر بيسيك"}
        desc={"الباقة الأساسية لتجربة عالم التجارة الإلكترونية"}
        price={"مجاناً"}
      />

      <PackageItem
        name={"متجر بلس"}
        desc={"باقة الخدمات المتقدمة"}
        price={"30.00"}
      />
      <PackageItem
        name={"متجر برو"}
        desc={"باقة التجارة الاحترافية للشركات"}
        price={"80.00"}
      />
    </div>
  );
};

export default PachageList;
