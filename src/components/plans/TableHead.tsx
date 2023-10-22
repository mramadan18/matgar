import React from "react";

interface PropsValue {
  title: string;
}

const TableHead = ({ title }: PropsValue) => {
  return (
    <div className="row grid grid-cols-9 md:grid-cols-12 bg-[#E9E9E9] h-[100px] pr-10 border-r-4 border-black border-[1px_solid_#E9E9E9] relative after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:border-8 after:border-r-black">
      <div className="col col-span-3 md:col-span-6 flex items-center">
        <h4>{title}</h4>
      </div>

      <div className="col-span-2 flex flex-col justify-center items-center"></div>
      <div className="col-span-2 flex flex-col justify-center items-center"></div>
      <div className="col-span-2 flex flex-col justify-center items-center"></div>
    </div>
  );
};

export default TableHead;
