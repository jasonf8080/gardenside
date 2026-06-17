import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
     <footer className='bg-secondary py-16 md:py-20 text-primary'>
        <div className="container grid grid-cols-1 md:grid-cols-3  gap-10 ">
          <div className='text-lg md:text-xl  md:text-left'>
            <h2 className="text-2xl md:text-3xl mb-4 md:mb-8 font-bold">Location</h2>

            <p className='mb-2'>1202 Route 35</p>
            <p className='mb-2'>South Salem, NY 10590</p>
            {/* <a href="#" className='underline'>Get Directions</a> */}
          </div>

           <div className='text-lg md:text-xl  md:text-left'>
            <h2 className="text-2xl md:text-3xl mb-4 md:mb-8 font-bold">Hours</h2>

            <p>Thursday - Frday: 7:00 AM - 7:00 PM</p>
            <p>Saturday: 8:00 AM - 7:00 PM</p>
            <p>Sunday: 8:00 AM - 5:00 PM</p>
          </div>

          <div className='text-lg md:text-xl  md:text-left'>
            <h2 className="text-2xl md:text-3xl mb-4 md:mb-8 font-bold">Contact</h2>

           <p className='mb-2'>Phone: 917-837-1131</p>
           {/* <p>Email: gardensidekitchen@gmail.com</p> */}
           <div className="flex mt-4  md:justify-start">
            <a href="#" className='text-3xl mr-3'><FaFacebook/></a>
            <a href="#" className='text-3xl'><FaInstagram/></a>
           </div>
          </div>
        </div>
     </footer>
  )
}

export default Footer
