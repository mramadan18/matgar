import TableWithPagination from "../../Utilities/Tables/TableWithPagination";

const LatestOrders = () => {
  return (
    <div className="container my-14">
      <h5 className="mr-4 mb-8">أخر الطلبات</h5>
      <TableWithPagination />
    </div>
  );
};

export default LatestOrders;
