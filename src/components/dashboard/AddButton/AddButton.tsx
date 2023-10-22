"use client";
import Image from "next/image";
import React from "react";
import plusImg from "#/img for salla/dashboard/plus-blue.png";

interface PropsValue {
  title: string;
  handleClick: () => void;
}

const AddButton = ({ title, handleClick }: PropsValue) => {
  return (
    <button
      className="h-14 bg-primary rounded-full pr-2 pl-4 gap-6 text-2xl flex justify-start"
      onClick={handleClick}
    >
      <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Image src={plusImg} alt="plus" priority />
      </span>
      <span>{title}</span>
    </button>
  );
};

export default AddButton;
