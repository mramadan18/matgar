import TableBestSellingCategoriesRow from "./TableBestSellingCategoriesRow";

type Props = {
  id: string;
  category: string;
  sold_items: string;
  net_profit: string;
};

const TableBestSellingCategories = () => {
  const data: Props[] = [
    {
      id: "1",
      category: "أدوات منزليه",
      sold_items: "115",
      net_profit: "$150",
    },
    {
      id: "2",
      category: "أحدث المنتجات",
      sold_items: "115",
      net_profit: "$150",
    },
    {
      id: "3",
      category: "أدوات منزليه",
      sold_items: "115",
      net_profit: "$150",
    },
  ];

  return (
    <div className="relative overflow-x-auto">
      <h3 className="font-medium mb-6">أفضل التصنيفات مبيعا</h3>
      <table className="w-[1208px] text-lg text-center">
        <thead className="text-lg text-white uppercase bg-primary-900">
          <tr>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              التصنف
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              العناصر المباعه
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              صافي الربح
            </td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <TableBestSellingCategoriesRow key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBestSellingCategories;
