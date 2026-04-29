import { Lato } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import mypic from '../../public/images/man4.png'
import Link from 'next/link';
import { FiDownload } from "react-icons/fi";

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin']
});

const About = () => {
  return (
    <section className='pb-16 md:pb-25'>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className='text-center'>
          <h2 className={`${lato.className} font-bold text-[#FEFEFE] text-[28px] md:text-[40px] pb-4.5`}>
            About Me
          </h2>
          <p className={`${lato.className} font-medium text-[#707070] text-[16px] md:text-[20px]`}>
            User Interface and User Experience and Also Frontend Web Development.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row pt-12 md:pt-43 gap-10 md:gap-30.5">

          {/* Image → mobile এ উপরে */}
          <div className='w-full md:w-[40%] flex justify-center mt-8 md:mt-0'>
            <div className='w-[260px] h-[320px] md:w-130.5 md:h-155 bg-[rgba(255,255,255,0.04)] rounded-tl-[261px] rounded-tr-[261px] rounded-b-xl relative'>
              <Image
                alt='profile'
                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                src={mypic}
              />
            </div>
          </div>

          {/* Text */}
          <div className='w-full md:w-[60%]'>

            <p className={`${lato.className} text-[#959595] text-[16px] md:text-[20px] font-medium leading-[180%] text-justify pb-5`}>
              Hello! My name is Md. Sifat Ullah. I am a passionate Frontend Web Developer who enjoys building clean, modern, and user-friendly websites. I work with technologies like HTML, CSS, JavaScript, React, and Next.js to create responsive and visually appealing web interfaces.
            </p>

            <p className={`${lato.className} text-[#959595] text-[16px] md:text-[20px] font-medium leading-[180%] text-justify pb-5`}>
              Currently, I am also learning Backend Web Development, where I am working with Node.js, Express.js, MongoDB, and other modern technologies to improve my skills and grow as a Full Stack Developer.
            </p>

            <p className={`${lato.className} text-[#959595] text-[16px] md:text-[20px] font-medium leading-[180%] text-justify pb-8`}>
              My goal is to become a professional Full Stack Web Developer and create fast, modern, and user-friendly web applications.
            </p>

            {/* Button */}
            <div className='flex w-fit py-3 px-6 md:px-7.5 rounded-lg gap-2 items-center bg-[rgb(93,85,210)]'>
              <FiDownload className='text-white'/>
              <Link href='' className={`${lato.className}  font-bold text-white text-[16px] md:text-[20px]`}>
                Download CV
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About;