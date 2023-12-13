const CouponDataForm = () => {
  return (
    <div className="border p-8">
      <h4 className="font-light inline-block pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black">
        كوبون تسويقي
      </h4>

      <form className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label htmlFor="">
            كود الكوبون (حروف انجليزية وارقام وبدون مسافات)
          </label>
          <input
            type="text"
            placeholder="كود الكوبون"
            className="placeholder:text-[#CDD3E3] border border-primary-900 p-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="">نوع الخصم</label>
          <input
            type="text"
            placeholder="نوع الخصم"
            className="placeholder:text-[#CDD3E3] border border-primary-900 p-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="">عدد مرات الاستخدام للجميع</label>
          <input
            type="text"
            placeholder="كود الكوبون"
            className="placeholder:text-[#CDD3E3] border border-primary-900 p-4"
          />
        </div>

        <div className="flex items-center gap-4 text-right">
          <div className="flex flex-col gap-4 w-1/2">
            <label htmlFor="">تاريخ بداية الكوبون</label>
            <input
              type="date"
              placeholder="كود الكوبون"
              className="text-[#CDD3E3] border border-primary-900 p-4 text-right"
            />
          </div>
          <div className="flex flex-col gap-4 w-1/2">
            <label htmlFor="">تاريخ انتهاء الكوبون</label>
            <input
              type="date"
              placeholder="كود الكوبون"
              className="text-[#CDD3E3] border border-primary-900 p-4 text-right"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary-900 text-white p-2 w-32 mx-auto mt-6"
        >
          حفظ
        </button>
      </form>
    </div>
  );
};

export default CouponDataForm;
