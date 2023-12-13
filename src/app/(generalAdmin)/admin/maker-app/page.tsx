import TableOrders from "../../components/Home/LatestOrders/TableOrders/TableOrders";
import Breadcrumb from "../../components/Utilities/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "../../components/Utilities/Breadcrumb/BreadcrumbItem";
import Filter from "../../components/Utilities/Filter/Filter";
import Pagination from "../../components/Utilities/Pagination/Pagination";
import SearchInput from "../../components/Utilities/SearchInput/SearchInput";

const page = () => {
  return (
    <div className="container my-10">
      <Breadcrumb>
        <BreadcrumbItem link="/admin" title="الرئيسية" separator="/" />
        <BreadcrumbItem link="/admin/maker-app" title="صانع التطبيقات" />
      </Breadcrumb>

      <div className="mt-8">
        <SearchInput placeholder="ابحث عن منتجات" />
      </div>
      <div className="mt-8">
        <Filter />
      </div>

      <div className="mt-56">
        <TableOrders />
        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default page;
