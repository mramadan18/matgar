import SelectBox from "../Utilities/SelectBox/SelectBox";

const CouponExceptionForm = () => {
  const options = ["تصنيفات مشمولة", "تصنيفات مشمولة"];

  return (
    <div className="border p-8">
      <h4 className="font-light inline-block pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black">
        كوبون تسويقي
      </h4>

      <form className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label htmlFor="">مجموعة العملاء المشمولة</label>
          <input
            type="text"
            placeholder="مجموعة العملاء المشمولة"
            className="placeholder:text-[#CDD3E3] border border-primary-900 p-4"
          />
        </div>
        <div>
          <div className="mb-4">ماركات مستثناة</div>
          <SelectBox options={options} bg="bg-white" align="right" />
        </div>
        <div>
          <div className="mb-4">تصنيفات مشمولة</div>
          <SelectBox options={options} bg="bg-white" align="right" />
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

export default CouponExceptionForm;
