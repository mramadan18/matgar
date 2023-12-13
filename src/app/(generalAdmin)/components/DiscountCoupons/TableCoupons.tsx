import React from "react";
import Pagination from "../Utilities/Pagination/Pagination";
import TableRowCoupons from "./TableRowCoupons";

type Props = {
  id: string;
  title_coupons: string;
  start_date: string;
  end_date: string;
};

const TableCoupons = () => {
  const data: Props[] = [
    {
      id: "1",
      title_coupons: "خصم 50% علي المنتجات",
      start_date: "20/10/2023",
      end_date: "20/10/2024",
    },
    {
      id: "2",
      title_coupons: "خصم 50% علي المنتجات",
      start_date: "20/10/2023",
      end_date: "20/10/2024",
    },
    {
      id: "3",
      title_coupons: "خصم 50% علي المنتجات",
      start_date: "20/10/2023",
      end_date: "20/10/2024",
    },
    {
      id: "4",
      title_coupons: "خصم 50% علي المنتجات",
      start_date: "20/10/2023",
      end_date: "20/10/2024",
    },
  ];

  return (
    <div className="relative overflow-x-auto">
      <table className="w-[1208px] text-lg text-center">
        <thead className="text-lg text-white uppercase bg-primary-900">
          <tr>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              عنوان الكوبون
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              تاريخ بداية الكوبون
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              تاريخ انتهاء الكوبون
            </td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <TableRowCoupons key={item.id} {...item} />
          ))}
        </tbody>
      </table>

      <div className="mt-10">
        <Pagination />
      </div>
    </div>
  );
};

export default TableCoupons;
