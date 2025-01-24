"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getTransactions } from "@/services/transaction";
import axios from "axios";
// import { Tooltip } from "@radix-ui/react-tooltip";
import { useEffect, useState } from "react";
// import { Building2, BadgeCheck, Clock, XCircle } from "lucide-react";

import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

export default function Transaction() {
  const generateRandomData = (length: number, view: string) => {
    const baseValue = view === "amount" ? 1000000 : 1000; // Higher base value for amount view

    return Array.from({ length }, (_, i) => ({
      day: i + 1,
      successful: Math.floor(baseValue * Math.random() * 1.0), // 100% of base for successful
      pending: Math.floor(baseValue * Math.random() * 0.5), // 50% of base for pending
    }));
  };

  const [transactions, setTransactions] = useState<any>(null);
  const [timeframe, setTimeframe] = useState(31);
  const [selectedView, setSelectedView] = useState("transactions");
  const [chartData, setChartData] = useState(() =>
    generateRandomData(31, "transactions")
  );

  useEffect(() => {
    setChartData(generateRandomData(timeframe, selectedView));
  }, [timeframe, selectedView]);

  const handleViewChange = (value: string) => {
    setSelectedView(value);
  };

  const handleTimeframeChange = (value: string) => {
    console.log("Timeframe Value", value);
    switch (value) {
      case "daily":
        setTimeframe(31); // Last 31 days
        break;
      case "weekly":
        setTimeframe(7); // Last 12 weeks
        break;
      case "monthly":
        setTimeframe(12); // Last 12 months
        break;
      default:
        setTimeframe(31);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(isLoading, error);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setIsLoading(true);
        const response = await getTransactions();
        console.log(response);
        setTransactions(response);
        setError(null);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const axiosError = err;
          if (axiosError.response) {
            setError(
              axiosError.response.data.message || "Failed to fetch transactions"
            );
          } else if (axiosError.request) {
            setError(
              "No response from server. Please check your internet connection."
            );
          }
        } else {
          setError("An unexpected error occurred while fetching transactions");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);
  const metrics = [
    {
      title: "All transactions",
      value: transactions?.totalAmount || 0,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_38245)">
            <path
              d="M18.0025 4.94938L10.3165 0.0916406C10.1232 -0.0305469 9.8768 -0.0305469 9.68356 0.0916406L1.99743 4.94938C1.7745 5.09023 1.67161 5.36152 1.74489 5.6148C1.81821 5.86812 2.05016 6.04242 2.31387 6.04242H17.6861C17.9498 6.04242 18.1817 5.86812 18.255 5.6148C18.3284 5.36152 18.2254 5.09023 18.0025 4.94938Z"
              fill="#8CBCFF"
            />
            <path
              d="M16.6753 6.39648H14.6139C14.2868 6.39648 14.0216 6.66168 14.0216 6.98883V15.6644C14.0216 15.9916 14.2868 16.2568 14.6139 16.2568H16.6753C17.0025 16.2568 17.2677 15.9916 17.2677 15.6644V6.98883C17.2677 6.66168 17.0025 6.39648 16.6753 6.39648Z"
              fill="#8CBCFF"
            />
            <path
              d="M11.0307 6.39648H8.96927C8.64212 6.39648 8.37692 6.66168 8.37692 6.98883V15.6644C8.37692 15.9916 8.64212 16.2568 8.96927 16.2568H11.0307C11.3578 16.2568 11.623 15.9916 11.623 15.6644V6.98883C11.6231 6.66168 11.3579 6.39648 11.0307 6.39648Z"
              fill="#8CBCFF"
            />
            <path
              d="M5.34558 6.39648H3.28418C2.95703 6.39648 2.69183 6.66168 2.69183 6.98883V15.6644C2.69183 15.9916 2.95703 16.2568 3.28418 16.2568H5.34558C5.67273 16.2568 5.93793 15.9916 5.93793 15.6644V6.98883C5.93793 6.66168 5.67269 6.39648 5.34558 6.39648Z"
              fill="#8CBCFF"
            />
            <path
              d="M5.34555 6.39648H4.31485V16.2571H5.34555C5.67254 16.2571 5.9379 15.9917 5.9379 15.6647V6.98883C5.9379 6.66184 5.67251 6.39648 5.34555 6.39648Z"
              fill="#6AA9FF"
            />
            <path
              d="M18.7845 4.85742H1.2155C0.607332 4.85742 0.112488 5.35223 0.112488 5.96043V7.09438C0.112488 7.70254 0.607292 8.19738 1.2155 8.19738H18.7845C19.3927 8.19738 19.8876 7.70258 19.8876 7.09438V5.96043C19.8875 5.35219 19.3927 4.85742 18.7845 4.85742Z"
              fill="#2682FF"
            />
            <path
              d="M17.6861 14.5039H2.31384C1.98669 14.5039 1.7215 14.7691 1.7215 15.0963V17.2515C1.7215 17.5787 1.98669 17.8439 2.31384 17.8439H17.686C18.0132 17.8439 18.2784 17.5787 18.2784 17.2515V15.0963C18.2784 14.7691 18.0132 14.5039 17.6861 14.5039Z"
              fill="#2682FF"
            />
            <path
              d="M19.2952 16.6602H0.704801C0.377653 16.6602 0.112457 16.9254 0.112457 17.2525V19.4078C0.112457 19.7349 0.377653 20.0001 0.704801 20.0001H19.2952C19.6223 20.0001 19.8875 19.7349 19.8875 19.4078V17.2525C19.8875 16.9254 19.6223 16.6602 19.2952 16.6602Z"
              fill="#0051BF"
            />
            <path
              d="M18.255 5.61504C18.1819 5.86816 17.9497 6.0427 17.6859 6.0427H10V0C10.1098 0 10.2196 0.0303906 10.3163 0.0916016L17.8577 4.85801L18.0026 4.94961C18.2253 5.09023 18.3284 5.36152 18.255 5.61504Z"
              fill="#6AA9FF"
            />
            <path
              d="M16.6753 6.39648H15.6447V16.2571H16.6753C17.0023 16.2571 17.2677 15.9917 17.2677 15.6647V6.98883C17.2677 6.66184 17.0023 6.39648 16.6753 6.39648Z"
              fill="#6AA9FF"
            />
            <path
              d="M11.0307 6.39648H10V16.2571H11.0307C11.3577 16.2571 11.623 15.9917 11.623 15.6647V6.98883C11.623 6.66184 11.3577 6.39648 11.0307 6.39648Z"
              fill="#6AA9FF"
            />
            <path
              d="M19.8875 5.96133V7.09508C19.8875 7.7032 19.3927 8.19805 18.7845 8.19805H10V4.8584H18.7845C19.3927 4.8584 19.8875 5.3532 19.8875 5.96133Z"
              fill="#046EFF"
            />
            <path
              d="M18.2782 15.0972V17.2526C18.2782 17.5796 18.0133 17.8449 17.6859 17.8449H10V14.5049H17.6859C18.0133 14.5049 18.2782 14.7702 18.2782 15.0972Z"
              fill="#046EFF"
            />
            <path
              d="M19.8875 17.2525V19.4079C19.8875 19.7348 19.6225 20.0002 19.2951 20.0002H10V16.6602H19.2951C19.6225 16.6602 19.8875 16.9251 19.8875 17.2525Z"
              fill="#00347B"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_38245">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      fill: "#EAF4FC",
      increase: "75%",
    },
    {
      title: "Successful",
      value: transactions?.successfulAmount || 0,
      fill: "#E7F5E2",
      icon: (
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_38273)">
            <path
              d="M3.07483 6.6875L19.9305 3.42623L21.7975 13.076L4.9419 16.3373L3.07483 6.6875Z"
              fill="#037A01"
            />
            <path
              d="M20.088 13.4062L21.7916 13.0766L19.9258 3.42871L3.0733 6.68746L3.18147 7.24663L19.2722 5.57096L20.088 13.4062Z"
              fill="#037A01"
            />
            <path
              d="M20.0881 13.4055L19.2722 5.57031L3.18152 7.24598L4.93923 16.3347L20.0881 13.4055Z"
              fill="#106F01"
            />
            <path
              d="M1.79553 7.85352L18.8743 6.0684L19.8963 15.8459L2.81751 17.6311L1.79553 7.85352Z"
              fill="#139F01"
            />
            <path
              d="M18.3312 16.0096V8.28711H1.83673L2.80886 17.6257L18.3312 16.0096Z"
              fill="#2B8C01"
            />
            <path
              d="M0.708313 8.74512H17.8729V18.5718H0.708313V8.74512Z"
              fill="#4FD751"
            />
            <path
              d="M16.2917 15.802C15.9267 15.8028 15.577 15.9484 15.3192 16.2068C15.0614 16.4652 14.9167 16.8152 14.9167 17.1802H3.66596C3.66596 16.9992 3.6303 16.8199 3.56101 16.6527C3.49172 16.4854 3.39016 16.3335 3.26213 16.2055C3.1341 16.0775 2.98212 15.976 2.81485 15.9068C2.64759 15.8375 2.46832 15.8019 2.28729 15.802V11.5125C2.46834 11.5125 2.64762 11.4768 2.81489 11.4075C2.98215 11.3382 3.13414 11.2367 3.26216 11.1087C3.39018 10.9806 3.49173 10.8286 3.56101 10.6614C3.6303 10.4941 3.66596 10.3148 3.66596 10.1338H14.9167C14.9165 10.4988 15.0613 10.849 15.319 11.1075C15.5768 11.366 15.9266 11.5116 16.2917 11.5125V15.802Z"
              fill="#94F47C"
            />
            <path
              d="M9.29017 15.7258C10.4323 15.7258 11.3582 14.8 11.3582 13.6578C11.3582 12.5157 10.4323 11.5898 9.29017 11.5898C8.14804 11.5898 7.22217 12.5157 7.22217 13.6578C7.22217 14.8 8.14804 15.7258 9.29017 15.7258Z"
              fill="#4FD751"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_38273">
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
    },
    {
      title: "Pending",
      value: transactions?.pendingAmount || 0,
      fill: "#EDE7F5",
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
    },
    {
      title: "Failed",
      value: transactions?.failedAmount || 0,
      fill: "#EDE7F5",
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
    },
  ];
  return (
    <div className="min-h-screen  p-6">
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
          <Select defaultValue="transactions" onValueChange={handleViewChange}>
            <SelectTrigger className="w-[180px] border-zinc-800 bg-transparent text-black">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent className="b text-black">
              <SelectItem value="transactions">Transactions</SelectItem>
              <SelectItem value="amount">Amount</SelectItem>
              <SelectItem value="users">Users</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={handleTimeframeChange} defaultValue="daily">
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
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 40, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#71717a" }}
                  padding={{ left: 10, right: 10 }}
                />
                <Bar
                  dataKey="successful"
                  fill="#0D8BFA"
                  radius={[4, 4, 0, 0]}
                />
                <Bar dataKey="pending" fill="#0B106E" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  );
}
