import { Lato } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin']
})

const Footer = () => {
  return (
    <footer className="bg-[#111] py-10 mt-10 md:mt-20">
      <div className="container mx-auto px-4 text-center">

        {/* Logo */}
        <h3 className={`${lato.className} text-[rgb(93,85,210)] font-bold text-lg md:text-xl pb-6`}>
          LOGO
        </h3>

        {/* Menu */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 pb-6 text-[#707070] text-sm md:text-base">
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">About me</Link></li>
          <li><Link href="#">Portfolio</Link></li>
          <li><Link href="#">Contact me</Link></li>
        </ul>

        {/* Social */}
        <div className="flex justify-center gap-4 pb-6 text-white text-lg">
         

          <Link href='https://github.com/SifatUllahFSD'><FaGithub className='text-[#BABABA] text-[20px]' /></Link>
              <Link href='https://www.facebook.com/share/17Rs3YTknF/'><FaFacebookF className='text-[#BABABA] text-[20px]' /></Link>
              <Link href='https://www.instagram.com/s_i_f_a_t__u_l_l_a_h?igsh=YzZqMzB3aGhhYTV1'><FaInstagram className='text-[#BABABA] text-[20px]' /></Link>
              <Link href='https://www.linkedin.com/in/md-sifat-ullah-556384390/'><FaLinkedinIn className='text-[#BABABA] text-[20px]' /></Link>
            
        </div>

        {/* Contact Info */}
        <div className="text-[#707070] text-xs md:text-sm pb-3 space-y-1">
          <p>Email: info.sifatullah@gmail.com</p>
          <p>Phone: +088 017 050 689 50</p>
        </div>

        {/* Credit */}
        {/* <p className="text-[#555] text-xs">
          Designed by @mahmood.faisal UI/UX designer
        </p> */}

      </div>
    </footer>
  )
}

export default Footer