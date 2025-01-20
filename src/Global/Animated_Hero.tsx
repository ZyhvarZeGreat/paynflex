import { useEffect, useState } from "react";
import front from "@/assets/hero_image/front.png";
import left from "@/assets/hero_image/left.png";
import right from "@/assets/hero_image/right.png";
import { motion } from "framer-motion";
import home_logo from "@/assets/home_logo.png";
import play_store from "@/assets/play store download button.png";
import app_store from "@/assets/app store download button.png";
import { Link } from "react-router";
import hero_blur from "@/assets/hero_image/hero-blur.png";
export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAngled, setIsAngled] = useState(false);

  useEffect(() => {
    // Small delay to ensure initial positions are set
    const fadeTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Angle animation after fade in
    const angleTimer = setTimeout(() => {
      setIsAngled(true);
    }, 1600); // 1.6s = 100ms initial delay + 1.5s for angle animation

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(angleTimer);
    };
  }, []);

  return (
    <section className="relative lg:h-[700px] overflow-hidden flex items-center px-4 pt-16 md:px-6 lg:px-8">
      {/* Hero blur background - positioned in top right */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 z-0">
        <img
          src={hero_blur}
          alt="Background blur effect"
          className="w-full h-full object-cover opacity-40"
          style={{
            filter: "blur(40px)",
            transform: "scale(1.1)", // Slightly scale up to avoid blur edges
            transformOrigin: "top right",
          }}
        />
      </div>
      <div className="mx-auto w-full flex flex-col max-w-screen-xl relative z-10">
        <div className="w-full pb-8">
          <img
            src={home_logo}
            alt="PayNFlex Logo"
            width={150}
            height={40}
            className="mb-8"
          />
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="max-w-xl flex flex-col justify-center lg:max-w-lg">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-black sm:text-6xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Pay Smarter
                <br />
                Faster,{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-[#0F40D3]"
              >
                Anywhere
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-4 text-lg text-[#2B2D32BF]"
            >
              Make payments effortlessly - simple, secure, and fast.
            </motion.p>
            <div className="mt-4 self-start mb-32 flex gap-4">
              <Link
                to="#"
                className="rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                <img
                  src={play_store}
                  alt="Download on Play Store"
                  className="h-16 w-auto"
                />
              </Link>
              <Link to="#" className="rounded-lg border text-sm font-medium">
                <img
                  src={app_store}
                  alt="Download on App Store"
                  className="h-16 w-auto"
                />
              </Link>
            </div>
          </div>
          <div className="relative h-[600px] flex  justify-end  w-full">
            {/* Left Phone */}
            <div
              className={`absolute left-1/2 top-1/2 -translate-x-[85%] -translate-y-1/2 transition-all duration-1000
                ${isVisible ? "opacity-100" : "opacity-0"}
                ${isAngled ? "-rotate-12" : "rotate-0"}
              `}
            >
              <img
                src={left}
                alt="PayNFlex App Interface Left"
                width={300}
                height={600}
                className="h-auto w-auto"
              />
            </div>

            {/* Center Phone */}
            <div
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000
                ${isVisible ? "opacity-100" : "opacity-0"}
              `}
              style={{ zIndex: 10 }}
            >
              <img
                src={front}
                alt="PayNFlex App Interface Center"
                width={300}
                height={600}
                className="h-auto w-auto"
              />
            </div>

            {/* Right Phone */}
            <div
              className={`absolute left-1/2 top-1/2 translate-x-[-15%] -translate-y-1/2 transition-all duration-1000
                ${isVisible ? "opacity-100" : "opacity-0"}
                ${isAngled ? "rotate-12" : "rotate-0"}
              `}
            >
              <img
                src={right}
                alt="PayNFlex App Interface Right"
                width={300}
                height={600}
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
