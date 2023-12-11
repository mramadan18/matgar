"use client";
import ChooseContent from "./ChooseContent";
import count_rating from "#/admin_images/icons/count_rating.svg";
import { useState } from "react";
import Question from "./Question";
import FormAddQuestion from "./FormAddQuestion";
import CountQuizContent from "./CountQuizContent";
import ReviewsList from "./ReviewsList";

const ContentQuizReviewsPage = () => {
  const [showRating, setShowRating] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div>
      <div className="mt-20 flex flex-col sm:flex-row justify-between items-center gap-4">
        <ChooseContent
          image={count_rating}
          count="300"
          title="عدد التقييمات"
          rating
          active={showRating}
          handleClick={() => {
            setShowRating(true);
            setShowQuiz(false);
          }}
        />
        <ChooseContent
          image={count_rating}
          count="300"
          title="عدد الاسئلة"
          active={showQuiz}
          handleClick={() => {
            setShowQuiz(true);
            setShowRating(false);
          }}
        />
      </div>
      {showQuiz && <CountQuizContent />}
      {showRating && <ReviewsList />}
    </div>
  );
};

export default ContentQuizReviewsPage;
