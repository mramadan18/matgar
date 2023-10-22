"use client";

import { useRouter } from "next/navigation";
import React from "react";

const GoToDashboard = () => {
  const router = useRouter();
  return (
    <div
      id="alert-additional-content-1"
      className="p-4 mb-4 text-primary border border-blue-300 rounded-lg bg-blue-50 animate-bounce fixed top-10 right-[25%] z-10"
      role="alert"
    >
      <div className="flex justify-center items-center">
        <h3 className="text-lg font-medium mb-4">مرحيا</h3>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            router.push("/dashboard/main");
          }}
          type="button"
          className="text-white bg-primary focus:outline-none font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center"
        >
          اذهب إلي لوحة التحكم
        </button>
      </div>
    </div>
  );
};

export default GoToDashboard;
