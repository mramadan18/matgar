import Pagination from "../Utilities/Pagination/Pagination";
import TableRowWallet from "./TableRowWallet";

type Props = {
  id: string;
  name: string;
  email: string;
  phone: string;
  balance: string;
};

const TableWallet = () => {
  const data: Props[] = [
    {
      id: "1",
      name: "Name",
      email: "m.ramadan181199@gmail.com",
      phone: "0123456789",
      balance: "0",
    },
    {
      id: "2",
      name: "Name",
      email: "m.ramadan181199@gmail.com",
      phone: "0123456789",
      balance: "10.5",
    },
    {
      id: "3",
      name: "Name",
      email: "m.ramadan181199@gmail.com",
      phone: "0123456789",
      balance: "20",
    },
    {
      id: "4",
      name: "Name",
      email: "m.ramadan181199@gmail.com",
      phone: "0123456789",
      balance: "1.5",
    },
    {
      id: "5",
      name: "Name",
      email: "m.ramadan181199@gmail.com",
      phone: "0123456789",
      balance: "3.5",
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
              رصيد المحفظه
            </td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <TableRowWallet key={item.id} {...item} />
          ))}
        </tbody>
      </table>
      <div className="mt-10">
        <Pagination />
      </div>
    </div>
  );
};

export default TableWallet;
