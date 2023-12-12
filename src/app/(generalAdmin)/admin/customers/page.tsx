import UserStatistics from "../../components/Customers/Charts/UserStatistics";
import TableCustomers from "../../components/Customers/TableCustomers/TableCustomers";
import SearchInput from "../../components/Utilities/SearchInput/SearchInput";

const page = () => {
  return (
    <div className="container my-10">
      <h4 className="font-medium">العملاء</h4>

      <div className="mt-10">
        <SearchInput placeholder="ابحث عن مستخدم" />
      </div>

      <UserStatistics />

      <div className="mt-10">
        <TableCustomers />
      </div>
    </div>
  );
};

export default page;
