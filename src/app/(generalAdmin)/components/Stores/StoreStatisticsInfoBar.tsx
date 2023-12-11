const StoreStatisticsInfoBar = () => {
  return (
    <div className="px-10 mt-10 bg-admin_bg grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex justify-center items-center gap-8 border-l border-[#00000012] py-6">
        <div className="text-center">
          <p>مجموع المبيعات</p>
          <h3 className="mt-4">$7651025</h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 border-l border-[#00000012] py-6">
        <div className="text-center">
          <p>صافي مبيعات</p>
          <h3 className="mt-4">$7651025</h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 border-l border-[#00000012] py-6">
        <div className="text-center">
          <p>الطلبات</p>
          <h3 className="mt-4">16</h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 border-l border-[#00000012] py-6">
        <div className="text-center">
          <p>المنتجات المباعه</p>
          <h3 className="mt-4">16</h3>
        </div>
      </div>
    </div>
  );
};

export default StoreStatisticsInfoBar;
