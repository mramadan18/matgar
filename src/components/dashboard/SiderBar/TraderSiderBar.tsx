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

const TraderSideBar = () => {
  return (
    <div className="sidebar-content pt-6 overflow-x-hidden   width={160}">
      <div className="mb-6">
        <Image src={LogoImage} alt={"logo-matger"} width={150} />
      </div>
      

      <div className="Nav">
        <ul>
          <LinkNav url={"/matjar-info/trader-info"} img={homeImg} name="معلومات التاجر" />
          <LinkNav url={"/matjar-info/add-first-product"} img={orderImg} name="أضف أول منتج" />
          <LinkNav url={"/matjar-info/transporting-options"} img={userImg} name="فعل خيارات الشحن" />
          <LinkNav url={"/matjar-info/e-payment"} img={reports} name="فعل المدفوعات الالكترونيه" />
          <LinkNav
            url={"/matjar-info/design-choose"}
            img={settingImg}
            name="اختر تصميمات متجرك"
          />
          <LinkNav
            url={"/matjar-info/packages"}
            img={subtitleImg}
            name="اكتشف باقات المتجر"
          />

        
        
        </ul>
      </div>
    </div>
  );
};

export default TraderSideBar;
