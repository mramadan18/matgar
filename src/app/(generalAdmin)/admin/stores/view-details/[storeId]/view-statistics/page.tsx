import NetSales from "@/app/(generalAdmin)/components/Stores/StoreStatistics/Charts/NetSales";
import Orders from "@/app/(generalAdmin)/components/Stores/StoreStatistics/Charts/Orders";
import StoreStatistics from "@/app/(generalAdmin)/components/Stores/StoreStatistics/StoreStatistics";
import TableBestSellingCategories from "@/app/(generalAdmin)/components/Stores/StoreStatistics/Tables/TableBestSellingCategories";
import TableBestSellingProducts from "@/app/(generalAdmin)/components/Stores/StoreStatistics/Tables/TableBestSellingProducts";
import StoreStatisticsInfoBar from "@/app/(generalAdmin)/components/Stores/StoreStatisticsInfoBar";

const page = () => {
  return (
    <div className="container mt-10 pb-10">
      <h4 className="font-medium">مشاهده الأحصائيات المتجر</h4>
      <StoreStatisticsInfoBar />

      <StoreStatistics />

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
