import React from "react";
import lockImg from "#/img for salla/dashboard/vuesax-broken-unlock.png";
import Image from "next/image";

interface PropsValue {
  isSwitch?: boolean;
  isPro?: boolean;
  active?: boolean;
  title: string;
  handleClick?: () => void;
}

const OptionItem = ({
  title,
  isSwitch,
  isPro,
  active,
  handleClick,
}: PropsValue) => {
  return (
    <div className="flex justify-between items-center border-b border-[#707070] px-6 text-lg pb-4 mt-4 last-of-type:border-0 last-of-type:pb-0">
      <p>{title}</p>
      {isPro ? (
        <Image src={lockImg} alt={"lock"} />
      ) : (
        <>
          {isSwitch ? (
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                defaultChecked={active}
              />
              <div className="w-11 h-6 bg-white rounded-full border border-[#707070] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary after:shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]" />
            </label>
          ) : (
            <p className="cursor-pointer" onClick={handleClick}>
              تعيين
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default OptionItem;
