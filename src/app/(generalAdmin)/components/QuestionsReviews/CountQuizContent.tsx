import FormAddQuestion from "./FormAddQuestion";
import Question from "./Question";

const CountQuizContent = () => {
  return (
    <>
      <div className="mt-20">
        <Question title="عنوان السؤال" />
      </div>
      <div className="mt-6">
        <FormAddQuestion />
      </div>
      <div className="mt-20">
        <Question title="عنوان السؤال" />
      </div>
      <div className="mt-20">
        <Question title="عنوان السؤال" />
      </div>
    </>
  );
};

export default CountQuizContent;
