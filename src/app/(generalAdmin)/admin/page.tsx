import StoreStatistics from "../components/Home/Charts/StoreStatistics";
import UserStatistics from "../components/Home/Charts/UserStatistics";
import InfoBar from "../components/Home/InfoBar/InfoBar";
import LatestOrders from "../components/Home/LatestOrders/LatestOrders";

const page = () => {
  return (
    <div className="mt-10 md:mt-24">
      <InfoBar />
      <StoreStatistics />
      <UserStatistics />
      <LatestOrders />
    </div>
  );
};

export default page;
