"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

type Props = {
  info: { x: number; y: number }[];
  info2: { x: number; y: number }[];
  fill: boolean;
  tension: number;
  min: number;
  max: number;
};

const LineChart = ({ info, info2, fill, tension, min, max }: Props) => {
  const data = {
    labels: info.map((data) => data.x),
    datasets: [
      {
        data: info.map((data) => data.y),
        borderColor: "#AA9A92",
        borderWidth: 3,
        pointBorderColor: "#fff",
        pointBorderWidth: 3,
        tension,
        fill,
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 100);
          gradient.addColorStop(1, "rgba(14,156,255,0.3)");
          return gradient;
        },
      },
      {
        data: info2.map((data) => data.y),
        borderColor: "#3C057C",
        borderWidth: 3,
        pointBorderColor: "#fff",
        pointBorderWidth: 3,
        tension,
        fill,
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 100);
          gradient.addColorStop(1, "rgba(14,156,255,0.3)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min,
        max,
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
