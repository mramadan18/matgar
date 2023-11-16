import Image from "next/image";
import LogoImage from "#/home/logo.png";
import defaultIamge from "#/img for salla/dashboard/Group 85.png";
import share from "#/img for salla/dashboard/icons8-sharing-30 (1).png";
import homeImg from "#/img for salla/dashboard/vuesax-broken-home.png";
import productImg from "#/img for salla/dashboard/vuesax-broken-box-add.png";
import orderImg from "#/img for salla/dashboard/vuesax-broken-icon.png";
import userImg from "#/img for salla/dashboard/vuesax-broken-people.png";
import reports from "#/img for salla/dashboard/vuesax-broken-document.png";
import subtitleImg from "#/img for salla/dashboard/vuesax-broken-subtitle.png";
import settingImg from "#/img for salla/dashboard/vuesax-broken-setting-3.png";
import promocodeImg from "#/img for salla/dashboard/vuesax-broken-percentage-circle.png";
import coinsImg from "#/img for salla/dashboard/vuesax-broken-money-send.png";
import offersImg from "#/img for salla/dashboard/vuesax-broken-card-slash.png";
import martingImg from "#/img for salla/dashboard/vuesax-broken-send-2.png";
import stockImg from "#/img for salla/dashboard/vuesax-broken-briefcase.png";
import personImg from "#/img for salla/dashboard/vuesax-broken-frame.png";
import bouquetStoreImg from "#/img for salla/dashboard/vuesax-broken-house.png";
import settingsStoreImg from "#/img for salla/dashboard/setting-2.png";
import walletImg from "#/img for salla/dashboard/vuesax-broken-bitcoin-card.png";
import designImg from "#/img for salla/dashboard/vuesax-broken-translate.png";
import makeImg from "#/img for salla/dashboard/vuesax-broken-link.png";
import installImg from "#/img for salla/dashboard/vuesax-broken-autonio-(niox).png";
import googleImg from "#/img for salla/dashboard/googleplay.webp";
import appleImg from "#/img for salla/dashboard/appstore.webp";
import LinkNav from "./LinkNav";

const UserSideBar = () => {
  return (
    <div className="sidebar-content pt-6 overflow-x-hidden">
      <div className="mb-6">
        <Image src={LogoImage} alt={"logo-matger"} width={120} />
      </div>
      <div className="Logo-User flex w-full p-3 items-start justify-start gap-3">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-3xl border-solid border-2 border-second border-opacity-5 w-20 h-20 flex justify-center content-center"
            src={defaultIamge}
            alt={"logo-user"}
          />
          <div className="text-sm border-2 w-[2.5rem] text-center -translate-y-4 rounded-xl bg-primary text-white">
            <p>بيسيك</p>
          </div>
        </div>
        <div className="flex flex-col items-start h-[5rem] justify-around">
          <div className="font-bold">
            <h4>BMW</h4>
          </div>
          <div className="flex items-center border rounded-2xl border-black border-opacity-20 w-full overflow-hidden text-xs">
            <div className="py-1 px-2">
              <p>زيارة المتجر</p>
            </div>
            <div className="p-1 bg-[#828282]">
              <Image src={share} alt={"sahre-logo"} width={14} height={14} />
            </div>
          </div>
        </div>
      </div>

      <div className="Nav pb-6">
        <ul>
          <LinkNav url={"/dashboard/main"} img={homeImg} name="الرئيسية" />
          <LinkNav
            url={"/dashboard/products"}
            img={productImg}
            name="المنتجات"
          />
          <LinkNav url={"/dashboard/orders"} img={orderImg} name="الطلبات" />
          <LinkNav url={"/dashboard/customers"} img={userImg} name="العملاء" />
          <LinkNav url={"/dashboard/reports"} img={reports} name="التقارير" />
          <LinkNav
            url={"/dashboard/quiz-rate"}
            img={settingImg}
            name="الأسئلة والتقييمات"
          />
          <LinkNav
            url={"/dashboard/intro-pages"}
            img={subtitleImg}
            name="الصفحات التعريفية"
          />

          <h4 className="text-[#0279DE] text-xl font-bold mt-8 pr-6">
            التسويق
          </h4>
          <LinkNav
            url={"/dashboard/coupons"}
            img={promocodeImg}
            name="كوبونات التخفيض"
          />
          <LinkNav
            url={"/dashboard/affiliate-marketing"}
            img={coinsImg}
            name="التسويق بالعمولة"
          />
          <LinkNav
            url={"/dashboard/special-offers"}
            img={offersImg}
            name="العروض الخاصة"
          />
          <LinkNav
            url={"/dashboard/marketing-campaigns"}
            img={martingImg}
            name="الحملات التسويقية"
          />
          <LinkNav
            url={"/dashboard/abandoned-baskets"}
            img={stockImg}
            name="السلات المتروكة"
          />
          <LinkNav
            url={"/dashboard/loyalty-system"}
            img={personImg}
            name="نظام الولاء"
          />

          <h4 className="text-[#0279DE] text-xl font-bold mt-8 pr-6">
            الاعدادات
          </h4>
          <LinkNav
            url={"/package-matgar"}
            img={bouquetStoreImg}
            name="باقة المتجر"
          />
          <LinkNav
            url={"/dashboard/matgar-settings"}
            img={settingsStoreImg}
            name={"إعدادات المتجر"}
          />
          <LinkNav url={"#"} img={walletImg} name="المحفظة والفواتير" />

          <h4 className="text-[#0279DE] text-xl font-bold mt-8 pr-6">
            مظهر المتجر
          </h4>
          <LinkNav url={"#"} img={designImg} name="تصميم المتجر" />
          <LinkNav url={"#"} img={makeImg} name="صانع التطبيقات" />

          <h4 className="text-[#0279DE] text-xl font-bold mt-8 pr-6">
            مظهر التطبيقات
          </h4>
          <LinkNav url={"#"} img={installImg} name="التطبيقات المثبتة" />

          <h4 className="text-[#0279DE] text-xl font-bold mt-8 pr-6">
            تطبيق التاجر
          </h4>

          <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
            <Image
              src={googleImg}
              alt="google"
              width={110}
              height={40}
              priority
            />
            <Image
              src={appleImg}
              alt="apple"
              width={110}
              height={40}
              priority
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default UserSideBar;
