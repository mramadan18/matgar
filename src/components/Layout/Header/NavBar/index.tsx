import LoginLink from "./LoginLink";
import NormalLink from "./NormalLink";
import EducationLink from "./EducationLink";
import SolutionsLink from "./SolutionsLink";
import CreateShopButton from "./CreateShopButton";
import GoToDashboard from "./GoToDashboard";

const NavBar = () => {
  return (
    <div className="md:flex items-center flex-1 justify-end hidden">
      <nav>
        <ul className="flex items-center">
          <NormalLink linkName="الرئيسة" linkPath="/" />
          <EducationLink />
          <SolutionsLink />
          <NormalLink linkName="الأسعار" linkPath="/plans" />
          <LoginLink />
          <CreateShopButton />
          <GoToDashboard />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
