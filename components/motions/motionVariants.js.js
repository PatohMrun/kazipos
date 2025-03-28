import { delay } from "framer-motion";
import { motion } from "framer-motion";
export const fadeDown = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
  viewport: { once: true },
};

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
  viewport: { once: true },
};

export const fadeLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
  viewport: { once: true },
};
//   export const fadeRight = {
//     initial: { opacity: 0, y: 20 },
//     whileInView: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, delay:0.4 },
//     viewport: { once: true }
//   };
