import { Lato } from 'next/font/google'
import React from 'react'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin']
})

const Contact = () => {
  return (
    <section className='pb-3 md:pb-25'>
      <div className="container mx-auto px-4">
        
        <div className="text-center pb-10 md:pb-12">
          <h2 className={`${lato.className} font-bold text-[#FEFEFE] text-[28px] md:text-[40px] pb-3`}>
            Contact me
          </h2>
          <p className={`${lato.className} text-[#707070] text-[16px] md:text-[18px]`}>
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        <form className="max-w-4xl mx-auto">
          
          {/* grid responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

            <input type="text" placeholder="Name"
              className="bg-[#1E1E1E] p-3 rounded text-white outline-none" />

            <input type="email" placeholder="Email"
              className="bg-[#1E1E1E] p-3 rounded text-white outline-none" />

            <input type="text" placeholder="Phone Number"
              className="bg-[#1E1E1E] p-3 rounded text-white outline-none" />

            <select className="bg-[#1E1E1E] p-3 rounded text-[#707070] outline-none">
              <option>Service Of Interest</option>
              <option>Frontend Web Development</option>
              <option>Backend Web Development</option>
              <option>Full-Stack Web Development</option>
            </select>

            {/* full width */}
            <input type="text" placeholder="Timeline"
              className="bg-[#1E1E1E] p-3 rounded text-white outline-none md:col-span-2" />

            <textarea placeholder="Project Details..."
              rows={4}
              className="bg-[#1E1E1E] p-3 rounded text-white outline-none md:col-span-2">
            </textarea>
          </div>

          {/* button */}
          <div className="text-center md:text-right pt-6">
            <button className="border border-[rgb(93,85,210)] px-6 py-2 rounded text-white hover:bg-[rgb(93,85,210)] transition">
              Send
            </button>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Contact