"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Building2,
  Wallet,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const businesses = Array(6).fill({
  name: "The book hub",
  address: "2nd Floor, Maryland Mall",
  category: [
    "Commercial",
    "Restaurant",
    "Hospitality",
    "Restaurant",
    "Technology",
    "Restaurant",
  ][Math.floor(Math.random() * 6)],
});

const metrics = [
  {
    title: "All businesses",
    value: "3,283,550",
    icon: Building2,
    increase: "75%",
  },
  {
    title: "Promotions",
    value: "283,550",
    icon: Wallet,
    increase: "75%",
  },
];

export default function Businesses() {
  return (
    <div className="min-h-screen  p-6">
      {/* Metrics Grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {metrics.map((metric, index) => (
          <Card key={index} className=" p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg  p-2">
                <metric.icon className="h-5 w-5 text-black" />
              </div>
              <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-500">
                ↑{metric.increase}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-black  font-semibold ">
                {metric.title}
              </div>
              <div className="text-xl font-bold text-black">{metric.value}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Navigation and Actions */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row">
        <div className="flex gap-4 text-sm">
          <button className="border-b-2 border-white pb-2 font-medium text-black">
            ALL BUSINESSES
          </button>
          <button className="border-b-2 border-transparent pb-2 text-black  font-semibold  hover:border-zinc-700 hover:text-black font-light">
            PROMOTIONS
          </button>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-black">
            Promote business
          </Button>
          <Button className="bg-white text-black hover:bg-white/90">
            Add business
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-zinc-800 ">
        <Table>
          <TableHeader>
            <TableRow className="border-zinc-800 hover:bg-transparent">
              <TableHead className="text-black  font-semibold ">
                Name of business
              </TableHead>
              <TableHead className="text-black  font-semibold ">
                Address
              </TableHead>
              <TableHead className="text-black  font-semibold ">
                Category
              </TableHead>
              <TableHead className="text-black  font-semibold ">
                Image
              </TableHead>
              <TableHead className="text-right text-black  font-semibold ">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {businesses.map((business, i) => (
              <TableRow
                key={i}
                className="border-zinc-800 hover:bg-zinc-800/50"
              >
                <TableCell className="font-medium text-black">
                  {business.name}
                </TableCell>
                <TableCell className="text-black font-light">
                  {business.address}
                </TableCell>
                <TableCell className="text-black font-light">
                  {business.category}
                </TableCell>
                <TableCell className="text-black font-light">Image</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 text-black font-light"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <Button variant="outline" className="gap-2 text-black" size="sm">
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>
        {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
          <Button
            key={i}
            variant={page === 1 ? "default" : "ghost"}
            size="sm"
            className={
              page === 1
                ? "bg-white text-black hover:bg-white/90"
                : "text-black font-light"
            }
          >
            {page}
          </Button>
        ))}
        <Button variant="outline" className="gap-2 text-black" size="sm">
          Next <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
