// "use client";

// import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import carouselData from "@/lib/smes.json";

// const HomeCarousel = () => {
//   const wrapperRef = useRef(null);
//   const carouselRef = useRef(null);
//   const [wrapperHeight, setWrapperHeight] = useState(0);
//   const totalWidthMotion = useMotionValue(0);

//   // Track scroll progress within the wrapper
//   const { scrollYProgress } = useScroll({
//     target: wrapperRef,
//     offset: ["start start", "end end"],
//   });

//   // Transform vertical scroll progress into horizontal movement
//   const x = useTransform(scrollYProgress, (progress) => -progress * totalWidthMotion.get());

//   // Calculate the total width and set wrapper height
//   useEffect(() => {
//     const updateDimensions = () => {
//       if (carouselRef.current) {
//         const totalWidth = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
//         totalWidthMotion.set(totalWidth);
//         setWrapperHeight(totalWidth);
//       }
//     };

//     updateDimensions();
//     window.addEventListener("resize", updateDimensions);
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, [totalWidthMotion]);

//   return (
//     <div ref={wrapperRef} className="relative " style={{ height: `${wrapperHeight}px` }}>
//       <div className="sticky top-1 2xl:top-32 h-screen overflow-hidden w-full">
//         <h2 className="my-4 md:my-6 mx-6 md:mx-14 text-medium leading-11 md:text-large font-semibold text-red_republic font-almarena-semibold 2xl:text-huge">
//           Designed for SMEs just like yours
//         </h2>

//         <motion.div ref={carouselRef} className="flex gap-8" style={{ x }}>
//           {carouselData.map((item, index) => (
//             <CardWithHoverEffect key={index} item={item} index={index} />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// // Extracted as a separate component for cleaner code
// const CardWithHoverEffect = ({ item, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const imageRef = useRef(null);

//   // Handle mouse move over the card
//   const handleMouseMove = (e) => {
//     if (imageRef.current) {
//       // Get the coordinates relative to the card
//       const rect = imageRef.current.getBoundingClientRect();
//       const x = (e.clientX - rect.left) / rect.width;
//       const y = (e.clientY - rect.top) / rect.height;
      
//       // Update mouse position (constrain between 0 and 1)
//       setMousePos({
//         x: Math.max(0, Math.min(1, x)),
//         y: Math.max(0, Math.min(1, y))
//       });
//     }
//   };

//   return (
//     <div className="min-w-[320px] md:min-w-[350px] 2xl:min-w-[500px] h-full flex-shrink-0">
//       <div
//         className={`
//           w-[330px] md:w-[350px] lg:w-[420px] 2xl:w-[600px]  h-[490px] 2xl:h-[750px] 2xl:min-h-[550px]
//           rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 mx-4 my-6 
//           ${!isHovered ? "hover:scale-105" : ""} font-helvetica
//           ${index === 0 ? "bg-red_reign text-white" : "bg-white"}
//         `}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onMouseMove={handleMouseMove}
//       >
//         <div ref={imageRef} className="relative h-[300px] md:h-[320px] 2xl:h-[450px] overflow-hidden">
//           <div
//             className="absolute w-full h-full transition-transform duration-500"
//             style={{
//               transform: isHovered 
//                 ? `scale(1.3) translate(${(0.5 - mousePos.x) * 20}%, ${(0.5 - mousePos.y) * 20}%)` 
//                 : "scale(1) translate(0%, 0%)"
//             }}
//           >
//             <Image
//               src={item.image}
//               alt={item.title}
//               fill
//               sizes="(max-width: 768px) 400px, (max-width: 1200px) 450px, 500px"
//               className="object-cover h-full]"
//               priority
//             />
//           </div>
//         </div>
//         <div
//           className={`
//             py-6 px-10 md:px-16 space-y-3
//             ${index === 0 ? "bg-red_reign text-white" : ""}
//           `}
//         >
//           <h1
//             className={`
//               text-xl 2xl:text-medium font-helvetica-semibold
//               ${index === 0 ? "text-white" : "text-red_republic"}
//             `}
//           >
//             {item.title}
//           </h1>
//           <p
//             className={`
//               text-lg font-helvetica-regular 2xl:text-[1.8rem]
//               ${index === 0 ? "text-white" : "text-baragon_brown"}
//             `}
//           >
//             {item.subtitle}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeCarousel; 


