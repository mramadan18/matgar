import Link from "next/link";

const Progress = () => {
  return (
    <div className="progress-count flex w-full justify-between items-center border-[1px] rounded-md p-6 mb-12">
      <div className=" rounded-full bg-[#0279DE] text-white p-6">
        <h1>6/4</h1>
      </div>
      <div className=" space-y-5">
        <h1 className="text-[19px]">
          متبقي لك خطوات بسيطة لتدشين متجرك وبدء رحلتك في التجارة مع متجر
        </h1>
        <div className="w-full bg-[#E9E9E9] h-2 rounded-xl overflow-hidden flex justify-start">
          <div className="w-[70%] bg-[#0279DE] h-full"></div>
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
