import AreaChart from "../../Utilities/Charts/AreaChart";

const UserStatistics = () => {
  const info = [
    { x: "Text", y: 20 },
    { x: "Text", y: 80 },
    { x: "Text", y: 58 },
    { x: "Text", y: 98 },
    { x: "Text", y: 100 },
  ];

  return (
    <div className="container mt-14">
      <h4 className="mr-10 mb-10 text-lg font-light">أحصائيات المستخدمين</h4>
      <AreaChart info={info} fill={false} tension={0.3} min={20} max={120} />
    </div>
  );
};

export default UserStatistics;
