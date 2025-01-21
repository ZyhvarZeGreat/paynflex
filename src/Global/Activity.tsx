"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface Activity {
  id: string;
  user: {
    name: string;
    email: string;
  };
  activity: string;
  time: string;
  details: {
    user: string;
    activity: string;
    email: string;
    role: string;
    date: string;
    ipAddress: string;
  };
}

const activities: Activity[] = [
  {
    id: "1",
    user: {
      name: "Olamide Akintan",
      email: "chuks@gmail.com",
    },
    activity: "Created a user",
    time: "Today - 12:55 PM",
    details: {
      user: "Chuks",
      activity: "Declined a booking",
      email: "chuks@gmail.com",
      role: "Manager",
      date: "Sep 22, 2024, 8:10 PM",
      ipAddress: "192.210.36.187",
    },
  },
  {
    id: "2",
    user: {
      name: "Olamide Akintan",
      email: "chuks@gmail.com",
    },
    activity: "Placed an order",
    time: "Yesterday - 08:35 PM",
    details: {
      user: "Chuks",
      activity: "Declined a booking",
      email: "chuks@gmail.com",
      role: "Manager",
      date: "Sep 22, 2024, 8:10 PM",
      ipAddress: "192.210.36.187",
    },
  },
  {
    id: "3",
    user: {
      name: "Olamide Akintan",
      email: "chuks@gmail.com",
    },
    activity: "Added a menu item",
    time: "02/03/2024 09:15PM",
    details: {
      user: "Chuks",
      activity: "Declined a booking",
      email: "chuks@gmail.com",
      role: "Manager",
      date: "Sep 22, 2024, 8:10 PM",
      ipAddress: "192.210.36.187",
    },
  },
  {
    id: "4",
    user: {
      name: "Olamide Akintan",
      email: "chuks@gmail.com",
    },
    activity: "Created a reservation",
    time: "02/03/2024 09:15PM",
    details: {
      user: "Chuks",
      activity: "Declined a booking",
      email: "chuks@gmail.com",
      role: "Manager",
      date: "Sep 22, 2024, 8:10 PM",
      ipAddress: "192.210.36.187",
    },
  },
  {
    id: "5",
    user: {
      name: "Olamide Akintan",
      email: "chuks@gmail.com",
    },
    activity: "Deleted a reservation",
    time: "02/03/2024 09:15PM",
    details: {
      user: "Chuks",
      activity: "Declined a booking",
      email: "chuks@gmail.com",
      role: "Manager",
      date: "Sep 22, 2024, 8:10 PM",
      ipAddress: "192.210.36.187",
    },
  },
  {
    id: "6",
    user: {
      name: "Olamide Akintan",
      email: "chuks@gmail.com",
    },
    activity: "Accepted a booking",
    time: "02/03/2024 09:15PM",
    details: {
      user: "Chuks",
      activity: "Declined a booking",
      email: "chuks@gmail.com",
      role: "Manager",
      date: "Sep 22, 2024, 8:10 PM",
      ipAddress: "192.210.36.187",
    },
  },
];

export default function ActivityLog() {
  const [selectedActivity, setSelectedActivity] =
    React.useState<Activity | null>(activities[0]);

  return (
    <div className="p-6 space-y-6">
      {/* Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              A summary of activities
            </span>
            <Select defaultValue="last7days">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7days">last 7 days</SelectItem>
                <SelectItem value="last30days">last 30 days</SelectItem>
                <SelectItem value="last90days">last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Status:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Channel:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="web">Web</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button variant="link" className="text-blue-600">
          Show less filters
        </Button>
      </div>

      <div className="flex gap-6">
        {/* Table */}
        <div className="flex-1 border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[300px]">
                  <div className="flex items-center">
                    User
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    Activity
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    Time
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((activity) => (
                <TableRow
                  key={activity.id}
                  className={`cursor-pointer hover:bg-gray-50 ${
                    selectedActivity?.id === activity.id ? "bg-gray-50" : ""
                  }`}
                  onClick={() => setSelectedActivity(activity)}
                >
                  <TableCell>
                    <div>
                      <div className="font-medium">{activity.user.name}</div>
                      <div className="text-sm text-gray-500">
                        {activity.user.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{activity.activity}</TableCell>
                  <TableCell>{activity.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Details Panel */}
        {selectedActivity && (
          <div className="w-[400px] border rounded-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-semibold">Details of activity</h2>
              <span className="text-green-600 font-medium">Successful</span>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">User</h3>
                <p className="font-medium">{selectedActivity.details.user}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Activity</h3>
                <p className="font-medium">
                  {selectedActivity.details.activity}
                </p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Email</h3>
                <p className="font-medium">{selectedActivity.details.email}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Role</h3>
                <p className="font-medium">{selectedActivity.details.role}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Date</h3>
                <p className="font-medium">{selectedActivity.details.date}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">IP Address</h3>
                <p className="font-medium">
                  {selectedActivity.details.ipAddress}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-4">
        <span className="text-sm text-gray-500">Page 1 of 30</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-blue-50 text-blue-600"
            >
              3
            </Button>
            <span className="mx-2">...</span>
            <Button variant="outline" size="sm">
              10
            </Button>
            <Button variant="outline" size="sm">
              11
            </Button>
            <Button variant="outline" size="sm">
              12
            </Button>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
