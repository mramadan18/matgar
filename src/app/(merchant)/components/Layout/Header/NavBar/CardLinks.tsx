import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface PropsValue {
  path: string;
  head: string;
  subHead: string;
  img: string | StaticImport;
}
const CardLinks = ({ path, head, subHead, img }: PropsValue) => {
  return (
    <li
      id="menu-item-523"
      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-523"
    >
      <Link href={path}>
        <div className="group">
          <div className="w-[30px]">
            <Image src={img} alt={"app-maker"} />
          </div>

          <div className="flex flex-col items-start">
            {" "}
            <span className="text-[15px] text-primary-l dark:text-grayer-100">
              {head}{" "}
            </span>{" "}
            <p className="text-xs text-darker-50 whitespace-normal">
              {" "}
              {subHead}{" "}
            </p>{" "}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardLinks;
