"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Users, CheckCircle, UserCog, UserX } from "lucide-react";
// import React from "react";
import { BarChart, Bar, XAxis, Rectangle } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Sample data for the chart
const chartData = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  users: Math.floor(Math.random() * 400000),
  isHighlight: i === 11,
}));

const metrics = [
  {
    title: "All users",
    value: "3,283,550",
    icon: (
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0977 10.5859H15.2383C17.8672 10.5859 20 12.7187 20 15.3477C20 16.4062 19.1406 17.2656 18.082 17.2656H7.25781C6.19922 17.2656 5.33984 16.4062 5.33984 15.3477C5.33984 12.7148 7.46875 10.5859 10.0977 10.5859Z"
          fill="#046EFF"
        />
        <path
          d="M12.668 9.22656C15.013 9.22656 16.9141 7.32552 16.9141 4.98047C16.9141 2.63542 15.013 0.734375 12.668 0.734375C10.3229 0.734375 8.42188 2.63542 8.42188 4.98047C8.42188 7.32552 10.3229 9.22656 12.668 9.22656Z"
          fill="#046EFF"
        />
        <path
          d="M4.76172 10.5859H9.90234C12.5312 10.5859 14.6641 12.7187 14.6641 15.3477C14.6641 16.4062 13.8047 17.2656 12.7461 17.2656H1.91797C0.859375 17.2617 0 16.4062 0 15.3437C0 12.7148 2.13281 10.5859 4.76172 10.5859Z"
          fill="#00347B"
        />
        <path
          d="M7.33203 9.22656C9.67708 9.22656 11.5781 7.32552 11.5781 4.98047C11.5781 2.63542 9.67708 0.734375 7.33203 0.734375C4.98698 0.734375 3.08594 2.63542 3.08594 4.98047C3.08594 7.32552 4.98698 9.22656 7.33203 9.22656Z"
          fill="#00347B"
        />
      </svg>
    ),
    increase: "75%",
    fill: "#EAF4FC",
  },
  {
    title: "Active",
    value: "283,550",
    icon: (
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_38025)">
          <path
            d="M11.25 0C5.20433 0 0.25 4.95433 0.25 11C0.25 17.0457 5.20433 22 11.25 22C17.2957 22 22.25 17.0457 22.25 11C22.25 4.95433 17.2957 0 11.25 0Z"
            fill="#16BC0D"
          />
          <path
            d="M22.25 11C22.25 17.0457 17.2957 22 11.25 22V0C17.2957 0 22.25 4.95433 22.25 11Z"
            fill="#0FA227"
          />
          <path
            d="M4.41412 10.4331L6.2356 8.61179L9.88358 12.2598L16.2644 5.87891L18.0859 7.70021L9.88358 15.9024L4.41412 10.4331Z"
            fill="#E6E6FF"
          />
          <path
            d="M11.25 14.5359L18.0859 7.70021L16.2644 5.87891L11.25 10.8933V14.5359Z"
            fill="#C3C3E5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_38025">
            <rect
              width="22"
              height="22"
              fill="white"
              transform="translate(0.25)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    increase: "75%",
    fill: "#E7F5E2",
  },
  {
    title: "Pending",
    value: "23,550",
    icon: (
      <svg
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5977 10.5859H15.7383C18.3672 10.5859 20.5 12.7187 20.5 15.3477C20.5 16.4062 19.6406 17.2656 18.582 17.2656H7.75781C6.69922 17.2656 5.83984 16.4062 5.83984 15.3477C5.83984 12.7148 7.96875 10.5859 10.5977 10.5859Z"
          fill="#C9A8F2"
        />
        <path
          d="M13.168 9.22656C15.513 9.22656 17.4141 7.32552 17.4141 4.98047C17.4141 2.63542 15.513 0.734375 13.168 0.734375C10.8229 0.734375 8.92188 2.63542 8.92188 4.98047C8.92188 7.32552 10.8229 9.22656 13.168 9.22656Z"
          fill="#C9A8F2"
        />
        <path
          d="M5.26172 10.5859H10.4023C13.0312 10.5859 15.1641 12.7187 15.1641 15.3477C15.1641 16.4062 14.3047 17.2656 13.2461 17.2656H2.41797C1.35937 17.2617 0.5 16.4062 0.5 15.3437C0.5 12.7148 2.63281 10.5859 5.26172 10.5859Z"
          fill="#8B2CDE"
        />
        <path
          d="M7.83203 9.22656C10.1771 9.22656 12.0781 7.32552 12.0781 4.98047C12.0781 2.63542 10.1771 0.734375 7.83203 0.734375C5.48698 0.734375 3.58594 2.63542 3.58594 4.98047C3.58594 7.32552 5.48698 9.22656 7.83203 9.22656Z"
          fill="#8B2CDE"
        />
      </svg>
    ),
    increase: "75%",
    fill: "#EDE7F5",
  },
  {
    title: "Suspended",
    value: "850",
    icon: (
      <svg
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5977 10.5859H15.7383C18.3672 10.5859 20.5 12.7187 20.5 15.3477C20.5 16.4062 19.6406 17.2656 18.582 17.2656H7.75781C6.69922 17.2656 5.83984 16.4062 5.83984 15.3477C5.83984 12.7148 7.96875 10.5859 10.5977 10.5859Z"
          fill="#C9A8F2"
        />
        <path
          d="M13.168 9.22656C15.513 9.22656 17.4141 7.32552 17.4141 4.98047C17.4141 2.63542 15.513 0.734375 13.168 0.734375C10.8229 0.734375 8.92188 2.63542 8.92188 4.98047C8.92188 7.32552 10.8229 9.22656 13.168 9.22656Z"
          fill="#C9A8F2"
        />
        <path
          d="M5.26172 10.5859H10.4023C13.0312 10.5859 15.1641 12.7187 15.1641 15.3477C15.1641 16.4062 14.3047 17.2656 13.2461 17.2656H2.41797C1.35937 17.2617 0.5 16.4062 0.5 15.3437C0.5 12.7148 2.63281 10.5859 5.26172 10.5859Z"
          fill="#8B2CDE"
        />
        <path
          d="M7.83203 9.22656C10.1771 9.22656 12.0781 7.32552 12.0781 4.98047C12.0781 2.63542 10.1771 0.734375 7.83203 0.734375C5.48698 0.734375 3.58594 2.63542 3.58594 4.98047C3.58594 7.32552 5.48698 9.22656 7.83203 9.22656Z"
          fill="#8B2CDE"
        />
      </svg>
    ),
    increase: "75%",
    fill: "#EDE7F5",
  },
];

