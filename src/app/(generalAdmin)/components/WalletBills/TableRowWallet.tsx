import Image from "next/image";
import demo_img from "#/admin_images/icons/demo_img.svg";

type Props = {
  id: string;
  name: string;
  email: string;
  phone: string;
  balance: string;
};

const TableRowWallet = ({ id, name, email, phone, balance }: Props) => {
  return (
    <tr className="bg-white border-b">
      <td scope="row" className="px-6 py-4">
        {id}
      </td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">
        <Image src={demo_img} alt="img" className="mx-auto" />
      </td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{name}</td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{email}</td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{phone}</td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{balance}$</td>
    </tr>
  );
};

export default TableRowWallet;
