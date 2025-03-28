"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const StackedCards = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const card1InView = useInView(card1Ref, { amount: 0.3, once: false });
  const card2InView = useInView(card2Ref, { amount: 0.3, once: false });
  const card3InView = useInView(card3Ref, { amount: 0.3, once: false });

  return (
    <div className="relative h-[2000px] my-16 mx-6 border-4 border-purple-500">
      <div className="sticky top-0 bg-white p-2 z-50">
        Debug: Cards in view? Card1: {card1InView ? "YES" : "NO"}, Card2:{" "}
        {card2InView ? "YES" : "NO"}, Card3: {card3InView ? "YES" : "NO"}
      </div>

      {/* Card 1 */}
      <motion.div
        ref={card1Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={card1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="bg-red_republic rounded-xl p-8 text-white absolute top-0 left-0 right-0 z-30 border-4 border-yellow-500"
      >
        <h2 className="text-2xl md:text-huge  font-almarena-regular mb-6">
          Transact on all currencies (CARD 1)
        </h2>
        <p className="mb-4">
          Managing sales is effortless with KaziDesk. Say goodbye to the hassle
          of manual transactions and enjoy seamless, automated payment
          processing.
        </p>
        <div className="flex items-center mt-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">
            01
          </div>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        ref={card2Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={card2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-baragon_brown rounded-xl p-8 text-white absolute top-[300px] left-0 right-0 z-20 border-4 border-green-500"
      >
        <h2 className="text-3xl md:text-5xl font-almarena-regular mb-6">
          Seamless money management (CARD 2)
        </h2>
        <p className="mb-4">
          Stay connected with your loved ones across Europe and manage your
          finances with ease.
        </p>
        <div className="flex items-center mt-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">
            02
          </div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        ref={card3Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={card3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-red_republic rounded-xl p-8 text-white absolute top-[600px] left-0 right-0 z-10 border-4 border-blue-500"
      >
        <h2 className="text-3xl md:text-5xl font-almarena-regular mb-6">
          Easier Payments (CARD 3)
        </h2>
        <p className="mb-4">
          Instant payments made easy with KaziDesk. Whether in-store or online,
          process transactions seamlessly with a tap and enjoy secure,
          hassle-free shopping.
        </p>
        <div className="flex items-center mt-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">
            03
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StackedCards;
