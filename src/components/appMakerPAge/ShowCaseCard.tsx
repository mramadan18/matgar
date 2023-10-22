import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface propsValues {
  h4: string;
  p: string;
  img: string | StaticImport;
  translate?: boolean;
}

const ShowCaseCard = (props: propsValues) => {
  let mainclass =
    "flex justify-center max-w-[400px] md:mb-0 mb-[150px] md:flex-row flex-col  items-cetner ";
  const classStyle = props.translate
    ? mainclass + "md:translate-y-[100px] "
    : mainclass;
  return (
    <div className={classStyle}>
      <div className="text-center lg:text-right mt-3 lg:mt-0 justify-center flex flex-col mb-20 md:mb-0 ">
        <h4
          className="font-bold mb-2 anime-item"
          style={{ transform: "translateY(0px) translateZ(0px)", opacity: 1 }}
        >
          {props.h4}
        </h4>
        <p
          className="text-sm text-gray-500 max-w-xs lg:max-w-none lg:w-32 px-4 lg:px-0 anime-item"
          style={{ transform: "translateY(0px) translateZ(0px)", opacity: 1 }}
        >
          {props.p}
        </p>
      </div>
      <div>
        <Image src={props.img} alt={"mobPhoto"} />
      </div>
    </div>
  );
};

export default ShowCaseCard;
