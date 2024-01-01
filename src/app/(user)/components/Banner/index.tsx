import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative mt-8">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/681/554/339/abstract-planet-space-purple-wallpaper-thumb.jpg"
        alt="Banner"
        className="w-full max-h-[600px]"
      />
      <Link
        href={"/user"}
        className="bg-white py-3 px-10 rounded-sm absolute bottom-4 left-1/2 -translate-x-1/2 text-lg font-bold"
      >
        تسوق الأن
      </Link>
    </div>
  );
};

export default Banner;
