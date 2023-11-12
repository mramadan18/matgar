"use client";
import Image from "next/image";
import welcomeImg from "#/img for salla/auth/Privacy policy-rafiki.png";
import Link from "next/link";
import baseUrl from "@/baseUrl";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

const page = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading("...loading");
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const { data } = await baseUrl.post(
        "/user/signin/",
        { email, password },
        config
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.userResponse));
      // Notify
      toast.remove();
      toast.success("You are logged in successfully");

      push("/dashboard/main");
    } catch ({ response }: any) {
      const message = Array.isArray(response?.data?.message)
        ? response?.data?.message[0]
        : response?.data?.message;
      // Notify
      toast.remove();
      toast.error(message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      push("/dashboard/main");
    }
  }, []);

  return (
    <div className="content-container flex flex-col-reverse md:flex-row justify-between min-h-[90vh] text-right overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: 150 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1, ease: [0.645, 0.045, 0.3, 1] }}
        className="flex flex-col w-full md:w-[40%] mt-10 md:mt-0"
      >
        <div
          className="tabs__head anime-item flex flex-row-reverse"
          style={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <div className="w-[50%]">
            <Link href={"/signup"}>
              <h3 className="tabs__label second">إنشاء حساب</h3>
            </Link>
          </div>
          <h3 className="tabs__label first active">تسجيل الدخول</h3>
        </div>
        <div className="register__login-form tabs__tab form">
          <form onSubmit={handleSubmit}>
            <div
              className="form__field anime-item"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <label htmlFor="user-email" className="register__label">
                البريد الإلكتروني
              </label>
              <input
                dir="rtl"
                id="login-email"
                name="email"
                type="email"
                value={email}
                placeholder="أدخل البريد الإلكتروني"
                autoComplete="email"
                className="!px-4"
                required
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
            <div
              className="form__field anime-item"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <label htmlFor="user-password" className="register__label">
                كلمة المرور
              </label>
              <div className="Password">
                <div className="Password__group relative">
                  <input
                    dir="rtl"
                    id="login-password"
                    name="password"
                    placeholder="أدخل كلمة المرور"
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    className="px-4"
                    required
                    value={password}
                    onChange={({ target }) => {
                      setPassword(target.value);
                    }}
                  />
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setShowPassword(false)}
                      className="absolute top-1/2 left-4 -translate-y-1/2"
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={() => setShowPassword(true)}
                      className="absolute top-1/2 left-4 -translate-y-1/2"
                    />
                  )}
                </div>
              </div>
            </div>
            <div
              className="form__field form__field-remember flex justify-between anime-item"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <div className="remember">
                <div className="rec-checkbox flex flex-row-reverse items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    style={{ height: "20px", width: "20px", cursor: "pointer" }}
                  />
                  <div className="flex items-center">
                    <p>تذكرنى</p>
                  </div>
                </div>
              </div>
              <a href="#">نسيت كلمة المرور ؟</a>
            </div>
            <div
              className="anime-item"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <button type="submit" className="w-full bg-primary py-2 text-lg">
                تسجيل الدخول
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1, ease: [0.645, 0.045, 0.3, 1] }}
        className="title title--hero flex flex-col w-full md:w-[50%]"
      >
        <Image src={welcomeImg} alt={"welcome-img"} />
        <div className="w-full text-center">
          <p className="w-full">يوم جديد لتحقق انطلاقتك في تجارتك</p>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
