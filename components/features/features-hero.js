
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeUp } from '../motions/motionVariants.js';

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      className="relative w-full h-[100vh] md:h-[130vh]"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      {/* Background Image with subtle zoom effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="w-full h-full"
      >
        <Image
          src="/assets/Features-Hero.jpg"
          alt="hero"
          width={2500}
          height={2500}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay with fade-in effect */}
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Foreground Text & Button */}
      <motion.div 
        className="absolute inset-0 flex flex-col justify-end items-start  mb-11 text-white px-7 md:px-16"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-medium md:text-large lg:text-huge 2xl:text-[6rem] leading-12 md:leading-14 2xl:leading-18 mb-10 max-w-2xl 2xl:max-w-4xl  font-almarena-semibold"
          variants={itemVariants}
        >
          One POS for all your business needs.
        </motion.h1>
        <motion.div variants={itemVariants} className='my-10'
        >
          <Link
            href="#"
            // className="border border-red_republic bg-red_republic text-white px-4 sm:px-6 md:px-8 py-2 rounded-full text-sm md:text-lg text-nowrap hover:bg-white hover:text-red_reign hover:transform hover:scale-105"
            className="bg-neutral-light  text-red_reign px-4 sm:px-6 md:px-8 py-4 rounded-full text-nowrap text-sm md:text-lg 2xl:text-3xl hover:bg-neutral-highlight transition duration-300 font-inter"
          >
            Book a free Demo
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;