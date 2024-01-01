import Image from "next/image";
import flag from "#/user_images/lebanon_flag.svg";
import { CiSearch } from "react-icons/ci";

const UpperTop = () => {
  return (
    <div className="bg-[#f9fafb] py-4">
      <div className="container">
        <div className="grid grid-cols-[100px_1fr_auto] gap-2">
          <button className="bg-[#e7e9eb] py-2 flex justify-center items-center gap-2 rounded-full">
            <Image src={flag} alt="flag" width={22} height={22} />
            <span>ليرة</span>
          </button>
          <form className="bg-[#e7e9eb] py-2 w-full rounded-full relative">
            <CiSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-xl" />
            <input
              type="text"
              className="bg-[#e7e9eb] px-10 w-full rounded-full outline-none"
              placeholder="ادخل كلمة البحث"
            />
          </form>

          <div className="hidden lg:flex justify-center items-center gap-4">
            <a href="#">تواصل معنا: 01100594017</a>
            <span className="w-px bg-black h-6"></span>
            <a href="#">support@matjar.dev</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperTop;
