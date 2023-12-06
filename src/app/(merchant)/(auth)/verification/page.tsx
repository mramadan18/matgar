"use client";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { IoMdRefresh } from "react-icons/io";
import SecondButton from "@/components/utils/SecondButton";
import { motion } from "framer-motion";

const page = () => {
  const [otp, setOtp] = useState("");
  useEffect(() => {
    console.log(otp);
  }, [otp]);
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
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            containerStyle={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
            inputStyle={{
              width: "64px",
              height: "64px",
              backgroundColor: "#F2F2F2",
              border: "none",
              fontSize: "20px",
            }}
            renderInput={(props) => <input {...props} />}
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