const chartConfig = {
  users: {
    label: "users",
  },
} satisfies ChartConfig;
export default function User() {
  return (
    <div className=" text-black  p-6">
      {/* Metrics Grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index} className=" p-6">
            <div className="mb-4 flex items-center justify-between">
              <div
                className={`rounded-lg  h-[40px] w-[40px] justify-center flex items-center `}
                style={{ backgroundColor: metric.fill }}
              >
                {metric.icon}
              </div>
              <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-500">
                ↑{metric.increase}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-zinc-500">{metric.title}</div>
              <div className="text-xl font-bold text-black">{metric.value}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Chart Section */}
      <Card className=" p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row">
          <Select defaultValue="user-activity">
            <SelectTrigger className="w-[130px] border-zinc-200 bg-transparent text-sm font-semibold text-[#4C5058]">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent className="border-zinc-800 bg-zinc-900 text-black">
              <SelectItem value="user-activity">User activity</SelectItem>
              <SelectItem value="new-users">New users</SelectItem>
              <SelectItem value="active-users">Active users</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="daily">
            <SelectTrigger className="w-[130px] border-zinc-200 bg-transparent text-sm font-semibold text-[#4C5058]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="border-zinc-800 bg-zinc-900 text-black">
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-[400px] w-full">
          <ChartContainer className="h-full w-full" config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              {/* <CartesianGrid vertical={false} /> */}
              <XAxis
                dataKey="day"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="users"
                strokeWidth={2}
                fill="#EAF4FC"
                radius={[4, 4, 0, 0]}
                activeIndex={2}
                activeBar={({ ...props }) => {
                  return (
                    <Rectangle
                      {...props}
                      fillOpacity={0.8}
                      fill="#314CFF"
                      stroke={props.payload.fill}
                      strokeDasharray={4}
                      strokeDashoffset={4}
                    />
                  );
                }}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </Card>
    </div>
  );
}
