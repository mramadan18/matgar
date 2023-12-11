import Image from "next/image";
import Link from "next/link";
import demo_img from "#/admin_images/icons/demo_img.svg";

const StoreDetails = () => {
  return (
    <div>
      <div className="mt-10 pt-8 pb-32 px-10 bg-admin_bg">
        <h4 className="mb-6">أسم المتجر هنا</h4>
        <div className="w-32 h-32">
          <Image src={demo_img} alt="store logo" className="w-full h-full" />
        </div>

        <div className="mt-14">
          <h5>التفاصيل</h5>
          <p className="mt-4 max-w-[800px]">
            Lorem ipsum dolor sit amet consectetur. In tortor dolor turpis in
            scelerisque. Integer sagittis consequat senectus sem etiam ac
            convallis eleifend magna. Consequat venenatis dignissim faucibus ut
            pulvinar rhoncus sed. Volutpat fermentum potenti aliquet amet in in
            mauris odio.
          </p>
        </div>
      </div>

      <div className="py-4 px-10 bg-admin_bg mt-6 flex justify-center items-center gap-4">
        <button className="bg-primary-900 text-center text-white py-3 w-48 rounded-md cursor-pointer block">
          متابعه
        </button>
        <Link
          href={`/admin/stores/view-details/1/view-statistics`}
          className="bg-black text-center text-white py-3 w-48 rounded-md cursor-pointer block"
        >
          تفاصيل
        </Link>
        <Link
          href={`/admin/stores/view-details/1/edit-details`}
          className="bg-black text-center text-white py-3 w-48 rounded-md cursor-pointer block"
        >
          تعديل
        </Link>
      </div>
    </div>
  );
};

export default StoreDetails;
