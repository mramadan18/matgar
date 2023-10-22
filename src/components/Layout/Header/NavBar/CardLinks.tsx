import { propsValues } from "@/interface/sectionRowPhoto";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface propsLinks extends propsValues {
  path: string;
}
const CardLinks = (props: propsLinks) => {
  return (
    <li
      id="menu-item-523"
      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-523"
    >
      <Link href={props.path}>
        <div className="group">
          <div className="w-[30px]">
            <Image src={props.img} alt={"app-maker"} />
          </div>

          <div className="flex flex-col items-start">
            {" "}
            <span className="text-[15px] text-primary-l dark:text-grayer-100">
              {props.head}{" "}
            </span>{" "}
            <p className="text-xs text-darker-50 whitespace-normal">
              {" "}
              {props.subHead}{" "}
            </p>{" "}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardLinks;
