import Link from "next/link";
import Image from "next/image";
import demo_img from "#/admin_images/icons/demo_img.svg";

type Props = {
  id: string;
  store_name: string;
  status: string;
  phone: string;
};

const TableRowStore = ({ id, store_name, status, phone }: Props) => {
  return (
    <tr className="bg-white border-b">
      <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {id}
      </td>
      <td
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap border-r border-[#CDD3E3]"
      >
        <Image src={demo_img} alt="img" className="mx-auto" />
      </td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{store_name}</td>
      <td className="px-2 py-4 border-r border-[#CDD3E3]">
        <button
          className={`${
            status === "موثق"
              ? "bg-[#009721] text-white"
              : status === "منتظر المراجعه"
              ? "bg-[#FFAD33]"
              : "bg-[#F7F7F7] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
          } py-3 w-32 rounded-lg`}
        >
          {status}
        </button>
      </td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{phone}</td>
      <td className="px-2 py-4 border-r border-[#CDD3E3]">
        <Link
          href={`/admin/orders/${id}`}
          className="bg-primary-900 text-white py-3 w-32 rounded-lg cursor-pointer block mx-auto"
        >
          متابعه
        </Link>
      </td>
      <td className="px-2 py-4 border-r border-[#CDD3E3]">
        <Link
          href={`/admin/stores/view-details/${id}`}
          className="bg-primary-900 text-white py-3 w-32 rounded-lg cursor-pointer block mx-auto"
        >
          مشاهده
        </Link>
      </td>
    </tr>
  );
};

export default TableRowStore;
