import bookPhoto from "../../../../../public/img for salla/homePage/icons8-book-50.png";
import storePhoto from "../../../../../public/img for salla/homePage/icons8-store-50.png";
import users from "../../../../../public/img for salla/homePage/icons8-users-48.png";
import moneyPhoto from "../../../../../public/img for salla/homePage/icons8-money-30.png";
import MenuLink from "./MenuLink";
import CardLinks from "./CardLinks";

const SolutionsLink = () => {
  return (
    <MenuLink linkName="الحلول" linkPath="/#">
      <CardLinks
        path="/app-maker"
        head={" صانع التطبيقات"}
        subHead={"  اصنع تطبيقًا خاصًا لمتجرك"}
        img={bookPhoto}
      />
      <CardLinks
        path="/special"
        head={"متجر سبشيل"}
        subHead={"حلول تقنية متقدمة لنمو أعمال كبار التجار"}
        img={storePhoto}
      />
      <CardLinks
        path="/marketing-solving"
        head={"أدوات التسويق"}
        subHead={"حلول تسويقية عديدة تزيد مبيعاتك"}
        img={users}
      />
      <CardLinks
        path="/payment"
        head={"المدفوعات"}
        subHead={"طرق دفع متنوعة وآمنة تناسب عملائك"}
        img={moneyPhoto}
      />
    </MenuLink>
  );
};

export default SolutionsLink;
