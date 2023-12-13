import Pagination from "../Utilities/Pagination/Pagination";
import TableRowMarketingCampaigns from "./TableRowMarketingCampaigns";

type Props = {
  id: string;
  username: string;
  status: string;
  campaign_value: string;
  date: string;
  campaign_duration: string;
};

const TableMarketingCampaigns = () => {
  const data: Props[] = [
    {
      id: "2345",
      username: "اسم مستخدم",
      status: "مكتمل",
      campaign_value: "700",
      date: "منذ ساعة واحدة مضت",
      campaign_duration: "اسبوعين",
    },
    {
      id: "2355",
      username: "اسم مستخدم",
      status: "قيد الانتظار",
      campaign_value: "800",
      date: "منذ 9 ساعات مضت",
      campaign_duration: "شهرين",
    },
    {
      id: "2365",
      username: "اسم مستخدم",
      status: "ملغي",
      campaign_value: "300",
      date: "26 نوفمبر، 2023",
      campaign_duration: "شهر",
    },
    {
      id: "2375",
      username: "اسم مستخدم",
      status: "فشل",
      campaign_value: "100",
      date: "25 نوفمبر، 2023",
      campaign_duration: "اسبوع",
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
              اسم المسوق
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الحالة
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              قيمة الحملة
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              التاريخ
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              مدة الحملة
            </td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <TableRowMarketingCampaigns key={item.id} {...item} />
          ))}
        </tbody>
      </table>
      <div className="mt-10">
        <Pagination />
      </div>
    </div>
  );
};

export default TableMarketingCampaigns;
