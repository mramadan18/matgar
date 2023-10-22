import Image from "next/image";
import React from "react";
import giftImg from "public/img for salla/dashboard/icons8-gift-50.png";
import DartImage from "public/img for salla/dashboard/icons8-moon-50.png";
import defualtUser from "public/img for salla/dashboard/vuesax-bulk-profile-circle.png";

const DashboardNavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="navbar-container pt-6">
      <div className="flex justify-between mb-10">
        <div className="flex">
          <input
            className=" max-w-[23rem]"
            type="text"
            placeholder="ابحث برقم الطلب اسم العميل رقم الشحنة"
          />

          <select className="border rounded-md justify-center items-center opacity-50 px-3 text-[1rem]">
            <option value="orders">الطلبات</option>
            <option value="products">المنتجات</option>
            <option value="cutomers">العملاء</option>
          </select>
        </div>

        <div className="flex flex-row-reverse space-x-5 items-center">
          <Image
            src={giftImg}
            alt={"gift-Image"}
            width={40}
            style={{ marginLeft: "1rem" }}
          />
          <Image src={DartImage} alt={"moon-image"} width={40} />
          <div className="flex justify-center items-center flex-row-reverse ">
            <Image
              src={defualtUser}
              alt={"profile"}
              width={40}
              className="ml-2"
            />

            <h1>Demo</h1>
            <select className="border rounded-md justify-center items-center opacity-50 px-3 text-[1rem] mr-2">
              <option value="orders">الطلبات</option>
            </select>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardNavBar;
