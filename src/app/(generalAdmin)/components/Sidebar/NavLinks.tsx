import LinkItem from "./LinkItem";
import home_icon from "#/admin_images/icons/nav_home.svg";
import orders_icon from "#/admin_images/icons/nav_orders.svg";
import stores_icon from "#/admin_images/icons/nav_stores.svg";
import reports_icon from "#/admin_images/icons/nav_reports.svg";
import quiz_icon from "#/admin_images/icons/nav_quiz.svg";
import maker_icon from "#/admin_images/icons/nav_maker.svg";
import clients_icon from "#/admin_images/icons/nav_clients.svg";
import discount_icon from "#/admin_images/icons/nav_discount.svg";
import marketing_icon from "#/admin_images/icons/nav_marketing.svg";
import package_icon from "#/admin_images/icons/nav_package.svg";
import wallet_icon from "#/admin_images/icons/nav_wallet.svg";
import google_play_img from "#/admin_images/google_play.png";
import app_store_img from "#/admin_images/app_store.png";
import Link from "next/link";
import Image from "next/image";

const NavLinks = () => {
  return (
    <nav className="h-[80vh] overflow-y-auto pb-10">
      <ul className="flex flex-col gap-4">
        <LinkItem link="/admin" icon={home_icon} title="الرئيسية" />
        <LinkItem link="/admin/orders" icon={orders_icon} title="الطلبات" />
        <LinkItem link="/admin/stores" icon={stores_icon} title="المتاجر" />
        <LinkItem link="/admin/reports" icon={reports_icon} title="التقارير" />
        <LinkItem
          link="/admin/questions-reviews"
          icon={quiz_icon}
          title="الاسئلة والتقيمات"
        />
        <LinkItem link="/" icon={maker_icon} title="صانع التطبيقات" />
        <LinkItem link="/" icon={clients_icon} title="العملاء" />
        <h5 className="text-primary-800 pr-4 my-2">التسويق</h5>
        <LinkItem link="/" icon={discount_icon} title="كوبونات التخفيض" />
        <LinkItem link="/" icon={marketing_icon} title="الحملات التسويقية" />
        <h5 className="text-primary-800 pr-4 my-2">الاعدادات</h5>
        <LinkItem link="/" icon={package_icon} title="المتاجر" />
        <LinkItem link="/" icon={wallet_icon} title="التقارير" />
        <h5 className="text-primary-800 pr-4 my-2">تطبيق التاجر</h5>

        <div className="flex flex-col items-center gap-2">
          <Link href={"/"}>
            <Image src={google_play_img} alt="app" />
          </Link>
          <Link href={"/"}>
            <Image src={app_store_img} alt="app" />
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavLinks;
