import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { PiUserLight } from "react-icons/pi";
import { PhoneInput } from "react-international-phone";

const LoginForm = () => {
  const [loginWithPhone, setLoginWithPhone] = useState(true);

  const handleChangeMethodLogin = () => {
    setLoginWithPhone(!loginWithPhone);
  };

  const handleCloseLoginModal = () => {
    document
      .querySelector(".login-modal")
      ?.classList?.replace("opacity-1", "opacity-0");
    setTimeout(() => {
      document
        .querySelector(".login-modal")
        ?.classList?.replace("flex", "hidden");
    }, 500);
  };

  useEffect(() => {
    addEventListener("click", (e: any) => {
      if (e?.target?.classList?.contains("login-modal")) {
        handleCloseLoginModal();
      }
    });
  }, []);

  return (
    <div className="login-modal hidden opacity-0 fixed top-0 left-0 w-screen h-screen bg-[rgba(107,114,128,0.7)] justify-center items-center transition-all duration-500">
      <form className="bg-white p-8 rounded-lg relative w-96 max-w-md flex flex-col justify-center items-center gap-2">
        <button
          type="button"
          className="absolute top-4 left-4"
          onClick={handleCloseLoginModal}
        >
          <IoCloseOutline className="text-3xl text-red-600" />
        </button>
        <div className="w-20 h-20 border rounded-full flex justify-center items-center">
          <PiUserLight className="text-3xl" />
        </div>
        <h4>تسجيل الدخول</h4>
        {loginWithPhone ? (
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm">رقم الجوال</label>
            <PhoneInput
              className="p-0"
              defaultCountry="lb"
              inputClassName="!w-full !border border !py-1 !px-2 !rounded-lg focus:!border-[#AED8E0] !outline-none !text-gray-500"
              countrySelectorStyleProps={{
                className: "!hidden",
              }}
              hideDropdown
              name="phone"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full border py-1 px-2 rounded-lg focus:border-[#AED8E0] outline-none text-gray-500 text-left"
              placeholder="your@email.com"
              required
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-[#AED8E0] text-gray-600 w-full py-2 rounded-lg text-sm font-bold mt-4"
        >
          دخول
        </button>

        <button
          type="button"
          className="text-[#AED8E0] text-sm mt-4"
          onClick={handleChangeMethodLogin}
        >
          {loginWithPhone
            ? "تسجيل الدخول بالبريد الإلكتروني"
            : "تسجيل الدخول برسالة نصية"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
