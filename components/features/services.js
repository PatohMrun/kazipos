"use client";
import React, { useState } from "react";
import {
  Payments,
  Pc,
  Inventory,
  User,
  Store,
  Thumbs,
} from "@/components/icons";
import { motion } from "framer-motion";

const POSSystemFeatures = () => {
  const [activePopup, setActivePopup] = useState(null);

  return (
    <div className=" mx-auto py-10 md:px-6   rounded-lg font-helvetica-regular">
      <motion.div
        className="flex flex-wrap items-center gap-2 text-base text-small md:text-medium leading-8 md:leading-14"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div
          className="relative "
          onMouseEnter={() => setActivePopup("payments")}
          onMouseLeave={() => setActivePopup(null)}
        >
          <button className="inline-flex items-center cursor-pointer gap-1 text-red-600  shadow-[inset_0_-9px_8px_rgba(0,0,0,0.9)]  shadow-[#EAEAEA] rounded-2xl px-3 py-1">
            <Payments /> Accepting payments?
          </button>
          {activePopup === "payments" && (
            <div className="absolute z-10 top-full left-0 mt-2 py-6   bg-red_reign border border-gray-200 rounded-lg shadow-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-neutral-light flex items-center gap-1 text-[20px] md:text-[26px] lg:text-[32px] leading-6 md:leading-10">
                  <span className="bg-neutral-light h-10 w-10 rounded-full flex items-center justify-center ">
                    <Payments />
                  </span>{" "}
                  Accepting payments?
                </span>
              </div>
              <p className="text-tiny leading-6 md:leading-[28px] md:text-small text-neutral-highlight">
                Accept M-Pesa, credit and debit cards, QR codes, and contactless
                payments with low transaction fees and instant settlement.
              </p>
            </div>
          )}
        </div>

        <span>That&apos;s just the start. Our all-in-one</span>

        <div
          className="relative"
          onMouseEnter={() => setActivePopup("pos")}
          onMouseLeave={() => setActivePopup(null)}
        >
          <button className="inline-flex items-center cursor-pointer gap-1 text-red-600  shadow-[inset_0_-9px_8px_rgba(0,0,0,0.9)] shadow-[#EAEAEA] rounded-2xl px-3 py-1">
            <Pc /> POS system
          </button>
          {activePopup === "pos" && (
            <div className="absolute z-10 top-full left-0 mt-2 bg-red_reign border border-gray-200 rounded-lg shadow-xl p-4 min-w-[16rem]">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-neutral-light flex items-center gap-1 text-[20px] md:text-[26px] lg:text-[32px] leading-6 md:leading-10">
                  <span className="bg-neutral-light h-10 w-10 rounded-full flex items-center justify-center">
                    <Pc />
                  </span>{" "}
                  POS system
                </span>
              </div>
              <p className="text-tiny leading-6 md:leading-[28px] md:text-small text-neutral-highlight">
                Our intuitive point-of-sale system works across all devices with
                real-time synchronization and offline capability.
              </p>
            </div>
          )}
        </div>

        <span>goes beyond transactions—</span>

        <div
          className="relative"
          onMouseEnter={() => setActivePopup("inventory")}
          onMouseLeave={() => setActivePopup(null)}
        >
          <button className="inline-flex items-center cursor-pointer gap-1 text-red-600  shadow-[inset_0_-9px_8px_rgba(0,0,0,0.9)] shadow-[#EAEAEA] rounded-2xl px-3 py-1">
            <Inventory /> track inventory
          </button>
          {activePopup === "inventory" && (
            <div className="absolute z-10 top-full left-0 mt-2 bg-red_reign border border-gray-200 rounded-lg shadow-xl p-4 min-w-[16rem]">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-neutral-light flex items-center gap-1 text-[20px] md:text-[26px] lg:text-[32px] leading-6 md:leading-10">
                  <span className="bg-neutral-light h-10 w-10 rounded-full flex items-center justify-center">
                    {" "}
                    <Inventory />
                  </span>
                  Track inventory
                </span>
              </div>
              <p className="text-tiny leading-6 md:leading-[28px] md:text-small text-neutral-highlight">
                Manage stock levels, set automatic reorder alerts, and track
                product performance with detailed analytics and reports.
              </p>
            </div>
          )}
        </div>

        <span>, easily</span>

        <div
          className="relative"
          onMouseEnter={() => setActivePopup("employees")}
          onMouseLeave={() => setActivePopup(null)}
        >
          <button className="inline-flex items-center cursor-pointer gap-1 text-red-600  shadow-[inset_0_-9px_8px_rgba(0,0,0,0.9)] shadow-[#EAEAEA] rounded-2xl px-3 py-1">
            <User /> manage employees
          </button>
          {activePopup === "employees" && (
            <div className="absolute z-10 top-full left-0 mt-2 bg-red_reign border border-gray-200 rounded-lg shadow-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-neutral-light flex items-center gap-1 text-[20px] md:text-[26px] lg:text-[32px] leading-6 md:leading-10">
                  <span className="bg-neutral-light min-h-7 min-w-7 p-2 rounded-full flex items-center justify-center">
                    <User />
                  </span>{" "}
                  Manage employees
                </span>
              </div>
              <p className="text-tiny leading-6 md:leading-[28px] md:text-small text-neutral-light">
                Set permissions, track shifts, manage commissions, and monitor
                performance all in one integrated system.
              </p>
            </div>
          )}
        </div>

        <span>, and streamline operations with powerful tools for</span>

        <div
          className="relative"
          onMouseEnter={() => setActivePopup("sales")}
          onMouseLeave={() => setActivePopup(null)}
        >
          <button className="inline-flex items-center cursor-pointer gap-1 text-red-600  shadow-[inset_0_-9px_8px_rgba(0,0,0,0.9)] shadow-[#EAEAEA] rounded-2xl px-3 py-1">
            <Store /> online sales
          </button>
          {activePopup === "sales" && (
            <div className="absolute z-10 top-full left-0 mt-2 bg-red_reign border border-gray-200 rounded-lg shadow-xl p-4 min-w-[16rem]">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-neutral-light flex items-center gap-1 text-[20px] md:text-[26px] lg:text-[32px] leading-6 md:leading-10">
                  <span className="bg-neutral-light min-h-7 min-w-7 p-2 rounded-full flex items-center justify-center">
                    <Store />
                  </span>{" "}
                  Online sales
                </span>
              </div>
              <p className="text-tiny leading-6 md:leading-[28px] md:text-small text-neutral-light">
                Seamlessly integrate your physical and digital storefront with
                unified inventory, pricing, and customer data.
              </p>
            </div>
          )}
        </div>

        <span>,</span>

        <div
          className="relative"
          onMouseEnter={() => setActivePopup("loyalty")}
          onMouseLeave={() => setActivePopup(null)}
        >
          <button className="inline-flex items-center cursor-pointer gap-1 text-red-600  shadow-[inset_0_-9px_8px_rgba(0,0,0,0.9)] shadow-[#EAEAEA] rounded-2xl px-3 py-1">
            <Thumbs /> customer loyalty
          </button>
          {activePopup === "loyalty" && (
            <div className="absolute z-10 top-full left-0 mt-2 bg-red_reign border border-gray-200 rounded-lg shadow-xl p-4 min-w-[16rem]">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-neutral-light flex items-center gap-1 text-[20px] md:text-[26px] lg:text-[32px] leading-6 md:leading-10">
                  <span className="bg-neutral-light min-h-7 min-w-7 p-2 rounded-full flex items-center justify-center">
                    <Thumbs />
                  </span>{" "}
                  Customer loyalty
                </span>
              </div>
              <p className="text-tiny leading-6 md:leading-[28px] md:text-small text-neutral-light">
                Create customizable reward programs, track customer behavior,
                and send targeted promotions to increase retention.
              </p>
            </div>
          )}
        </div>
        <span>, and more.</span>
      </motion.div>
    </div>
  );
};

export default POSSystemFeatures;
