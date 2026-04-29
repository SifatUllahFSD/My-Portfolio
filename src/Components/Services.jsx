import { Lato } from 'next/font/google';
import React from 'react'
import { CgWebsite } from "react-icons/cg";

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin']
});

const Services = () => {
  return (
    <section className='py-16 md:py-28'>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className='text-center max-w-2xl mx-auto'>
          <h2 className={`${lato.className} font-bold text-[#FEFEFE] text-[26px] md:text-[40px] pb-4`}>
            Services
          </h2>
          <p className={`${lato.className} font-medium text-[#707070] text-[15px] md:text-[18px] leading-relaxed`}>
            I don’t just offer services — I build modern, scalable solutions that help your brand grow and stand out in the digital world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-12 md:pt-16">

          {/* Card 1 */}
          <div className='bg-[rgba(255,255,255,0.04)] text-center rounded-3xl py-10 px-6 hover:bg-[rgba(255,255,255,0.07)] transition duration-300'>
            <CgWebsite className='mx-auto text-[55px] md:text-[65px] text-[rgb(93,85,210)]'/>
            <h3 className={`${lato.className} font-bold text-[20px] md:text-[24px] text-[rgb(93,85,210)] pt-5 pb-4`}>
              Frontend Development
            </h3>
            <p className={`${lato.className} text-[15px] md:text-[17px] text-[#8A8A8A] leading-[160%]`}>
              I create responsive, fast, and visually engaging user interfaces using modern technologies like React, Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* Card 2 */}
          <div className='bg-[rgba(255,255,255,0.04)] text-center rounded-3xl py-10 px-6 hover:bg-[rgba(255,255,255,0.07)] transition duration-300'>
            <CgWebsite className='mx-auto text-[55px] md:text-[65px] text-[rgb(93,85,210)]'/>
            <h3 className={`${lato.className} font-bold text-[20px] md:text-[24px] text-[rgb(93,85,210)] pt-5 pb-4`}>
              Backend Development
            </h3>
            <p className={`${lato.className} text-[15px] md:text-[17px] text-[#8A8A8A] leading-[160%]`}>
              I build secure and scalable backend systems, APIs, and databases to ensure your application runs smoothly and efficiently.
            </p>
          </div>

          {/* Card 3 */}
          <div className='bg-[rgba(255,255,255,0.04)] text-center rounded-3xl py-10 px-6 hover:bg-[rgba(255,255,255,0.07)] transition duration-300 sm:col-span-2 lg:col-span-1'>
            <CgWebsite className='mx-auto text-[55px] md:text-[65px] text-[rgb(93,85,210)]'/>
            <h3 className={`${lato.className} font-bold text-[20px] md:text-[24px] text-[rgb(93,85,210)] pt-5 pb-4`}>
              Fullstack Development
            </h3>
            <p className={`${lato.className} text-[15px] md:text-[17px] text-[#8A8A8A] leading-[160%]`}>
              From frontend to backend, I deliver complete web solutions that are optimized, scalable, and tailored to your business needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services;