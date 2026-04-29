// import { Lato } from 'next/font/google';
// import Link from 'next/link';
// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FiGithub } from "react-icons/fi";
// import mypic from '../../public/images/banner.png';
// import Image from 'next/image';

// const lato = Lato({
//   weight: ['400', '700'],
//   subsets: ['latin']
// });

// const Banner = () => {
//   return (
//     <section className='pt-20 md:pt-34'>
//       <div className="container mx-auto px-4">

//         {/* MAIN */}
//         <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-center">

//           {/* LEFT CONTENT */}
//           <div className="w-full md:w-[51.875%] text-left">

//             <h4 className={`${lato.className} text-[18px] md:text-[24px] text-[#707070] font-semibold pb-2`}>
//               Hi I am
//             </h4>

//             <h3 className={`${lato.className} font-bold text-[22px] md:text-[28px] text-[#959595] pb-0 md:pb-2`}>
//               MD.SIFAT ULLAH
//             </h3>

//             <h2 className={`${lato.className} font-black text-[36px] md:text-[56px] text-[rgb(93,85,210)] pb-6`}>
//               Frontend Developer
//             </h2>
//             {/* SOCIAL */}
//             <div className="flex justify-center md:justify-start gap-5">
//               <Link href='https://github.com/SifatUllahFSD'><FiGithub className='text-[#BABABA] text-[20px]' /></Link>
//               <Link href='https://www.facebook.com/share/17Rs3YTknF/'><FaFacebookF className='text-[#BABABA] text-[20px]' /></Link>
//               <Link href='https://www.instagram.com/s_i_f_a_t__u_l_l_a_h?igsh=YzZqMzB3aGhhYTV1'><FaInstagram className='text-[#BABABA] text-[20px]' /></Link>
//               <Link href='https://www.linkedin.com/in/md-sifat-ullah-556384390/'><FaLinkedinIn className='text-[#BABABA] text-[20px]' /></Link>
//             </div>

//             {/* BUTTON */}
//                 <div className='pt-10 md:pt-18 flex flex-row gap-4 sm:gap-6 pb-10 md:pb-23 justify-center md:justify-start flex-wrap'>
//                 <Link
//                     href=''
//                     className={`${lato.className} font-bold text-white bg-[rgb(93,85,210)] py-3 px-8 md:px-10 rounded-lg text-center`}
//                 >
//                     Hire Me
//                 </Link>

//                 <Link
//                     href=''
//                     className={`${lato.className} font-bold text-[#959595] md:text-[20px] border-2 border-[rgb(93,85,210)] py-3 px-8 md:px-10 rounded-lg text-center`}
//                 >
//                     Download CV
//                 </Link>
//                 </div>

//             {/* STATS */}
//             <div className='bg-[rgba(255,255,255,0.04)] p-4 md:p-6 rounded-md grid grid-cols-3 gap-4 md:gap-7'>

//               <div className='border-r border-[#959595] text-center'>
//                 <h4 className={`${lato.className} font-extrabold text-[18px] md:text-[24px] text-[rgb(93,85,210)] pb-2`}>
//                   5+
//                 </h4>
//                 <h3 className={`${lato.className} font-bold text-[14px] md:text-[20px] text-[#DFDFDF]`}>
//                   Experiences
//                 </h3>
//               </div>

//               <div className='border-r border-[#959595] text-center'>
//                 <h4 className={`${lato.className} font-extrabold text-[18px] md:text-[24px] text-[rgb(93,85,210)] pb-2`}>
//                   20+
//                 </h4>
//                 <h3 className={`${lato.className} font-bold text-[14px] md:text-[20px] text-[#DFDFDF]`}>
//                   Project done
//                 </h3>
//               </div>

//               <div className='text-center'>
//                 <h4 className={`${lato.className} font-extrabold text-[18px] md:text-[24px] text-[rgb(93,85,210)] pb-2`}>
//                   80+
//                 </h4>
//                 <h3 className={`${lato.className} font-bold text-[14px] md:text-[20px] text-[#DFDFDF]`}>
//                   Happy Clients
//                 </h3>
//               </div>

//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//          <div className="w-full md:w-[48.125%] flex justify-center md:justify-end mt-35 md:mt-0">

//         <div className='w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-154.5 md:h-154.5 bg-[rgba(255,255,255,0.04)] rounded-full relative'>
            
