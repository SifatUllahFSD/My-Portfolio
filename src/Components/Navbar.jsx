"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/images/LOGO .png'
import Link from 'next/link'
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className='pt-6 md:pt-10'>
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between relative">

          {/* ✅ MOBILE MENU ICON (LEFT) */}
          <div className="md:hidden text-3xl cursor-pointer">
            <IoMenu onClick={() => setOpen(true)} />
          </div>

          {/* ✅ LOGO (RIGHT ON MOBILE, LEFT ON DESKTOP) */}
          <div className="ml-auto md:ml-0">
            <Image src={logo} alt='logo' className="w-28 md:w-36" />
          </div>

          {/* ✅ DESKTOP MENU */}
          <div className="menu hidden md:block mx-auto">
            <ul className='flex items-center gap-8 lg:gap-12'>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#about">About me</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
              <li><Link href="#contact">Contact me</Link></li>
            </ul>
          </div>

          {/* ✅ HIRE ME (ONLY DESKTOP) */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className='py-2 px-6 text-white bg-[#5D55D2] rounded-md'
            >
              Hire Me
            </Link>
          </div>

        </div>

        {/* ✅ MOBILE DRAWER */}
        <div className={`fixed top-0 left-0 h-full w-[260px] bg-[#1f1f1f] p-6 
        transform ${open ? 'translate-x-0' : '-translate-x-full'} 
        transition-transform duration-300 z-50`}>

          <div className="flex justify-end text-3xl mb-6 cursor-pointer">
            <IoClose onClick={() => setOpen(false)} />
          </div>

          <ul className='flex flex-col gap-6 text-lg'>
            <li><Link href="#home" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="#services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="#about" onClick={() => setOpen(false)}>About me</Link></li>
            <li><Link href="#portfolio" onClick={() => setOpen(false)}>Portfolio</Link></li>
            <li><Link href="#contact" onClick={() => setOpen(false)}>Contact me</Link></li>
          </ul>

        </div>

        {/* OVERLAY */}
        {open && (
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen(false)}
          />
        )}

      </div>
    </nav>
  )
}

export default Navbar