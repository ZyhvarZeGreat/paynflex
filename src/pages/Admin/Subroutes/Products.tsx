"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
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
import airtel from "@/assets/telco icons/airtel.png";
import mtn from "@/assets/telco icons/mtn.png";
import glo from "@/assets/telco icons/glo.png";
import etisalat from "@/assets/telco icons/9mobile.png";
const products = [
  {
    title: "2.5GB all time + 4GB night",
    price: "343,850.00",
    views: "23,560",
    provider: "9mobile",
    img: etisalat,
    badge: "₦1500",
  },
  {
    title: "2.5GB all time + 4GB night",
    price: "343,850.00",
    views: "23,560",
    provider: "glo",
    img: glo,
    badge: "₦1500",
  },
  {
    title: "2.5GB all time + 4GB night",
    price: "343,850.00",
    views: "23,560",
    provider: "airtel",
    img: airtel,
    badge: "₦1500",
  },
  {
    title: "2.5GB all time + 4GB night",
    price: "343,850.00",
    views: "23,560",
    provider: "mtn",
    img: mtn,
    badge: "₦1500",
  },
  {
    title: "2.5GB all time + 4GB night",
    price: "343,850.00",
    views: "23,560",
    provider: "mtn",
    img: mtn,
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
    <div className="grid grid-cols-12  min-h-screen ">
      <div className=" col-span-12 lg:col-span-8 p-6">
        {/* Stats Grid */}
        <div className="mb-8 h-[200px]  place-content-stretch border-y border-y-[#E0E2E780] grid gap-4 sm:grid-cols-2">
          <div className=" px-6 flex justify-center flex-col h-full border-r  border-r-[#E0E2E780]">
            <div className="mb-4">
              <div
                className={`rounded-lg bg-[#EAF4FC] h-[40px] w-[40px] justify-center flex items-center `}
              >
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
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-black">Products</div>
              <div className="text-xl font-bold text-black">65</div>
            </div>
          </div>
          <div className=" px-6 flex justify-center flex-col">
            <div className="mb-4">
              <div
                className={`rounded-lg bg-[#E7F5E2] h-[40px] w-[40px] justify-center flex items-center `}
              >
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
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-black">Promotions</div>
              <div className="text-xl font-bold text-black">0</div>
            </div>
          </div>
        </div>

        {/* Add Product Button */}
        <div className="mb-6 flex justify-end">
          <Button variant="outline" className="gap-2 text-black">
            <Plus className="h-4 w-4" />
            Add product
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid border border-[#E0E2E780] rounded-xl  md:grid-cols-2">
          {/* Recently Added Section */}
          <div className="   ">
            <div className=" pl-4 py-4 border-b border-r border-r-[#E0E2E780] border-b-[#E0E2E780] flex items-center justify-between">
              <h2 className="font-semibold text-black">RECENTLY ADDED</h2>
              <Button variant="ghost" size="icon" className="text-black">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4 px-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white">
                      <img
                        src={`${product.img}`}
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
          </div>

          {/* Trending Items Section */}
          <div className=" border-r  border-r-[#E0E2E780]  ">
            <div className="  px-4 py-4   border-b   border-b-[#E0E2E780] flex items-center justify-between">
              <h2 className="font-semibold text-black">TRENDING ITEMS</h2>
              <Button variant="ghost" size="icon" className="text-black">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4 border-l border-l-[#E0E2E780]  px-4  ">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white">
                      <img
                        src={`${product.img}`}
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
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className=" col-span-12 lg:col-span-4 flex flex-col bg-[#F1F2F4] p-6">
        <Button
          variant="outline"
          size="sm"
          className="text-black self-end  bg-transparent border border-black/30 mb-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2_38893)">
              <path
                d="M3.95454 3.59127L3.77219 4.31877L3.95454 3.59127ZM6.20425 2.29241L5.48304 2.08658L6.20425 2.29241ZM2.15887 6.70147L2.69772 6.1798L2.15887 6.70147ZM2.15887 9.29921L1.62002 8.77753H1.62002L2.15887 9.29921ZM3.95454 12.4094L4.1369 13.1369L3.95454 12.4094ZM6.20425 13.7083L5.48304 13.9141L6.20425 13.7083ZM9.7956 13.7083L10.5168 13.9141L9.7956 13.7083ZM12.0453 12.4094L12.2277 11.6819L12.0453 12.4094ZM13.841 9.29921L13.3021 9.82088L13.841 9.29921ZM13.841 6.70147L13.3021 6.1798L13.841 6.70147ZM12.0453 3.59127L11.8629 2.86378L12.0453 3.59127ZM9.7956 2.29241L10.5168 2.08658L9.7956 2.29241ZM3.77219 4.31877C5.14233 4.66221 6.53781 3.85653 6.92545 2.49823L5.48304 2.08658C5.31756 2.66645 4.72182 3.0104 4.1369 2.86378L3.77219 4.31877ZM2.69772 6.1798C1.91582 5.37215 2.6818 4.04545 3.77219 4.31877L4.1369 2.86378C1.58271 2.22354 -0.211534 5.33127 1.62002 7.22314L2.69772 6.1798ZM2.69772 9.82088C3.68022 8.80602 3.68022 7.19465 2.69772 6.1798L1.62002 7.22314C2.03946 7.65639 2.03946 8.34429 1.62002 8.77753L2.69772 9.82088ZM3.77219 11.6819C2.68179 11.9552 1.91582 10.6285 2.69772 9.82088L1.62002 8.77753C-0.211535 10.6694 1.58271 13.7771 4.1369 13.1369L3.77219 11.6819ZM6.92546 13.5024C6.53781 12.1441 5.14233 11.3385 3.77219 11.6819L4.1369 13.1369C4.72182 12.9903 5.31756 13.3342 5.48304 13.9141L6.92546 13.5024ZM9.07439 13.5024C8.7659 14.5834 7.23395 14.5834 6.92546 13.5024L5.48304 13.9141C6.20568 16.4462 9.79417 16.4462 10.5168 13.9141L9.07439 13.5024ZM12.2277 11.6819C10.8575 11.3385 9.46203 12.1441 9.07439 13.5024L10.5168 13.9141C10.6823 13.3342 11.278 12.9903 11.8629 13.1369L12.2277 11.6819ZM13.3021 9.82088C14.084 10.6285 13.318 11.9552 12.2277 11.6819L11.8629 13.1369C14.4171 13.7771 16.2114 10.6694 14.3798 8.77753L13.3021 9.82088ZM13.3021 6.1798C12.3196 7.19465 12.3196 8.80602 13.3021 9.82088L14.3798 8.77753C13.9604 8.34429 13.9604 7.65639 14.3798 7.22314L13.3021 6.1798ZM12.2277 4.31877C13.318 4.04545 14.084 5.37215 13.3021 6.1798L14.3798 7.22314C16.2114 5.33127 14.4171 2.22354 11.8629 2.86378L12.2277 4.31877ZM9.07439 2.49823C9.46203 3.85653 10.8575 4.66221 12.2277 4.31877L11.8629 2.86378C11.278 3.0104 10.6823 2.66645 10.5168 2.08658L9.07439 2.49823ZM10.5168 2.08658C9.79417 -0.445528 6.20567 -0.445527 5.48304 2.08658L6.92545 2.49823C7.23395 1.41726 8.7659 1.41726 9.07439 2.49823L10.5168 2.08658ZM5.24992 8.00034C5.24992 9.51912 6.48114 10.7503 7.99992 10.7503V9.25034C7.30957 9.25034 6.74992 8.69069 6.74992 8.00034H5.24992ZM7.99992 10.7503C9.5187 10.7503 10.7499 9.51912 10.7499 8.00034H9.24992C9.24992 8.69069 8.69028 9.25034 7.99992 9.25034V10.7503ZM10.7499 8.00034C10.7499 6.48155 9.51871 5.25034 7.99992 5.25034V6.75034C8.69028 6.75034 9.24992 7.30998 9.24992 8.00034H10.7499ZM7.99992 5.25034C6.48114 5.25034 5.24992 6.48155 5.24992 8.00034H6.74992C6.74992 7.30998 7.30957 6.75034 7.99992 6.75034V5.25034Z"
                fill="#494A4D"
                fill-opacity="0.85"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_38893">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Manage Categories
        </Button>
        <Card className="">
          <div className="flex py-4 px-6 border-b border-b-[#E0E2E780] items-center justify-between">
            <h2 className="text-lg font-semibold text-black">
              Product categories
            </h2>
          </div>
          <div className="mt-4 px-6 space-y-2">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="#"
                className="flex items-center justify-between rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-2">
                    <category.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-black">{category.name}</span>
                </div>
                <span className="text-sm   text-[#181D27A6]">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
