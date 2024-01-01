import { CiHeart } from "react-icons/ci";

const ProductCard = ({ product }: any) => {
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="!object-contain mx-auto"
          src={product.image}
          alt="product image"
        />
      </a>
      <button className="absolute top-4 left-4 w-8 h-8 bg-white shadow-md flex justify-center items-center text-2xl rounded-full z-10">
        <CiHeart />
      </button>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-lg tracking-tight text-slate-900 h-7 overflow-hidden">
            {product.title.length <= 35
              ? product.title
              : `${product.title.slice(0, 35)}...`}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-red-600 block">
              {product.price} ليرة
            </span>
            <span className="text-sm text-slate-900 line-through">
              299 ليرة
            </span>
          </p>
        </div>
        <button className="rounded-lg w-full hover:bg-slate-900 px-5 py-2.5 text-center text-sm font-medium hover:text-white border-2 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg> */}
          إضافة للسلة
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
