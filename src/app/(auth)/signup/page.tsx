"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import welcomeImg from "#/img for salla/auth/Privacy policy-rafiki.png";
import { useState } from "react";
import baseUrl from "@/baseUrl";
import { toast } from "react-toastify";

const page = () => {
  const { push } = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      await baseUrl.post(
        "/user/register/",
        { name, email, phone, password, role: "admin" },
        config
      );
      // Notify
      toast.success("Your account has been created successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      push("/login");
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
    <div className="content-container flex flex-col-reverse md:flex-row justify-between min-h-[100vh] text-rightmd:mt-0 overflow-hidden">
      <div className="flex flex-col w-full md:w-[40%] mt-14 md:mt-0">
        <div className="flex flex-row-reverse">
          <h3 className="tabs__label active second">إنشاء حساب</h3>
          <div className="w-[50%]">
            <Link href={"/login"}>
              <h3 className="tabs__label first">تسجيل الدخول</h3>
            </Link>
          </div>
        </div>
        <div className="register__login-form tabs__tab form">
          <form onSubmit={handleSubmit}>
            <div className="mb-[30px]">
              <label htmlFor="name-trader">اسم التاجر</label>
              <input
                className="px-4"
                id="name-trader"
                name="name-trader"
                type="text"
                placeholder="أدخل اسم التاجر"
                autoComplete="name"
                required
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </div>
            <div className="mb-[30px]">
              <label htmlFor="user-email">البريد الإلكتروني</label>
              <input
                className="!px-4"
                id="login-email"
                name="email"
                type="email"
                placeholder="أدخل البريد الإلكتروني"
                autoComplete="email"
                required
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
            <div className="mb-[30px]">
              <label htmlFor="phone">رقم الجوال</label>
              <input
                className="px-4 text-right"
                id="phone"
                name="phone"
                type="tel"
                placeholder="أدخل رقم الجوال"
                autoComplete="phone"
                required
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </div>
            <div>
              <label htmlFor="user-password">كلمة المرور</label>
              <div className="Password">
                <div className="Password__group">
                  <input
                    className="px-4"
                    id="login-password"
                    name="password"
                    placeholder="أدخل كلمة المرور"
                    autoComplete="current-password"
                    type="password"
                    required
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                  />
                  <div className="Password__toggle">
                    <button
                      type="button"
                      aria-label="show"
                      className="btn-clean"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="form__field form__field-remember flex justify-between anime-item">
              <div className="remember">
                <div className="rec-checkbox flex flex-row-reverse items-center gap-2">
                  <div className="flex items-center">
                    <p>تذكرنى</p>
                  </div>
                  <input
                    type="checkbox"
                    id="remember"
                    style={{ height: "20px", width: "20px", cursor: "pointer" }}
                  />
                </div>
              </div>
              <a href="#">نسيت كلمة المرور ؟</a>
            </div>
            <div className="anime-item">
              <button
                type="submit"
                className="btn btn--medium w-full bg-[#0279de]"
              >
                <span className="btn__text py-[10px]"> تسجيل الدخول</span>
                <div className="loader-wrap">
                  <div className="loader"></div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="title title--hero flex flex-col w-full md:w-[50%] gap-3">
        <Image src={welcomeImg} alt={"welcome-img"} />
        <div className="w-full text-center">
          <h2 className="w-full">كل ما تحتاجه لتنمو بتجارتك الإلكترونية</h2>
          <p className="w-full">
            سجل الآن وانضم لأكثر من 30 ألف متجر يستفيد من مئات الخدمات
            اللوجيستية والأدوات التسويقية المتكاملة في منصة سلة
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
