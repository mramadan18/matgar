"use client";
import Link from "next/link";
import { MouseEventHandler, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = () => {
  const handleCloseSidebar = () => {
    document
      .querySelector(".sidebar")
      ?.classList?.replace("right-0", "-right-full");
    document.querySelector(".overlay")?.classList?.replace("block", "hidden");
  };

  useEffect(() => {
    addEventListener("click", (e: any) => {
      if (e?.target?.classList?.contains("overlay")) {
        handleCloseSidebar();
      }
    });
  }, []);

  return (
    <>
      <div className="overlay fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.25)] hidden"></div>
      <div className="sidebar fixed w-2/3 h-screen bg-white top-0 -right-full z-50 py-4 transition-all">
        <div className="flex justify-between items-center border-b px-6 pb-4">
          <h4>القائمة الرئيسية</h4>
          <button onClick={handleCloseSidebar}>
            <IoCloseOutline className="text-3xl text-red-600" />
          </button>
        </div>

        <nav className="mt-4">
          <ul>
            <li className="text-red-600 font-bold border-b py-4 px-6">
              <Link href={"/user"}>تخفيضات</Link>
            </li>
            <li className="font-bold border-b py-4 px-6">
              <Link href={"/user"}>الفساتين</Link>
            </li>
            <li className="font-bold border-b py-4 px-6">
              <Link href={"/user"}>البلايز</Link>
            </li>
            <li className="font-bold border-b py-4 px-6">
              <Link href={"/user"}>التنانير</Link>
            </li>
            <li className="font-bold border-b py-4 px-6">
              <Link href={"/user"}>الجاكيتات</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
