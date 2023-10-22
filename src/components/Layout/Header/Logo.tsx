"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import LogoImage from "/public/home/logo.png";
import Logo2Img from "#/img for salla/SpecialEcommercePage/Repeat Grid 1.png";

const Logo = () => {
  const pathname = usePathname();

  return (
    <div className="w-48">
      <Link href="/">
        {pathname === "/special" ? (
          <Image
            layout="cover"
            src={Logo2Img}
            alt="Company Logo - Go to home page"
            priority
          />
        ) : (
          <Image
            layout="cover"
            src={LogoImage}
            alt="Company Logo - Go to home page"
            priority
          />
        )}
      </Link>
    </div>
  );
};

export default Logo;
