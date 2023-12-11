import ContentQuizReviewsPage from "../../components/QuestionsReviews/ContentQuizReviewsPage";
import Breadcrumb from "../../components/Utilities/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "../../components/Utilities/Breadcrumb/BreadcrumbItem";

const page = () => {
  return (
    <div className="container my-10">
      <Breadcrumb>
        <BreadcrumbItem link="/admin" title="الرئيسية" separator="/" />
        <BreadcrumbItem
          link="/admin/questions-reviews"
          title="الاسئلة والتقيمات"
        />
      </Breadcrumb>

      <ContentQuizReviewsPage />
    </div>
  );
};

export default page;
