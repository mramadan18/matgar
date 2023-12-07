"use client";
import { HiMenu } from "react-icons/hi";
import Languages from "./Languages";
import Profile from "./Profile";

const Header = () => {
  const handleSidebar = () => {
    const adminSidebar = document.querySelector(".admin_sidebar");
    adminSidebar?.classList.toggle("!right-0");
  };

  return (
    <div className="flex justify-between items-center py-6 bg-admin_bg px-4 md:px-10 sticky top-0 left-0">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="29"
          viewBox="0 0 26 29"
          fill="none"
        >
          <path
            d="M12.7906 28.0912C14.6214 28.0912 16.1519 26.9577 16.7258 25.373H8.85547C9.42941 26.9577 10.9599 28.0912 12.7906 28.0912ZM22.5657 18.0147V11.7818C22.5657 7.40957 19.5145 3.72638 15.381 2.6187C14.9719 1.61567 13.972 0.908936 12.7906 0.908936C11.6093 0.908936 10.6094 1.61567 10.2002 2.6187C6.06677 3.72773 3.01554 7.40957 3.01554 11.7818V18.0147L0.631814 20.3347C0.369283 20.5889 0.222656 20.9341 0.222656 21.2956V22.6547C0.222656 23.4063 0.846866 24.0138 1.6191 24.0138H23.9622C24.7344 24.0138 25.3586 23.4063 25.3586 22.6547V21.2956C25.3586 20.9341 25.212 20.5889 24.9495 20.3347L22.5657 18.0147Z"
            fill="#06112E"
          />
        </svg>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Languages />
        <Profile />
        <div className="lg:hidden cursor-pointer" onClick={handleSidebar}>
          <HiMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
