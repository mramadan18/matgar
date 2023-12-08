const StoresInfoBar = () => {
  return (
    <div className="py-6 px-10 mt-10 bg-admin_bg grid grid-cols-2 md:grid-cols-5 gap-4">
      <div className="flex justify-center items-center gap-8 border-l border-[#696C76]">
        <svg
          className="hidden lg:block"
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="48"
          viewBox="0 0 43 48"
          fill="none"
        >
          <path
            d="M33.7857 15V12C33.7857 5.38312 28.2743 0 21.5 0C14.7256 0 9.21429 5.38312 9.21429 12V15H0V40.5C0 44.6422 3.43779 48 7.67857 48H35.3214C39.5622 48 43 44.6422 43 40.5V15H33.7857ZM15.3571 12C15.3571 8.69156 18.1128 6 21.5 6C24.8872 6 27.6429 8.69156 27.6429 12V15H15.3571V12ZM30.7143 23.25C29.442 23.25 28.4107 22.2427 28.4107 21C28.4107 19.7573 29.442 18.75 30.7143 18.75C31.9865 18.75 33.0179 19.7573 33.0179 21C33.0179 22.2427 31.9865 23.25 30.7143 23.25ZM12.2857 23.25C11.0135 23.25 9.98214 22.2427 9.98214 21C9.98214 19.7573 11.0135 18.75 12.2857 18.75C13.558 18.75 14.5893 19.7573 14.5893 21C14.5893 22.2427 13.558 23.25 12.2857 23.25Z"
            fill="#06112E"
          />
        </svg>

        <div className="text-center">
          <p>أجمالي المتاجر</p>
          <h3 className="mt-4">500</h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 border-l border-[#696C76]">
        <div className="text-center">
          <p>منتظر المراجعه</p>
          <h3 className="mt-4">500</h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 border-l border-[#696C76]">
        <div className="text-center">
          <p>المتاجر النشط</p>
          <h3 className="mt-4">500</h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 border-l border-[#696C76]">
        <div className="text-center">
          <p>عدد منتجات الأجمالي</p>
          <h3 className="mt-4">500</h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="text-center">
          <p>الأرباح الاجماليه</p>
          <h3 className="mt-4">$500</h3>
        </div>
      </div>
    </div>
  );
};

export default StoresInfoBar;
