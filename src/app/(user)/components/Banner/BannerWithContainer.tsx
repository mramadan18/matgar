import Link from "next/link";

const BannerWithContainer = () => {
  return (
    <div className="relative mt-8 container">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/440/217/250/skull-and-bones-2018-video-game-wallpaper-thumb.jpg"
        alt="BannerWithContainer"
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

export default BannerWithContainer;
