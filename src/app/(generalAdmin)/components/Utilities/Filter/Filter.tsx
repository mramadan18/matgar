"use client";
import { useState } from "react";
import FilterDateDropdown from "./FilterDateDropdown";
import FilterStatusDropdown from "./FilterStatusDropdown";

const Filter = () => {
  const [dateDropdown, setDateDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-start items-center gap-6">
      <div className="cursor-pointer">
        <p>كل الطلبات (500)</p>
      </div>
      <div
        className="relative cursor-pointer"
        onClick={() => setDateDropdown(!dateDropdown)}
      >
        <div className="flex items-center gap-6">
          <span>فرز حسب التاريخ</span>
          <svg
            className={`transition-all ${dateDropdown ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 23 12"
            fill="none"
          >
            <path
              d="M0.00268548 1.60126C0.00195498 1.22778 0.13203 0.865835 0.370329 0.578254C0.504517 0.416398 0.669319 0.282605 0.855295 0.184536C1.04127 0.0864682 1.24476 0.0260527 1.45412 0.00675002C1.66348 -0.0125527 1.87459 0.00963709 2.07537 0.0720478C2.27614 0.134458 2.46262 0.235863 2.62414 0.370456L11.1918 7.53152L19.7755 0.62621C19.939 0.493433 20.1272 0.394278 20.3291 0.334445C20.5311 0.274613 20.7428 0.255281 20.9523 0.277562C21.1617 0.299843 21.3647 0.363297 21.5495 0.464277C21.7344 0.565258 21.8974 0.701773 22.0293 0.865977C22.1749 1.03136 22.2846 1.22504 22.3517 1.43486C22.4189 1.64467 22.4419 1.8661 22.4194 2.08523C22.3969 2.30437 22.3293 2.51649 22.2209 2.70827C22.1125 2.90006 21.9657 3.06737 21.7896 3.19972L12.1989 10.9202C11.9129 11.1553 11.5541 11.2839 11.1838 11.2839C10.8136 11.2839 10.4548 11.1553 10.1688 10.9202L0.578129 2.92798C0.384689 2.76763 0.231773 2.56393 0.131792 2.33342C0.0318107 2.1029 -0.0124207 1.85207 0.00268548 1.60126Z"
              fill="black"
            />
          </svg>
        </div>

        {dateDropdown && <FilterDateDropdown />}
      </div>
      <div
        className="relative cursor-pointer"
        onClick={() => setStatusDropdown(!statusDropdown)}
      >
        <div className="flex items-center gap-8">
          <span>فرز حسب الحالة</span>
          <svg
            className={`transition-all ${statusDropdown ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 23 12"
            fill="none"
          >
            <path
              d="M0.00268548 1.60126C0.00195498 1.22778 0.13203 0.865835 0.370329 0.578254C0.504517 0.416398 0.669319 0.282605 0.855295 0.184536C1.04127 0.0864682 1.24476 0.0260527 1.45412 0.00675002C1.66348 -0.0125527 1.87459 0.00963709 2.07537 0.0720478C2.27614 0.134458 2.46262 0.235863 2.62414 0.370456L11.1918 7.53152L19.7755 0.62621C19.939 0.493433 20.1272 0.394278 20.3291 0.334445C20.5311 0.274613 20.7428 0.255281 20.9523 0.277562C21.1617 0.299843 21.3647 0.363297 21.5495 0.464277C21.7344 0.565258 21.8974 0.701773 22.0293 0.865977C22.1749 1.03136 22.2846 1.22504 22.3517 1.43486C22.4189 1.64467 22.4419 1.8661 22.4194 2.08523C22.3969 2.30437 22.3293 2.51649 22.2209 2.70827C22.1125 2.90006 21.9657 3.06737 21.7896 3.19972L12.1989 10.9202C11.9129 11.1553 11.5541 11.2839 11.1838 11.2839C10.8136 11.2839 10.4548 11.1553 10.1688 10.9202L0.578129 2.92798C0.384689 2.76763 0.231773 2.56393 0.131792 2.33342C0.0318107 2.1029 -0.0124207 1.85207 0.00268548 1.60126Z"
              fill="black"
            />
          </svg>
        </div>

        {statusDropdown && <FilterStatusDropdown />}
      </div>
      <div>
        <button className="text-white bg-black py-1 w-24 rounded-lg">
          تصفية
        </button>
      </div>
    </div>
  );
};

export default Filter;
