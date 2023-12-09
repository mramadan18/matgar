import TableRowOrders from "./TableRowOrders";

type Props = {
  id: string;
  username: string;
  status: string;
  total: string;
  date: string;
  shipping_to: string;
};

const TableOrders = () => {
  const data: Props[] = [
    {
      id: "2345",
      username: "اسم مستخدم",
      status: "مكتمل",
      total: "700",
      date: "منذ ساعة واحدة مضت",
      shipping_to: "مصر القاهرة",
    },
    {
      id: "2355",
      username: "اسم مستخدم",
      status: "قيد الانتظار",
      total: "800",
      date: "منذ 9 ساعات مضت",
      shipping_to: "مصر المنصورة",
    },
    {
      id: "2345",
      username: "اسم مستخدم",
      status: "ملغي",
      total: "300",
      date: "26 نوفمبر، 2023",
      shipping_to: "مصر  الجيزه",
    },
    {
      id: "2345",
      username: "اسم مستخدم",
      status: "فشل",
      total: "100",
      date: "25 نوفمبر، 2023",
      shipping_to: "مصر  القاهرة",
    },
  ];

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-lg text-center">
        <thead className="text-lg text-white uppercase bg-primary-900">
          <tr>
            <td scope="col" className="px-6 py-6 border-r">
              id
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              اسم مستخدم
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الحالة
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الاجمالي
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              التاريخ
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الشحن الي
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الطلب
            </td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <TableRowOrders {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrders;
