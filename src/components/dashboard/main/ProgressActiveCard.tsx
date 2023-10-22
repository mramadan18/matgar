import { StaticImport } from "next/dist/shared/lib/get-img-props";

import done from "../../../../public/img for salla/dashboard/Group.png";

import Image from "next/image";
interface propsValue {
  img: string | StaticImport;
  title: string;
  isActive: boolean;
}

const ProgressActiveCard = (props: propsValue) => {
  return (
    <div className="w-full flex border-[1px] rounded mb-4">
      <div className=" relative flex justify-start items-center w-[5rem] h-[5rem] ml-5">
        <Image src={props.img} alt={""} />
        {props.isActive && (
          <div className=" absolute">
            <Image src={done} alt={""} />
          </div>
        )}
      </div>
      <div className="flex items-center text-[19px]">
        <h1> {props.title}</h1>
      </div>
    </div>
  );
};

export default ProgressActiveCard;
