"use client";
import React, { useState } from "react";
import OTPInput from "otp-input-react";
import { IoMdRefresh } from "react-icons/io";
import SecondButton from "@/components/utils/SecondButton";
import { motion } from "framer-motion";

const page = () => {
  const [OTP, setOTP] = useState("");

  return (
    <div className="container mt-36 flex justify-center items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -150 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1 }}
        className="text-center m-auto"
      >
        <h2 className="tracking-widest">أدخل رمز التحقق</h2>
        <p className="text-lg mt-4">
          تم إرسال رمز التحقق الى جوال رقم ************192{" "}
        </p>

        <div className="flex justify-center items-center mt-6">
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            className="flex-row-reverse"
            inputClassName="!mr-3 !w-16 !h-16 !bg-[#F2F2F2] !border-none"
          />
        </div>

        <div className="flex justify-center items-center gap-4 mt-8 text-primary text-xl cursor-pointer">
          <IoMdRefresh />
          <span>إعادة ارسال الرمز</span>
        </div>
        <div className="mt-8">
          <SecondButton>التالي</SecondButton>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
