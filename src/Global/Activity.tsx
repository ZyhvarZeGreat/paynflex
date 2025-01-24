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
    status: "successful" | "failed" | "pending";
    channel: "web" | "mobile" | "api";
  };
}

const activities: Activity[] = [
  {
    id: "1",
    user: {
      name: "Olamide Akintan",
      email: "olamide@example.com",
    },
    activity: "Created a user",
    time: new Date().toISOString(), // Today
    details: {
      user: "Olamide",
      activity: "Created a new user account",
      email: "olamide@example.com",
      role: "Admin",
      date: new Date().toLocaleString(),
      ipAddress: "192.210.36.187",
      status: "successful",
      channel: "web",
    },
  },
  {
    id: "2",
    user: {
      name: "John Smith",
      email: "john.smith@example.com",
    },
    activity: "Modified menu items",
    time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    details: {
      user: "John",
      activity: "Updated 3 menu items",
      email: "john.smith@example.com",
      role: "Manager",
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleString(),
      ipAddress: "192.168.1.105",
      status: "successful",
      channel: "web",
    },
  },
  {
    id: "3",
    user: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
    },
    activity: "Failed login attempt",
    time: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days ago
    details: {
      user: "Sarah",
      activity: "Authentication failed",
      email: "sarah.j@example.com",
      role: "Staff",
      date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toLocaleString(),
      ipAddress: "192.168.1.110",
      status: "failed",
      channel: "mobile",
    },
  },
  {
    id: "4",
    user: {
      name: "Michael Chen",
      email: "m.chen@example.com",
    },
    activity: "Updated reservation",
    time: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days ago
    details: {
      user: "Michael",
      activity: "Modified booking #12345",
      email: "m.chen@example.com",
      role: "Staff",
      date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toLocaleString(),
      ipAddress: "192.168.1.115",
      status: "successful",
      channel: "web",
    },
  },
  {
    id: "5",
    user: {
      name: "Emma Wilson",
      email: "emma.w@example.com",
    },
    activity: "Generated report",
    time: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(), // 25 days ago
    details: {
      user: "Emma",
      activity: "Monthly sales report",
      email: "emma.w@example.com",
      role: "Manager",
      date: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toLocaleString(),
      ipAddress: "192.168.1.120",
      status: "successful",
      channel: "web",
    },
  },
  {
    id: "6",
    user: {
      name: "David Kim",
      email: "d.kim@example.com",
    },
    activity: "API Integration",
    time: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(), // 45 days ago
    details: {
      user: "David",
      activity: "Updated API endpoints",
      email: "d.kim@example.com",
      role: "Developer",
      date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toLocaleString(),
      ipAddress: "192.168.1.125",
      status: "pending",
      channel: "api",
    },
  },
  {
    id: "7",
    user: {
      name: "Lisa Anderson",
      email: "l.anderson@example.com",
    },
    activity: "Inventory update",
    time: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days ago
    details: {
      user: "Lisa",
      activity: "Stock reconciliation",
      email: "l.anderson@example.com",
      role: "Manager",
      date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toLocaleString(),
      ipAddress: "192.168.1.130",
      status: "successful",
      channel: "mobile",
    },
  },
  {
    id: "8",
    user: {
      name: "Tom Brown",
      email: "t.brown@example.com",
    },
    activity: "Password reset",
    time: new Date(Date.now() - 85 * 24 * 60 * 60 * 1000).toISOString(), // 85 days ago
    details: {
      user: "Tom",
      activity: "Security update",
      email: "t.brown@example.com",
      role: "Staff",
      date: new Date(Date.now() - 85 * 24 * 60 * 60 * 1000).toLocaleString(),
      ipAddress: "192.168.1.135",
      status: "successful",
      channel: "web",
    },
  },
];

type PeriodType = "last7days" | "last30days" | "last90days";
type StatusType = "all" | "successful" | "failed" | "pending";
type ChannelType = "all" | "web" | "mobile" | "api";

