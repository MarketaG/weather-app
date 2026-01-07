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
  dayData: HourlyTemperaturePoint[];
};

/**
 * HOURLY CHART
 * Displays 3-hour temperature forecast for a selected day
 */
export function HourlyChart({ dayData }: HourlyChartProps) {
  const firstHour = dayData[0]?.dt_txt.slice(11, 16); // "18:00"

  const chartData: ChartData<"line", number[], string> = {
    labels: dayData.map((p) => {
      // "2026-01-06 09:00:00" → "09:00"
      return p.dt_txt.slice(11, 16);
    }),

    datasets: [
      {
        data: dayData.map((p) => p.main.temp),
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
      {firstHour && firstHour !== "00:00" && (
        <div className="hourly-chart__notice">
          Forecast available from {firstHour}
        </div>
      )}

      <div style={{ width: "100%", height: "100%" }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
