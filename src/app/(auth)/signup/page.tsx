"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import welcomeImg from "../../../../public/img for salla/auth/Privacy policy-rafiki.png";

const page = () => {
  const { push } = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    push("/we-get-to-know-you");
  };

  return (
    <div className="content-container flex flex-col-reverse md:flex-row justify-between min-h-[100vh] text-rightmd:mt-0 overflow-hidden">
      <div className="flex flex-col w-full md:w-[40%] mt-14 md:mt-0">
        <div
          className="tabs__head anime-item flex flex-row-reverse"
          style={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <h3 className="tabs__label active second">إنشاء حساب</h3>
          <div className="w-[50%]">
            <Link href={"/login"}>
              <h3 className="tabs__label first">تسجيل الدخول</h3>{" "}
            </Link>
          </div>
        </div>
        <div className="register__login-form tabs__tab form">
          <form onSubmit={handleSubmit}>
            <div
              className="form__field anime-item"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <label htmlFor="name-trader" className="register__label">
                اسم التاجر
              </label>
              <input
                className="px-4"
                id="name-trader"
                name="name-trader"
                type="text"
                placeholder="أدخل اسم التاجر"
                autoComplete="username"
              />
            </div>
            <div
              className="form__field anime-item"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <label htmlFor="user-email" className="register__label">
                البريد الإلكتروني
              </label>
              <input
                className="px-4"
                id="login-email"
                name="email"
                type="email"
                placeholder="أدخل البريد الإلكتروني"
                autoComplete="username"
              />
            </div>
            <div
              className="form__field anime-item"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <label htmlFor="phone" className="register__label">
                رقم الجوال
              </label>
              <input
                className="px-4"
                id="phone"
                name="phone"
                type="number"
                placeholder="أدخل رقم الجوال"
                autoComplete="username"
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
                    className="px-4"
                    id="login-password"
                    name="password"
                    placeholder="أدخل كلمة المرور"
                    autoComplete="current-password"
                    type="password"
                  />{" "}
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
                  <div className="flex items-center">
                    <p>تذكرنى</p>
                  </div>
                  <input
                    type="checkbox"
                    id="remember"
                    style={{ height: "20px", width: "20px", cursor: "pointer" }}
                  />
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
                className="btn btn--medium w-full bg-[#0279de]"
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
      <div className="title title--hero flex flex-col w-full md:w-[50%] gap-3">
        <Image src={welcomeImg} alt={"welcome-img"} />
        <div className=" w-full text-center">
          <h2
            className="anime-item opacity-0 w-full"
            style={{
              transform: "translateY(0px) translateZ(0px)",
              opacity: 1,
            }}
          >
            كل ما تحتاجه لتنمو بتجارتك الإلكترونية
          </h2>
          <p
            className="anime-item opacity-0 w-full"
            style={{
              transform: "translateY(0px) translateZ(0px)",
              opacity: 1,
            }}
          >
            سجل الآن وانضم لأكثر من 30 ألف متجر يستفيد من مئات الخدمات
            اللوجيستية والأدوات التسويقية المتكاملة في منصة سلة{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
