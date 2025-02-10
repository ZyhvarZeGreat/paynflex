"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PointsManager from "@/components/PointsManager";
const metrics = [
  {
    title: "All transactions",
    value: 0,
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
    value: 0,
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
];
// Sample data
const users = [
  {
    id: 1,
    name: "Chike Opara",
    pointsRedeemed: 15,
    pointsLeft: 5,
    dateRedeemed: "Oct 24, 2024",
  },
  {
    id: 2,
    name: "Chike Opara",
    pointsRedeemed: 10,
    pointsLeft: 20,
    dateRedeemed: "Oct 24, 2024",
  },
  {
    id: 3,
    name: "Chike Opara",
    pointsRedeemed: 5,
    pointsLeft: 32,
    dateRedeemed: "Oct 24, 2024",
  },
  {
    id: 4,
    name: "Chike Opara",
    pointsRedeemed: 16,
    pointsLeft: 4,
    dateRedeemed: "Oct 24, 2024",
  },
  {
    id: 5,
    name: "Chike Opara",
    pointsRedeemed: 12,
    pointsLeft: 3,
    dateRedeemed: "Oct 24, 2024",
  },
  {
    id: 6,
    name: "Chike Opara",
    pointsRedeemed: 250,
    pointsLeft: 102,
    dateRedeemed: "Oct 24, 2024",
  },
];

export default function Rewards() {
  const handleDownload = () => {
    // Logic to download the table data
    const csvContent =
      "data:text/csv;charset=utf-8," +
      users
        .map(
          (e) =>
            `${e.name},${e.pointsRedeemed},${e.pointsLeft},${e.dateRedeemed}`
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users_data.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      <div className="w-full">
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <Card key={index} className=" col-span-1 p-6">
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
                <div className="text-xl font-bold text-black">
                  {metric.value}
                </div>
              </div>
            </Card>
          ))}
          <Card className="bg-blue-600 col-span-1 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Points value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1Point = ₦100</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Users</h2>
          <PointsManager />
          <Button onClick={handleDownload} className="mb-4">
            Export Data
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Points redeemed</TableHead>
              <TableHead>Points left</TableHead>
              <TableHead>Date redeemed</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.pointsRedeemed}</TableCell>
                <TableCell>{user.pointsLeft}</TableCell>
                <TableCell>{user.dateRedeemed}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit points</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
