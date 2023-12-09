"use client";
import Pagination from "../../Utilities/Pagination/Pagination";
import TableRowProduct from "./TableRowProduct";

type Props = {
  id: string;
  product_name: string;
  price: string;
  date_publication: string;
  status: string;
};

const TableProducts = () => {
  const data: Props[] = [
    {
      id: "1",
      product_name: "منتج باسم 1",
      price: "700",
      date_publication: "آخر تعديل2023/11/27 الساعة 9:34 م",
      status: "متوفر 250 باقي ",
    },
    {
      id: "2",
      product_name: "منتج باسم 1",
      price: "700",
      date_publication: "آخر تعديل2023/11/27 الساعة 9:34 م",
      status: "متوفر 250 باقي ",
    },
    {
      id: "3",
      product_name: "منتج باسم 1",
      price: "700",
      date_publication: "آخر تعديل2023/11/27 الساعة 9:34 م",
      status: "متوفر 250 باقي ",
    },
    {
      id: "4",
      product_name: "منتج باسم 1",
      price: "700",
      date_publication: "آخر تعديل2023/11/27 الساعة 9:34 م",
      status: "متوفر 250 باقي ",
    },
    {
      id: "5",
      product_name: "منتج باسم 1",
      price: "700",
      date_publication: "آخر تعديل2023/11/27 الساعة 9:34 م",
      status: "متوفر 250 باقي ",
    },
  ];

  return (
    <div className="relative overflow-x-auto">
      <table className="w-[1208px] text-lg text-center">
        <thead className="text-lg text-white uppercase bg-primary-900">
          <tr>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              اسم المنتج
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الصورة
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              السعر
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              تاريخ النشر
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الحالة
            </td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <TableRowProduct key={item.id} {...item} />
          ))}
        </tbody>
      </table>

      <div className="mt-10">
        <Pagination />
      </div>
    </div>
  );
};

export default TableProducts;
