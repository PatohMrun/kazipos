import ContactForm from '@/components/contact-form'
import { Close, LocationIcon } from '@/components/icons'
import Link from 'next/link'
import React from 'react'

function Contacts() {
  return (
    // Contacts Section
      <section className='md:flex md:justify-between min-h-screen '>
        <div className='px-[16px] md:px-[40px] py-24 md:py-40 lg:px-[94px] '>
          <h1 className='pt-16 flex justify-center md:pt-0 text-[48px] leading-[60px] md:leading-[100px] font-600 font-almarena-bold text-red_republic md:text-[78px] lg:text-[96px] 2xl:text-[7.5rem] 2xl:leading-28'>Our Locations</h1>
                <div className='text-tiny  md:text-small 2xl:text-[2rem] font-almarena-regular font-400 leading-8 md:leading-10 2xl:leading-18 text-baragon_brown py-10'>
                  <p className="flex items-center gap-2"> <span><LocationIcon/></span> <span>Kenya</span></p>
                  <p>39 Woodvale Grove, Westlands - Nairobi</p>
                  <p>Jimkan House</p>
                  <p>Nairobi, Kenya</p>
                </div>
        </div>
        <div className='min-w-1/2 '>
            <ContactForm/>
        </div>
      </section>
  )
}

export default Contacts