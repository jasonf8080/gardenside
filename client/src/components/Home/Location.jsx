import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Location = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  return (
    <section ref={ref} className="py-16 md:py-32">
     <div className="max-w-[90%] md:max-w-[80%] mx-auto">
       <h1 className="font-heading tracking-wider font-bold text-2xl md:text-4xl mb-3 md:mb-8">Location</h1>
       {inView &&
       <motion.div 
         initial={{y: -30, opacity: 0}} 
         animate={{y: 0, opacity: 1}} 
         transition={{duration: 1, delay: 0.5}}
         className="flex flex-col md:flex-row justify-between gap-8 md:gap-24">
        {/* Text Section */}
       <div className="basis-[50%] md:border-t-[2px] border-white order-1 md:order-[-1] ">
          <div 
            className='hidden md:block'
            style={{ margin: "1em 0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5112726677485!2d-73.57065192375845!3d41.27597597131412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2aeae32de74f3%3A0x1d8d3dcb720d8b41!2s1202%20NY-35%2C%20South%20Salem%2C%20NY%2010590!5e0!3m2!1sen!2sus!4v1758912885495!5m2!1sen!2sus"
              width="70%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div 
            className='block md:hidden'
            style={{ margin: "1em 0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5112726677485!2d-73.57065192375845!3d41.27597597131412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2aeae32de74f3%3A0x1d8d3dcb720d8b41!2s1202%20NY-35%2C%20South%20Salem%2C%20NY%2010590!5e0!3m2!1sen!2sus!4v1758912885495!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <p className='text-lg'><strong>Address:</strong>  1202 Route 35, South Salem, NY</p>

          <p className='text-lg'><strong>Directions:</strong> Located inside the greenhouse at Gossetts Nursery.</p>

          <p className='text-lg'>
            <strong>Hours of Operation:</strong><br />
              <p>Thursday - Saturday: 7:00 AM - 7:00 PM</p>
              <p>Sunday: 7:00 AM - 5:00 PM</p>
          </p>
        </div>

        {/* Image Section */}
        <div className="basis-[50%] flex relative order-[-1] md:order-1 mt-4 md:mt-0">
            <img
              className="w-1/2 object-cover transform translate-x-[-4px] md:translate-x-[-8px] translate-y-[20px] md:translate-y-[30px]"
              src="/images/location1.webp"
              alt="Location view from outdoors"
            />

    
            <img
              className="w-1/2 object-cover transform translate-x-[4px] md:translate-x-[8px] translate-y-[-20px] md:translate-y-[-30px]"
              src="/images/slider9.webp"
              alt="Interior view"
            />
        </div>
      </motion.div>}
     </div>
    </section>
  )
}

export default Location
