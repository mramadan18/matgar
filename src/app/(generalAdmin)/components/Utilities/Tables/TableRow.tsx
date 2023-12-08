import Link from "next/link";

type Props = {
  id: string;
  username: string;
  status: string;
  total: string;
  date: string;
  shipping_to: string;
};

const TableRow = ({
  id,
  username,
  status,
  total,
  date,
  shipping_to,
}: Props) => {
  return (
    <tr className="bg-white border-b">
      <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        #{id}
      </td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{username}</td>
      <td className="px-2 py-4 border-r border-[#CDD3E3]">
        <button
          className={`${
            status === "مكتمل"
              ? "bg-[#009721] text-white"
              : status === "قيد التنفيذ"
              ? "bg-[#FFAD33]"
              : "bg-[#F7F7F7] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
          } py-3 w-32 rounded-lg`}
        >
          {status}
        </button>
      </td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{total} $</td>
      <td className="px-1 py-4 border-r border-[#CDD3E3]">{date}</td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{shipping_to}</td>
      <td className="px-2 py-4 border-r border-[#CDD3E3]">
        <Link
          href={`/admin/orders/${id}`}
          className="bg-primary-900 text-white py-3 w-32 rounded-lg cursor-pointer block"
        >
          تفاصيل
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
