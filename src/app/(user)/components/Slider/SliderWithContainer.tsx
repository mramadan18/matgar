"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const SliderWithContainer = () => {
  return (
    <div className="container mt-8">
      <Swiper className="mySwiper rounded-lg overflow-hidden">
        <SwiperSlide className="bg-[url('https://c4.wallpaperflare.com/wallpaper/184/515/626/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg')] bg-cover bg-center bg-no-repeat bg-black">
          <div className="overlay w-full h-full bg-[rgba(0,0,0,0.30)]">
            <div className="container h-full relative flex items-center">
              <div className="flex justify-between text-white">
                <div>
                  <h1 className="mb-8">تألقي مع منتجات ثيم متجر</h1>
                  <h3>منتجات مختارة بعناية</h3>
                </div>

                <button className="absolute bottom-12 left-4 bg-[#404553] py-2 px-4 text-2xl rounded-full">
                  تسوق الان
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://free4kwallpapers.com/uploads/originals/2020/12/18/autumn-dreams-wallpaper.jpg')] bg-cover bg-center bg-no-repeat bg-black">
          <div className="overlay w-full h-full bg-[rgba(0,0,0,0.30)]">
            <div className="container h-full relative flex items-center">
              <div className="flex justify-between text-white">
                <div>
                  <h1 className="mb-8">تألقي مع منتجات ثيم متجر</h1>
                  <h3>منتجات مختارة بعناية</h3>
                </div>

                <button className="absolute bottom-12 left-4 bg-[#404553] py-2 px-4 text-2xl rounded-full">
                  تسوق الان
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://images.hdqwalls.com/download/gathering-of-the-spirits-4k-r2-1366x768.jpg')] bg-cover bg-center bg-no-repeat bg-black">
          <div className="overlay w-full h-full bg-[rgba(0,0,0,0.30)]">
            <div className="container h-full relative flex items-center">
              <div className="flex justify-between text-white">
                <div>
                  <h1 className="mb-8">تألقي مع منتجات ثيم متجر</h1>
                  <h3>منتجات مختارة بعناية</h3>
                </div>

                <button className="absolute bottom-12 left-4 bg-[#404553] py-2 px-4 text-2xl rounded-full">
                  تسوق الان
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderWithContainer;
