"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, ResponsiveContainer, LineChart, Line } from "recharts";
import { RadialChart } from "@/Global/RadialChart";
import { Eye, MoreVertical } from "lucide-react";

// Sample data for the charts
const dailyData = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  amount: Math.random() * 400000,
  isHighlight: i === 12,
}));

const verificationData = Array.from({ length: 20 }, () => ({
  value: Math.random() * 100,
}));

export default function DashboardHome() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6 ">
        <div className="w-full  h-[400px] gap-8 grid grid-cols-12">
          <div className="space-y-6 col-span-12  lg:col-span-8 ">
            {/* Stats Grid */}
            <div className="grid  pr-4    border  gap-y-6 lg:gap-y-0  w-full sm:grid-cols-6 lg:grid-cols-12">
              <div className="flex  border-r shadow-none col-span-12 lg:col-span-4 flex-col">
                <Card className=" rounded-tr-xl bg-[#E0E2E780] shadow-none  border-b border-t-0 border-x-0   h-1/3 hover:text-white hover:bg-[#314CFF] rounded-none  p-4 ">
                  <div className="mb-4   flex items-center justify-between">
                    <div className="text-sm font-semibold">Reserve</div>
                    <div className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs">
                      <span className="  text-emerald-400">↑</span>75%
                    </div>
                  </div>
                  <div className="text-xl font-semibold">₦53,343,850.00</div>
                </Card>
                <Card className="p-6 shadow-none bg-[#E0E2E780] border-b border-t-0 border-x-0   h-1/3 hover:text-white hover:bg-[#314CFF]  rounded-none ">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-sm font-semibold">Revenue</div>
                    <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-500">
                      ↑75%
                    </div>
                  </div>
                  <div className="text-xl font-semibold">₦6,343,850.00</div>
                </Card>
                <Card className="p-6 shadow-none bg-[#E0E2E780]  h-1/3 border-none hover:text-white hover:bg-[#314CFF] rounded-none">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-sm font-semibold">Users</div>
                    <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-500">
                      ↑75%
                    </div>
                  </div>
                  <div className="text-xl font-semibold">43,850</div>
                </Card>
              </div>
              <Card className=" border-none flex flex-col gap-4 rounded-none p-3 shadow-none  col-span-8">
                <div className=" flex items-center justify-between">
                  <Select defaultValue="all-revenue">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select revenue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-revenue">All Revenue</SelectItem>
                      <SelectItem value="monthly">Monthly Revenue</SelectItem>
                      <SelectItem value="daily">Daily Revenue</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="this-month">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="this-month">This month</SelectItem>
                      <SelectItem value="last-month">Last month</SelectItem>
                      <SelectItem value="last-3-months">
                        Last 3 months
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="h-[300px]  w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyData}>
                      <Bar
                        dataKey="amount"
                        fill="#EAF4FC"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Chart Section */}

            {/* Verification Cards */}
          </div>
          <Card className="p-6   flex-col col-span-12   lg:col-span-4 ">
            <div className="mb-6">
              <div className="mb-1 flex items-center justify-start gap-2">
                <div className="text-sm text-[#4C5058] font-semibold ">
                  Transactions
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  35,786
                </div>
                <div className="flex items-center gap-3 font-semibold rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-500">
                  ↑75%
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-xl font-semibold">₦12,343,850.00</div>
              </div>
            </div>
            <div className="relative h-[180px]  w-full flex items-center  mx-auto">
              <div className="absolute w-full inset-0 flex items-center justify-center">
                <RadialChart />
              </div>
            </div>
            <div className=" grid grid-cols-2 bg-[#EFF4F8] p-4 rounded-lg gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#314CFF]" />
                  <div className="text-sm">Inflow</div>
                  <div className="ml-auto text-xs text-emerald-500">↑75%</div>
                </div>
                <div className="mt-1 text-lg font-semibold">₦7,343,850.00</div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gray-900" />
                  <div className="text-sm">Outflow</div>
                  <div className="ml-auto text-xs text-emerald-500">↑75%</div>
                </div>
                <div className="mt-1 text-lg font-semibold">₦7,343,850.00</div>
              </div>
            </div>
          </Card>
        </div>
        <div className=" h-[400px] grid grid-cols-12 gap-12  w-full">
          <div className=" h-[400px] flex flex-col gap-4   col-span-12   lg:col-span-4  md:grid-cols-2">
            <Card className="h-1/2 gap-3 flex flex-col justify-center  p-4">
              <div className=" w-full flex items-center justify-between">
                <h3 className="font-semibold">Pending Verification</h3>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 ">
                  <div className="text-xl font-semibold">12,000 Users</div>
                </div>
              </div>
              <div className=" flex  justify-between  w-full">
                <div className="flex  items-center gap-2 text-emerald-500">
                  <span>↑</span>
                  <span>40%</span>
                  <span className="text-gray-600">vs last month</span>
                </div>
                <ResponsiveContainer width="30%" height="80%">
                  <LineChart data={verificationData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#22C55E"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card className="h-1/2 gap-3 flex flex-col justify-center  p-4">
              <div className=" w-full flex items-center justify-between">
                <h3 className="font-semibold">Pending Verification</h3>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 ">
                  <div className="text-xl font-semibold">12,000 Users</div>
                </div>
              </div>
              <div className=" flex  justify-between  w-full">
                <div className="flex  items-center gap-2 text-emerald-500">
                  <span>↑</span>
                  <span>40%</span>
                  <span className="text-gray-600">vs last month</span>
                </div>
                <ResponsiveContainer width="30%" height="80%">
                  <LineChart data={verificationData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#22C55E"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
          <Card className="p-6 h-[400px] col-span-12  lg:col-span-4">
            <div className="flex flex-col h-full">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-semibold">TRENDING ITEMS</h3>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4 overflow-y-auto">
                {[
                  { provider: "9mobile", price: "343,850.00", views: "23,560" },
                  { provider: "glo", price: "343,850.00", views: "23,560" },
                  { provider: "airtel", price: "343,850.00", views: "23,560" },
                  { provider: "mtn", price: "343,850.00", views: "23,560" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white">
                        <img
                          src={`/placeholder.svg?height=40&width=40`}
                          alt={item.provider}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-medium">
                          2.5GB all time + 4GB night
                        </div>
                        <div className="text-sm text-gray-600">
                          ₦{item.price}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Eye className="h-4 w-4" />
                      {item.views}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card className="p-6 h-[400px]  overflow-y-scroll col-span-12   lg:col-span-4 ">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-semibold">Report Summary</h3>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-6">
              {[
                { label: "Successful payments", value: "25,896" },
                { label: "New customers", value: "25,896" },
                { label: "Repeat transactions", value: "25,896" },
              ].map((item, i) => (
                <div key={i} className="flex items-center  h-full ">
                  <div className="text-base flex flex-col ">
                    <p className="text-sm">{item.label}</p>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">{item.value}</div>
                      <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-500">
                        ↑75%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
