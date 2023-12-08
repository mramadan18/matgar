import StoreSales from "../../components/Orders/Charts/StoreSales";
import TotalProfits from "../../components/Orders/Charts/TotalProfits";
import StoresInfoBar from "../../components/Stores/StoresInfoBar";
import TableStore from "../../components/Stores/TableStore/TableStore";
import Filter from "../../components/Utilities/Filter/Filter";
import SearchInput from "../../components/Utilities/SearchInput/SearchInput";

const page = () => {
  return (
    <div className="container mt-10 pb-10">
      <h4 className="font-medium">جميع المتاجر</h4>

      <StoresInfoBar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
        <StoreSales />
        <TotalProfits />
      </div>

      <div className="mt-10">
        <SearchInput placeholder="ابحث عن منتجات" />
      </div>

      <div className="mt-10">
        <Filter />
      </div>

      <div className="mt-56">
        <TableStore />
      </div>
    </div>
  );
};

export default page;
