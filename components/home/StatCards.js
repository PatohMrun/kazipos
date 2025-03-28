"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const StatCard = ({ heading, content }) => {
  const [targetNumber, setTargetNumber] = useState(0);
  const [suffix, setSuffix] = useState("");
  const [prefix, setPrefix] = useState("");
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (value) =>
    Number.isInteger(targetNumber)
      ? Math.round(value)
      : Number(value.toFixed(2))
  );

  // Reference for detecting visibility
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    // Parse the heading into numeric and non-numeric parts
    const parseHeading = () => {
      const numericMatch = heading.match(/^([0-9]*\.?[0-9]+)/);
      if (numericMatch) {
        const numberPart = parseFloat(numericMatch[0]);
        setTargetNumber(numberPart);
        setSuffix(heading.substring(numericMatch[0].length).trim());
      } else {
        const alternateMatch = heading.match(/([0-9]*\.?[0-9]+)/);
        if (alternateMatch) {
          const numberPart = parseFloat(alternateMatch[0]);
          setTargetNumber(numberPart);
          const parts = heading.split(alternateMatch[0]);
          setPrefix(parts[0].trim());
          setSuffix(parts[1].trim());
        } else {
          setSuffix(heading);
        }
      }
    };
    parseHeading();
  }, [heading]);

  useEffect(() => {
    if (isInView && targetNumber > 0) {
      const animation = animate(count, targetNumber, {
        duration: 2,
        ease: "easeOut",
      });
      return () => animation.stop();
    }
  }, [isInView, targetNumber, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full bg-neutral-light px-4 py-4 min-h-56 2xl:min-h-72 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <motion.h1 className="text-center text-large md:text-huge 2xl:text-[5rem] text-red-600 font-almarena-semibold">
        {prefix && <span>{prefix} </span>}
        {targetNumber > 0 ? <motion.span>{roundedCount}</motion.span> : ""}
        {suffix && <span> {suffix}</span>}
      </motion.h1>
      <motion.p
        className="text-center text-tiny md:text-small 2xl:text-[1.75rem] text-red-600 max-w-[80%] mx-auto mt-2 font-helvetica-regular"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {content}
      </motion.p>
    </motion.div>
  );
};

export default StatCard;
