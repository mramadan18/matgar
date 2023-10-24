import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropsValue {
  img: any;
  title: string;
  desc: string;
  href: string;
}

const SettingsItem = ({ img, title, desc, href }: PropsValue) => {
  return (
    <Link
      href={href}
      className="flex flex-col justify-center items-center gap-1 p-10 border border-[#707070]"
    >
      <Image
        src={img}
        alt={"..."}
        width={56}
        height={56}
        style={{
          filter:
            "invert(27%) sepia(87%) saturate(1570%) hue-rotate(189deg) brightness(106%) contrast(102%)",
        }}
      />

      <h3>{title}</h3>
      <span>{desc}</span>
    </Link>
  );
};

export default SettingsItem;
