import Image from "next/image";
import CustomerInfo from "./CustomerInfo";
import demo_img from "#/admin_images/icons/demo_img.svg";
import avatar from "#/admin_images/icons/user_avatar.svg";
import email from "#/admin_images/icons/email.svg";
import phone from "#/admin_images/icons/phone.svg";
import wallet from "#/admin_images/icons/wallet.svg";
import check_right from "#/admin_images/icons/check_right.svg";
import not_check from "#/admin_images/icons/not_check.svg";

const CustomerDetails = () => {
  return (
    <div className="mt-10 py-8 px-14 bg-white shadow-2xl flex justify-between items-start">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-6 mb-14">
          <div className="w-28 h-28">
            <Image src={demo_img} alt="img" className="w-full h-full" />
          </div>
          <h4>اسم العميل عبدالله الزيات</h4>
        </div>
        <CustomerInfo image={avatar} value="أسم المستخدم" />
        <CustomerInfo image={email} value="abdallhelzayat194@gmail.com" />
        <CustomerInfo image={phone} value="01212484233" />
        <CustomerInfo image={wallet} value="رصيد المحفظة: 500$" />
      </div>
      <div className="flex flex-col gap-4 shadow-xl p-8">
        <h4 className="font-medium">التوثيقات</h4>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <CustomerInfo image={check_right} value="البريد الإلكتروني" />
          <CustomerInfo image={check_right} value="رقم الجوال" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <CustomerInfo image={check_right} value="السجل التجاري" />
          <CustomerInfo image={not_check} value="وسيله الدفع" />
        </div>

        <h4 className="font-medium">معلومات الحساب</h4>

        <div className="flex justify-start items-center gap-14">
          <p>أخر ظهور منذ</p>
          <p className="text-[#696C76]">منذ يوم و 13 ساعة</p>
        </div>
        <div className="flex justify-start items-center gap-14">
          <p>أشتراك الباقه</p>
          <p className="text-[#696C76]">متجر بلس</p>
        </div>
        <div className="flex justify-start items-center gap-14">
          <p>تاريخ التسجيل</p>
          <p className="text-[#696C76]">1 أكتوبر 2023</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
