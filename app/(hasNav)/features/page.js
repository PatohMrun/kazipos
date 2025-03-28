"use client";
import HeroSection from "@/components/features/features-hero";
import CircularMenu from "@/components/features/one-system";
import POSSystemFeatures from "@/components/features/services";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeLeft, fadeUp } from "@/components/motions/motionVariants.js";
import Paragraph from "@/components/motions/fadeInSections";
import { useRef } from "react";
import { useScroll } from "framer-motion";
const Features = () => {
  const element = useRef(null);
    
    // Track scroll progress of the target element
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "end 0.9"],
    });


  return (
    <main>
      <HeroSection />
      <section className="bg-red_reign py-10 px-7 md:px-16">
        <motion.div
          className="w-full flex justify-end px-6 md:px-10"
          {...fadeUp}
        >
          <div 
            className="text-medium md:text-large lg:text-huge leading-10 md:leading-14 2xl:leading-18 sm:max-w-md 2xl:max-w-2xl 2xl:text-[5rem] text-neutral-light py-20 font-almarena-regular"
          ref={element}>
              <Paragraph 
                 sentence="Working for an all inclusive financial future" 
                 scrollYProgress={scrollYProgress} 
             />
          </div>

        </motion.div>

        <motion.div
          className="block py-7  md:flex gap-2 justify-between border-b border-neutral-light font-almarena-regular"
          {...fadeUp}
        >
          <p className="text-xl text-neutral-light text-small md:text-medium flex items-center gap-10 md:gap-20 lg:gap-25 font-almarena-semibold 2xl:text-5xl">
            <span>01</span> <span>For You</span>
          </p>
          <p className="text-tiny md:text-small 2xl:text-[32px] max-w-lg 2xl:max-w-2xl text-neutral-light font-helvetica-semibold">
            With integrated payment solutions, KaziDesk supports multiple
            methods, ensuring fast, secure, and convenient transactions for both
            you and your customers.
          </p>
          
        </motion.div>

        <motion.div
          className="block py-20  md:flex gap-2 justify-between border-b  border-neutral-light font-almarena-regular"
          {...fadeUp}
        >
          <p className="text-xl font-bold text-neutral-light text-small md:text-medium flex items-center gap-10 md:gap-20 lg:gap-25 2xl:text-5xl">
            <span>02</span> <span>Accessible</span>
          </p>
          <p className="text-tiny md:text-small 2xl:text-[32px] max-w-lg 2xl:max-w-2xl text-neutral-light font-helvetica">
            We try to make kazipos accessible and inclusive for everyone. Our
            commitment is to ensure that our services are easy to use and
            available to all.
          </p>
        </motion.div>

        <motion.div
          className="block py-7  md:flex gap-2 justify-between border-b border-neutral-light font-almarena-regular"
          {...fadeUp}
        >
          <p className="text-xl font-bold text-neutral-light text-small md:text-medium flex items-center gap-10 md:gap-20 lg:gap-25 2xl:text-5xl">
            <span>03</span> <span>Transparency</span>
          </p>
          <p className="text-tiny md:text-small 2xl:text-[32px] max-w-lg 2xl:max-w-2xl  text-neutral-light font-helvetica">
            We believe in transparency and honesty. There are no complicated
            jargons or hard-to-understand terms here. We understand that money
            can be complex, so we are dedicated to making it straightforward and
            transparent. With Jeton, there are no hidden fees or surprises. What
            you see is truly what you get.
          </p>
        </motion.div>

        <div className="w-full flex justify-end">
          <motion.div
            className="text-tiny md:text-small 2xl:text-[32px] max-w-2xl 2xl:max-w-5xl text-neutral-light my-20 p-3 md:p-5   rounded-md bg-[#8F2024]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-inter font-medium">
              &apos;&apos;We noticed how challenging it was for businesses to
              manage sales and operations efficiently. Even the simplest tasks
              took too long or became unnecessarily complex. The lack of a
              seamless, all-in-one solution drove us to create KaziPOS. Our goal
              is to simplify business transactions with a system that is
              intuitive, reliable, and built for growth. At the core of KaziPOS
              is the belief that businesses should have full control over their
              sales, inventory, and customer experience—because running a
              business should be as smooth as making a sale.&apos;&apos;
            </p>
            <motion.div
              className="flex gap-3 items-center pt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="h-10 w-10 rounded-full bg-neutral-light flex justify-center items-center text-red-800 font-bold">
                RM
              </p>
              <p className="font-inter font-medium">
                <span>Reagan Moseti</span>
                <br />
                <span className="">CTO, Hillgan Innovations</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-red_shimmer md:flex items-center py-10">
        <motion.div
          className="py-4 px-7 md:px-16 md:w-1/2 "
        >
          <h1 className="text-mdsm sm:text-medium md:text-large 2xl:text-[4rem] mb-6 md:mb-8 leading-10 md:leading-tight font-almarena-medium text-red_republic">
            {/* <h1 className="text-30px sm:text-medium md:text-large mb-6 md:mb-8 leading-tight py-2 md:py-4 text-red_republic font-bold  text-center md:text-left"> */}
            Across retail and hospitality, our solutions are redefining business
            transactions.
          </h1>
          <motion.div {...fadeUp} className="mb-4 w-full">
            <Image
              className="rounded-md w-full"
              src="/assets/Transaction-3.jpg"
              height={2500}
              width={2500}
              alt="KaziPOS features showcase"
            />
          </motion.div>
        </motion.div>

        <div className=" py-4 px-7 md:px-10 w-full md:w-1/2 lg:w-6/12">
          <motion.p
            className="font-helvetica-regular text-baragon_brown font-normal text-tiny md:text-small max-w-lg 2xl:max-w-2xl 2xl:max-w-3xl 2xl:text-[32px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At KaziPOS, we are dedicated to transforming business operations
            through innovation, seamless customer experiences, and scalable
            growth. As a leading POS solution in Kenya, we empower
            businesses—big and small—to manage sales, track inventory, and
            streamline transactions with ease. With a commitment to efficiency
            and reliability, KaziPOS delivers intuitive software and tailored
            support to help businesses optimize their operations. Whether
            enhancing workflow, improving accuracy, or elevating customer
            interactions, we provide the tools to succeed in today&apos;s
            fast-paced market. From powerful POS software to hands-on support,
            KaziPOS exists to help Kenyan businesses turn everyday transactions
            into opportunities for growth.
          </motion.p>
        </div>
      </section>

      <motion.section {...fadeUp}>
        <div className="bg-white py-10 px-6 md:px-10">
          <POSSystemFeatures />
        </div>

        <motion.div
          {...fadeUp}
          className="py-10  md:py-20 bg-white"
        >
          <CircularMenu />
        </motion.div>
      </motion.section>

      <section className="bg-red_shimmer px-7 md:px-16 py-10  md:py-20  md:flex gap-5 justify-around items-center">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="2xl:w-[60rem] bg-amber-200"
        >
          <Image
            className="rounded-md w-full"
            src="/assets/Transaction-4.jpg"
            height={500}
            width={500}
            alt="image"

          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: +30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-lg 2xl:max-w-2xl"
        >
          <h1 className="text-medium md:text-large 2xl:text-[4rem] py-5 md:pb-10 leading-10 md:leading-13 text-red_republic font-semibold font-almarena-medium">
            No one understands commerce better than we do.
          </h1>
          <p className="font-helvetica-regular text-tiny md:text-small 2xl:text-[2rem]">
            We have a legacy of innovation and decades of expertise, empowering
            businesses with cutting-edge solutions that drive efficiency,
            growth, and transformation in the industries we serve.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default Features;
