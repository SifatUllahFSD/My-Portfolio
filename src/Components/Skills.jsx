"use client";

import React, { useEffect, useRef, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiBootstrap } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

const skillsData = [
  {icon:<FaHtml5/>, name:"HTML", value:95},
  {icon:<FaCss3Alt/>, name:"CSS", value:90},
  {icon:<FaJs/>, name:"JavaScript", value:85},
  {icon:<FaReact/>, name:"React", value:90},
  {icon:<SiNextdotjs/>, name:"Next.js", value:85},
  {icon:<SiTailwindcss/>, name:"Tailwind", value:90},
  {icon:<SiBootstrap/>, name:"Bootstrap", value:80},
  {icon:<FaNodeJs/>, name:"Node.js", value:80},
  {icon:<SiExpress/>, name:"Express", value:75},
  {icon:<SiMongodb/>, name:"MongoDB", value:75},
  {icon:<FaGitAlt/>, name:"Git", value:85},
  {icon:<FaGithub/>, name:"GitHub", value:90},
  {icon:<VscVscode/>, name:"VS Code", value:95},
]

const Skills = () => {
  const [progress, setProgress] = useState(Array(skillsData.length).fill(0))
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          skillsData.forEach((skill, index) => {
            let start = 0

            const interval = setInterval(() => {
              start += 1

              setProgress(prev => {
                const newProgress = [...prev]
                newProgress[index] = start
                return newProgress
              })

              if (start >= skill.value) clearInterval(interval)

            }, 20)
          })

        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className='pb-20 md:pb-37.5'>
      <div className="container mx-auto px-4">

        {/* HEADING */}
        <div className='text-center pb-12 md:pb-16'>
          <h2 className='text-[28px] md:text-[40px] font-bold text-white'>
            My <span className='text-[rgb(93,85,210)]'>Skills</span>
          </h2>

          <p className='text-[#707070] text-[14px] md:text-[18px] pt-3'>
            Technologies I use to build modern and scalable web applications
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-12">

          {skillsData.map((skill, i) => (

            <div key={i} className='text-center group transition-all duration-300 hover:-translate-y-2'>

              {/* Circle */}
              <div 
                className='w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center mx-auto 
                transition-all duration-500 hover:scale-110'
                style={{
                  background: `conic-gradient(rgba(93,85,210,0.5) ${progress[i]}%, rgba(255,255,255,0.05) ${progress[i]}%)`
                }}
              >

                {/* Inner */}
                <div className='w-14 h-14 md:w-24 md:h-24 
                bg-[rgba(0,0,0,0.6)] backdrop-blur-md 
                border border-[rgba(255,255,255,0.05)] 
                rounded-full flex items-center justify-center'>

                  <span
                    className={`text-[28px] md:text-[48px] text-white transition-all duration-300 group-hover:scale-110 
                    ${
                      skill.name === "VS Code"
                        ? "scale-125 drop-shadow-[0_0_6px_rgba(93,85,210,0.6)]"
                        : ""
                    }`}
                  >
                    {skill.icon}
                  </span>

                </div>
              </div>

              {/* % */}
              <h3 className='text-[rgb(93,85,210)] font-bold text-[18px] md:text-[28px] pt-4'>
                {progress[i]}%
              </h3>

              {/* Name */}
              <h4 className='font-bold text-[14px] md:text-[22px] text-[#959595]'>
                {skill.name}
              </h4>

            </div>

          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills