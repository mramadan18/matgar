type Props = {
  id: string;
  category: string;
  sold_items: string;
  net_profit: string;
};

const TableBestSellingCategoriesRow = ({
  category,
  sold_items,
  net_profit,
}: Props) => {
  return (
    <tr className="bg-white border-b">
      <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {category}
      </td>
      <td
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap border-r border-[#CDD3E3]"
      >
        {sold_items}
      </td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{net_profit}</td>
    </tr>
  );
};

export default TableBestSellingCategoriesRow;
