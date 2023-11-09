import Link from "next/link";

const Progress = () => {
  return (
    <div className="progress-count flex w-full justify-between items-center gap-6 border rounded-md p-6 mb-12">
      <div className="rounded-full bg-primary text-white p-4">
        <h2>6/4</h2>
      </div>
      <div>
        <h1 className="text-xl font-normal pb-4">
          متبقي لك خطوات بسيطة لتدشين متجرك وبدء رحلتك في التجارة مع متجر
        </h1>
        <div className="w-full bg-primary h-2 rounded-xl overflow-hidden flex justify-start">
          <div className="w-[70%] bg-primary h-full"></div>
        </div>
      </div>
      <div>
        <Link
          href="https://s.salla.sa/register"
          target="_blank"
          aria-label="أنشئ متجرك مجاناً"
          className="btn btn--primary anime-item opacity-0"
          rel="nofollow noopener"
          style={{ opacity: 1, transform: "translateY(0px)" }}
        >
          <span> تدشين المتجر </span>
        </Link>
      </div>
    </div>
  );
};

export default Progress;
