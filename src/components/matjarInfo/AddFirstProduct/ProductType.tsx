import Image from "next/image";
import React from "react";

interface PropsValue {
  img: any;
  title: string;
  desc: string;
}

const ProductType = ({ img, title, desc }: PropsValue) => {
  return (
    <div className="border border-[#707070] p-4 flex justify-center items-center gap-4">
      <Image src={img} alt="carton" width={60} />
      <div>
        <h3>{title}</h3>
        <p className="w-[90%]">{desc}</p>
      </div>
    </div>
  );
};

export default ProductType;
