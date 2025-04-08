"use client";
import { useEffect, useState, useRef } from "react";
import AppShowcase from "@/components/home/AppShowCase";
import Hero from "@/components/home/Hero";
import HomeCarousel from "@/components/home/HomeCarousel";
import StatCard from "@/components/home/StatCards";
import StackedCards from "@/components/home/StackedCards";
import InsightsCard from "@/components/home/InsightsCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeDown, fadeUp } from "@/components/motions/motionVariants.js";
import MidInsight from "@/components/home/MidInsight";
import DeckCards from "@/components/home/DeckCards";
import HomeCarousel2 from "@/components/home/HomeCarousel2";

export default function Home() {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false); // Use ref to track animation state
  const counterRef = useRef(null); // Ref for the counter element

  // Animation function
  const animateCounter = () => {
    if (hasAnimated.current) return; // Skip if already animated

    let start = 0;
    const end = 24;
    const duration = 750; // 0.75 seconds
    const increment = end / (duration / 16); // ~60 FPS
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
        hasAnimated.current = true; // Mark as animated
      } else {
        setCount(Math.round(current));
      }
    }, 16);
  };

  // Trigger animation on page reload
  useEffect(() => {
    if (counterRef.current && counterRef.current.getBoundingClientRect().top < window.innerHeight) {
      // If counter is visible on load, animate immediately
      animateCounter();
    }
  }, []);

  // Trigger animation when first visible (using Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          animateCounter();
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* hero section */}
      <Hero />

      {/* section 2 */}
      <motion.div
        {...fadeDown}
        className="px-6 md:px-14 2xl:px-32 w-full md:w-3/4 lg:w-1/2 my-32 2xl:my-40 space-y-4"
      >
        <h2 className="text-medium md:text-large 2xl:text-huge leading-12 font-semibold text-red_republic font-almarena-semibold">
          Business, but better
        </h2>
        <p className="text-tiny md:text-small 2xl:text-[1.75rem] font-helvetica-regular text-baragon_brown">
          Our goal is to make business operations better. Whether you&apos;re
          processing sales, managing inventory, or tracking transactions, Kazi
          pos simplifies it all for you.
        </p>
      </motion.div>

      {/* image div */}
      <motion.div
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="my-8 bg-red_shimmer"
      >
        <Image
          src="/assets/Business-Better.jpg"
          alt="Business operations dashboard"
          width={1920}
          height={1080}
          className="w-[90%] md:w-[93%] 2xl:w-[98%] max-w-[1700px] h-auto mx-auto rounded-xl"
        />
      </motion.div>

      <div className="2xl:pl-32 ">
        <HomeCarousel />
      </div>

      {/* section 3 */}
      <div className="bg-white px-4 py-6 2xl:px-16">
        {/* Top section - stacks on mobile */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-4">
          <StatCard
            heading="2.12X"
            content="Business transaction improvement for 48% of users at more than 95% of certainty with first month of use"
          />
          <StatCard
            heading="98%"
            content="Client approval rating across our day to day client base"
          />
        </div>

        {/* Bottom section - reorganizes on smaller screens */}
        <div className="my-6 flex flex-col items-center lg:flex-row gap-4 lg:gap-6 2xl:gap-12">
          {/* Left section - full width on mobile, partial on desktop */}
          <div className="flex flex-col items-center space-y-4 w-full lg:w-1/2">
            <div className="w-full min-h-36 2xl:min-h-52 bg-neutral-light px-4 py-4 rounded-md flex items-center justify-center">
              <p className="text-center text-tiny md:text-small 2xl:text-[1.75rem] text-black font-helvetica-regular">
                We understand the impact of a good POS on your business
              </p>
            </div>

            {/* Stat cards - stack on mobile, side by side on tablet+ */}
            <div className="flex flex-col items-center sm:flex-row sm:justify-between w-full gap-4">
              <StatCard
                heading="3 Years"
                content="of collective experience in multiple fields"
              />
              <StatCard
                heading="1.2K"
                content="busiesses have received & tested kazipos"
              />
            </div>
          </div>

          {/* Right section - full width on mobile */}
          <motion.div
            ref={counterRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 min-h-96 2xl:min-h-[520px] bg-neutral-light px-4 py-6 flex flex-col justify-center items-center rounded-md"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-large md:text-huge 2xl:text-[5rem] font-semibold text-red_republic font-almarena-regular"
            >
              {count} Hrs
            </motion.h1>
            <p className="text-center text-tiny md:text-small 2xl:text-[1.75rem] text-red_republic max-w-full md:max-w-[80%] font-helvetica">
              Customer Support
            </p>
          </motion.div>
        </div>
      </div>

      {/* section 4 */}
      <div className="mb-36 sm:mb-56 md:mb-6"><AppShowcase /></div>

      <div className=""><DeckCards /></div>
    </div>
  );
}