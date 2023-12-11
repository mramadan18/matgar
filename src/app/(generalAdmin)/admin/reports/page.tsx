import NetSales from "../../components/Stores/StoreStatistics/Charts/NetSales";
import Orders from "../../components/Stores/StoreStatistics/Charts/Orders";
import TableBestSellingCategories from "../../components/Stores/StoreStatistics/Tables/TableBestSellingCategories";
import TableBestSellingProducts from "../../components/Stores/StoreStatistics/Tables/TableBestSellingProducts";
import StoreStatisticsInfoBar from "../../components/Stores/StoreStatisticsInfoBar";
import Breadcrumb from "../../components/Utilities/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "../../components/Utilities/Breadcrumb/BreadcrumbItem";

const page = () => {
  return (
    <div className="container mt-10">
      <Breadcrumb>
        <BreadcrumbItem link="/admin" title="الرئيسية" separator="/" />
        <BreadcrumbItem link="/admin/reports" title="التقارير" />
      </Breadcrumb>

      <div className="mt-10">
        <StoreStatisticsInfoBar />
      </div>

      <NetSales />
      <Orders />

      <div className="mt-20">
        <TableBestSellingCategories />
      </div>
      <div className="mt-20">
        <TableBestSellingProducts />
      </div>
    </div>
  );
};

export default page;
