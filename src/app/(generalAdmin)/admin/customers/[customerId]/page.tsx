import CustomerDetails from "@/app/(generalAdmin)/components/Customers/TableCustomers/CustomerDetails/CustomerDetails";
import TableOrders from "@/app/(generalAdmin)/components/Home/LatestOrders/TableOrders/TableOrders";
import Breadcrumb from "@/app/(generalAdmin)/components/Utilities/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "@/app/(generalAdmin)/components/Utilities/Breadcrumb/BreadcrumbItem";
import Pagination from "@/app/(generalAdmin)/components/Utilities/Pagination/Pagination";

const page = () => {
  return (
    <div className="container my-10">
      <Breadcrumb>
        <BreadcrumbItem title="الريسية" link="/admin" separator="/" />
        <BreadcrumbItem title="صفحه المستخدم" link="/admin/customers/1" />
      </Breadcrumb>

      <CustomerDetails />

      <div className="mt-20">
        <h4 className="font-medium mb-4">الطلبات</h4>
        <TableOrders />
        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default page;
