import Pagination from "../../Utilities/Pagination/Pagination";
import TableRowCustomers from "./TableRowCustomers";

type Props = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

const TableCustomers = () => {
  const data: Props[] = [
    {
      id: "1",
      name: "Name",
      email: "m.ramadan181199@gmail.com",
      phone: "01100594017",
    },
    {
      id: "2",
      name: "Name",
      email: "m.ramadan181199@gmail.com",
      phone: "01100594017",
    },
    {
      id: "3",
      name: "Name",
      email: "m.ramadan181199@gmail.com",
      phone: "01100594017",
    },
    {
      id: "4",
      name: "Name",
      email: "m.ramadan181199@gmail.com",
      phone: "01100594017",
    },
    {
      id: "5",
      name: "Name",
      email: "m.ramadan181199@gmail.com",
      phone: "01100594017",
    },
  ];

  return (
    <div className="relative overflow-x-auto">
      <table className="w-[1208px] text-lg text-center">
        <thead className="text-lg text-white uppercase bg-primary-900">
          <tr>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              ID
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الصورة
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              ألاسم
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الأيميل
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الهاتف
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الأعدادات
            </td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <TableRowCustomers key={item.id} {...item} />
          ))}
        </tbody>
      </table>
      <div className="mt-10">
        <Pagination />
      </div>
    </div>
  );
};

export default TableCustomers;
