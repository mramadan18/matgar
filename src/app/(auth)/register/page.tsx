"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import welcomeImg from "#/img for salla/auth/Privacy policy-rafiki.png";
import { useEffect, useState } from "react";
import baseUrl from "@/baseUrl";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const page = () => {
  const { push } = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading("...loading");
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
      toast.remove();
      toast.success("You are logged in successfully");

      push("/login");
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
    <div className="container flex flex-col-reverse md:flex-row justify-between min-h-[100vh] text-rightmd:mt-0 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: 150 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1, ease: [0.645, 0.045, 0.3, 1] }}
        className="flex flex-col w-full md:w-[40%] mt-14 md:mt-0"
      >
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
              <div className="relative">
                <PhoneInput
                  className="p-0"
                  defaultCountry="lb"
                  inputClassName="!border !border-[#707070] !text-black !px-4 !rounded-[4px] !rounded-r-none !rounded-b-none"
                  inputProps={{
                    placeholder: "أدخل رقم الجوال",
                  }}
                  countrySelectorStyleProps={{
                    className:
                      "!border !border-r-2 !border-[#707070] !border-l-0",
                  }}
                  hideDropdown
                  name="phone"
                  required
                  value={phone}
                  onChange={(value) => setPhone(value)}
                />
              </div>
            </div>
            <div className="mb-[30px]">
              <label htmlFor="user-password">كلمة المرور</label>
              <div className="Password">
                <div className="Password__group relative">
                  <input
                    className="px-4"
                    id="login-password"
                    name="password"
                    placeholder="أدخل كلمة المرور"
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
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
              <Link href="/">نسيت كلمة المرور ؟</Link>
            </div>
            <div className="anime-item">
              <button
                type="submit"
                className="w-full bg-primary text-lg py-3 font-bold"
              >
                تسجيل
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
        className="title title--hero flex flex-col w-full md:w-[50%] gap-3"
      >
        <Image src={welcomeImg} alt={"welcome-img"} />
        <div className="w-full text-center">
          <h2 className="w-full">كل ما تحتاجه لتنمو بتجارتك الإلكترونية</h2>
          <p className="w-full">
            سجل الآن وانضم لأكثر من 30 ألف متجر يستفيد من مئات الخدمات
            اللوجيستية والأدوات التسويقية المتكاملة في منصة سلة
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
