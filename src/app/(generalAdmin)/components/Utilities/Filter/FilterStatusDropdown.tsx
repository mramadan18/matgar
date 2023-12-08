const FilterStatusDropdown = () => {
  return (
    <div className="absolute top-10 right-0 w-full bg-white shadow-md py-4 rounded-md z-10">
      <ul className="flex flex-col gap-2">
        <li className="px-1 hover:text-white hover:bg-primary-900 transition-all flex justify-between items-center group">
          <span className="text-[#009721] group-hover:text-white transition-all">
            قيد التنفيذ
          </span>{" "}
          <span>(500)</span>
        </li>
        <li className="px-1 hover:text-white hover:bg-primary-900 transition-all flex justify-between items-center group">
          <span className="text-[#FFAD33] group-hover:text-white transition-all">
            قيد الانتظار
          </span>{" "}
          <span>(500)</span>
        </li>
        <li className="px-1 hover:text-white hover:bg-primary-900 transition-all flex justify-between items-center group">
          <span className="group-hover:text-white transition-all">مغلق</span>{" "}
          <span>(500)</span>
        </li>
        <li className="px-1 hover:text-white hover:bg-primary-900 transition-all flex justify-between items-center group">
          <span className="text-[#FF0000] group-hover:text-white transition-all">
            فشل
          </span>{" "}
          <span>(500)</span>
        </li>
      </ul>
    </div>
  );
};

export default FilterStatusDropdown;
