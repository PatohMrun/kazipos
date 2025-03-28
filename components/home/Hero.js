"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  // fade in from left animation
  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
    viewport: { once: true },
  };
  // fade in from right animation
  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1, delay: 1.3 },
    viewport: { once: true },
  };
  // fade in from bottom animation
  const fadeInBottom = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
    viewport: { once: true },
  };
  // fade in from top animation
  const fadeInTop = {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 1 },
    viewport: { once: true },
  };

  return (
    <div className="w-full h-[95vh] sm:h-[100vh] bg-black relative">
      {/* Hero Image and Overlay */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/Home_hero.webp"
          alt="hero"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </motion.div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full text-white">
          {/* Left content */}
          <motion.div
            {...fadeInLeft}
            className="flex flex-col text-4xl sm:text-5xl md:text-huge 2xl:text-[5rem] font-semibold mb-6 md:mb-0 font-almarena-semibold"
          >
            <h1>Your Business.</h1>
            <h1>Your Way.</h1>
          </motion.div>

          {/* Right content */}
          <div className="flex flex-col gap-4 w-full md:w-[40%] lg:w-[40%]">
            <motion.p
              {...fadeInTop}
              className="text-sm md:text-small 2xl:text-[1.75rem] font-helvetica-semibold"
            >
              Make business management accessible, easy, efficient, and
              hassle-free with KaziDesk POS
            </motion.p>
            <motion.div
              {...fadeInRight}
              className="flex items-center justify-start gap-4 flex-wrap font-inter my-2 "
            >
              <Link
                href="/sign_in"
                className="bg-red_republic text-white px-4 sm:px-6 md:px-8 py-2 2xl:py-4 rounded-full text-sm md:text-lg 2xl:text-2xl text-nowrap hover:bg-blue-900 hover:text-white hover:transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/sign_up"
                className="bg-white text-red_reign px-4 sm:px-6 md:px-8 py-2 2xl:py-4 rounded-full text-sm md:text-lg 2xl:text-2xl text-nowrap hover:bg-blue-900 hover:text-white hover:transform hover:scale-105"
              >
                Book a Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
