"use client";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { MdOutlineMenu } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import logo from "#/user_images/logo.jpg";
import LoginForm from "../LoginForm";

const Navbar = () => {
  const handleOpenSidebar = () => {
    document
      .querySelector(".sidebar")
      ?.classList?.replace("-right-full", "right-0");
    document.querySelector(".overlay")?.classList?.replace("hidden", "block");
  };

  const handleOpenLoginModal = () => {
    document
      .querySelector(".login-modal")
      ?.classList?.replace("hidden", "flex");
    setTimeout(() => {
      document
        .querySelector(".login-modal")
        ?.classList?.replace("opacity-0", "opacity-1");
    }, 100);
  };

  return (
    <div className="bg-white py-4 shadow-lg">
      <div className="container">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <button onClick={handleOpenSidebar} className="2xl:hidden">
              <MdOutlineMenu className="text-4xl" />
            </button>
            <Link href={"/user"}>
              <Image src={logo} alt="logo" width={80} height={60} />
            </Link>
            <nav className="mr-8 hidden 2xl:block">
              <ul className="flex items-center gap-4">
                <li className="text-red-600 font-bold">
                  <Link href={"/user"}>تخفيضات</Link>
                </li>
                <li className="font-bold">
                  <Link href={"/user"}>الفساتين</Link>
                </li>
                <li className="font-bold">
                  <Link href={"/user"}>البلايز</Link>
                </li>
                <li className="font-bold">
                  <Link href={"/user"}>التنانير</Link>
                </li>
                <li className="font-bold">
                  <Link href={"/user"}>الجاكيتات</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={handleOpenLoginModal}>
              <FaRegUserCircle className="text-3xl" />
            </button>
            <Link href={"/user"}>
              <IoBagOutline className="text-3xl" />
            </Link>
            <h4>. ليرة</h4>
          </div>
        </div>
      </div>
      <Sidebar />
      <LoginForm />
    </div>
  );
};

export default Navbar;
