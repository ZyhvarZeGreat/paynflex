import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle, MoreVertical } from "lucide-react";
import { Link } from "react-router";

export default function Products() {
  const items = [
    {
      provider: "glo",
      title: "2.5GB all time + 4GB night",
      price: "343,850.00",
      views: "23,560",
    },
    {
      provider: "mtn",
      title: "2.5GB all time + 4GB night",
      price: "343,850.00",
      views: "23,560",
    },
  ];

  return (
    <div className="flex  text-black">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 rounded-lg  p-4">
            <div className="rounded-lg bg-blue-100 p-2">
              <svg
                className="h-6 w-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold">65</div>
              <div className="text-sm text-zinc-400">Products</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg  p-4">
            <div className="rounded-lg bg-green-100 p-2">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-zinc-400">Promotions</div>
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <Button variant="outline">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add product
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Recently Added Section */}
          <Card className=" p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold">RECENTLY ADDED</h2>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-zinc-800 p-4"
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
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-zinc-400">₦{item.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {item.views}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Trending Items Section */}
          <Card className=" p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold">TRENDING ITEMS</h2>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-zinc-800 p-4"
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
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-zinc-400">₦{item.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {item.views}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-80 border-l p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Product categories</h2>
          <Button variant="ghost" size="sm">
            Manage
          </Button>
        </div>
        <div className="mt-4 space-y-2">
          <Link
            to="#"
            className="flex items-center justify-between rounded-lg p-3 hover:bg-zinc-800"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2">
                <svg
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span>Airtime</span>
            </div>
            <span className="text-sm text-zinc-400">4 Products</span>
          </Link>
          <Link
            to="#"
            className="flex items-center justify-between rounded-lg p-3 hover:bg-zinc-800"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-100 p-2">
                <svg
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span>Data</span>
            </div>
            <span className="text-sm text-zinc-400">240 Products</span>
          </Link>
          <Link
            to="#"
            className="flex items-center justify-between rounded-lg p-3 hover:bg-zinc-800"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-yellow-100 p-2">
                <svg
                  className="h-5 w-5 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span>SME Bundles</span>
            </div>
            <span className="text-sm text-zinc-400">8 Products</span>
          </Link>
          <Link
            to="#"
            className="flex items-center justify-between rounded-lg p-3 hover:bg-zinc-800"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-100 p-2">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
              <span>Cable subscriptions</span>
            </div>
            <span className="text-sm text-zinc-400">21 Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
