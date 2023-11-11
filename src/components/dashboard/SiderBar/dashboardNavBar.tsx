"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import giftImg from "public/img for salla/dashboard/icons8-gift-50.png";
import DartImage from "public/img for salla/dashboard/icons8-moon-50.png";
import defualtUser from "public/img for salla/dashboard/vuesax-bulk-profile-circle.png";
import searchImg from "#/img for salla/dashboard/vuesax-broken-search-normal.png";
import { AiOutlineMenu } from "react-icons/ai";

interface User {
  name: string;
  email: string;
  phone: string;
}

const DashboardNavBar = ({
  children,
  setShowSidebar,
}: {
  children: React.ReactNode;
  setShowSidebar: (value: boolean) => void;
}) => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    setUser(JSON.parse(String(localStorage.getItem("user"))));
  }, []);
  return (
    <div className="navbar-container pt-6">
      <div className="flex justify-between gap-4 mb-10">
        <AiOutlineMenu
          className="text-[24px] block lg:hidden"
          onClick={() => setShowSidebar(true)}
        />
        <div className="hidden lg:flex relative w-1/2">
          <input
            type="text"
            placeholder="ابحث برقم الطلب اسم العميل رقم الشحنة"
          />

          <select className="absolute top-1/2 left-0 -translate-y-1/2 border border-r h-full pr-1 opacity-50">
            <option value="orders">الطلبات</option>
            <option value="products">المنتجات</option>
            <option value="cutomers">العملاء</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src={searchImg}
            alt={"search-Image"}
            width={30}
            className="ml-4 lg:hidden"
          />
          <Image src={giftImg} alt={"gift-Image"} width={30} />
          <Image src={DartImage} alt={"moon-image"} width={30} />
          <div className="flex justify-center items-center gap-4">
            <Image src={defualtUser} alt={"profile"} width={30} />
            <h3>{user?.name}</h3>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardNavBar;
