"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import giftImg from "#/img for salla/dashboard/icons8-gift-50.png";
import DartImage from "#/img for salla/dashboard/icons8-moon-50.png";
import defualtUser from "#/img for salla/dashboard/vuesax-bulk-profile-circle.png";
import searchImg from "#/img for salla/dashboard/vuesax-broken-search-normal.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

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
  const { push } = useRouter();
  const [user, setUser] = useState<User>();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    push("/login");
  };

  useEffect(() => {
    setUser(JSON.parse(String(localStorage.getItem("user"))));
  }, []);
  return (
    <div className="navbar-container pt-6">
      <div className="flex justify-between items-center gap-4 mb-10">
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

        <div className="flex items-center gap-2">
          <Image
            src={searchImg}
            alt={"search-Image"}
            width={24}
            className="lg:hidden"
          />
          <Image src={giftImg} alt={"gift-Image"} width={24} />
          <Image src={DartImage} alt={"moon-image"} width={24} />
          <div className="flex justify-center items-center gap-2 relative">
            <Image src={defualtUser} alt={"profile"} width={24} />
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              id="dropdownDefaultButton"
              className="text-black font-bold text-lg text-center flex items-center p-0"
              type="button"
            >
              {user?.name}{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown menu */}
            {showDropdown && (
              <div className="absolute top-14 left-0 z-10 bg-white w-full rounded-lg shadow-xl">
                <ul className="py-2 text-center">
                  <li onClick={handleLogout}>
                    <a href="#" className="block px-4 py-2 hover:text-primary">
                      تسجيل الخروج
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardNavBar;
