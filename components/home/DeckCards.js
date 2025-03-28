import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import InsightsCard from "./InsightsCard";
import MidInsight from "./MidInsight";

const DeckCards = () => {
  // Reference for the outer container that reserves vertical space.
  const containerRef = useRef(null);

  // Track the scroll progress of the container.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Top Card:
  // - Moves vertically from 0 to -800px as scrollYProgress goes from 0 to 0.3.
  // - Remains fully opaque until 0.1 then fades out by 0.3.
  const topCardY = useTransform(scrollYProgress, [0, 0.3], [0, -1100]);
  // const topCardOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [1, 1, 1]);

  // Middle Card:
  // - Moves vertically from 0 to -800px as scrollYProgress goes from 0.3 to 0.6.
  // - Remains fully opaque until 0.4 then fades out by 0.6.
  const midCardY = useTransform(scrollYProgress, [0.3, 0.6], [0, -1100]);
  // const midCardOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6], [1, 1, 0]);

  // Bottom Card:
  // - Instead of translating upward, it remains fixed at y: 0.
  // - Its opacity remains at 1 so it never fades out.
  const bottomCardY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const bottomCardOpacity = 1;

  return (
    // Outer container that stays in the document flow (300vh height).
    <div ref={containerRef} className="relative mt-20 md:mt-0" style={{ height: "300vh" }}>
      {/* Sticky inner container that pins the deck while within the parent container */}
      <div className="sticky top-10 h-screen flex items-center justify-center">
        {/* Top Card */}
        <motion.div
          style={{ y: topCardY }} // opacity: topCardOpacity
          className="absolute z-30"
        >
          <InsightsCard
            heading="Transact on all currencies"
            paragraph1="Managing sales is effortless with KaziDesk. Say goodbye to the hassle of manual transactions and enjoy seamless, automated payment processing."
            image1="/assets/Transaction-2.jpg"
            alt1="a Person holding a phone"
            paragraph2="With real-time tracking, multiple payment options, and intuitive reporting, KaziDesk streamlines your operations, helping you focus on growing your business."
            image2="/assets/Transact-1.jpg"
            alt2="a point of sale terminal"
            tagline="Seamless money management"
            isFirst={false}
            number="01"
          />
        </motion.div>

        {/* Middle Card */}
        <motion.div
          style={{ y: midCardY }} //, opacity: midCardOpacity 
          className="absolute z-20"
        >
          <MidInsight />
        </motion.div>

        {/* Bottom Card */}
        <motion.div
          style={{ y: bottomCardY, opacity: bottomCardOpacity }}
          className="absolute z-10"
        >
          <InsightsCard
            heading="Easier Payments"
            paragraph1="Instant payments made easy with KaziDesk. Whether in-store or online, process transactions seamlessly with a tap and enjoy secure, hassle-free shopping."
            image1="/assets/Hands-on-PC.jpg"
            alt1="a person using a laptop"
            paragraph2="With integrated payment solutions, KaziDesk supports multiple methods, ensuring fast, secure, and convenient transactions for both you and your customers."
            image2="/assets/Laptop-Closeup.jpg"
            alt2="A person using a smartphone"
            tagline="Easier payments"
            isFirst={false}
            number="03"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DeckCards;
