import React from "react";
import MenuAddProudctItem from "./MenuAddProudctItem";
import boxProduct from "../../.././../public/img for salla/dashboard/icons8-carton-50.png";
import serviceOrder from "../../.././../public/img for salla/dashboard/icons8-template-64.png";
import cake from "../../.././../public/img for salla/dashboard/icons8-cake-96.png";
import laptop from "../../.././../public/img for salla/dashboard/icons8-laptop-50.png";
import games from "../../.././../public/img for salla/dashboard/icons8-games-50.png";
import group from "../../.././../public/img for salla/dashboard/icons8-storehouse-50.png";
import lock from "../../.././../public/img for salla/dashboard/icons8-lock-30.png";
import picture from "../../.././../public/img for salla/dashboard/icons8-picture-50.png";

const MenuAddNewProduct = () => {
  return (
    <div className="py-4 px-2 bg-white flex flex-col gap-6 drop-shadow-2xl absolute top-20 right-5 w-[400px] h-[400px] overflow-y-scroll z-10 rounded-lg">
      <MenuAddProudctItem
        title="منتج جاهز"
        desc="المنتجات الملموسة والقابلة للشحن"
        img={boxProduct}
      />
      <MenuAddProudctItem
        title="خدمة حسب الطلب"
        desc="التصميم , الطباعة , الكتابة"
        img={serviceOrder}
        isPro
      />
      <MenuAddProudctItem
        title="أكل"
        desc="المأكولات التي تتطلب شحن خاص"
        img={cake}
        isPro
      />
      <MenuAddProudctItem
        title="منتج رقمي"
        desc="الكتب الالكترونية , الدورات "
        img={laptop}
        isPro
      />
      <MenuAddProudctItem
        title="بطاقة رقمية"
        desc="بطاقة شحن , حسابات للبيع"
        img={games}
        isPro
      />
      <MenuAddProudctItem
        title="مجموعة منتجات"
        desc="أكثر من منتج في منتج واحد"
        img={group}
        isPro
      />
      <MenuAddProudctItem
        title="حجوزات"
        desc="دورات , استشارات"
        img={lock}
        isPro
      />
      <MenuAddProudctItem
        title="استخدام نماذج جاهزة"
        desc="إضافة منتج بسرعة وسهولة"
        img={picture}
        isNew
      />
    </div>
  );
};

export default MenuAddNewProduct;
