import LoginLink from "./LoginLink";
import NormalLink from "./NormalLink";
import EducationLink from "./EducationLink";
import SolutionsLink from "./SolutionsLink";
import GoToDashboard from "./GoToDashboard";
import MainButton from "@/components/utils/MainButton";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="md:flex items-center justify-end hidden">
      <nav>
        <ul className="flex items-center gap-4">
          <NormalLink linkName="الرئيسة" linkPath="/" />
          <EducationLink />
          <SolutionsLink />
          <NormalLink linkName="الأسعار" linkPath="/plans" />
          <LoginLink />
          <Link href={"register"}>
            <MainButton>أنشئ متجرك مجاناً</MainButton>
          </Link>
          <GoToDashboard />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
