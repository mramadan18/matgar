import Image from "next/image";
import heroImg from "#/img for salla/SpecialEcommercePage/133.png";
const HeroSection = () => {
  return (
    <div className="bg-[#1E2F32] mt-[-120px]">
      <div className="content-container">
        <div className="feature-block__wrapper flex justify-between w-full">
          <div
            className="anime-item opacity-0"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <Image src={heroImg} alt="" />
          </div>
          <div className="flex items-center justify-end max992:justify-start flex-1">
            <article className="article article--features flex items-start flex-col text-center mx-auto lg:mx-0 lg:text-right">
              <div className="mb-8">
                <div className="title title--hero mb-10">
                  <h2>اختيارك لنمو اعمالك مع متجر بحلول تقنية متقدمة</h2>
                </div>
                <div>
                  <a
                    href="https://s.salla.sa/register"
                    rel="noopener"
                    target="_blank"
                    className="hover:bg-white py-3 px-16 text-white rounded-full transition duration-300 focus:outline-none inline-flex font-semibold text-center bg-[#0279DE]"
                  >
                    <span className="fix-font">تقدم بالطلب الآن</span>
                  </a>
                </div>
              </div>
            </article>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
