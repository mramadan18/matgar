"use client";
import { useState } from "react";
import SelectOption from "./SelectOption";

type Props = {
  options: string[];
  bg?: string;
  color?: string;
  align?: string;
};

const SelectBox = ({
  options,
  bg = "bg-admin_bg",
  color = "text-black",
  align = "center",
}: Props) => {
  const [showSelectOptions, setShowSelectOptions] = useState(false);
  const [selectValue, setSelectValue] = useState(options[0]);

  const handleSelect = (value: string) => {
    setSelectValue(value);
    setShowSelectOptions(false);
  };

  return (
    <div>
      <div
        className="py-3 px-6 bg-white border border-primary-900 flex justify-between items-center cursor-pointer"
        onClick={() => setShowSelectOptions(!showSelectOptions)}
      >
        <span className="text-[#868A9A]">{selectValue}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 23 12"
          fill="none"
        >
          <path
            d="M0.385452 1.60126C0.384733 1.22778 0.513006 0.865835 0.748005 0.578254C0.880337 0.416398 1.04286 0.282605 1.22626 0.184536C1.40966 0.0864682 1.61033 0.0260527 1.81679 0.00675002C2.02325 -0.0125527 2.23144 0.00963709 2.42943 0.0720478C2.62743 0.134458 2.81133 0.235863 2.97061 0.370456L11.4197 7.53152L19.8845 0.62621C20.0458 0.493433 20.2313 0.394278 20.4304 0.334445C20.6296 0.274613 20.8384 0.255281 21.045 0.277562C21.2515 0.299843 21.4517 0.363297 21.634 0.464277C21.8162 0.565258 21.977 0.701773 22.1071 0.865977C22.2506 1.03136 22.3589 1.22504 22.4251 1.43486C22.4912 1.64467 22.5139 1.8661 22.4917 2.08523C22.4695 2.30437 22.4029 2.51649 22.296 2.70827C22.1892 2.90006 22.0443 3.06737 21.8707 3.19972L12.4128 10.9202C12.1307 11.1553 11.7769 11.2839 11.4118 11.2839C11.0467 11.2839 10.6929 11.1553 10.4108 10.9202L0.952928 2.92798C0.762167 2.76763 0.61137 2.56393 0.512773 2.33342C0.414177 2.1029 0.370556 1.85207 0.385452 1.60126Z"
            fill="black"
          />
        </svg>
      </div>
      {showSelectOptions && (
        <div className="p-4 bg-white border border-primary-900 mt-2">
          <ul className={`text-${align}`}>
            {options?.map((option, index) => {
              return (
                <SelectOption
                  key={index}
                  value={option}
                  bg={bg}
                  color={color}
                  handleSelect={handleSelect}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectBox;
