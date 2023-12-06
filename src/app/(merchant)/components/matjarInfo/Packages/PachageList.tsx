import React from "react";
import PackageItem from "./PackageItem";

const PachageList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
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
