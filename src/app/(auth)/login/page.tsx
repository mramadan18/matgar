import Image from "next/image";
import welcomeImg from "../../../../public/img for salla/auth/Privacy policy-rafiki.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="content-container flex justify-between h-[90vh] text-right">
      <div className="flex flex-col  w-[40%]">
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
          <form>
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
                placeholder="أدخل البريد الإلكتروني"
                autoComplete="username"
              />{" "}
            </div>{" "}
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
                    className="Password__field"
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
      <div className=" title title--hero flex flex-col w-[55%]">
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
