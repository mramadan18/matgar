import Pagination from "../Utilities/Pagination/Pagination";
import Question from "./Question";

const ReviewsList = () => {
  return (
    <div className="mt-20">
      <div className="mt-8">
        <Question rating />
      </div>
      <div className="mt-8">
        <Question rating />
      </div>
      <div className="mt-8">
        <Question rating />
      </div>
      <div className="mt-8">
        <Question rating />
      </div>

      <div className="mt-8">
        <Pagination />
      </div>
    </div>
  );
};

export default ReviewsList;
