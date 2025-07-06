"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, BarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", Product: 222, custamar: 150 },
  { date: "2024-04-02", Product: 97, custamar: 180 },
  { date: "2024-04-03", Product: 167, custamar: 120 },
  { date: "2024-04-04", Product: 242, custamar: 260 },
  { date: "2024-04-05", Product: 373, custamar: 290 },
  { date: "2024-04-06", Product: 301, custamar: 340 },
  { date: "2024-04-07", Product: 245, custamar: 180 },
  { date: "2024-04-08", Product: 409, custamar: 320 },
  { date: "2024-04-09", Product: 59, custamar: 110 },
  { date: "2024-04-10", Product: 261, custamar: 190 },
  { date: "2024-04-11", Product: 327, custamar: 350 },
  { date: "2024-04-12", Product: 292, custamar: 210 },
  { date: "2024-04-13", Product: 342, custamar: 380 },
  { date: "2024-04-14", Product: 137, custamar: 220 },
  { date: "2024-04-15", Product: 120, custamar: 170 },
  { date: "2024-04-16", Product: 138, custamar: 190 },
  { date: "2024-04-17", Product: 446, custamar: 360 },
  { date: "2024-04-18", Product: 364, custamar: 410 },
  { date: "2024-04-19", Product: 243, custamar: 180 },
  { date: "2024-04-20", Product: 89, custamar: 150 },
  { date: "2024-04-21", Product: 137, custamar: 200 },
  { date: "2024-04-22", Product: 224, custamar: 170 },
  { date: "2024-04-23", Product: 138, custamar: 230 },
  { date: "2024-04-24", Product: 387, custamar: 290 },
  { date: "2024-04-25", Product: 215, custamar: 250 },
  { date: "2024-04-26", Product: 75, custamar: 130 },
  { date: "2024-04-27", Product: 383, custamar: 420 },
  { date: "2024-04-28", Product: 122, custamar: 180 },
  { date: "2024-04-29", Product: 315, custamar: 240 },
  { date: "2024-04-30", Product: 454, custamar: 380 },
  { date: "2024-05-01", Product: 165, custamar: 220 },
  { date: "2024-05-02", Product: 293, custamar: 310 },
  { date: "2024-05-03", Product: 247, custamar: 190 },
  { date: "2024-05-04", Product: 385, custamar: 420 },
  { date: "2024-05-05", Product: 481, custamar: 390 },
  { date: "2024-05-06", Product: 498, custamar: 520 },
  { date: "2024-05-07", Product: 388, custamar: 300 },
  { date: "2024-05-08", Product: 149, custamar: 210 },
  { date: "2024-05-09", Product: 227, custamar: 180 },
  { date: "2024-05-10", Product: 293, custamar: 330 },
  { date: "2024-05-11", Product: 335, custamar: 270 },
  { date: "2024-05-12", Product: 197, custamar: 240 },
  { date: "2024-05-13", Product: 197, custamar: 160 },
  { date: "2024-05-14", Product: 448, custamar: 490 },
  { date: "2024-05-15", Product: 473, custamar: 380 },
  { date: "2024-05-16", Product: 338, custamar: 400 },
  { date: "2024-05-17", Product: 499, custamar: 420 },
  { date: "2024-05-18", Product: 315, custamar: 350 },
  { date: "2024-05-19", Product: 235, custamar: 180 },
  { date: "2024-05-20", Product: 177, custamar: 230 },
  { date: "2024-05-21", Product: 82, custamar: 140 },
  { date: "2024-05-22", Product: 81, custamar: 120 },
  { date: "2024-05-23", Product: 252, custamar: 290 },
  { date: "2024-05-24", Product: 294, custamar: 220 },
  { date: "2024-05-25", Product: 201, custamar: 250 },
  { date: "2024-05-26", Product: 213, custamar: 170 },
  { date: "2024-05-27", Product: 420, custamar: 460 },
  { date: "2024-05-28", Product: 233, custamar: 190 },
  { date: "2024-05-29", Product: 78, custamar: 130 },
  { date: "2024-05-30", Product: 340, custamar: 280 },
  { date: "2024-05-31", Product: 178, custamar: 230 },
  { date: "2024-06-01", Product: 178, custamar: 200 },
  { date: "2024-06-02", Product: 470, custamar: 410 },
  { date: "2024-06-03", Product: 103, custamar: 160 },
  { date: "2024-06-04", Product: 439, custamar: 380 },
  { date: "2024-06-05", Product: 88, custamar: 140 },
  { date: "2024-06-06", Product: 294, custamar: 250 },
  { date: "2024-06-07", Product: 323, custamar: 370 },
  { date: "2024-06-08", Product: 385, custamar: 320 },
  { date: "2024-06-09", Product: 438, custamar: 480 },
  { date: "2024-06-10", Product: 155, custamar: 200 },
  { date: "2024-06-11", Product: 92, custamar: 150 },
  { date: "2024-06-12", Product: 492, custamar: 420 },
  { date: "2024-06-13", Product: 81, custamar: 130 },
  { date: "2024-06-14", Product: 426, custamar: 380 },
  { date: "2024-06-15", Product: 307, custamar: 350 },
  { date: "2024-06-16", Product: 371, custamar: 310 },
  { date: "2024-06-17", Product: 475, custamar: 520 },
  { date: "2024-06-18", Product: 107, custamar: 170 },
  { date: "2024-06-19", Product: 341, custamar: 290 },
  { date: "2024-06-20", Product: 408, custamar: 450 },
  { date: "2024-06-21", Product: 169, custamar: 210 },
  { date: "2024-06-22", Product: 317, custamar: 270 },
  { date: "2024-06-23", Product: 480, custamar: 530 },
  { date: "2024-06-24", Product: 132, custamar: 180 },
  { date: "2024-06-25", Product: 141, custamar: 190 },
  { date: "2024-06-26", Product: 434, custamar: 380 },
  { date: "2024-06-27", Product: 448, custamar: 490 },
  { date: "2024-06-28", Product: 149, custamar: 200 },
  { date: "2024-06-29", Product: 103, custamar: 160 },
  { date: "2024-06-30", Product: 446, custamar: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Product: {
    label: "Product",
    color: "oklch(0.80 0.18 152)",
  },
  custamar: {
    label: "custamar",
    color: "oklch(0.64 0.21 25)",
  },
};

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0 w-full dark:bg-gray-800">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart - Products and Cusetamer is Ordors</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillProduct" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Product)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Product)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillcustamar" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-custamar)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-custamar)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="custamar"
              type="natural"
              fill="url(#fillcustamar)"
              stroke="var(--color-custamar)"
              stackId="a"
            />
            <Area
              dataKey="Product"
              type="natural"
              fill="url(#fillProduct)"
              stroke="var(--color-Product)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
