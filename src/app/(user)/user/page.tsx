import Banner from "../components/Banner";
import BannerWithContainer from "../components/Banner/BannerWithContainer";
import Slider from "../components/Slider";
import SliderWithContainer from "../components/Slider/SliderWithContainer";
import VideoYoutube from "../components/VideoYoutube";
import VideoYoutubeWithContainer from "../components/VideoYoutube/VideoYoutubeWithContainer";

const page = () => {
  return (
    <main>
      <Slider />
      <SliderWithContainer />
      <Banner />
      <BannerWithContainer />
      <VideoYoutube />
      <VideoYoutubeWithContainer />
    </main>
  );
};

export default page;
