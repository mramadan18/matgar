type Props = {
  title_coupons: string;
  start_date: string;
  end_date: string;
};

const TableRowCoupons = ({ title_coupons, start_date, end_date }: Props) => {
  return (
    <tr className="bg-white border-b">
      <td
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap border border-[#CDD3E3]"
      >
        {title_coupons}
      </td>
      <td className="px-6 py-4 border border-[#CDD3E3]">{start_date}</td>
      <td className="px-2 py-4 border border-[#CDD3E3]">{end_date}</td>
    </tr>
  );
};

export default TableRowCoupons;
