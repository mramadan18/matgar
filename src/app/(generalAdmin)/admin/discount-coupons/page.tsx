import Link from "next/link";
import TableCoupons from "../../components/DiscountCoupons/TableCoupons";

const page = () => {
  return (
    <div className="container mt-20 mb-10">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-medium">كوبونات الخصم</h4>
        <Link
          href={"/admin/discount-coupons/add-coupon"}
          className="flex justify-center items-center gap-4 bg-primary-900 p-3 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M1 13H13M13 13H25M13 13V1M13 13V25"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>اضافة كوبون خصم</span>
        </Link>
      </div>

      <TableCoupons />
    </div>
  );
};

export default page;
