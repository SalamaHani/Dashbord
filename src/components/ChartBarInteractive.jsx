"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
  { date: "2024-04-01", product: 222, custamar: 150 },
  { date: "2024-04-02", product: 97, custamar: 180 },
  { date: "2024-04-03", product: 167, custamar: 120 },
  { date: "2024-04-04", product: 242, custamar: 260 },
  { date: "2024-04-05", product: 373, custamar: 290 },
  { date: "2024-04-06", product: 301, custamar: 340 },
  { date: "2024-04-07", product: 245, custamar: 180 },
  { date: "2024-04-08", product: 409, custamar: 320 },
  { date: "2024-04-09", product: 59, custamar: 110 },
  { date: "2024-04-10", product: 261, custamar: 190 },
  { date: "2024-04-11", product: 327, custamar: 350 },
  { date: "2024-04-12", product: 292, custamar: 210 },
  { date: "2024-04-13", product: 342, custamar: 380 },
  { date: "2024-04-14", product: 137, custamar: 220 },
  { date: "2024-04-15", product: 120, custamar: 170 },
  { date: "2024-04-16", product: 138, custamar: 190 },
  { date: "2024-04-17", product: 446, custamar: 360 },
  { date: "2024-04-18", product: 364, custamar: 410 },
  { date: "2024-04-19", product: 243, custamar: 180 },
  { date: "2024-04-20", product: 89, custamar: 150 },
  { date: "2024-04-21", product: 137, custamar: 200 },
  { date: "2024-04-22", product: 224, custamar: 170 },
  { date: "2024-04-23", product: 138, custamar: 230 },
  { date: "2024-04-24", product: 387, custamar: 290 },
  { date: "2024-04-25", product: 215, custamar: 250 },
  { date: "2024-04-26", product: 75, custamar: 130 },
  { date: "2024-04-27", product: 383, custamar: 420 },
  { date: "2024-04-28", product: 122, custamar: 180 },
  { date: "2024-04-29", product: 315, custamar: 240 },
  { date: "2024-04-30", product: 454, custamar: 380 },
  { date: "2024-05-01", product: 165, custamar: 220 },
  { date: "2024-05-02", product: 293, custamar: 310 },
  { date: "2024-05-03", product: 247, custamar: 190 },
  { date: "2024-05-04", product: 385, custamar: 420 },
  { date: "2024-05-05", product: 481, custamar: 390 },
  { date: "2024-05-06", product: 498, custamar: 520 },
  { date: "2024-05-07", product: 388, custamar: 300 },
  { date: "2024-05-08", product: 149, custamar: 210 },
  { date: "2024-05-09", product: 227, custamar: 180 },
  { date: "2024-05-10", product: 293, custamar: 330 },
  { date: "2024-05-11", product: 335, custamar: 270 },
  { date: "2024-05-12", product: 197, custamar: 240 },
  { date: "2024-05-13", product: 197, custamar: 160 },
  { date: "2024-05-14", product: 448, custamar: 490 },
  { date: "2024-05-15", product: 473, custamar: 380 },
  { date: "2024-05-16", product: 338, custamar: 400 },
  { date: "2024-05-17", product: 499, custamar: 420 },
  { date: "2024-05-18", product: 315, custamar: 350 },
  { date: "2024-05-19", product: 235, custamar: 180 },
  { date: "2024-05-20", product: 177, custamar: 230 },
  { date: "2024-05-21", product: 82, custamar: 140 },
  { date: "2024-05-22", product: 81, custamar: 120 },
  { date: "2024-05-23", product: 252, custamar: 290 },
  { date: "2024-05-24", product: 294, custamar: 220 },
  { date: "2024-05-25", product: 201, custamar: 250 },
  { date: "2024-05-26", product: 213, custamar: 170 },
  { date: "2024-05-27", product: 420, custamar: 460 },
  { date: "2024-05-28", product: 233, custamar: 190 },
  { date: "2024-05-29", product: 78, custamar: 130 },
  { date: "2024-05-30", product: 340, custamar: 280 },
  { date: "2024-05-31", product: 178, custamar: 230 },
  { date: "2024-06-01", product: 178, custamar: 200 },
  { date: "2024-06-02", product: 470, custamar: 410 },
  { date: "2024-06-03", product: 103, custamar: 160 },
  { date: "2024-06-04", product: 439, custamar: 380 },
  { date: "2024-06-05", product: 88, custamar: 140 },
  { date: "2024-06-06", product: 294, custamar: 250 },
  { date: "2024-06-07", product: 323, custamar: 370 },
  { date: "2024-06-08", product: 385, custamar: 320 },
  { date: "2024-06-09", product: 438, custamar: 480 },
  { date: "2024-06-10", product: 155, custamar: 200 },
  { date: "2024-06-11", product: 92, custamar: 150 },
  { date: "2024-06-12", product: 492, custamar: 420 },
  { date: "2024-06-13", product: 81, custamar: 130 },
  { date: "2024-06-14", product: 426, custamar: 380 },
  { date: "2024-06-15", product: 307, custamar: 350 },
  { date: "2024-06-16", product: 371, custamar: 310 },
  { date: "2024-06-17", product: 475, custamar: 520 },
  { date: "2024-06-18", product: 107, custamar: 170 },
  { date: "2024-06-19", product: 341, custamar: 290 },
  { date: "2024-06-20", product: 408, custamar: 450 },
  { date: "2024-06-21", product: 169, custamar: 210 },
  { date: "2024-06-22", product: 317, custamar: 270 },
  { date: "2024-06-23", product: 480, custamar: 530 },
  { date: "2024-06-24", product: 132, custamar: 180 },
  { date: "2024-06-25", product: 141, custamar: 190 },
  { date: "2024-06-26", product: 434, custamar: 380 },
  { date: "2024-06-27", product: 448, custamar: 490 },
  { date: "2024-06-28", product: 149, custamar: 200 },
  { date: "2024-06-29", product: 103, custamar: 160 },
  { date: "2024-06-30", product: 446, custamar: 400 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  product: {
    label: "product",
    color: "oklch(0.80 0.18 152)",
  },
  custamar: {
    label: "custamar",
    color: "oklch(0.64 0.21 25)",
  },
};

export function ChartBarInteractive() {
  const [activeChart, setActiveChart] = React.useState("product");

  const total = React.useMemo(
    () => ({
      product: chartData.reduce((acc, curr) => acc + curr.product, 0),
      custamar: chartData.reduce((acc, curr) => acc + curr.custamar, 0),
    }),
    []
  );

  return (
    <Card className="py-0 dark:bg-gray-800">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
          <CardTitle>Bar Chart - Products and Cusetamer is Ordors</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["product", "custamar"].map((key) => {
            const chart = key;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 dark:data-[active=true]:bg-gray-600  relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
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
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
