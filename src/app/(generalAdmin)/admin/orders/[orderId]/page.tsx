import OrderDetails from "@/app/(generalAdmin)/components/Orders/OrderDetails";
import TableOrderDetails from "@/app/(generalAdmin)/components/Orders/TableOrderDetails";
import Breadcrumb from "@/app/(generalAdmin)/components/Utilities/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "@/app/(generalAdmin)/components/Utilities/Breadcrumb/BreadcrumbItem";

const page = () => {
  return (
    <div className="container mt-10 pb-10">
      <Breadcrumb>
        <BreadcrumbItem link="/admin" title="الرئيسية" separator="/" />
        <BreadcrumbItem link="/admin/orders" title="الطلبات" separator="/" />
        <BreadcrumbItem link="/admin/orders/1" title="الطلب" />
      </Breadcrumb>

      <div className="mt-8">
        <OrderDetails />
      </div>

      <div className="mt-8">
        <TableOrderDetails />
      </div>
    </div>
  );
};

export default page;