//             <Image
//             className='absolute bottom-0 md:bottom-0  left-1/2 -translate-x-1/2  '
//             src={mypic}
//             alt="Profile Image"
//             priority
//             />

//         </div>

//         </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Banner;



import { Lato } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import mypic from '../../public/images/banner2.png';
import Image from 'next/image';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin']
});

const Banner = () => {
  return (
    <section className='pt-35 md:pt-54'>
      <div className="container mx-auto px-4">

        {/* MAIN */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-32 items-center">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-[51.875%] text-center md:text-left order-2 md:order-1">

                        {/* MOBILE TEXT */}
            <h4 className={`${lato.className} text-[18px] text-[rgb(93,85,210)] font-semibold pb-2 md:hidden`}>
              Hi I am, <span className="text-[#ffffff] font-bold">MD.SIFAT ULLAH</span>
            </h4>

            {/* DESKTOP TEXT */}
            <h4 className={`${lato.className} hidden md:block text-[24px] text-[#707070] font-semibold pb-2`}>
              Hi I am
            </h4>

            <h3 className={`${lato.className} hidden md:block font-bold text-[28px] text-[#959595] pb-2`}>
              MD.SIFAT ULLAH
            </h3>
            <h2 className={`${lato.className} font-black text-[36px] md:text-[56px] text-[rgb(93,85,210)] pb-6`}>
              Frontend Developer
            </h2>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-5">
              <Link href='https://github.com/SifatUllahFSD'>
                <FiGithub className='text-[#BABABA] text-[20px]' />
              </Link>

              <Link href='https://www.facebook.com/share/17Rs3YTknF/'>
                <FaFacebookF className='text-[#BABABA] text-[20px]' />
              </Link>

              <Link href='https://www.instagram.com/s_i_f_a_t__u_l_l_a_h'>
                <FaInstagram className='text-[#BABABA] text-[20px]' />
              </Link>

              <Link href='https://www.linkedin.com/in/md-sifat-ullah-556384390/'>
                <FaLinkedinIn className='text-[#BABABA] text-[20px]' />
              </Link>
            </div>

            {/* BUTTON */}
            <div className='pt-10 md:pt-18 flex flex-row gap-4 sm:gap-6 pb-10 md:pb-23 justify-center md:justify-start flex-wrap'>

              <Link
                href=''
                className={`${lato.className} font-bold text-white bg-[rgb(93,85,210)] py-3 px-8 md:px-10 rounded-lg text-center`}
              >
                Hire Me
              </Link>

              <Link
                href=''
                className={`${lato.className} font-bold text-[#959595] md:text-[20px] border-2 border-[rgb(93,85,210)] py-3 px-8 md:px-10 rounded-lg text-center`}
              >
                Download CV
              </Link>

            </div>

            {/* STATS */}
            <div className='bg-[rgba(255,255,255,0.04)] p-4 md:p-6 rounded-md grid grid-cols-3 gap-4 md:gap-7'>

              <div className='border-r border-[#959595] text-center'>
                <h4 className={`${lato.className} font-extrabold text-[18px] md:text-[24px] text-[rgb(93,85,210)] pb-2`}>
                  5+
                </h4>
                <h3 className={`${lato.className} font-bold text-[14px] md:text-[20px] text-[#DFDFDF]`}>
                  Experiences
                </h3>
              </div>

              <div className='border-r border-[#959595] text-center'>
                <h4 className={`${lato.className} font-extrabold text-[18px] md:text-[24px] text-[rgb(93,85,210)] pb-2`}>
                  20+
                </h4>
                <h3 className={`${lato.className} font-bold text-[14px] md:text-[20px] text-[#DFDFDF]`}>
                  Project done
                </h3>
              </div>

              <div className='text-center'>
                <h4 className={`${lato.className} font-extrabold text-[18px] md:text-[24px] text-[rgb(93,85,210)] pb-2`}>
                  80+
                </h4>
                <h3 className={`${lato.className} font-bold text-[14px] md:text-[20px] text-[#DFDFDF]`}>
                  Happy Clients
                </h3>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-[48.125%] flex justify-center md:justify-end  order-1 md:order-2">

            <div className='w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[620px] md:h-[620px] bg-[rgba(255,255,255,0.04)] rounded-full relative'>

              <Image
                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                src={mypic}
                alt="Profile Image"
                priority
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;