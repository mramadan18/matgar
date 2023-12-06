import Image from "next/image";
import LogoImage from "#/home/logo.png";
import homeImg from "#/img for salla/dashboard/vuesax-broken-home.png";
import orderImg from "#/img for salla/dashboard/vuesax-broken-icon.png";
import userImg from "#/img for salla/dashboard/vuesax-broken-people.png";
import reports from "#/img for salla/dashboard/vuesax-broken-document.png";
import subtitleImg from "#/img for salla/dashboard/vuesax-broken-subtitle.png";
import settingImg from "#/img for salla/dashboard/vuesax-broken-setting-3.png";

import LinkNav from "./LinkNav";

const TraderSideBar = () => {
  return (
    <div className="sidebar-content pt-6 overflow-x-hidden   width={160}">
      <div className="mb-6">
        <Image src={LogoImage} alt={"logo-matger"} width={150} />
      </div>

      <div className="Nav">
        <ul>
          <LinkNav
            url={"/matjar-info/trader-info"}
            img={homeImg}
            name="معلومات التاجر"
          />
          <LinkNav
            url={"/matjar-info/add-first-product"}
            img={orderImg}
            name="أضف أول منتج"
          />
          <LinkNav
            url={"/matjar-info/transporting-options"}
            img={userImg}
            name="فعل خيارات الشحن"
          />
          <LinkNav
            url={"/matjar-info/e-payment"}
            img={reports}
            name="فعل المدفوعات الالكترونيه"
          />
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
