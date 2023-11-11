"use client";
import Image from "next/image";
import welcomeImg from "#/img for salla/auth/Privacy policy-rafiki.png";
import Link from "next/link";
import baseUrl from "@/baseUrl";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const page = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      toast.success("You are logged in successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      push("/dashboard/main");
    } catch (error) {
      console.log(error);
      // Notify
      toast.error("Error, check the data and try again", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="content-container flex flex-col-reverse md:flex-row justify-between min-h-[90vh] text-right overflow-hidden">
      <div className="flex flex-col w-full md:w-[40%] mt-10 md:mt-0">
        <div
          className="tabs__head anime-item flex flex-row-reverse"
          style={{ transform: "translateY(0px)", opacity: 1 }}
        >
          {" "}
          <div className="w-[50%]">
            <Link href={"/signup"}>
              <h3 className="tabs__label second">إنشاء حساب</h3>
            </Link>
          </div>
          <h3 className="tabs__label first active">تسجيل الدخول</h3>{" "}
        </div>
        <div className="register__login-form tabs__tab form">
          <form onSubmit={handleSubmit}>
            <div
              className="form__field anime-item"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <label htmlFor="user-email" className="register__label">
                البريد الإلكتروني
              </label>{" "}
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
              </label>{" "}
              <div className="Password">
                <div className="Password__group">
                  <input
                    dir="rtl"
                    id="login-password"
                    name="password"
                    placeholder="أدخل كلمة المرور"
                    autoComplete="current-password"
                    type="password"
                    className="px-4"
                    required
                    value={password}
                    onChange={({ target }) => {
                      setPassword(target.value);
                    }}
                  />
                  <div className="Password__toggle">
                    <button
                      type="button"
                      aria-label="show"
                      className="btn-clean"
                    ></button>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
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
              </div>{" "}
              <a href="#">نسيت كلمة المرور ؟</a>
            </div>{" "}
            <div
              className="anime-item"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <button
                type="submit"
                className="btn btn--medium w-full bg-[#0279de] "
              >
                <span className="btn__text py-[10px]"> تسجيل الدخول</span>{" "}
                <div className="loader-wrap">
                  <div className="loader"></div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" title title--hero flex flex-col w-full md:w-[55%]">
        <Image src={welcomeImg} alt={"welcome-img"} />
        <div className=" w-full text-center">
          <p
            className="anime-item opacity-0 w-full"
            style={{
              transform: "translateY(0px) translateZ(0px)",
              opacity: 1,
            }}
          >
            يوم جديد لتحقق انطلاقتك في تجارتك
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
