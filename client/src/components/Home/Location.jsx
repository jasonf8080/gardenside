import React from 'react'
import { useInView } from 'react-intersection-observer'
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { motion } from 'framer-motion'

const Location = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  return (
    // <section ref={ref} className="py-16 md:py-32">
    //  <div className="max-w-[90%] md:max-w-[80%] mx-auto">
    //    <h1 className="font-heading tracking-wider font-bold text-2xl md:text-4xl mb-3 md:mb-8">Location</h1>
    //    {inView &&
    //    <motion.div 
    //      initial={{y: -30, opacity: 0}} 
    //      animate={{y: 0, opacity: 1}} 
    //      transition={{duration: 1, delay: 0.5}}
    //      className="flex flex-col md:flex-row justify-between gap-8 md:gap-24">
    //     {/* Text Section */}
    //    <div className="basis-[50%] md:border-t-[2px] border-white order-1 md:order-[-1] ">
    //       <div 
    //         className='hidden md:block'
    //         style={{ margin: "1em 0" }}>
    //         <iframe
    //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5112726677485!2d-73.57065192375845!3d41.27597597131412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2aeae32de74f3%3A0x1d8d3dcb720d8b41!2s1202%20NY-35%2C%20South%20Salem%2C%20NY%2010590!5e0!3m2!1sen!2sus!4v1758912885495!5m2!1sen!2sus"
    //           width="70%"
    //           height="200"
    //           style={{ border: 0 }}
    //           allowFullScreen
    //           loading="lazy"
    //         ></iframe>
    //       </div>

    //       <div 
    //         className='block md:hidden'
    //         style={{ margin: "1em 0" }}>
    //         <iframe
    //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5112726677485!2d-73.57065192375845!3d41.27597597131412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2aeae32de74f3%3A0x1d8d3dcb720d8b41!2s1202%20NY-35%2C%20South%20Salem%2C%20NY%2010590!5e0!3m2!1sen!2sus!4v1758912885495!5m2!1sen!2sus"
    //           width="100%"
    //           height="200"
    //           style={{ border: 0 }}
    //           allowFullScreen
    //           loading="lazy"
    //         ></iframe>
    //       </div>

    //       <p className='text-lg'><strong>Address:</strong>  1202 Route 35, South Salem, NY</p>

    //       <p className='text-lg'><strong>Directions:</strong> Located inside the greenhouse at Gossetts Nursery.</p>

    //       <p className='text-lg'>
    //         <strong>Hours of Operation:</strong><br />
    //           <p>Thursday - Saturday: 7:00 AM - 7:00 PM</p>
    //           <p>Sunday: 7:00 AM - 5:00 PM</p>
    //       </p>
    //     </div>

    //     {/* Image Section */}
    //     <div className="basis-[50%] flex relative order-[-1] md:order-1 mt-4 md:mt-0">
    //         <img
    //           className="w-1/2 object-cover transform translate-x-[-4px] md:translate-x-[-8px] translate-y-[20px] md:translate-y-[30px]"
    //           src="/images/location1.webp"
    //           alt="Location view from outdoors"
    //         />

    
    //         <img
    //           className="w-1/2 object-cover transform translate-x-[4px] md:translate-x-[8px] translate-y-[-20px] md:translate-y-[-30px]"
    //           src="/images/slider9.webp"
    //           alt="Interior view"
    //         />
    //     </div>
    //   </motion.div>}
    //  </div>
    // </section>
    <section className='py-16 md:py-20'>
      <div className="container">
        <div>
          <div className="hidden md:flex items-center mb-6">
            <p className='uppercase text-xl mr-3'>Visit Us</p>
            <div className="h-[1px] mt-1 w-28 bg-black"></div>
          </div>

          <div className="flex flex-col md:flex-row text-center items-center gap-4 md:gap-8">
            <h1 className="font-heading text-4xl md:text-5xl uppercase">Location</h1>
            <div className="hidden md:block h-16 w-[1px] bg-black"></div>
            <p className='w-[250px] text-lg'>Located insdie Gossett's Nursery surrounded by plants, cofee, pastries, and South Salem Winery</p>
          </div>
        </div>


        <div className='w-[100%] md:max-w-[90%] grid grid-cols-1  md:grid-cols-[700px_1fr] my-6 md:my-12 gap-4'>
          <div className='grid sm:grid-cols-2 gap-4'>
            <img className='sm:h-[350px] sm:w-[350px] object-cover' src="/images/location2.jpg" alt="interior of cafe" />

            <div>
                <img className='sm:w-[350px] sm:h-[175px]' src="/images/location1.jpg" alt="interior of cafe" />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <img className='hidden sm:block sm:w-[175px] sm:h-[160px] object-cover' src="/images/location3.jpg" alt="winery counter" />
                  <img className='hidden sm:block sm:w-[175px] sm:h-[160px] object-cover' src="/images/location4.jpg" alt="greenhouse" />
                </div>
            </div>
          </div>

        

          <div className='pl-3'>
             <span className='flex gap-2 items-center text-2xl md:text-3xl mb-2'><CiLocationOn/> <span className='text-xl md:text-2xl mb-1'>Address</span></span>
            <h2 className='text-xl md:text-2xl pl-2 font-semibold'>1202 NY-35 <br/> South Salem, NY 10590</h2>
            <div className="h-[1px] w-full bg-[#555] my-4"></div>
            <span className='flex gap-2 items-center text-2xl md:text-3xl mb-2'><CiClock2/> <span className='text-xl md:text-2xl mb-1'>Hours</span></span>
            <div className='text-lg md:text-2xl pl-2 max-w-[300px]'>
              <span className="flex items-center justify-between">
                <span className='mr-8'>Thursday - Friday</span>
                <span>7AM - 7PM</span>
              </span>

              <span className="flex items-center justify-between">
                <span className='mr-8'>Saturday</span>
                <span>8AM - 7PM</span>
              </span>

              <span className="flex items-center justify-between">
                <span className='mr-8'>Sunday</span>
                <span>8AM - 5PM</span>
              </span>
            </div>
          </div>

        </div>

           <div 
            className='block'
            style={{ margin: "1em 0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5112726677485!2d-73.57065192375845!3d41.27597597131412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2aeae32de74f3%3A0x1d8d3dcb720d8b41!2s1202%20NY-35%2C%20South%20Salem%2C%20NY%2010590!5e0!3m2!1sen!2sus!4v1758912885495!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        <div></div>
       </div>
    </section>
  )
}

export default Location
