import InfoBarItem from "./InfoBarItem";
import users_count_icon from "#/admin_images/icons/users_count.svg";
import products_count_icon from "#/admin_images/icons/products_count.svg";
import stores_count_icon from "#/admin_images/icons/bag_white.svg";
import dollar_icon from "#/admin_images/icons/dollar_white.svg";

const InfoBar = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 place-items-start gap-y-8 bg-admin_bg py-4 px-4 md:px-10">
      <InfoBarItem
        icon={users_count_icon}
        value={"300"}
        title="عدد المستخدمين"
      />
      <InfoBarItem
        icon={products_count_icon}
        value={"480"}
        title="عدد المنتجات"
      />
      <InfoBarItem icon={stores_count_icon} value={"150"} title="عدد المتاجر" />
      <InfoBarItem icon={dollar_icon} value={"500k"} title="المحفظه" />
    </div>
  );
};

export default InfoBar;
