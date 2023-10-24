import Image from "next/image";
import LogoImage from "/public/home/logo.png";
import defaultIamge from "../../../../public/img for salla/dashboard/Group 85.png";
import share from "../../../../public/img for salla/dashboard/icons8-sharing-30 (1).png";
import homeImg from "../../../../public/img for salla/dashboard/vuesax-broken-home.png";
import productImg from "../../../../public/img for salla/dashboard/vuesax-broken-box-add.png";
import orderImg from "../../../../public/img for salla/dashboard/vuesax-broken-icon.png";
import userImg from "../../../../public/img for salla/dashboard/vuesax-broken-people.png";
import reports from "../../../../public/img for salla/dashboard/vuesax-broken-document.png";
import subtitleImg from "../../../../public/img for salla/dashboard/vuesax-broken-subtitle.png";
import settingImg from "../../../../public/img for salla/dashboard/vuesax-broken-setting-3.png";
import promocodeImg from "../../../../public/img for salla/dashboard/vuesax-broken-percentage-circle.png";
import coinsImg from "../../../../public/img for salla/dashboard/vuesax-broken-money-send.png";
import offersImg from "../../../../public/img for salla/dashboard/vuesax-broken-card-slash.png";
import martingImg from "../../../../public/img for salla/dashboard/vuesax-broken-send-2.png";
import stockImg from "../../../../public/img for salla/dashboard/vuesax-broken-briefcase.png";
import personImg from "../../../../public/img for salla/dashboard/vuesax-broken-frame.png";
import bouquetStoreImg from "../../../../public/img for salla/dashboard/vuesax-broken-house.png";
import settingsStoreImg from "../../../../public/img for salla/dashboard/setting-2.png";
import walletImg from "../../../../public/img for salla/dashboard/vuesax-broken-bitcoin-card.png";
import designImg from "../../../../public/img for salla/dashboard/vuesax-broken-translate.png";
import makeImg from "../../../../public/img for salla/dashboard/vuesax-broken-link.png";
import installImg from "../../../../public/img for salla/dashboard/vuesax-broken-autonio-(niox).png";
import googleImg from "../../../../public/img for salla/dashboard/en_badge_web_generic-removebg-preview.png";
import appleImg from "../../../../public/img for salla/dashboard/download-application-button-apple-app-store-free-vector-removebg-preview.png";

import LinkNav from "./LinkNav";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const UserSideBar = () => {
  return (
    <div className="sidebar-content pt-6 overflow-x-hidden   width={160}">
      <div className="mb-6">
        <Image src={LogoImage} alt={"logo-matger"} width={150} />
      </div>
      <div className="Logo-User flex w-full p-5 items-start justify-start gap-3">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={defaultIamge}
            alt={"logo-user"}
            className=" rounded-3xl border-solid border-2 border-[#707070] border-opacity-5 w-[5rem]  h-[5rem] flex justify-center content-center"
          />
          <div className="text-sm border-2 w-[2.5rem] text-center -translate-y-4 rounded-xl bg-[#0279DE] text-white">
            <p>بيسيك</p>
          </div>
        </div>
        <div className="flex flex-col items-start h-[5rem] justify-around">
          <div className="text-2xl font-bold">
            <h2>BMW</h2>
          </div>
          <div className="flex border-[1px] rounded-2xl border-black border-opacity-20 w-full overflow-hidden">
            <div className="px-2">
              <p>زيارة المتجر</p>
            </div>
            <div className="mr-2 py-1 px-2 bg-[#828282]">
              <Image src={share} alt={"sahre-logo"} />
            </div>
          </div>
        </div>
      </div>

      <div className="Nav">
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
          <LinkNav url={"#"} img={coinsImg} name="التسويق بالعمولة" />
          <LinkNav url={"#"} img={offersImg} name="العروض الخاصة" />
          <LinkNav url={"#"} img={martingImg} name="الحملات التسويقية" />
          <LinkNav url={"#"} img={stockImg} name="السلات المتروكة" />
          <LinkNav url={"#"} img={personImg} name="نظام الولاء" />

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

          <div className="flex flex-wrap justify-center items-center mt-6">
            <Image src={googleImg} alt="google" width={160} priority />
            <Image src={appleImg} alt="apple" width={160} priority />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default UserSideBar;
