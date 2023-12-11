const FormAddQuestion = () => {
  return (
    <div className="p-8 bg-admin_bg">
      <textarea
        rows={6}
        className="p-4 bg-white w-full"
        placeholder="كتابه الأجابه"
      ></textarea>

      <button className="bg-primary-900 py-4 px-6 text-white rounded-lg mt-20">
        نشر الأجابه
      </button>
    </div>
  );
};

export default FormAddQuestion;
