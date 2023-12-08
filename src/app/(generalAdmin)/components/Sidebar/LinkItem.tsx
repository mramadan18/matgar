"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  link: string;
  icon: any;
  title: string;
};

const LinkItem = ({ link, icon, title }: Props) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={link}
        className={`flex justify-start items-center gap-6 text-xl py-4 pr-10 transition-all duration-500 hover:bg-primary-900 hover:text-white group ${
          pathname === link ? "bg-primary-900 text-white" : "bg-white"
        }`}
      >
        <Image
          src={icon}
          alt={title}
          className={`transition-all duration-500 group-hover:brightness-0 group-hover:saturate-100 group-hover:invert group-hover:sepia-0 group-hover:hue-rotate-[27deg] group-hover:contrast-[111%] ${
            pathname === link
              ? "brightness-0 saturate-100 invert sepia-0 hue-rotate-[27deg] contrast-[111%]"
              : ""
          }`}
        />
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default LinkItem;
