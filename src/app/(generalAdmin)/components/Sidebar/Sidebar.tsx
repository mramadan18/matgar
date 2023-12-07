import Image from "next/image";
import Link from "next/link";
import logo from "#/admin_images/logo.png";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <div className="admin_sidebar fixed lg:relative top-0 -right-full lg:right-0 z-50 w-3/4 md:w-72 h-screen overflow-hidden bg-admin_bg py-14 shadow-xl transition-all duration-500">
      <div className="mb-6 pb-14 w-36 mx-auto">
        <Link href={"/admin"}>
          <Image src={logo} alt="matgar" />
        </Link>
      </div>
      <NavLinks />
    </div>
  );
};

export default Sidebar;
