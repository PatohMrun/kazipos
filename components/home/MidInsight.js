import Image from "next/image";
import { motion } from "framer-motion";
import { fadeDown, fadeUp } from "@/components/motions/motionVariants.js";

const MidInsight = () => {
  return (
    <div className="bg-baragon_brown rounded-2xl overflow-hidden text-white px-4 py-6 md:px-12 2xl:px-20 md:py-6 2xl:py-20 mx-2 my-4 md:mx-4 2xl:mx-12 md:my-2 font-helvetica-regular min-h-[90vh] 2xl:min-h-[80vh] min-w-[90vw] 2xl:min-w-[98vw]">
      {/* Middle Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 2xl:gap-32"
      >
        {/* Left content */}
        <div className="flex flex-col gap-4 md:gap-1 md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-huge 2xl:text-[4.5rem] leading-snug md:leading-tight font-normal font-almarena-regular"
          >
            Seamless money management
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-2 md:mt-4 w-full"
          >
            <div className="relative aspect-square w-full max-w-xs 2xl:max-w-xl">
              <Image
                src="/assets/Seamless-Money.jpg"
                alt="Woman with plants in a shop"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </motion.div>

          <motion.div className="flex items-center gap-2">
            <p className="text-xs md:text-sm opacity-80">
              Seamless money management
            </p>
          </motion.div>
        </div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col gap-10 md:gap-6 2xl:gap-16 mt-4"
        >
          <p className="text-md md:text-xl 2xl:text-[2rem]  leading-relaxed">
            Stay connected with your loved ones across Europe and manage your
            finances with ease.
          </p>

          <div className="flex flex-col gap-4 md:gap-6 mt-2 md:mt-4">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="flex flex-col gap-1 md:gap-2 2xl:gap-8">
                <div className="flex items-center gap-2">
                  <p className="text-md md:text-xl 2xl:text-[2rem] opacity-80">0{item}.</p>
                  <p className="text-md md:text-xl 2xl:text-[2rem]">HR Management</p>
                </div>
                <div className="h-px bg-white opacity-30 w-full mt-1 md:mt-2"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="border rounded-full flex justify-center items-center w-6 h-6 md:w-8 2xl:w-16 md:h-8 2xl:h-16 mt-4 md:mt-3 text-xs md:text-sm 2xl:text-[2.5rem]">
        02
      </div>
    </div>
  );
};

export default MidInsight;
