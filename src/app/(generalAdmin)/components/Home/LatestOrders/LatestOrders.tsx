"use client";
import TableOrders from "./TableOrders/TableOrders";
import Pagination from "../../Utilities/Pagination/Pagination";

const LatestOrders = () => {
  return (
    <div className="container my-14">
      <h5 className="mr-4 mb-8">أخر الطلبات</h5>
      <TableOrders />
      <div className="mt-10">
        <Pagination />
      </div>
    </div>
  );
};

export default LatestOrders;
