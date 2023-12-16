"use client";
import { useParams } from "next/navigation";
import SelectBox from "../Utilities/SelectBox/SelectBox";

const OrderDetails = () => {
  const { orderId } = useParams();

  const options = [
    "قيد التنفيذ",
    "بانتظار الدفع",
    "قيد الانتظار",
    "مكتمل",
    "ملغي",
    "فشل",
  ];

  return (
    <div className="border border-primary-900 p-4">
      <h4 className="font-medium inline-block pb-1 mb-4 relative after:absolute after:bottom-0 after:right-0 after:w-full after:h-px after:bg-black">
        تفاصيل الطلب :#{orderId}
      </h4>

      <p className="font-medium">
        الدفع عبر الدفع نقدًا عند الاستلام. عنوان IP العميل: 197.133.27.165
      </p>

      <h5 className="text-primary-900 my-4">عام</h5>

      <div className="grid gridp-cols-1 md:grid-cols-2 gap-6 md:gap-32">
        <div>
          <h5 className="font-medium mb-3">تاريخ الانشاء</h5>

          <div className="flex justify-start items-center gap-4">
            <div className="shadow-[0_0_4px_0_rgba(0,0,0,0.25)] p-3 w-full">
              2023-11-27
            </div>

            <div className="flex justify-start items-center gap-2">
              <div className="p-3 shadow-[0_0_4px_0_rgba(0,0,0,0.25)]">22</div>{" "}
              :<div className="p-3 shadow-[0_0_4px_0_rgba(0,0,0,0.25)]">56</div>
            </div>
          </div>

          <div>
            <h6 className="font-medium my-4">الحاله :</h6>

            <SelectBox options={options} />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <h4>الفاتورة :</h4>
          <p>٣٠ شارع الشيخ متولي الشعراوي اللبيني فيصل الجيزة</p>
          <h4>الشحن :</h4>
          <p>٣٠ شارع الشيخ متولي الشعراوي اللبيني فيصل الجيزة</p>
          <h4>البريد الإلكتروني:</h4>
          <p>abdallhelzayat194@gmail.com</p>
          <h4>الهاتف:</h4>
          <p>+201212484233</p>
          <h4>هاتف احتياطي:</h4>
          <p>+201019386883</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
