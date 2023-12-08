import AreaChart from "../../Utilities/Charts/AreaChart";

const TotalProfits = () => {
  const info = [
    { x: "Monday", y: 15 },
    { x: "Tuesday", y: 30 },
    { x: "Wednesday", y: 50 },
    { x: "Thursday", y: 72 },
    { x: "Friday", y: 20 },
    { x: "Saturday", y: 45 },
    { x: "Sunday", y: 60 },
  ];

  return (
    <div>
      <h4 className="mr-10 mb-10 text-lg font-light">الأرباح الاجماليه</h4>
      <AreaChart info={info} fill tension={0} min={0} max={100} />
    </div>
  );
};

export default TotalProfits;
