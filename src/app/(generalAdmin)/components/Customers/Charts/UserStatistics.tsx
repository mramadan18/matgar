import AreaChart from "../../Utilities/Charts/AreaChart";

const UserStatistics = () => {
  const info = [
    { x: "Text", y: 20 },
    { x: "Text", y: 80 },
    { x: "Text", y: 58 },
    { x: "Text", y: 98 },
    { x: "Text", y: 100 },
  ];
  const info2 = [
    { x: "Monday", y: 15 },
    { x: "Tuesday", y: 30 },
    { x: "Wednesday", y: 50 },
    { x: "Thursday", y: 72 },
    { x: "Friday", y: 20 },
    { x: "Saturday", y: 45 },
    { x: "Sunday", y: 60 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10">
      <div>
        <AreaChart info={info} fill={false} tension={0.3} min={20} max={120} />
      </div>
      <div>
        <AreaChart info={info2} fill tension={0} min={0} max={100} />
      </div>
    </div>
  );
};

export default UserStatistics;
