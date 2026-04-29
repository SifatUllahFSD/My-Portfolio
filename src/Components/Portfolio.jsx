"use client"
import { Lato } from 'next/font/google';
import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';

import p1 from '../../public/images/p1.png'
import p2 from '../../public/images/p2.png'
import p3 from '../../public/images/p3.png'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin']
});

const tabs = [
  "All",
  "Frontend Development",
  "Ecommerce Development",
  "Web Application",
  "Dashboard Development"
];

const projects = [
  [p1, p2, p3, p1, p2, p3, p1, p2, p3],
  [p1, p2, p3],
  [p3, p1, p2, p1, p2, p3],
  [p2, p3, p1],
  [p1, p3, p2]
];

const Portfolio = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <section className='pb-10 md:pb-37.5'>
      <div className="container">

        {/* TITLE */}
        <div className='text-center'>
          <h2 className={`${lato.className} font-bold text-white text-[28px] md:text-[40px] pb-6 md:pb-10`}>
            Portfolio
          </h2>
        </div>

        <Tabs selectedIndex={selectedIndex} onSelect={(i) => setSelectedIndex(i)}>

          {/* 🔵 MOBILE CUSTOM DROPDOWN */}
          <div className="md:hidden pb-6 relative">

            {/* BUTTON */}
            <div
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full bg-[#1f1f1f] text-white p-3 rounded-full border border-[rgba(255,255,255,0.08)] cursor-pointer flex justify-between items-center"
            >
              {tabs[selectedIndex]}
              <span>▼</span>
            </div>

            {/* DROPDOWN */}
            {openDropdown && (
              <div className="absolute top-full left-0 w-full mt-2 bg-[#1f1f1f] rounded-xl border border-[rgba(255,255,255,0.08)] overflow-hidden z-50 shadow-lg">

                {tabs.map((tab, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedIndex(i);
                      setOpenDropdown(false);
                    }}
                    className={`px-4 py-3 cursor-pointer transition-all
                      ${selectedIndex === i
                        ? 'bg-[rgb(93,85,210)] text-white'
                        : 'text-[#ccc] hover:bg-[rgba(255,255,255,0.05)]'}
                    `}
                  >
                    {tab}
                  </div>
                ))}

              </div>
            )}

          </div>

          {/* 🔵 DESKTOP TABS */}
          <TabList className="hidden md:flex flex-wrap justify-center gap-4 pb-12 list-none">

            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={`${lato.className}
                  cursor-pointer px-6 py-3 rounded-full
                  text-[#C6C6C6]
                  bg-[rgba(255,255,255,0.05)]
                  border border-[rgba(255,255,255,0.08)]
                  transition-all duration-300
                  hover:bg-[rgb(93,85,210)]
                  hover:text-white
                  hover:scale-105
                `}
                selectedClassName={`${lato.className}
                  !bg-[rgb(93,85,210)]
                  !text-white
                  shadow-[0_0_20px_rgba(93,85,210,0.4)]
                  scale-105
                `}
              >
                {tab}
              </Tab>
            ))}

          </TabList>

          {/* 🔵 PROJECTS */}
          {projects.map((projectList, index) => (
            <TabPanel key={index}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

                {projectList.map((img, i) => (
                  <div key={i} className='group transition-all duration-300 hover:-translate-y-2'>

                    <div className="overflow-hidden rounded-xl">
                      <Image
                        className='w-full group-hover:scale-110 transition duration-500'
                        src={img}
                        alt='project'
                      />
                    </div>

                    <div className='bg-[rgba(255,255,255,0.05)] p-3 flex justify-between rounded-xl mt-1'>
                      <span className={`${lato.className} font-bold text-[#C6C6C6] text-[14px]`}>
                        Project Name
                      </span>
                      <span className={`${lato.className} font-bold text-[#C6C6C6] text-[14px]`}>
                        Category
                      </span>
                    </div>

                  </div>
                ))}

              </div>
            </TabPanel>
          ))}

        </Tabs>

      </div>
    </section>
  )
}

export default Portfolio