"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import carouselData from "@/lib/smes.json";

const HomeCarousel = () => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const totalWidthMotion = useMotionValue(0);

  // Track scroll progress within the wrapper
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll progress into horizontal movement
  const x = useTransform(scrollYProgress, (progress) => -progress * totalWidthMotion.get());

  // Calculate the total width and set wrapper height
  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current && wrapperRef.current) {
        const totalWidth = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
        totalWidthMotion.set(totalWidth);
  
        // Ensure wrapper height is at least viewport height to avoid gaps
        const viewportHeight = window.innerHeight;
        const adjustedHeight = Math.max(totalWidth, viewportHeight);
  
        setWrapperHeight(adjustedHeight);
        console.log("Updated wrapperHeight:", adjustedHeight);
      }
    };
  
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [totalWidthMotion]);
  
  

  return (
    <div ref={wrapperRef} className="relative" style={{ height: `400vh` }}>
      <div className="sticky top-1 sm:top-5 md:top-1 2xl:top-16 h-screen overflow-hidden w-full">
        <h2 className="my-4 md:my-6 mx-6 md:mx-14 text-medium sm:text-medium leading-11 md:text-large font-semibold text-red_republic font-almarena-semibold 2xl:text-huge max-h-[20vh]">
          Designed for SMEs just like yours
        </h2>

        <motion.div ref={carouselRef} className="flex gap-8" style={{ x }}>
          {carouselData.map((item, index) => (
            <CardWithHoverEffect key={index} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Extracted as a separate component for cleaner code
const CardWithHoverEffect = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const imageRef = useRef(null);

  // Handle mouse move over the card
  const handleMouseMove = (e) => {
    if (imageRef.current) {
      // Get the coordinates relative to the card
      const rect = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      // Update mouse position (constrain between 0 and 1)
      setMousePos({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y))
      });
    }
  };

  return (
    <div>
      <div
        className={`
          w-[90vw] sm:w-[52vw] lg:w-[420px] 2xl:w-[600px]  h-[60vh] sm:h-[70vh] 2xl:h-[750px] 2xl:min-h-[550px]
          rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 mx-4 my-6 
          ${!isHovered ? "hover:scale-105" : ""} font-helvetica
          ${index === 0 ? "bg-red_reign text-white" : "bg-white"}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div ref={imageRef} className="relative h-[55%] 2xl:h-[450px] overflow-hidden">
          <div
            className="absolute w-full h-full transition-transform duration-500"
            style={{
              transform: isHovered 
                ? `scale(1.3) translate(${(0.5 - mousePos.x) * 20}%, ${(0.5 - mousePos.y) * 20}%)` 
                : "scale(1) translate(0%, 0%)"
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 400px, (max-width: 1200px) 450px, 500px"
              className="object-cover h-full]"
              priority
            />
          </div>
        </div>
        <div
          className={`
            py-6 px-12 md:px-8 space-y-3
            ${index === 0 ? "bg-red_reign text-white" : ""}
          `}
        >
          <h1
            className={`
              text-xl sm:text-2xl 2xl:text-medium font-helvetica-semibold
              ${index === 0 ? "text-white" : "text-red_republic"}
            `}
          >
            {item.title}
          </h1>
          <p
            className={`
              text-lg sm:text-xl font-helvetica-regular 2xl:text-[1.8rem]
              ${index === 0 ? "text-white" : "text-baragon_brown"}
            `}
          >
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel; 