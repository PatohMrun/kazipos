"use client";
import FAQ from "@/components/faq-princing";
import { Bullet } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeDown,
  fadeLeft,
  fadeUp,
} from "@/components/motions/motionVariants.js";

const Pricing = () => {
  return (
    <main>
      {/* hero */}
      <motion.section className="min-h-[70vh] px-[20px] md:px-[64px] py-10 2xl:py-20 ">
        <div>
          <motion.div
          // {...fadeLeft}
          >
            <motion.h1
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: false }}
              className=" text-medium md:text-large lg:text-huge 2xl:text-[5rem] font-semibold  text-red_reign mb-3 pt-26 2xl:pt-32 md:max-w-3/4 leading-12 md:leading-16 2xl:leading-18 font-almarena-medium"
            >
              Affordable pricing designed for growth and success.
            </motion.h1>
          </motion.div>
          <motion.div
            className=" w-full flex justify-end py-5"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            viewport={{ once: false }}
          >
            <p className="max-w-md 2xl:max-w-2xl text-red_reign font-helvetica-regular py-3 md:py-6 2xl:py-8 text-tiny md:text-small 2xl:text-[2rem]">
              Start for free and add tools as needed, or explore our plans for
              complete access.
            </p>
          </motion.div>
        </div>
        <div className="relative w-full h-64 md:h-96 2xl:h-[40rem] rounded-lg overflow-hidden">
          <motion.div
            initial={{ scale: 1.3 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <Image
              src="/assets/pricing_image.jpg"
              alt="hero"
              width={2500}
              height={2500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>
      <section className="py-16 bg-gray-50 mx-auto px-[20px] md:px-[64px]">
        <div className=" pb-8 ">
          <motion.div
            initial={{ opacity: 0.7, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <h2 className="text-medium leading-12 py-10 2xl:py-20 md:text-large 2xl:text-[4rem] font-semibold text-left text-red_reign font-almarena-medium">
              One system. Built for every kind of business.
            </h2>
            <p className="text-small md:text-medium 2xl:text-[3rem] py-8 text-left text-red_reign mt-2  font-almarena-medium">
              Plans for every stage
            </p>
          </motion.div>
          <motion.div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Free Plan */}
            <motion.div
              {...fadeUp}
              className=" rounded-xl shadow-sm px-[10px] md:px-[30px] 2xl:px-[60px] py-6 2xl:py-8 border border-gray-200 font-helvetica flex flex-col h-full"
            >
              <h3 className="text-small md:text-medium 2xl:text-[3rem] text-red_reign font-semibold font-helvetica-semibold">
                Free
              </h3>
              <p className="text-red_reign my-6 text-tiny md:text-small 2xl:text-[2rem] flex-grow font-helvetica-regular ">
                Sell in person, online, over the phone, or out in the field. No
                setup fees or monthly fees—only pay when you take a payment.
              </p>
              <p className="text-2xl 2xl:text-[3rem] font-bold mt-6 font-helvetica-semibold">
                <span className="text-red_republic">Ksh 0</span> /month
              </p>
              <div className="mt-auto">
                <button className="w-full bg-red_reign text-white py-2 2xl:py-4 my-4 rounded-lg hover:bg-red-800  font-helvetica-regular 2xl:text-[2rem]">
                  Get Started
                </button>
              </div>
            </motion.div>

            {/* Plus Plan */}
            <motion.div
              {...fadeUp}
              className=" rounded-xl shadow-sm px-[10px] md:px-[30px] 2xl:px-[60px] py-6 2xl:py-8 border border-gray-200 font-helvetica flex flex-col h-full"
            >
              <h3 className="text-small md:text-medium 2xl:text-[3rem] text-red_reign font-semibold font-helvetica-semibold">
                Plus
              </h3>
              <p className="text-red_reign my-6 text-tiny md:text-small 2xl:text-[2rem] flex-grow font-helvetica-regular">
                Access advanced features tailored for restaurants, retail, and
                appointment-based businesses. Upgrade anytime, cancel
                hassle-free.
              </p>
              <p className="text-2xl 2xl:text-[3rem] font-bold mt-4 font-helvetica-semibold">
                <span className="text-red_republic">Ksh 999</span> /month
              </p>
              <div className="mt-auto">
                <button className="w-full bg-red_reign text-white py-2 2xl:py-4 my-4 rounded-lg hover:bg-red-800 font-helvetica-regular 2xl:text-[2rem]">
                  Get Started
                </button>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              {...fadeUp}
              className=" rounded-xl shadow-sm px-[10px] md:px-[30px] 2xl:px-[60px] py-6 2xl:py-8 border border-gray-200 font-helvetica flex flex-col h-full"
            >
              <h3 className="text-small md:text-medium 2xl:text-[3rem] text-red_reign font-semibold font-helvetica-semibold">
                Premium
              </h3>
              <p className="text-red_reign my-6 text-tiny md:text-small 2xl:text-[2rem] flex-grow font-helvetica-regular">
                Build a custom plan designed to match the complexity of your
                operations. Flexible processing rates may be available based on
                eligibility.
              </p>
              <p className="text-2xl 2xl:text-[3rem] font-bold mt-4 font-helvetica-semibold">
                <span className="text-red_republic">Custom</span> /month
              </p>
              <div className="mt-auto">
                <button className="w-full bg-red_reign text-white py-2 2xl:py-4 my-4 rounded-lg hover:bg-red-800 font-helvetica-regular 2xl:text-[2rem]">
                  Get Started
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div {...fadeDown} className="mt-10 py-6  2xl:py-20 md:py-10 ">
          <h3 className="text-red_reign  text-small md:text-medium 2xl:text-[3rem] mb-5 font-almarena-medium">
            Included with every Kazi account:
          </h3>
          <div className="md:flex justify-around  font-helvetica-regular text-tiny md:text-small 2xl:text-[2rem]">
            <div className="leading-9 md:leading-12 2xl:leading-16">
              <p className="flex items-center gap-3">
                <Bullet /> Transfers as soon as the next business day
              </p>
              <p className="flex items-center gap-3">
                <Bullet />
                Robust fraud prevention to protect your revenue
              </p>
              <p className="flex items-center gap-3 ">
                <Bullet />
                Free KaziPOS app
              </p>
            </div>
            <div className="leading-9 md:leading-12 2xl:leading-16">
              <p className="flex items-center gap-3">
                <Bullet />
                Secure transactions with account protection
              </p>
              <p className="flex items-center gap-3">
                <Bullet />
                Easy dispute resolution{" "}
              </p>
              <p className="flex items-center gap-3">
                <Bullet />
                Fast online signup
              </p>
            </div>
            
            <div className="leading-9 md:leading-12 2xl:leading-16">
            <p className="flex items-center gap-3">
              <Bullet />
              24/7 support
            </p>
            <p className="flex items-center gap-3">
              <Bullet />
              Fraud prevention
            </p>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="bg-gray-50"><FAQ /></section>
        

      <section className="flex flex-col md:flex-row items-center bg-red_shimmer rounded-lg overflow-hidden px-[20px] md:px-[64px]  py-10 ">
        <motion.div
          {...fadeDown}
          className="w-full md:w-1/3 md:pr-8 mb-6 md:mb-0"
        >
          <h1 className="text-medium md:text-large 2xl:text-[4rem] leading-14 2xl:leading-18 font-bold text-red-900 mb-3 font-helvetica-semibold">
            Start selling with Kazipos.
          </h1>
          <p className="text-red_reign my-6 font-helvetica-regular 2xl:text-[2rem]">
            Set up is fast and secure.
          </p>
          <div className="flex flex-wrap gap-3  2xl:gap-8 font-inter">
            <Link href="/sign_up">
              <button className="bg-red_republic text-white font-medium py-2 px-6 rounded-md hover:bg-red-700 transition-colors 2xl:text-[2rem]">
                Get Started
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="bg-transparent text-red_republic border border-red-300 font-medium py-2 px-6 rounded-md hover:bg-red-100 transition-colors 2xl:text-[2rem]">
                Contact us
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div {...fadeUp} className="w-full md:w-2/3">
          <div className="relative h-[50vh] md:h-[70vh] w-full">
            <Image
              src="/assets/Point-Of-Sale.jpg"
              alt="A store employee using the Kazipos POS system with a customer"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Pricing;
