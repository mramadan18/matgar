import { StaticImport } from "next/dist/shared/lib/get-img-props";

import done from "#/img for salla/dashboard/Group.png";

import Image from "next/image";
interface propsValue {
  img: string | StaticImport;
  title: string;
  isActive: boolean;
}

const ProgressActiveCard = (props: propsValue) => {
  return (
    <div className="w-full flex border rounded mb-4 px-4 cursor-pointer">
      <div className="flex justify-start items-center h-20 ml-5">
        <div className="relative border border-primary rounded-lg w-14 h-14">
          <Image src={props.img} alt={""} />
          {props.isActive && (
            <div className="absolute -top-2 -right-2 w-4">
              <Image src={done} alt={""} />
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <h3 className="font-normal">{props.title}</h3>
      </div>
    </div>
  );
};

export default ProgressActiveCard;
