"use client";
import Table from "./Table";
import ReactPaginate from "react-paginate";

const TableWithPagination = () => {
  const handlePageClick = (event: any) => {
    console.log(event);
  };

  return (
    <div>
      <Table />
      <div className="mt-10">
        <ReactPaginate
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={0}
          marginPagesDisplayed={0}
          pageCount={10}
          previousLabel="Back"
          containerClassName="flex items-center"
          previousClassName="bg-black text-white w-16 h-10 flex justify-center items-center rounded-r-lg"
          nextClassName="bg-black text-white w-16 h-10 flex justify-center items-center rounded-l-lg"
          activeClassName="bg-[rgba(2,121,222,0.90)] text-white w-10 h-10 flex justify-center items-center"
        />
      </div>
    </div>
  );
};

export default TableWithPagination;
