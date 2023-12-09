import StoreDetails from "@/app/(generalAdmin)/components/Stores/StoreDetails/StoreDetails";
import TableProducts from "@/app/(generalAdmin)/components/Stores/TableProducts/TableProducts";

const page = () => {
  return (
    <div className="container mt-10 pb-10">
      <h4 className="font-medium">مشاهده تفاصيل المتجر</h4>

      <StoreDetails />
      <div className="mt-10">
        <h5 className="mb-4">المنتجات</h5>
        <TableProducts />
      </div>
    </div>
  );
};

export default page;
