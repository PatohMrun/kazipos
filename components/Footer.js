import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Logo, LogoIcon } from './icons';

const Footer = () => {
  return (
    <footer className="bg-red_reign text-white py-10 pl-6 lg:pl-[164px]  pr-6 lg:pr-[222px]   pt-8 lg:pt-[183px] pb-[43px]">
    <div className="max-w-7xl 2xl:max-w-full  mx-auto ">
      <div className=" 2xl:space-x-11"> {/* Changed to grid with 3 columns */}
        {/* Logo and Description */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="mr-2">
              <LogoIcon  />
              {/* Comment out the above LogoIcon component line and use the following Image to use your logo Image - Uncomment it */}
              {/* <Image src="/assets/Business-Better.jpg" alt="Logo" width={500} height={500} 
              className='h-12 w-12 object-contain aspect-square'
               /> */}
            </div>
            <h2 className="text-medium md:text-medium 2xl:text-[4.5rem] font-bold font-inter">Kazipos</h2>
          </div>
          <p className="text-tiny md:text-[20px] 2xl:text-[2rem] font-helvetica">
            At KaziPOS, we don&apos;t just process sales—we empower businesses. With efficiency, automation, and ease at our core, we provide a seamless POS solution that simplifies transactions, tracks inventory, and streamlines operations for a smarter, more productive business.
          </p>
        </div>

        {/* Combined Company and Services Column */}
        <div className="mb-8 md:mb-0 flex flex-wrap items-center sm:items-start gap-2 justify-between font-inter text-tiny 2xl:text-[2rem] ">
          <div className="mb-8">
            <h3 className="font-medium mb-4 text-tiny md:text-[20px] 2xl:text-[2rem] text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className=" group relative">overview <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="/contact-us" className=" group relative">contact <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="/features" className="group relative">features <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="/pricing" className="group relative">pricing <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li>
              {/* <li><Link href="/projects" className="group relative">projects <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li> */}
              {/* <li><Link href="/newsroom" className="group relative">newsroom <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li> */}
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="font-medium text-tiny md:text-[20px] 2xl:text-[2rem] mb-4">Legal & compliance</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="group relative">privacy policy <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="#" className="group relative">terms & conditions <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="#" className="group relative">cookies policy <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="#" className="group relative">certifications <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li>
            </ul>
          </div>

          <div className="mx-auto sm:mx-0 mb-4 sm:mb-8">
            <h3 className="font-medium text-tiny md:text-[20px] 2xl:text-[2rem] mb-4">Resources & Insights</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="group relative">Investors <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="#" className="group relative">partnership opportunities <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="#" className="group relative">request a quote <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></li>
            </ul>
          </div>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="mt-8 2xl:mt-16 2xl:pt-10 pt-4 font-inter font-medium text-tiny 2xl:text-[2rem]" >
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
          <div className="mb-4 md:mb-0 w-full sm:w-auto flex justify-between gap-4 flex-wrap">
            <p><Link href="#" className="group relative">Privacy Policy <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></p>
            <p><Link href="#" className="group relative">Terms & Conditions <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link></p>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>© 2025 Kazipos. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <FaFacebookF className="w-5 h-5 2xl:w-9 2xl:h-9" />
            </Link>
            <Link href="#" aria-label="X (Twitter)">
              <FaXTwitter className="w-5 h-5 2xl:w-9 2xl:h-9" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <AiOutlineInstagram className="w-5 h-5 2xl:w-9 2xl:h-9" />
            </Link>
            <Link href="#" aria-label="WhatsApp">
              <FaWhatsapp className="w-5 h-5 2xl:w-9 2xl:h-9" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="w-5 h-5 2xl:w-9 2xl:h-9" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;