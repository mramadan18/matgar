import Breadcrumb from "../../components/Utilities/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "../../components/Utilities/Breadcrumb/BreadcrumbItem";
import Filter from "../../components/Utilities/Filter/Filter";
import SearchInput from "../../components/Utilities/SearchInput/SearchInput";
import TableWithPagination from "../../components/Utilities/Tables/TableWithPagination";

const page = () => {
  return (
    <div className="container mt-10">
      <Breadcrumb>
        <BreadcrumbItem link="/admin" title="الرئيسية" separator="/" />
        <BreadcrumbItem link="/admin/orders" title="الطلبات" />
      </Breadcrumb>

      <div className="mt-8">
        <SearchInput placeholder="ابحث عن منتجات" />
      </div>
      <div className="mt-8">
        <Filter />
      </div>

      <div className="mt-56">
        <TableWithPagination />
      </div>
    </div>
  );
};

export default page;
