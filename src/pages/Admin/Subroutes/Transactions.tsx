"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2, BadgeCheck, Clock, XCircle } from "lucide-react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

// Sample data for the chart
const dailyData = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  successful: Math.floor(Math.random() * 300000),
  failed: Math.floor(Math.random() * 200000),
}));

const metrics = [
  {
    title: "All transactions",
    value: "3,283,550",
    icon: Building2,
    increase: "75%",
  },
  {
    title: "Successful",
    value: "283,550",
    icon: BadgeCheck,
    increase: "75%",
  },
  {
    title: "Pending",
    value: "23,550",
    icon: Clock,
    increase: "75%",
  },
  {
    title: "Failed",
    value: "850",
    icon: XCircle,
    increase: "75%",
  },
];

export default function Transaction() {
  return (
    <div className="min-h-screen  p-6">
      {/* Metrics Grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index} className=" p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg bg-white/10 p-2">
                <metric.icon className="h-5 w-5 text-black" />
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
          <Select defaultValue="transactions">
            <SelectTrigger className="w-[180px] border-zinc-800 bg-transparent text-black">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent className="b text-black">
              <SelectItem value="transactions">Transactions</SelectItem>
              <SelectItem value="amount">Amount</SelectItem>
              <SelectItem value="users">Users</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="daily">
            <SelectTrigger className="w-[180px] border-zinc-800 bg-transparent text-black">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="b text-black">
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-20 -translate-x-1/2 rounded-full bg-[#6C5DD3] px-4 py-2 text-sm text-black">
            343,850 transactions
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={dailyData}
                margin={{ top: 40, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#71717a" }}
                  padding={{ left: 10, right: 10 }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg p-2 text-sm text-black shadow-lg">
                          <div className="mb-1">
                            Day {payload[0].payload.day}
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-[#6C5DD3]" />
                              <span>
                                Successful: {payload[0].value.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-[#4DAFFF]" />
                              <span>
                                Failed: {payload[1].value.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="successful"
                  fill="#6C5DD3"
                  radius={[4, 4, 0, 0]}
                />
                <Bar dataKey="failed" fill="#4DAFFF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  );
}
