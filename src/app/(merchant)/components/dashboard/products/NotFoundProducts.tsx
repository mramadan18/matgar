import React from "react";
import Image from "next/image";
import boxMain from "#/img for salla/dashboard/icons8-box-96.png";

const NotFoundProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Image
        className="opacity-50"
        src={boxMain}
        alt="box"
        width={216}
        height={216}
        priority
      />

      <h3 className="my-0 text-2xl tracking-[1px]">
        لا يوجد لديك منتجات حالياً
      </h3>
      <p>ابدأ رحلتك التجارية بإضافة اول منتج بالنقر على زر إضافة منتج جديد</p>
    </div>
  );
};

export default NotFoundProducts;
