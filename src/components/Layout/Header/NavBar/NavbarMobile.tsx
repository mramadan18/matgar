import React from "react";
import NormalLink from "./NormalLink";
import EducationLink from "./EducationLink";
import SolutionsLink from "./SolutionsLink";
import LoginLink from "./LoginLink";
import MainButton from "@/components/utils/MainButton";

const NavbarMobile = () => {
  return (
    <nav className="w-full bg-white absolute top-28 left-0 z-10 p-4 shadow-xl block md:hidden">
      <ul className="flex flex-col justify-start items-start text-right">
        <NormalLink linkName="الرئيسة" linkPath="/" />
        <div className="mr-[-0.5rem]">
          <EducationLink />
          <SolutionsLink />
        </div>
        <NormalLink linkName="الأسعار" linkPath="/plans" />
        <LoginLink />
        <MainButton>أنشئ متجرك مجاناً</MainButton>
      </ul>
    </nav>
  );
};

export default NavbarMobile;
