"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface propsValuse {
  url: string;
  img: string | StaticImport;
  name: string;
}
const LinkNav = (props: propsValuse) => {
  const pathname = usePathname();

  return (
    <li className={pathname === props.url ? "active" : ""}>
      <Link href={props.url}>
        <Image src={props.img} alt={`${props.img}`} width={31} height={31} />
        <h1 className="text-base">{props.name}</h1>
      </Link>
    </li>
  );
};

export default LinkNav;
