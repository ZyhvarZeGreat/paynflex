"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [{ month: "january", inflow: 1260, outflow: 570 }];

const chartConfig = {
  desktop: {
    label: "Inflow",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Outflow",
    color: "#314CFF",
  },
} satisfies ChartConfig;

export function RadialChart() {
  //   const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto mt-12 h-full aspect-square w-full"
    >
      <RadialBarChart
        data={chartData}
        endAngle={180}
        innerRadius={80}
        outerRadius={130}
        className="w-full"
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="inflow"
          stackId="a"
          //   cornerRadius={5}
          fill="var(--color-desktop)"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="outflow"
          fill="var(--color-mobile)"
          stackId="a"
          //   cornerRadius={5}
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
