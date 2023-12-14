type Props = {
  id: string;
  username: string;
  status: string;
  campaign_value: string;
  date: string;
  campaign_duration: string;
};

const TableRowMarketingCampaigns = ({
  id,
  username,
  status,
  campaign_value,
  date,
  campaign_duration,
}: Props) => {
  return (
    <tr className="bg-white border-b">
      <td scope="row" className="px-6 py-4">
        {id}
      </td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{username}</td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">
        <button
          className={`${
            status === "مكتمل"
              ? "bg-[#009721] text-white"
              : status === "قيد التنفيذ" || status === "قيد الانتظار"
              ? "bg-[#FFAD33]"
              : status === "فشل"
              ? "bg-[#FF0000] text-white"
              : "bg-[#F7F7F7] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
          } py-3 w-32 rounded-lg`}
        >
          {status}
        </button>
      </td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">
        $ {campaign_value}
      </td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{date}</td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">
        {campaign_duration}
      </td>
    </tr>
  );
};

export default TableRowMarketingCampaigns;
