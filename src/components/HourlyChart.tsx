import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import type { HourlyTemperaturePoint } from "../types/weather";

type HourlyChartProps = {
  data: {
    [day: string]: HourlyTemperaturePoint[];
  };
};

export function HourlyChart({ data }: HourlyChartProps) {
  const days = Object.keys(data);
  if (days.length === 0) return null;

  const dayData = data[days[0]];

  return (
    <ResponsiveContainer width="100%" height={160}>
      <LineChart
        data={dayData}
        margin={{ top: 10, right: 10, bottom: 5, left: 40 }}
      >
        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          style={{
            fontSize: "12px",
            fontWeight: 400,
          }}
        />
        <YAxis hide />
        <Tooltip
          formatter={(value) =>
            typeof value === "number" ? `${value}°C` : value
          }
        />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="var(--orange-color)"
          strokeWidth={1}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        >
          <LabelList
            dataKey="temp"
            position="top"
            offset={10}
            formatter={(value) =>
              typeof value === "number" ? `${Math.round(value)}°` : value
            }
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: "var(--font-light)",
              fill: "var(--text-primary)",
            }}
          />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
}