export default function ActivityLog() {
  // State management with proper types
  const [selectedActivity, setSelectedActivity] =
    React.useState<Activity | null>(activities[0]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [period, setPeriod] = React.useState<PeriodType>("last7days");
  const [status, setStatus] = React.useState<StatusType>("all");
  const [channel, setChannel] = React.useState<ChannelType>("all");

  // Pagination settings
  const itemsPerPage = 5;
  const totalPages = Math.ceil(activities.length / itemsPerPage);

  // Filter activities
  const filterActivities = () => {
    let filtered = [...activities];

    // First apply status and channel filters
    if (status !== "all") {
      filtered = filtered.filter(
        (activity) => activity.details.status === status
      );
    }

    if (channel !== "all") {
      filtered = filtered.filter(
        (activity) => activity.details.channel === channel
      );
    }

    // Time period filtering
    const now = new Date();
    const cutoffDate = new Date();

    // Calculate the cutoff date based on selected period
    switch (period) {
      case "last7days":
        cutoffDate.setDate(now.getDate() - 7);
        break;
      case "last30days":
        cutoffDate.setDate(now.getDate() - 30);
        break;
      case "last90days":
        cutoffDate.setDate(now.getDate() - 90);
        break;
    }

    // Apply time filter
    filtered = filtered.filter((activity) => {
      const activityDate = new Date(activity.time);
      // Include activities between cutoff date and now
      return activityDate >= cutoffDate && activityDate <= now;
    });

    // For debugging
    console.log({
      period,
      cutoffDate: cutoffDate.toISOString(),
      now: now.toISOString(),
      filteredCount: filtered.length,
    });

    return filtered;
  };

  // Get current page items
  const getCurrentActivities = () => {
    const filtered = filterActivities();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  };

  console.log(getCurrentActivities());

  // Pagination handlers
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate range around current page
      const start = Math.max(2, currentPage - 2);
      const end = Math.min(totalPages - 1, currentPage + 2);

      // Add ellipsis if needed
      if (start > 2) pages.push(-1);

      // Add pages around current page
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) pages.push(-1);

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              A summary of activities
            </span>
            <Select
              value={period}
              onValueChange={(value: PeriodType) => setPeriod(value)}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7days">Last 7 days</SelectItem>
                <SelectItem value="last30days">Last 30 days</SelectItem>
                <SelectItem value="last90days">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Status:</span>
            <Select
              value={status}
              onValueChange={(value: StatusType) => setStatus(value)}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="successful">Successful</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Channel:</span>
            <Select
              value={channel}
              onValueChange={(value: ChannelType) => setChannel(value)}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="web">Web</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="api">API</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button variant="link" className="text-blue-600">
          Show less filters
        </Button>
      </div>

      {/* Table section */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1  border rounded-lg overflow-hidden">
          <div className="h-full ">
            <Table>
              <TableHeader className="sticky top-0 bg-white">
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
                {getCurrentActivities().map((activity) => (
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
                    <TableCell>
                      {new Date(activity.time).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Details Panel */}
        {selectedActivity && (
          <div className="w-full lg:w-[400px] border rounded-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-semibold">Details of activity</h2>
              <span
                className={`font-medium ${
                  selectedActivity.details.status === "successful"
                    ? "text-green-600"
                    : selectedActivity.details.status === "failed"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {selectedActivity.details.status.charAt(0).toUpperCase() +
                  selectedActivity.details.status.slice(1)}
              </span>
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
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Channel</h3>
                <p className="font-medium">
                  {selectedActivity.details.channel.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-4">
        <span className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <div className="flex items-center gap-1">
            {getPageNumbers().map((pageNum, index) =>
              pageNum === -1 ? (
                <span key={`ellipsis-${index}`} className="mx-2">
                  ...
                </span>
              ) : (
                <Button
                  key={pageNum}
                  variant="outline"
                  size="sm"
                  className={
                    currentPage === pageNum ? "bg-blue-50 text-blue-600" : ""
                  }
                  onClick={() => handlePageClick(pageNum)}
                >
                  {pageNum}
                </Button>
              )
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
