"use client";
import ReactPaginate from "react-paginate";
import TableRowStore from "./TableRowStore";

type Props = {
  id: string;
  store_name: string;
  status: string;
  phone: string;
};

const TableStore = () => {
  const handlePageClick = (event: any) => {
    console.log(event);
  };
  const data: Props[] = [
    {
      id: "1",
      store_name: "Name",
      status: "موثق",
      phone: "01100594017",
    },
    {
      id: "2",
      store_name: "Name",
      status: "منتظر المراجعه",
      phone: "01551887408",
    },
    {
      id: "3",
      store_name: "Name",
      status: "ملغي الاشتراك",
      phone: "01100594017",
    },
    {
      id: "4",
      store_name: "Name",
      status: "موثق",
      phone: "01551887408",
    },
    {
      id: "5",
      store_name: "Name",
      status: "موثق",
      phone: "01100594017",
    },
  ];

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-lg text-center">
        <thead className="text-lg text-white uppercase bg-primary-900">
          <tr>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              id
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              العلامة التجارية
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              اسم المتجر
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الحالة
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الهاتف
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              المتابعات
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الأعدادات
            </td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <TableRowStore {...item} />
          ))}
        </tbody>
      </table>

      <div className="mt-10">
        <ReactPaginate
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={0}
          marginPagesDisplayed={0}
          pageCount={10}
          previousLabel="Back"
          containerClassName="flex items-center"
          previousClassName="bg-black text-white w-16 h-10 flex justify-center items-center rounded-r-lg"
          nextClassName="bg-black text-white w-16 h-10 flex justify-center items-center rounded-l-lg"
          activeClassName="bg-[rgba(2,121,222,0.90)] text-white w-10 h-10 flex justify-center items-center"
        />
      </div>
    </div>
  );
};

export default TableStore;
