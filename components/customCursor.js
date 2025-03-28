
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Detect if the device is a touchscreen
    const checkDevice = () => {
      setIsDesktop(!("ontouchstart" in window || navigator.maxTouchPoints > 0));
    };

    checkDevice(); // Run on mount
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Disable cursor on mobile

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isDesktop]);

  if (!isDesktop) return null; // Don't render on mobile

  return (
    <motion.div
      className="fixed top-0 left-0 w-1 h-1 bg-black rounded-full pointer-events-none"
      animate={{ x: position.x - 2, y: position.y - 2 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    />
  );
};

export default Cursor;
