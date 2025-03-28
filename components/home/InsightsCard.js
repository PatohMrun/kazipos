// InsightsCard.jsx
import Image from "next/image";
import { motion } from "framer-motion";

const InsightsCard = ({
  heading,
  paragraph1,
  paragraph2,
  image1,
  alt1,
  image2,
  alt2,
  tagline,
  isFirst = false,
  number,
}) => {
  const fadeDown = {
    initial: { opacity: 0, y: -30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
    viewport: { once: false },
  };
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
    viewport: { once: false },
  };

  return (
    <div
      className="bg-red_reign text-white px-4 py-6 md:px-8 2xl:px-20 md:py-10 2xl:py-20 mx-2 my-4 md:mx-4 md:my-8 min-w-[95vw] min-h-[90vh] 2xl:min-h-[80vh] rounded-2xl"
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 2xl:gap-32">
        {/* Left content */}
        <motion.div
          {...fadeDown}
          className="flex flex-col gap-6 md:gap-9 2xl:gap-24 md:w-1/2 font-helvetica"
        >
          <h2 className="text-2xl md:text-huge 2xl:text-[4.5rem] leading-tight md:leading-[70px] font-almarena-regular">
            {heading}
          </h2>
          <p className="text-md md:text-xl 2xl:text-[1.75rem] font-helvetica-regular">{paragraph1}</p>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 2xl:w-52 2xl:h-52 flex-shrink-0">
              <Image
                src={image1}
                alt={alt1}
                width={200}
                height={200}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <p className="text-sm md:text-base 2xl:text-[1.5rem] font-helvetica-regular">{paragraph2}</p>
          </div>

          <p className="text-xs md:text-sm 2xl:text-small font-light mt-2 md:mt-4 font-helvetica-regular">{tagline}</p>
        </motion.div>

        {/* Right content - image */}
        <motion.div {...fadeUp} className="md:w-1/2">
          <div className="relative aspect-square md:aspect-video h-full w-full">
            <Image
              src={image2}
              alt={alt2}
              fill
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="border rounded-full flex justify-center items-center w-8 2xl:w-16 h-8 2xl:h-16 mt-4 md:mt-6 font-helvetica-regular 2xl:text-[2.5rem]">
        {number}
      </div>
    </div>
  );
};

export default InsightsCard;