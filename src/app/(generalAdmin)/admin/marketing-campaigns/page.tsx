import InfoBar from "../../components/Home/InfoBar/InfoBar";
import TableMarketingCampaigns from "../../components/MarketingCampaigns/TableMarketingCampaigns";
import LineChart from "../../components/Utilities/Charts/LineChart";
import Filter from "../../components/Utilities/Filter/Filter";
import SearchInput from "../../components/Utilities/SearchInput/SearchInput";

const page = () => {
  const info = [
    { x: 0, y: 0 },
    { x: 1, y: 600 },
    { x: 2, y: 170 },
    { x: 3, y: 240 },
    { x: 4, y: 100 },
    { x: 5, y: 245 },
    { x: 6, y: 650 },
    { x: 7, y: 670 },
    { x: 8, y: 900 },
    { x: 9, y: 750 },
  ];

  const info2 = [
    { x: 0, y: 375 },
    { x: 1, y: 700 },
    { x: 2, y: 550 },
    { x: 3, y: 236 },
    { x: 4, y: 0 },
    { x: 5, y: 125 },
    { x: 6, y: 760 },
    { x: 7, y: 475 },
    { x: 8, y: 880 },
    { x: 9, y: 750 },
  ];

  return (
    <div className="my-10">
      <div className="container">
        <h4 className="font-medium">الحملات التسويقية</h4>
      </div>
      <div className="mt-10">
        <InfoBar />
      </div>
      <div className="container mt-10">
        <LineChart
          info={info}
          info2={info2}
          fill={false}
          tension={0}
          min={0}
          max={1000}
        />

        <div className="mt-10">
          <SearchInput placeholder="ابحث عن فاتورة" />
        </div>
        <div className="mt-10">
          <Filter />
        </div>

        <div className="mt-56">
          <TableMarketingCampaigns />
        </div>
      </div>
    </div>
  );
};

export default page;
