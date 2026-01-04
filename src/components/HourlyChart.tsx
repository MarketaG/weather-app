import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./HourlyChart.scss";
import type { HourlyTemperaturePoint } from "../types/weather";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  ChartDataLabels
);

type HourlyChartProps = {
  data: Record<string, HourlyTemperaturePoint[]>;
};

export function HourlyChart({ data }: HourlyChartProps) {
  const days = Object.keys(data);
  if (days.length === 0) return null;

  const dayData = data[days[0]];

  const chartData: ChartData<"line", number[], string> = {
    labels: dayData.map((p) => p.time),
    datasets: [
      {
        data: dayData.map((p) => p.temp),
        borderColor: "#eb6e4b",
        borderWidth: 1,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "#eb6e4b",
        fill: false,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 50,
      },
    },
    plugins: {
      datalabels: {
        align: "top" as const,
        anchor: "end" as const,
        offset: 6,
        formatter: (value) => `${Math.round(value as number)}°`,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        border: { display: false },
        grid: { display: false },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="hourly-chart__inner">
      <div style={{ width: "100%", height: "100%" }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
