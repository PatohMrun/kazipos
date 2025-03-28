'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';


const faqs = [
  {
    question: 'How much fees do I pay?',
    answer: "Fees: You'll only pay a small transaction fee per sale, and you can choose from flexible plans based on your business needs. Visit our pricing page for full details.",
  },
  {
    question: 'Can I change my plan after I choose one?',
    answer: 'lorem30Access advanced features tailored for restaurants, retail, and appointment-based businesses. Upgrade anytime, cancel hassle-free.',
  },
  {
    question: 'How fast will I get paid?',
    answer: 'lorem30Access advanced features tailored for restaurants, retail, and appointment-based businesses. Upgrade anytime, cancel hassle-free.',
  },
  {
    question: 'Can I take any type of credit card with Kazipos?',
    answer: 'lorem30Access advanced features tailored for restaurants, retail, and appointment-based businesses. Upgrade anytime, cancel hassle-free.',
  },
  {
    question: 'Do I need to purchase hardware to use Kazipos?',
    answer: 'lorem30Access advanced features tailored for restaurants, retail, and appointment-based businesses. Upgrade anytime, cancel hassle-free.',
  },
  {
    question: 'Can you recommend the best solution for my business?',
    answer: 'lorem30Access advanced features tailored for restaurants, retail, and appointment-based businesses. Upgrade anytime, cancel hassle-free.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeUp = {
    initial: { opacity: 0.1, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
    viewport: { once: false }
  };

  return (
    <div className="mx-auto  pt-6 2xl:py-20">
      <h2 className=" text-medium md:text-large 2xl:text-[5rem] font-bold text-red-800 mb-4 font-helvetica-semibold px-[20px] md:px-[64px]">FAQ</h2>
      <div className="border-t border-gray-300 ">
        {faqs.map((faq, index) => (
          <motion.div {...fadeUp} key={index} className="border-b border-gray-300 md:flex items-start text-start py-8 hover:bg-[#FBF6F5] px-[20px] md:px-[64px]">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex text-small md:text-small 2xl:text-[2rem] justify-between items-center p-4 text-left text-red-700 font-medium  "
            >
              <span className="flex-1 flex items-center gap-4 font-inter font-semibold">
                <span className="">{openIndex === index ? '−' : '+'}</span>
                {faq.question}
              </span>
            </button>
            {openIndex === index && faq.answer && (
              <div className="p-4 text-gray-700 font-inter text-tiny md:text-tiny 2xl:text-[2rem]  ">
                <div>{faq.answer}</div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
