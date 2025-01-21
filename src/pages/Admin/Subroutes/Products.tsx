"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Building2,
  Wallet,
  MoreVertical,
  Eye,
  Plus,
  Smartphone,
  ArrowDownToLine,
  PlaySquare,
  Wifi,
  Building,
} from "lucide-react";
// import Image from "next/image"
import { Link } from "react-router";

const products = [
  {
    title: "2.5GB all time + 4GB night",
    price: "343,850.00",
    views: "23,560",
    provider: "9mobile",
    badge: "₦1500",
  },
  {
    title: "2.5GB all time + 4GB night",
    price: "343,850.00",
    views: "23,560",
    provider: "glo",
    badge: "₦1500",
  },
  {
    title: "2.5GB all time + 4GB night",
    price: "343,850.00",
    views: "23,560",
    provider: "airtel",
    badge: "₦1500",
  },
  {
    title: "2.5GB all time + 4GB night",
    price: "343,850.00",
    views: "23,560",
    provider: "mtn",
    badge: "₦1500",
  },
  {
    title: "2.5GB all time + 4GB night",
    price: "343,850.00",
    views: "23,560",
    provider: "mtn",
    badge: "₦1500",
  },
];

const categories = [
  {
    name: "Airtime",
    count: "4 Products",
    icon: Smartphone,
  },
  {
    name: "Data",
    count: "240 Products",
    icon: ArrowDownToLine,
  },
  {
    name: "SME Bundles",
    count: "8 Products",
    icon: PlaySquare,
  },
  {
    name: "Cable subscriptions",
    count: "16 Products",
    icon: Wifi,
  },
  {
    name: "Cable subscriptions",
    count: "5 Products",
    icon: Building,
  },
];

export default function ProductDashboard() {
  return (
    <div className="flex min-h-screen ">
      <div className="flex-1 p-6">
        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <Card className=" p-6">
            <div className="mb-4">
              <div className="rounded-lg  p-2 w-fit">
                <Building2 className="h-5 w-5 text-black" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-black">Products</div>
              <div className="text-xl font-bold text-black">65</div>
            </div>
          </Card>
          <Card className=" p-6">
            <div className="mb-4">
              <div className="rounded-lg  p-2 w-fit">
                <Wallet className="h-5 w-5 text-black" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-black">Promotions</div>
              <div className="text-xl font-bold text-black">0</div>
            </div>
          </Card>
        </div>

        {/* Add Product Button */}
        <div className="mb-6 flex justify-end">
          <Button variant="outline" className="gap-2 text-black">
            <Plus className="h-4 w-4" />
            Add product
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Recently Added Section */}
          <Card className=" p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-semibold text-black">RECENTLY ADDED</h2>
              <Button variant="ghost" size="icon" className="text-black">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-zinc-800/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white">
                      <img
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={product.provider}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-black">
                        {product.title}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-black">
                        ₦{product.price} • <Eye className="h-4 w-4" />{" "}
                        {product.views}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-black">{product.badge}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Trending Items Section */}
          <Card className=" p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-semibold text-black">TRENDING ITEMS</h2>
              <Button variant="ghost" size="icon" className="text-black">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-zinc-800/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white">
                      <img
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={product.provider}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-black">
                        {product.title}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-black">
                        ₦{product.price} • <Eye className="h-4 w-4" />{" "}
                        {product.views}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-black">{product.badge}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-80 border-l border-zinc-800 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-black">
            Product categories
          </h2>
          <Button variant="ghost" size="sm" className="text-black">
            Manage
          </Button>
        </div>
        <div className="mt-4 space-y-2">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="#"
              className="flex items-center justify-between rounded-lg p-3 hover:bg-zinc-800"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-2">
                  <category.icon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-black">{category.name}</span>
              </div>
              <span className="text-sm text-black">{category.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
