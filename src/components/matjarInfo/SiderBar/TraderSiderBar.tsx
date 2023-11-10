import Image from "next/image";
import LogoImage from "/public/home/logo-removebg-preview.png";
import homeImg from "../../../../public/img for salla/dashboard/vuesax-broken-home.png";
import orderImg from "../../../../public/img for salla/dashboard/vuesax-broken-icon.png";
import userImg from "../../../../public/img for salla/dashboard/vuesax-broken-people.png";
import reports from "../../../../public/img for salla/dashboard/vuesax-broken-document.png";
import subtitleImg from "../../../../public/img for salla/dashboard/vuesax-broken-subtitle.png";
import settingImg from "../../../../public/img for salla/dashboard/vuesax-broken-setting-3.png";

import LinkNav from "./LinkNav";

const TraderSideBar = () => {
  return (
    <div className="h-100 pt-20 overflow-x-hidden">
      <div className="mb-14">
        <Image src={LogoImage} alt={"logo-matger"} width={250} />
      </div>

      <div className="Nav">
        <ul>
          <LinkNav
            url={"/matgar-info/trader-info"}
            img={homeImg}
            name="معلومات التاجر"
          />
          <LinkNav
            url={"/matgar-info/add-first-product"}
            img={orderImg}
            name="أضف أول منتج"
          />
          <LinkNav
            url={"/matgar-info/transporting-options"}
            img={userImg}
            name="فعل خيارات الشحن"
          />
          <LinkNav
            url={"/matgar-info/e-payment"}
            img={reports}
            name="فعل المدفوعات الالكترونيه"
          />
          <LinkNav
            url={"/matgar-info/design-choose"}
            img={settingImg}
            name="اختر تصميمات متجرك"
          />
          <LinkNav
            url={"/matgar-info/packages"}
            img={subtitleImg}
            name="اكتشف باقات المتجر"
          />
        </ul>
      </div>
    </div>
  );
};

export default TraderSideBar;
