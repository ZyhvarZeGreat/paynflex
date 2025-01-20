import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck, Globe, Zap } from "lucide-react";
import { Link } from "react-router";
import star from "@/assets/features-star.png";
import AnimatedHero from "@/Global/Animated_Hero";
import control from "@/assets/control.png";
import control2 from "@/assets/control2.png";
import { motion } from "framer-motion";
import play_store from "@/assets/play store download button.png";
import app_store from "@/assets/app store download button.png";
import discover from "@/assets/discover.png";
import discover_cylinder from "@/assets/cylinder.png";
import discover_overlay from "@/assets/discover_overlay.png";
import control_overlay from "@/assets/control_overlay.png";
import qrcode from "@/assets/qrcode.png";
export default function LandingPage() {
  return (
    <div className="flex min-h-screen font-inter flex-col">
      {/* Hero Section */}
      <AnimatedHero />

      {/* Features Section */}
      <section className="bg-[#0F40D3] relative  h-[509px] flex items-center ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="absolute top-0 right-0 ">
              <motion.img
                src={control}
                alt="Decorative star"
                className="w-64 h-64 opacity-80"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                viewport={{ once: true }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-start flex flex-col items-start"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="8"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M37.0167 22.9749C36.9293 22.7872 36.741 22.6667 36.5336 22.6667H30.2136L36.4509 12.8187C36.5549 12.6544 36.5612 12.4464 36.4674 12.2763C36.3736 12.1056 36.1943 12 36.0002 12H27.4669C27.2647 12 27.0802 12.1141 26.9896 12.2949L18.9896 28.2949C18.9069 28.4597 18.9159 28.656 19.013 28.8133C19.1106 28.9706 19.2818 29.0666 19.4669 29.0666H24.9511L18.9751 43.2597C18.8732 43.5024 18.9639 43.7839 19.1884 43.9216C19.2748 43.9744 19.3708 43.9999 19.4663 43.9999C19.6194 43.9999 19.7703 43.9343 19.8749 43.8106L36.9416 23.5439C37.0754 23.3851 37.1042 23.1632 37.0167 22.9749Z"
                    fill="white"
                  />
                </svg>
              </div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-2 text-lg font-semibold text-white"
              >
                Instant Transactions
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-blue-100"
              >
                Experience instant transactions when you use PayNFlex.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-start flex flex-col items-start"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full ">
                <svg
                  width="57"
                  height="56"
                  viewBox="0 0 57 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.333374"
                    width="56"
                    height="56"
                    rx="8"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M42.2306 16.4786C42.1731 16.066 41.8763 15.7266 41.475 15.6151L28.6136 12.0383C28.4303 11.9873 28.2366 11.9873 28.0531 12.0383L15.1918 15.6151C14.7905 15.7266 14.4936 16.0659 14.4362 16.4786C14.3616 17.015 12.6598 29.6889 17.0248 35.9939C21.3846 42.2912 27.8162 43.905 28.0878 43.9707C28.1686 43.9902 28.2508 43.9998 28.3334 43.9998C28.4159 43.9998 28.4982 43.9901 28.5789 43.9707C28.8507 43.905 35.2823 42.2912 39.642 35.9939C44.007 29.6891 42.3052 17.0151 42.2306 16.4786ZM36.6273 23.8778L27.8546 32.6505C27.6504 32.8546 27.3827 32.9569 27.1151 32.9569C26.8476 32.9569 26.5799 32.8548 26.3757 32.6505L20.9516 27.2264C20.7554 27.0304 20.6453 26.7643 20.6453 26.487C20.6453 26.2097 20.7556 25.9436 20.9516 25.7476L22.0286 24.6706C22.437 24.2623 23.0992 24.2622 23.5074 24.6706L27.1151 28.2783L34.0715 21.3218C34.2675 21.1256 34.5336 21.0155 34.8109 21.0155C35.0882 21.0155 35.3543 21.1256 35.5503 21.3218L36.6273 22.3988C37.0357 22.8072 37.0357 23.4694 36.6273 23.8778Z"
                    fill="white"
                  />
                </svg>
              </div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-2 text-lg font-semibold text-white"
              >
                Secure Payments
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-blue-100"
              >
                Advanced encryption for complete transaction security.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-start flex flex-col items-start"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full ">
                <svg
                  width="49"
                  height="48"
                  viewBox="0 0 49 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.666626"
                    width="48"
                    height="48"
                    rx="8"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <g clip-path="url(#clip0_2_18738)">
                    <path
                      d="M34.6338 17.3231L34.2748 17.437L32.3626 17.6073L31.8225 18.4698L31.4306 18.3453L29.9088 16.9733L29.688 16.2597L29.3924 15.4989L28.4359 14.6409L27.3076 14.4202L27.2816 14.9366L28.3871 16.0153L28.9279 16.6524L28.3198 16.9702L27.8248 16.8243L27.083 16.5149L27.1082 15.9167L26.135 15.5164L25.8118 16.9228L24.8309 17.1451L24.9279 17.9297L26.206 18.1757L26.4268 16.9221L27.4818 17.0779L27.9722 17.3652H28.7591L29.2977 18.4438L30.7255 19.8923L30.6208 20.4553L29.4696 20.3086L27.4803 21.3132L26.0479 23.0313L25.8615 23.7922H25.3473L24.3893 23.3506L23.4589 23.7922L23.6903 24.7739L24.0952 24.3071L24.8072 24.2849L24.7576 25.1665L25.3473 25.3392L25.9363 26.0008L26.8981 25.7303L27.9967 25.9037L29.2725 26.2468L29.9096 26.3216L30.9898 27.5477L33.0746 28.7739L31.7262 31.3499L30.303 32.0115L29.7629 33.4836L27.7033 34.8587L27.4841 35.6516C32.7492 34.3835 36.6659 29.6539 36.6659 23.9992C36.6644 21.5294 35.9157 19.2307 34.6338 17.3231Z"
                      fill="white"
                    />
                    <path
                      d="M26.0471 30.2712L25.1731 28.6509L25.9753 26.9794L25.1731 26.7395L24.2724 25.835L22.277 25.3873L21.6147 24.0015V24.8243H21.3228L19.6032 22.4928V20.5776L18.3427 18.5279L16.3412 18.8847H14.9928L14.3144 18.44L15.18 17.754L14.3167 17.9534C13.2762 19.7303 12.6697 21.7922 12.6697 24.0008C12.6697 30.6264 18.041 36 24.6674 36C25.1777 36 25.6781 35.9549 26.1731 35.8954L26.0478 34.4416C26.0478 34.4416 26.5986 32.2827 26.5986 32.2093C26.5979 32.1352 26.0471 30.2712 26.0471 30.2712Z"
                      fill="white"
                    />
                    <path
                      d="M17.128 15.8694L19.2594 15.5722L20.2418 15.0336L21.3472 15.3522L23.1135 15.2544L23.7185 14.3033L24.6009 14.4484L26.7437 14.2475L27.3342 13.5966L28.1669 13.0405L29.3449 13.2177L29.7743 13.1528C28.2227 12.4225 26.4962 12 24.6666 12C20.9423 12 17.6123 13.6975 15.4137 16.3629H15.4198L17.128 15.8694ZM25.1738 13.1933L26.3992 12.5187L27.186 12.9733L26.047 13.8403L24.9592 13.9496L24.4695 13.6318L25.1738 13.1933ZM21.5443 13.2918L22.0852 13.5172L22.7934 13.2918L23.1792 13.9603L21.5443 14.3896L20.7582 13.9297C20.7582 13.9297 21.5268 13.4347 21.5443 13.2918Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_18738">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(12.6666 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mb-2 text-lg font-semibold text-white"
              >
                Global Access
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-blue-100"
              >
                Make payments anytime, anywhere without restrictions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Control Section */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold tracking-tight sm:text-5xl"
              >
                Take Control of Your
                <br />
                Spending Today
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 text-lg text-gray-600"
              >
                Send, receive, and manage payments all in one app.
              </motion.p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col items-start gap-3"
                >
                  <div className="rounded-full">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24115C6.82782 5.6915 5.66782 6.8515 5.66782 8.26483V10.5448C5.66782 11.0648 5.38782 11.8115 5.05448 12.2115L3.25448 14.3315C2.48115 15.2515 2.48115 16.7448 3.25448 17.6648L5.05448 19.7848C5.38782 20.1848 5.66782 20.9315 5.66782 21.4515V23.7315C5.66782 25.1448 6.82782 26.3048 8.24115 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0812 16.3048 10.0812 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8812 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z"
                        fill="#139034"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Verified Businesses</h3>
                    <p className="text-sm text-gray-600">
                      Explore verified businesses, available across our
                      platform.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col items-start gap-3"
                >
                  <div className="rounded-full ">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.943 1.02698C13.39 1.02898 12.945 1.47798 12.947 2.03098C12.947 3.70898 12.364 4.69298 11.611 5.95098C11.199 6.63898 10.539 7.77798 10.257 8.65198C9.96099 8.05598 9.79099 7.61498 9.52799 6.65998C9.31499 5.86698 8.28799 5.65498 7.77799 6.29898C4.02599 10.972 2.92399 14.476 3.00299 18.02C3.16099 25.159 8.83499 30.999 16.003 30.999C23.171 30.999 29.001 25.167 29.001 17.999C29.001 16.158 28.575 13.767 27.694 11.519C26.813 9.27098 25.485 7.13598 23.45 6.04798C22.876 5.74298 22.167 6.05898 22.011 6.69098C21.815 7.49398 21.743 7.74098 21.509 8.42098C21.222 7.11898 20.762 5.87098 20.011 4.66698C18.752 2.64498 16.676 1.02698 13.943 1.02698ZM12.66 14.248C13.488 14.248 14.16 14.92 14.16 15.748C14.16 16.576 13.488 17.248 12.66 17.248C11.832 17.248 11.16 16.576 11.16 15.748C11.16 14.92 11.832 14.248 12.66 14.248ZM19.756 14.258C20.019 14.229 20.293 14.296 20.498 14.5C20.912 14.863 20.955 15.492 20.594 15.908L12.91 24.656C12.547 25.072 11.916 25.114 11.5 24.752C11.083 24.386 11.043 23.75 11.412 23.336L19.088 14.588C19.242 14.412 19.493 14.287 19.756 14.258ZM19.34 21.998C20.168 21.998 20.84 22.67 20.84 23.498C20.84 24.326 20.168 24.998 19.34 24.998C18.512 24.998 17.84 24.326 17.84 23.498C17.84 22.67 18.511 21.998 19.34 21.998Z"
                        fill="url(#paint0_linear_2_18660)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2_18660"
                          x1="16"
                          y1="1.02698"
                          x2="16"
                          y2="30.999"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FBBC04" />
                          <stop offset="1" stop-color="#EA4335" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Incredible Offers</h3>
                    <p className="text-sm text-gray-600">
                      Enjoy incredible cashback bonus and loyalty rewards.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <div className="flex justify-center relative">
              <div className="h-[550px] flex items-end justify-center w-[696px] rounded-2xl bg-gradient-to-b from-[#FBECC7] to-[#B9E99E]">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  src={control2}
                  alt="PayNFlex Features"
                  className="h-[90%] w-[70%] object-cover rounded-2xl transition-all duration-500 ease-out"
                  style={{
                    opacity: 1,
                    transform: "scale(0.9)",
                    animation: "fadeInAndScale 0.5s ease-out forwards",
                  }}
                />
              </div>
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.6 }}
                src={control_overlay}
                alt="Decorative overlay"
                className="absolute -top-10 -right-12 h-[277px] rounded-lg w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className=" py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="flex justify-center items-center">
                <div className="flex overflow-clip h-[496px] w-[550px] items-end justify-center rounded-2xl bg-gradient-to-b from-[#D6E9F7] to-[#A184F3]">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    src={discover}
                    alt="PayNFlex Features"
                    className="h-[90%]  w-auto object-cover rounded-2xl transition-all duration-500 ease-out translate-y-[113px]"
                    style={{
                      opacity: 1,
                      transform: "scale(0.9)",
                      animation: "fadeInAndScale 0.5s ease-out forwards",
                    }}
                  />
                </div>
              </div>
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                src={discover_cylinder}
                alt="Decorative cylinder"
                className="absolute -top-8 -left-4 h-[156.2px] w-auto"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                src={discover_overlay}
                alt="Decorative overlay"
                className="absolute top-4 -right-8 h-[57px] rounded-lg w-[300px]"
              />
            </div>
            <div className="order-1 flex justify-center flex-col lg:order-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Discover businesses
                <br />
                near you
              </h2>
              <p className="mt-4 text-gray-600">
                SME Hub on PayNFlex lets you discover incredible businesses with
                amazing offers around you.
              </p>
              <div className="mt-8 flex gap-4">
                <Link to="#">
                  <img
                    src={app_store}
                    alt="Download on App Store"
                    width={120}
                    height={40}
                    className="h-16 w-auto"
                  />
                </Link>
                <Link to="#">
                  <img
                    src={play_store}
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                    className="h-16 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="flex items-center py-20 w-full h-[696px] bg-[#F1F2F4]">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-start flex flex-col items-start text-3xl sm:text-5xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="mb-4 text-start flex flex-col items-start text-gray-600">
            You've got questions. We've got answers.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I create an account?</AccordionTrigger>
              <AccordionContent>
                Download the app and follow the simple registration process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What information do I need to sign up?
              </AccordionTrigger>
              <AccordionContent>
                You'll need basic personal information and a valid form of
                identification.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How do I add money to my account?
              </AccordionTrigger>
              <AccordionContent>
                You can add money through bank transfer, card payment, or other
                supported payment methods.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is my information secure?</AccordionTrigger>
              <AccordionContent>
                Yes, we use industry-standard encryption to protect your data.
              </AccordionContent>
            </AccordionItem>{" "}
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How long do transactions take to process??
              </AccordionTrigger>
              <AccordionContent>
                Yes, we use industry-standard encryption to protect your data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Why was my transaction declined?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we use industry-standard encryption to protect your data.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-black items-center justify-center  text-white flex flex-col">
        <div className="w-full max-w-screen-xl flex justify-end">
          <img src={star} className="h-[130px] " />
        </div>
        <div className="mx-auto py-12   flex items-center justify-center flex-col max-w-screen-2xl w-full px-4 sm:px-6 lg:px-8">
          <div className="text-start flex flex-col items-start">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Experience smarter,
              <br />
              faster payments
            </h2>
            <p className="mt-4 text-gray-400">
              Download from the app store or Playstore
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link to="#">
                <svg
                  width="193"
                  height="64"
                  viewBox="0 0 193 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="0.5"
                    width="191"
                    height="63"
                    rx="11.5"
                    fill="white"
                  />
                  <rect
                    x="1"
                    y="0.5"
                    width="191"
                    height="63"
                    rx="11.5"
                    stroke="#A6A6A6"
                  />
                  <path
                    d="M33.5454 32.8904C33.56 31.8172 33.8603 30.7649 34.4185 29.8314C34.9766 28.898 35.7745 28.1137 36.7378 27.5516C36.1258 26.722 35.3185 26.0393 34.3799 25.5577C33.4414 25.0761 32.3975 24.8089 31.3311 24.7772C29.0563 24.5506 26.8509 26.0692 25.6917 26.0692C24.5101 26.0692 22.7253 24.7997 20.8034 24.8372C19.5603 24.8754 18.3487 25.2185 17.2868 25.8332C16.2249 26.4479 15.3489 27.3132 14.7441 28.3448C12.1242 32.6502 14.0784 38.9778 16.5881 42.4581C17.8437 44.1622 19.3112 46.0658 21.2314 45.9983C23.1104 45.9243 23.8121 44.861 26.0802 44.861C28.3273 44.861 28.9857 45.9983 30.9448 45.9554C32.9611 45.9243 34.2314 44.2437 35.443 42.5234C36.3452 41.3091 37.0394 39.9671 37.5 38.547C36.3286 38.0767 35.329 37.2895 34.6257 36.2836C33.9225 35.2777 33.5468 34.0976 33.5454 32.8904Z"
                    fill="black"
                  />
                  <path
                    d="M29.8449 22.4883C30.9443 21.2357 31.4859 19.6256 31.3548 18C29.6752 18.1674 28.1238 18.9294 27.0096 20.134C26.4648 20.7224 26.0476 21.4071 25.7817 22.1487C25.5159 22.8903 25.4066 23.6744 25.4602 24.4561C26.3003 24.4643 27.1314 24.2915 27.8909 23.9506C28.6504 23.6098 29.3185 23.1098 29.8449 22.4883Z"
                    fill="black"
                  />
                  <path
                    d="M52.9375 27H50.4688V19H53.0469C53.8229 19 54.487 19.1602 55.0391 19.4805C55.5911 19.7982 56.0143 20.2552 56.3086 20.8516C56.6029 21.4453 56.75 22.1562 56.75 22.9844C56.75 23.8177 56.6016 24.5352 56.3047 25.1367C56.0078 25.7357 55.5755 26.1966 55.0078 26.5195C54.4401 26.8398 53.75 27 52.9375 27ZM51.4375 26.1406H52.875C53.5365 26.1406 54.0846 26.013 54.5195 25.7578C54.9544 25.5026 55.2786 25.1393 55.4922 24.668C55.7057 24.1966 55.8125 23.6354 55.8125 22.9844C55.8125 22.3385 55.707 21.7826 55.4961 21.3164C55.2852 20.8477 54.9701 20.4883 54.5508 20.2383C54.1315 19.9857 53.6094 19.8594 52.9844 19.8594H51.4375V26.1406ZM65.125 23C65.125 23.8437 64.9727 24.5729 64.668 25.1875C64.3633 25.8021 63.9453 26.276 63.4141 26.6094C62.8828 26.9427 62.276 27.1094 61.5938 27.1094C60.9115 27.1094 60.3047 26.9427 59.7734 26.6094C59.2422 26.276 58.8242 25.8021 58.5195 25.1875C58.2148 24.5729 58.0625 23.8437 58.0625 23C58.0625 22.1562 58.2148 21.4271 58.5195 20.8125C58.8242 20.1979 59.2422 19.724 59.7734 19.3906C60.3047 19.0573 60.9115 18.8906 61.5938 18.8906C62.276 18.8906 62.8828 19.0573 63.4141 19.3906C63.9453 19.724 64.3633 20.1979 64.668 20.8125C64.9727 21.4271 65.125 22.1562 65.125 23ZM64.1875 23C64.1875 22.3073 64.0716 21.7227 63.8398 21.2461C63.6107 20.7695 63.2995 20.4089 62.9062 20.1641C62.5156 19.9193 62.0781 19.7969 61.5938 19.7969C61.1094 19.7969 60.6706 19.9193 60.2773 20.1641C59.8867 20.4089 59.5755 20.7695 59.3438 21.2461C59.1146 21.7227 59 22.3073 59 23C59 23.6927 59.1146 24.2773 59.3438 24.7539C59.5755 25.2305 59.8867 25.5911 60.2773 25.8359C60.6706 26.0807 61.1094 26.2031 61.5938 26.2031C62.0781 26.2031 62.5156 26.0807 62.9062 25.8359C63.2995 25.5911 63.6107 25.2305 63.8398 24.7539C64.0716 24.2773 64.1875 23.6927 64.1875 23ZM68.207 27L66.0195 19H67.0039L68.6758 25.5156H68.7539L70.457 19H71.5508L73.2539 25.5156H73.332L75.0039 19H75.9883L73.8008 27H72.8008L71.0352 20.625H70.9727L69.207 27H68.207ZM83.5391 19V27H82.6016L78.2422 20.7187H78.1641V27H77.1953V19H78.1328L82.5078 25.2969H82.5859V19H83.5391ZM85.4775 27V19H86.4463V26.1406H90.165V27H85.4775ZM98.1035 23C98.1035 23.8437 97.9512 24.5729 97.6465 25.1875C97.3418 25.8021 96.9238 26.276 96.3926 26.6094C95.8613 26.9427 95.2546 27.1094 94.5723 27.1094C93.89 27.1094 93.2832 26.9427 92.752 26.6094C92.2207 26.276 91.8027 25.8021 91.498 25.1875C91.1934 24.5729 91.041 23.8437 91.041 23C91.041 22.1562 91.1934 21.4271 91.498 20.8125C91.8027 20.1979 92.2207 19.724 92.752 19.3906C93.2832 19.0573 93.89 18.8906 94.5723 18.8906C95.2546 18.8906 95.8613 19.0573 96.3926 19.3906C96.9238 19.724 97.3418 20.1979 97.6465 20.8125C97.9512 21.4271 98.1035 22.1562 98.1035 23ZM97.166 23C97.166 22.3073 97.0501 21.7227 96.8184 21.2461C96.5892 20.7695 96.278 20.4089 95.8848 20.1641C95.4941 19.9193 95.0566 19.7969 94.5723 19.7969C94.0879 19.7969 93.6491 19.9193 93.2559 20.1641C92.8652 20.4089 92.554 20.7695 92.3223 21.2461C92.0931 21.7227 91.9785 22.3073 91.9785 23C91.9785 23.6927 92.0931 24.2773 92.3223 24.7539C92.554 25.2305 92.8652 25.5911 93.2559 25.8359C93.6491 26.0807 94.0879 26.2031 94.5723 26.2031C95.0566 26.2031 95.4941 26.0807 95.8848 25.8359C96.278 25.5911 96.5892 25.2305 96.8184 24.7539C97.0501 24.2773 97.166 23.6927 97.166 23ZM99.6846 27H98.6689L101.606 19H102.606L105.544 27H104.528L102.138 20.2656H102.075L99.6846 27ZM100.06 23.875H104.153V24.7344H100.06V23.875ZM109.259 27H106.79V19H109.368C110.144 19 110.808 19.1602 111.36 19.4805C111.912 19.7982 112.336 20.2552 112.63 20.8516C112.924 21.4453 113.071 22.1562 113.071 22.9844C113.071 23.8177 112.923 24.5352 112.626 25.1367C112.329 25.7357 111.897 26.1966 111.329 26.5195C110.761 26.8398 110.071 27 109.259 27ZM107.759 26.1406H109.196C109.858 26.1406 110.406 26.013 110.841 25.7578C111.276 25.5026 111.6 25.1393 111.813 24.668C112.027 24.1966 112.134 23.6354 112.134 22.9844C112.134 22.3385 112.028 21.7826 111.817 21.3164C111.606 20.8477 111.291 20.4883 110.872 20.2383C110.453 19.9857 109.931 19.8594 109.306 19.8594H107.759V26.1406ZM124.54 23C124.54 23.8437 124.388 24.5729 124.083 25.1875C123.778 25.8021 123.36 26.276 122.829 26.6094C122.298 26.9427 121.691 27.1094 121.009 27.1094C120.326 27.1094 119.72 26.9427 119.188 26.6094C118.657 26.276 118.239 25.8021 117.935 25.1875C117.63 24.5729 117.478 23.8437 117.478 23C117.478 22.1562 117.63 21.4271 117.935 20.8125C118.239 20.1979 118.657 19.724 119.188 19.3906C119.72 19.0573 120.326 18.8906 121.009 18.8906C121.691 18.8906 122.298 19.0573 122.829 19.3906C123.36 19.724 123.778 20.1979 124.083 20.8125C124.388 21.4271 124.54 22.1562 124.54 23ZM123.603 23C123.603 22.3073 123.487 21.7227 123.255 21.2461C123.026 20.7695 122.715 20.4089 122.321 20.1641C121.931 19.9193 121.493 19.7969 121.009 19.7969C120.524 19.7969 120.086 19.9193 119.692 20.1641C119.302 20.4089 118.991 20.7695 118.759 21.2461C118.53 21.7227 118.415 22.3073 118.415 23C118.415 23.6927 118.53 24.2773 118.759 24.7539C118.991 25.2305 119.302 25.5911 119.692 25.8359C120.086 26.0807 120.524 26.2031 121.009 26.2031C121.493 26.2031 121.931 26.0807 122.321 25.8359C122.715 25.5911 123.026 25.2305 123.255 24.7539C123.487 24.2773 123.603 23.6927 123.603 23ZM132.513 19V27H131.575L127.216 20.7187H127.138V27H126.169V19H127.106L131.481 25.2969H131.56V19H132.513Z"
                    fill="black"
                  />
                  <path
                    d="M51.7061 46H49.6758L53.8066 34.0029H56.0391L60.1611 46H58.0518L56.9883 42.6777H52.7783L51.7061 46ZM54.9316 36.0771H54.8525L53.2266 41.1484H56.54L54.9316 36.0771ZM65.7644 46.1318C64.5603 46.1318 63.6462 45.5605 63.154 44.708H63.0837V49.085H61.1325V36.71H63.031V38.0723H63.1013C63.6111 37.1846 64.5603 36.5869 65.8083 36.5869C67.8913 36.5869 69.3767 38.1602 69.3767 40.9375V41.7637C69.3767 44.5234 67.9089 46.1318 65.7644 46.1318ZM65.3161 44.5234C66.5554 44.5234 67.3991 43.5303 67.3991 41.6582V41.0078C67.3991 39.2061 66.6081 38.1777 65.281 38.1777C63.9187 38.1777 63.0661 39.2852 63.0661 40.999V41.6582C63.0661 43.416 63.9275 44.5234 65.3161 44.5234ZM75.683 46.1318C74.4789 46.1318 73.5649 45.5605 73.0727 44.708H73.0024V49.085H71.0512V36.71H72.9496V38.0723H73.02C73.5297 37.1846 74.4789 36.5869 75.727 36.5869C77.81 36.5869 79.2954 38.1602 79.2954 40.9375V41.7637C79.2954 44.5234 77.8276 46.1318 75.683 46.1318ZM75.2348 44.5234C76.4741 44.5234 77.3178 43.5303 77.3178 41.6582V41.0078C77.3178 39.2061 76.5268 38.1777 75.1996 38.1777C73.8373 38.1777 72.9848 39.2852 72.9848 40.999V41.6582C72.9848 43.416 73.8461 44.5234 75.2348 44.5234ZM83.3387 42.6689H85.2899C85.3778 43.7061 86.2919 44.5938 87.9882 44.5938C89.5438 44.5938 90.4667 43.8643 90.4667 42.7305C90.4667 41.8164 89.8514 41.3242 88.5682 41.0166L86.5995 40.5244C85.0526 40.1641 83.6639 39.2412 83.6639 37.29C83.6639 34.9961 85.6679 33.7393 87.997 33.7393C90.3261 33.7393 92.2684 34.9961 92.3124 37.2373H90.3964C90.3085 36.2178 89.5262 35.374 87.9706 35.374C86.5995 35.374 85.6679 36.0244 85.6679 37.1406C85.6679 37.9229 86.2128 38.4854 87.329 38.7402L89.2889 39.2236C91.0907 39.6631 92.4618 40.5156 92.4618 42.5547C92.4618 44.9102 90.5546 46.2373 87.8387 46.2373C84.4989 46.2373 83.3827 44.2861 83.3387 42.6689ZM94.8395 36.71V34.4512H96.7555V36.71H98.566V38.2744H96.7555V43.2314C96.7555 44.2422 97.1334 44.5234 98.1793 44.5234C98.3463 44.5234 98.5045 44.5234 98.6188 44.5059V46C98.4605 46.0264 98.0914 46.0615 97.6959 46.0615C95.4371 46.0615 94.8131 45.2529 94.8131 43.3896V38.2744H93.5299V36.71H94.8395ZM103.835 36.5518C106.507 36.5518 107.957 38.4326 107.957 40.9639V41.7109C107.957 44.3301 106.516 46.1582 103.835 46.1582C101.155 46.1582 99.6956 44.3301 99.6956 41.7109V40.9639C99.6956 38.4414 101.163 36.5518 103.835 36.5518ZM103.835 38.1162C102.385 38.1162 101.664 39.3027 101.664 40.9902V41.7021C101.664 43.3633 102.376 44.585 103.835 44.585C105.294 44.585 105.997 43.3721 105.997 41.7021V40.9902C105.997 39.2939 105.285 38.1162 103.835 38.1162ZM109.606 46V36.71H111.557V37.9316H111.627C111.864 37.3516 112.559 36.5781 113.851 36.5781C114.106 36.5781 114.325 36.5957 114.51 36.6309V38.3535C114.343 38.3096 114 38.2832 113.675 38.2832C112.11 38.2832 111.583 39.25 111.583 40.498V46H109.606ZM119.243 46.1582C116.756 46.1582 115.174 44.5146 115.174 41.7637V40.8232C115.174 38.2305 116.72 36.5518 119.164 36.5518C121.642 36.5518 123.136 38.292 123.136 40.9111V41.7988H117.098V42.0186C117.098 43.583 117.942 44.6201 119.269 44.6201C120.262 44.6201 120.939 44.1279 121.177 43.3281H123.031C122.75 44.8311 121.537 46.1582 119.243 46.1582ZM117.098 40.4365H121.229V40.4189C121.229 39.1006 120.412 38.0635 119.173 38.0635C117.916 38.0635 117.098 39.1006 117.098 40.4189V40.4365Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link to="#">
                <svg
                  width="193"
                  height="64"
                  viewBox="0 0 193 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="0.5"
                    width="191"
                    height="63"
                    rx="11.5"
                    fill="white"
                  />
                  <rect
                    x="1"
                    y="0.5"
                    width="191"
                    height="63"
                    rx="11.5"
                    stroke="#A6A6A6"
                  />
                  <path
                    d="M31.0801 31.7822L18.2239 45.8412C18.2251 45.8437 18.2251 45.8475 18.2263 45.8499C18.6211 47.3765 19.9735 48.5 21.5795 48.5C22.2219 48.5 22.8244 48.3208 23.3413 48.0073L23.3823 47.9824L37.853 39.3791L31.0801 31.7822Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M44.086 29.3883L44.0739 29.3796L37.8263 25.6484L30.7878 32.1018L37.8516 39.3777L44.0654 35.6838C45.1546 35.0766 45.8948 33.8934 45.8948 32.5298C45.8948 31.1737 45.1655 29.9967 44.086 29.3883Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M18.2236 19.1578C18.1463 19.4515 18.1053 19.76 18.1053 20.0785V44.9219C18.1053 45.2404 18.1463 45.5489 18.2248 45.8413L31.5218 32.1419L18.2236 19.1578Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M31.175 32.5L37.8283 25.6459L23.3746 17.0115C22.8493 16.6867 22.2359 16.5001 21.5802 16.5001C19.9743 16.5001 18.6194 17.6261 18.2246 19.1539C18.2246 19.1552 18.2234 19.1564 18.2234 19.1576L31.175 32.5Z"
                    fill="#34A853"
                  />
                  <path
                    d="M64.1877 18.5273C64.1122 18.2904 64.0107 18.0781 63.8831 17.8906C63.7581 17.7005 63.6083 17.5391 63.4338 17.4063C63.2594 17.2708 63.0601 17.168 62.8362 17.0977C62.6148 17.0273 62.3713 16.9922 62.1057 16.9922C61.6552 16.9922 61.2489 17.1081 60.887 17.3398C60.525 17.5716 60.2385 17.9115 60.0276 18.3594C59.8193 18.8047 59.7151 19.3503 59.7151 19.9961C59.7151 20.6445 59.8206 21.1927 60.0315 21.6406C60.2424 22.0885 60.5315 22.4284 60.8987 22.6602C61.2659 22.8919 61.6838 23.0078 62.1526 23.0078C62.5875 23.0078 62.9664 22.9193 63.2893 22.7422C63.6148 22.5651 63.8661 22.3151 64.0432 21.9922C64.2229 21.6667 64.3127 21.2839 64.3127 20.8438L64.6252 20.9023H62.3362V19.9062H65.4807V20.8164C65.4807 21.4883 65.3375 22.0716 65.051 22.5664C64.7672 23.0586 64.3739 23.4388 63.8713 23.707C63.3713 23.9753 62.7984 24.1094 62.1526 24.1094C61.4286 24.1094 60.7932 23.9427 60.2463 23.6094C59.7021 23.276 59.2776 22.8034 58.9729 22.1914C58.6682 21.5768 58.5159 20.8477 58.5159 20.0039C58.5159 19.3659 58.6044 18.793 58.7815 18.2852C58.9586 17.7773 59.2073 17.3464 59.5276 16.9922C59.8505 16.6354 60.2294 16.3633 60.6643 16.1758C61.1018 15.9857 61.5797 15.8906 62.0979 15.8906C62.5302 15.8906 62.9325 15.9544 63.3049 16.082C63.6799 16.2096 64.0133 16.3906 64.3049 16.625C64.5992 16.8594 64.8427 17.138 65.0354 17.4609C65.2281 17.7812 65.3583 18.1367 65.426 18.5273H64.1877ZM67.0129 24V16H72.0286V17.0391H68.22V19.4766H71.7668V20.5117H68.22V22.9609H72.0754V24H67.0129ZM73.2463 17.0391V16H79.4377V17.0391H76.9417V24H75.7385V17.0391H73.2463ZM84.9241 16V24H83.717V16H84.9241ZM86.2874 17.0391V16H92.4788V17.0391H89.9827V24H88.7795V17.0391H86.2874ZM103.707 20C103.707 20.8542 103.551 21.5885 103.239 22.2031C102.926 22.8151 102.498 23.2865 101.953 23.6172C101.412 23.9453 100.796 24.1094 100.106 24.1094C99.413 24.1094 98.7945 23.9453 98.2502 23.6172C97.7086 23.2865 97.2815 22.8138 96.969 22.1992C96.6565 21.5846 96.5002 20.8516 96.5002 20C96.5002 19.1458 96.6565 18.4128 96.969 17.8008C97.2815 17.1862 97.7086 16.7148 98.2502 16.3867C98.7945 16.056 99.413 15.8906 100.106 15.8906C100.796 15.8906 101.412 16.056 101.953 16.3867C102.498 16.7148 102.926 17.1862 103.239 17.8008C103.551 18.4128 103.707 19.1458 103.707 20ZM102.512 20C102.512 19.349 102.406 18.8008 102.196 18.3555C101.987 17.9076 101.701 17.569 101.336 17.3398C100.974 17.1081 100.564 16.9922 100.106 16.9922C99.6448 16.9922 99.2333 17.1081 98.8713 17.3398C98.5094 17.569 98.2229 17.9076 98.012 18.3555C97.8036 18.8008 97.6995 19.349 97.6995 20C97.6995 20.651 97.8036 21.2005 98.012 21.6484C98.2229 22.0937 98.5094 22.4323 98.8713 22.6641C99.2333 22.8932 99.6448 23.0078 100.106 23.0078C100.564 23.0078 100.974 22.8932 101.336 22.6641C101.701 22.4323 101.987 22.0937 102.196 21.6484C102.406 21.2005 102.512 20.651 102.512 20ZM111.669 16V24H110.56L106.493 18.1328H106.419V24H105.212V16H106.329L110.4 21.875H110.474V16H111.669Z"
                    fill="black"
                  />
                  <path
                    d="M134.067 47.2129H136.225V32.5309H134.067V47.2129ZM153.496 37.8195L151.023 44.1851H150.949L148.383 37.8195H146.06L149.908 46.7161L147.715 51.6653H149.963L155.895 37.8195H153.496ZM141.263 45.5451C140.556 45.5451 139.571 45.1869 139.571 44.2978C139.571 43.1657 140.798 42.7311 141.858 42.7311C142.806 42.7311 143.253 42.939 143.829 43.222C143.661 44.5821 142.508 45.5451 141.263 45.5451ZM141.524 37.4989C139.962 37.4989 138.343 38.1977 137.675 39.7468L139.59 40.5583C139.999 39.7468 140.761 39.4814 141.561 39.4814C142.676 39.4814 143.81 40.1614 143.829 41.3711V41.5214C143.438 41.2947 142.602 40.9553 141.579 40.9553C139.516 40.9553 137.414 42.1075 137.414 44.2603C137.414 46.2251 139.106 47.4912 141.002 47.4912C142.453 47.4912 143.253 46.83 143.755 46.0548H143.829V47.1882H145.911V41.559C145.911 38.9528 143.996 37.4989 141.524 37.4989ZM128.193 39.607H125.125V34.5744H128.193C129.805 34.5744 130.721 35.9309 130.721 37.0901C130.721 38.2282 129.805 39.607 128.193 39.607ZM128.137 32.5309H122.969V47.2129H125.125V41.6506H128.137C130.528 41.6506 132.878 39.8912 132.878 37.0901C132.878 34.289 130.528 32.5309 128.137 32.5309ZM99.9531 45.5475C98.463 45.5475 97.2157 44.2802 97.2157 42.5397C97.2157 40.7803 98.463 39.4931 99.9531 39.4931C101.425 39.4931 102.578 40.7803 102.578 42.5397C102.578 44.2802 101.425 45.5475 99.9531 45.5475ZM102.43 38.6416H102.355C101.871 38.0556 100.94 37.5259 99.767 37.5259C97.3082 37.5259 95.0552 39.7198 95.0552 42.5397C95.0552 45.3396 97.3082 47.5159 99.767 47.5159C100.94 47.5159 101.871 46.9862 102.355 46.3802H102.43V47.1001C102.43 49.011 101.425 50.0328 99.8039 50.0328C98.4815 50.0328 97.6619 49.0674 97.3267 48.2534L95.4459 49.0486C95.9857 50.3734 97.4203 52 99.8039 52C102.337 52 104.479 50.4861 104.479 46.7971V37.8277H102.43V38.6416ZM105.969 47.2129H108.129V32.5297H105.969V47.2129ZM111.313 42.3694C111.257 40.4397 112.785 39.4555 113.883 39.4555C114.74 39.4555 115.466 39.8901 115.708 40.5149L111.313 42.3694ZM118.018 40.704C117.608 39.5882 116.36 37.5259 113.809 37.5259C111.276 37.5259 109.172 39.5495 109.172 42.5209C109.172 45.3208 111.257 47.5159 114.05 47.5159C116.305 47.5159 117.608 46.1159 118.148 45.302L116.472 44.1663C115.914 44.999 115.15 45.5475 114.05 45.5475C112.952 45.5475 112.17 45.0366 111.667 44.0348L118.241 41.2712L118.018 40.704ZM65.6422 39.0585V41.1773H70.6326C70.4835 42.3694 70.0928 43.2396 69.4974 43.8445C68.7703 44.5832 67.634 45.3971 65.6422 45.3971C62.5684 45.3971 60.1663 42.8803 60.1663 39.7585C60.1663 36.6356 62.5684 34.1199 65.6422 34.1199C67.2999 34.1199 68.5102 34.7823 69.4038 35.6338L70.8754 34.1387C69.6269 32.9278 67.9704 32 65.6422 32C61.4333 32 57.8948 35.4823 57.8948 39.7585C57.8948 44.0348 61.4333 47.5159 65.6422 47.5159C67.9137 47.5159 69.6269 46.7584 70.9678 45.3396C72.3469 43.9396 72.7746 41.9724 72.7746 40.3822C72.7746 39.8901 72.7377 39.4367 72.6625 39.0585H65.6422ZM78.4494 45.5475C76.9593 45.5475 75.6739 44.299 75.6739 42.5209C75.6739 40.7228 76.9593 39.4931 78.4494 39.4931C79.9383 39.4931 81.2238 40.7228 81.2238 42.5209C81.2238 44.299 79.9383 45.5475 78.4494 45.5475ZM78.4494 37.5259C75.7294 37.5259 73.5133 39.6258 73.5133 42.5209C73.5133 45.3971 75.7294 47.5159 78.4494 47.5159C81.1683 47.5159 83.3843 45.3971 83.3843 42.5209C83.3843 39.6258 81.1683 37.5259 78.4494 37.5259ZM89.2151 45.5475C87.725 45.5475 86.4396 44.299 86.4396 42.5209C86.4396 40.7228 87.725 39.4931 89.2151 39.4931C90.7052 39.4931 91.9895 40.7228 91.9895 42.5209C91.9895 44.299 90.7052 45.5475 89.2151 45.5475ZM89.2151 37.5259C86.4962 37.5259 84.2802 39.6258 84.2802 42.5209C84.2802 45.3971 86.4962 47.5159 89.2151 47.5159C91.934 47.5159 94.15 45.3971 94.15 42.5209C94.15 39.6258 91.934 37.5259 89.2151 37.5259Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>
            <div className="mt-8">
              <img
                src={qrcode}
                alt="QR Code"
                className="mx-auto h-[380px] w-auto"
              />
              {/* <p className="mt-4 text-sm text-gray-400">Scan to download</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black w-full flex   py-16 text-gray-400">
        <div className="mx-auto max-w-screen-2xl w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full py-4">
            <svg
              width="184"
              height="44"
              viewBox="0 0 184 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.4277 0C36.3665 0 46.8555 9.84976 46.8555 22C46.8555 34.1502 36.3665 44 23.4277 44C10.489 44 0 34.1502 0 22C0 9.84976 10.489 0 23.4277 0Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.9384 12.1995C29.9035 12.5247 28.9594 13.6193 28.0804 14.4468C23.7305 18.5415 19.2253 22.672 14.9225 26.7828C14.4745 27.2108 14.0559 27.5829 13.6089 28.0123C11.8658 29.6876 13.4861 32.4191 15.8931 31.8207C16.6598 31.6301 17.0395 31.1943 17.4459 30.8102L21.3805 27.1155C23.1353 25.4355 24.8932 23.8335 26.6614 22.161C28.4184 20.499 30.1449 18.8931 31.916 17.2431C32.3701 16.82 32.7766 16.438 33.2236 16.0083C35.1324 14.1728 33.0516 11.5355 30.9384 12.1995Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.1253 22.082C28.7846 22.0289 28.663 22.2584 28.4707 22.442C28.2584 22.6445 28.0926 22.7945 27.8808 22.9964C26.7006 24.1212 25.0885 25.2093 26.0118 27.3283C26.3526 28.1104 27.599 29.1178 28.1853 29.6672C28.7394 30.1864 29.9301 31.4776 30.6951 31.741C32.1334 32.2363 33.3665 31.4505 33.772 30.5474C34.4067 29.1341 33.5284 28.2834 32.707 27.5194C31.8907 26.7602 31.0662 25.9681 30.3808 25.3322C29.9497 24.9322 29.652 24.6727 29.3827 24.0554C29.054 23.3022 29.2694 22.3901 29.1253 22.082Z"
                stroke="black"
                stroke-width="2.00012"
                stroke-miterlimit="2.61313"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.6974 21.9024C18.1334 22.0045 18.4523 21.5207 18.9948 21.0019C20.0758 19.9682 21.8364 18.725 20.8248 16.6349C20.4509 15.8625 19.2035 14.8537 18.6329 14.3198C18.1554 13.8732 16.9074 12.5167 16.1168 12.2471C14.7425 11.7784 13.4415 12.5573 13.052 13.5189C12.4307 15.0529 13.5146 15.8901 14.1855 16.521C15.0985 17.3795 17.0855 19.0057 17.4938 20.0015C17.5973 20.2541 17.6975 20.5877 17.7172 20.8781C17.7427 21.2549 17.6117 21.5924 17.6974 21.9024Z"
                stroke="black"
                stroke-width="2.66683"
                stroke-miterlimit="2.61313"
              />
              <path
                d="M60.3631 29.9784C58.9295 29.9784 57.7079 29.6276 56.6982 28.926C55.6886 28.2244 54.9768 27.2716 54.5629 26.0675C54.1489 24.8634 54.0732 23.5219 54.3357 22.0429C54.578 20.5828 55.1333 19.2413 56.0016 18.0183C56.8698 16.7952 57.9451 15.8234 59.2273 15.1029C60.5095 14.3823 61.8574 14.0221 63.2708 14.0221C64.6641 14.0221 65.8756 14.3728 66.9055 15.0744C67.9353 15.776 68.6722 16.7383 69.1165 17.9614C69.5607 19.1844 69.6617 20.5449 69.4194 22.0429C69.1771 23.503 68.6016 24.8398 67.6929 26.0533C66.7843 27.2669 65.6838 28.2244 64.3915 28.926C63.0992 29.6276 61.7564 29.9784 60.3631 29.9784ZM54.3357 14.5625H56.8194L53.2756 35.7807H50.8222L54.3357 14.5625ZM60.0602 27.7598C61.09 27.7598 62.0946 27.5086 63.074 27.0061C64.0532 26.5036 64.8862 25.8116 65.5727 24.9299C66.2593 24.0481 66.6934 23.0668 66.8751 21.986C67.0569 20.8862 66.9913 19.905 66.6783 19.0422C66.3653 18.1794 65.8352 17.5015 65.0881 17.0085C64.341 16.5155 63.4424 16.269 62.3924 16.269C61.3626 16.269 60.3581 16.5155 59.3787 17.0085C58.3994 17.5015 57.5665 18.1889 56.88 19.0706C56.1934 19.9523 55.7592 20.9241 55.5775 21.986C55.3958 23.0858 55.4665 24.0765 55.7896 24.9583C56.1126 25.84 56.6477 26.5274 57.3948 27.0203C58.142 27.5134 59.0305 27.7598 60.0602 27.7598ZM77.2902 29.9784C75.897 29.9784 74.6804 29.6276 73.6404 28.926C72.6006 28.2244 71.8585 27.2621 71.4143 26.0391C70.97 24.8161 70.869 23.4556 71.1113 21.9576C71.3537 20.4975 71.9292 19.1607 72.8378 17.9472C73.7465 16.7336 74.852 15.776 76.1544 15.0744C77.4568 14.3728 78.8047 14.0221 80.1979 14.0221C81.6316 14.0221 82.8482 14.3728 83.8477 15.0744C84.8472 15.776 85.554 16.7288 85.9679 17.933C86.3818 19.137 86.4575 20.4785 86.195 21.9576C85.9528 23.4176 85.3975 24.7592 84.5292 25.9822C83.6609 27.2052 82.5907 28.177 81.3186 28.8976C80.0465 29.6181 78.7037 29.9784 77.2902 29.9784ZM78.1383 27.7314C79.1681 27.7314 80.1726 27.4802 81.152 26.9777C82.1313 26.4752 82.9643 25.7879 83.6508 24.9156C84.3374 24.0434 84.7715 23.0668 84.9532 21.986C85.1349 20.8862 85.0693 19.9002 84.7563 19.028C84.4434 18.1557 83.9133 17.4731 83.1662 16.9801C82.4191 16.4871 81.5307 16.2406 80.5008 16.2406C79.4508 16.2406 78.4361 16.4919 77.4568 16.9943C76.4775 17.4968 75.6446 18.1889 74.958 19.0706C74.2714 19.9523 73.8373 20.9241 73.6556 21.986C73.4739 23.0858 73.5395 24.0718 73.8525 24.9441C74.1655 25.8163 74.6955 26.4989 75.4426 26.9919C76.1897 27.485 77.0883 27.7314 78.1383 27.7314ZM86.1648 14.5625H88.6484L86.195 29.438H83.7417L86.1648 14.5625ZM94.5506 29.9784C92.6121 29.9784 91.2289 29.4143 90.401 28.2861C89.5731 27.1578 89.351 25.475 89.7346 23.2375L91.1885 14.5625H93.6419L92.0972 23.8632C91.8952 25.0199 92.0568 25.9585 92.5817 26.679C93.1068 27.3996 93.9751 27.7598 95.1866 27.7598C96.3375 27.7598 97.433 27.4992 98.4729 26.9777C99.5127 26.4563 100.396 25.7072 101.123 24.7307C101.85 23.7542 102.345 22.6117 102.607 21.3034L103.758 21.7016C103.435 23.3512 102.799 24.8018 101.85 26.0533C100.901 27.3048 99.7804 28.2719 98.488 28.9545C97.1957 29.6371 95.8832 29.9784 94.5506 29.9784ZM103.728 14.5625H106.181L102.607 35.7807H100.154L103.728 14.5625ZM111.69 13.4817L109.024 29.438H106.541L109.872 9.67034H112.356L122.109 26.1955L124.895 9.67034H127.349L124.017 29.438H121.2L111.69 13.4817ZM131.797 15.2166C132.019 13.8893 132.554 12.69 133.402 11.6186C134.25 10.5473 135.311 9.71297 136.583 9.11573C137.855 8.51842 139.208 8.21973 140.641 8.21973H141.944L141.55 10.1823H141.096C139.319 10.1823 137.799 10.6184 136.537 11.4907C135.275 12.3629 134.523 13.548 134.281 15.046L131.858 29.438H129.404L131.797 15.2166ZM127.224 15.8993H141.277L140.914 18.1178H126.86L127.224 15.8993ZM145.336 8.21973H147.789L144.215 29.438H141.762L145.336 8.21973ZM154.721 29.9784C153.106 29.9784 151.708 29.6371 150.526 28.9545C149.345 28.2719 148.487 27.3238 147.952 26.1102C147.417 24.8966 147.301 23.5219 147.604 21.986C147.866 20.5259 148.497 19.1892 149.497 17.9756C150.496 16.7621 151.708 15.7997 153.131 15.0887C154.555 14.3776 156.044 14.0221 157.599 14.0221C159.477 14.0221 160.996 14.4061 162.157 15.174C163.318 15.9419 164.096 16.9374 164.489 18.1605C164.883 19.3835 164.949 20.6587 164.686 21.986C164.545 22.5739 164.414 22.972 164.293 23.1806H150.027C149.885 24.5648 150.294 25.6646 151.253 26.4799C152.212 27.2953 153.55 27.703 155.267 27.703C156.397 27.703 157.462 27.4802 158.462 27.0346C159.462 26.589 160.315 26.0249 161.021 25.3423L162.899 26.5368C161.97 27.5797 160.779 28.4141 159.325 29.0398C157.871 29.6655 156.337 29.9784 154.721 29.9784ZM162.293 21.019C162.435 20.2415 162.339 19.483 162.006 18.7435C161.673 18.0041 161.117 17.402 160.34 16.9374C159.563 16.4729 158.608 16.2406 157.478 16.2406C155.923 16.2406 154.509 16.672 153.237 17.5348C151.965 18.3975 151.036 19.5589 150.451 21.019H162.293ZM171.224 21.8154L165.197 14.5625H168.62L173.254 20.3648L179.887 14.5625H183.31L174.708 21.9007L180.977 29.438H177.555L172.678 23.3228L165.53 29.438H162.077L171.224 21.8154Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="grid gap-8  justify-items-center  sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex flex-col space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    CONTACT US
                  </h3>
                  <a
                    href="mailto:hello@paynflex.com"
                    className="text-sm hover:text-white"
                  >
                    hello@paynflex.com
                  </a>
                </div>
                <p className="text-sm leading-relaxed ">
                  PayNFlex is a financial technology company, not a bank.
                  Banking services are provided by licensed banking partners.
                </p>
                <div className="flex gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_18776)">
                      <path
                        d="M23.9765 7.05607C23.9203 5.78085 23.7141 4.90416 23.4187 4.14449C23.1139 3.33812 22.6451 2.61617 22.0308 2.01602C21.4307 1.40652 20.704 0.932921 19.9069 0.632936C19.1429 0.337529 18.2708 0.131312 16.9955 0.0750879C15.7108 0.0141019 15.303 0 12.0445 0C8.78606 0 8.3782 0.0141019 7.09823 0.0703262C5.82301 0.126551 4.94632 0.332951 4.18683 0.628174C3.38028 0.932922 2.65833 1.40176 2.05818 2.01602C1.44868 2.61617 0.975265 3.34288 0.675096 4.13991C0.379689 4.90416 0.173472 5.77609 0.117248 7.0513C0.0562619 8.33604 0.04216 8.7439 0.04216 12.0023C0.04216 15.2608 0.0562619 15.6686 0.112486 16.9486C0.168711 18.2238 0.375111 19.1005 0.670518 19.8602C0.975265 20.6666 1.44868 21.3885 2.05818 21.9887C2.65833 22.5982 3.38504 23.0718 4.18207 23.3718C4.94632 23.6672 5.81825 23.8734 7.09365 23.9296C8.37344 23.986 8.78148 23.9999 12.0399 23.9999C15.2984 23.9999 15.7062 23.986 16.9862 23.9296C18.2614 23.8734 19.1381 23.6672 19.8976 23.3718C21.5105 22.7482 22.7857 21.4729 23.4093 19.8602C23.7046 19.096 23.911 18.2238 23.9672 16.9486C24.0234 15.6686 24.0375 15.2608 24.0375 12.0023C24.0375 8.7439 24.0327 8.33604 23.9765 7.05607ZM21.8153 16.8549C21.7636 18.027 21.5668 18.6599 21.4027 19.0819C20.9994 20.1274 20.1696 20.9572 19.124 21.3605C18.7021 21.5246 18.0645 21.7215 16.897 21.7729C15.6311 21.8293 15.2515 21.8433 12.0493 21.8433C8.84704 21.8433 8.46263 21.8293 7.20133 21.7729C6.02923 21.7215 5.39629 21.5246 4.97434 21.3605C4.45403 21.1682 3.98043 20.8634 3.59602 20.4649C3.1975 20.0758 2.89275 19.6069 2.70046 19.0866C2.53636 18.6647 2.33948 18.027 2.28802 16.8596C2.23161 15.5937 2.21769 15.2139 2.21769 12.0117C2.21769 8.80946 2.23161 8.42505 2.28802 7.16394C2.33948 5.99183 2.53636 5.3589 2.70046 4.93694C2.89275 4.41645 3.1975 3.94303 3.60078 3.55843C3.98977 3.15992 4.45861 2.85517 4.9791 2.66306C5.40106 2.49896 6.03875 2.30209 7.2061 2.25044C8.47197 2.19422 8.8518 2.18011 12.0538 2.18011C15.2608 2.18011 15.6405 2.19422 16.9018 2.25044C18.0739 2.30209 18.7068 2.49896 19.1288 2.66306C19.6491 2.85517 20.1227 3.15992 20.5071 3.55843C20.9056 3.94761 21.2104 4.41645 21.4027 4.93694C21.5668 5.3589 21.7636 5.99641 21.8153 7.16394C21.8715 8.42981 21.8856 8.80946 21.8856 12.0117C21.8856 15.2139 21.8715 15.589 21.8153 16.8549Z"
                        fill="white"
                        fill-opacity="0.65"
                      />
                      <path
                        d="M12.0445 5.83691C8.64083 5.83691 5.87924 8.59832 5.87924 12.0022C5.87924 15.406 8.64083 18.1674 12.0445 18.1674C15.4484 18.1674 18.2098 15.406 18.2098 12.0022C18.2098 8.59832 15.4484 5.83691 12.0445 5.83691ZM12.0445 16.0014C9.83637 16.0014 8.04525 14.2105 8.04525 12.0022C8.04525 9.79386 9.83637 8.00293 12.0445 8.00293C14.2528 8.00293 16.0438 9.79386 16.0438 12.0022C16.0438 14.2105 14.2528 16.0014 12.0445 16.0014Z"
                        fill="white"
                        fill-opacity="0.65"
                      />
                      <path
                        d="M19.893 5.59312C19.893 6.38795 19.2485 7.03242 18.4535 7.03242C17.6587 7.03242 17.0142 6.38795 17.0142 5.59312C17.0142 4.7981 17.6587 4.15381 18.4535 4.15381C19.2485 4.15381 19.893 4.7981 19.893 5.59312Z"
                        fill="white"
                        fill-opacity="0.65"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_18776">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2342 10.1624L22.9766 0H20.9049L13.3139 8.82384L7.25092 0H0.258026L9.42639 13.3432L0.258026 24H2.32982L10.3462 14.6817L16.7491 24H23.742L14.2337 10.1624H14.2342ZM11.3966 13.4608L10.4676 12.1321L3.07631 1.55961H6.25847L12.2233 10.0919L13.1523 11.4206L20.9059 22.5113H17.7237L11.3966 13.4613V13.4608Z"
                      fill="white"
                      fill-opacity="0.65"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-white">COMPANY</h3>
              <ul className="space-y-2 text-[12px]">
                <li>
                  <Link to="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-white">CONNECT</h3>
              <ul className="space-y-2 text-[12px]">
                <li>
                  <Link to="#" className="hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-white">LEGAL</h3>
              <ul className="space-y-2 text-[12px]">
                <li>
                  <Link to="#" className="hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Acceptable Use Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
