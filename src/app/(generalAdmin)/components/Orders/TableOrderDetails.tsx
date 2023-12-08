import Image from "next/image";
import demo_img from "#/admin_images/icons/demo_img.svg";

const TableOrderDetails = () => {
  return (
    <div className="relative overflow-x-auto border border-primary-900 pt-2">
      <table className="w-full text-lg text-center">
        <thead className="text-lg text-white uppercase bg-primary-900">
          <tr>
            <td scope="col" className="px-6 py-6 border-r">
              العنصر
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              اسم العنصر
            </td>
            <td
              scope="col"
              className="px-6 py-6 border-r border-[#CDD3E3] flex justify-center items-center gap-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 37"
                fill="none"
              >
                <path
                  d="M13.7058 36.7055L25.7075 24.7063C26.0975 24.3164 26.0975 23.6824 25.7075 23.2924C25.3174 22.9025 24.6833 22.9025 24.2933 23.2924L13.9999 33.5837V0.999932C13.9999 0.44797 13.5518 0 12.9998 0C12.4477 0 11.9996 0.44797 11.9996 0.999932V33.5837L1.70623 23.2924C1.31618 22.9025 0.682092 22.9025 0.292039 23.2924C0.0960127 23.4884 0 23.7444 0 24.0004C0 24.2564 0.098013 24.5123 0.292039 24.7083L12.2937 36.7075C12.6837 37.0975 13.3178 37.0975 13.7078 36.7075L13.7058 36.7055Z"
                  fill="white"
                />
              </svg>
              <span>التكلفة</span>
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الكمية
            </td>
            <td scope="col" className="px-6 py-6 border-r border-[#CDD3E3]">
              الاجمالي
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-black">
            <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              <Image src={demo_img} alt="img" className="mx-auto" />
            </td>
            <td className="px-6 py-4 border-r border-[#CDD3E3]">
              اسم منتج معين او سلعه
            </td>
            <td className="px-6 py-4 border-r border-[#CDD3E3]">70$</td>
            <td className="px-1 py-4 border-r border-[#CDD3E3]">1X</td>
            <td className="px-6 py-4 border-r border-[#CDD3E3]">70$</td>
          </tr>
          <tr className="bg-white border-b border-black">
            <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              <Image src={demo_img} alt="img" className="mx-auto" />
            </td>
            <td className="px-6 py-4 border-r border-[#CDD3E3]">
              اسم منتج معين او سلعه
            </td>
            <td className="px-6 py-4 border-r border-[#CDD3E3]">70$</td>
            <td className="px-1 py-4 border-r border-[#CDD3E3]">1X</td>
            <td className="px-6 py-4 border-r border-[#CDD3E3]">70$</td>
          </tr>
        </tbody>
      </table>
      <div className="px-6 py-8">
        <h4>اجمالي الطلب : 190 $</h4>
      </div>
    </div>
  );
};

export default TableOrderDetails;
