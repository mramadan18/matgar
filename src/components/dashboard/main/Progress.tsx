import Link from "next/link";

const Progress = () => {
  return (
    <div className="progress-count flex w-full justify-between items-center gap-6 border rounded-md p-6 mb-12">
      <div className="rounded-full bg-primary text-white p-3">
        <h3>6/4</h3>
      </div>
      <div>
        <h1 className="text-xl font-normal pb-4">
          متبقي لك خطوات بسيطة لتدشين متجرك وبدء رحلتك في التجارة مع متجر
        </h1>
        <div className="w-full bg-[#E9E9E9] h-2 rounded-xl overflow-hidden flex justify-start">
          <div className="w-3/4 bg-primary h-full"></div>
        </div>
      </div>
      <div>
        <Link href="/register" className="btn btn--primary">
          <span> تدشين المتجر </span>
        </Link>
      </div>
    </div>
  );
};

export default Progress;
