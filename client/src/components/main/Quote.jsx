import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Quote = ({quote, buttonEl}) => {
  const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5
  })

  return (
        <section ref={ref} className="py-28 md:py-32 flex flex-col justify-center items-center text-center  bg-secondary text-white">
           <div className="container">
              <p className='text-xl md:text-2xl text-accent  uppercase'>Three Spaces. One Destination</p>
              <h1 className='text-3xl md:text-5xl font-heading uppercase mt-3 mb-6'>Cafe. Winery. Greenhouse.</h1>
              <p className='text-lg md:text-xl mb-2'>From morning coffee to an evening pour, <br/> surronded by greenery in between. </p>
              <p className='text-lg md:text-xl text-accent'>Welcome to Gardenside.</p>
           </div>

            <div className='grid grid-cols-1 md:grid-cols-3 max-w-[95%] mx-auto gap-8 md:gap-4 mt-10 relative '>
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div> */}

              <div className="overflow-hidden text-center relative">
                <img
                  className='w-full h-[450px] object-cover brightness-75'
                  src="/images/place3.jpg"
                  alt=""
                />

                <h1 className='font-heading uppercase text-4xl'>Cafe</h1>
                <p className='text-xl'>Thougtfully sourced coffee, fresh pastries & seasonal bites made with care</p>
                <button className='text-accent'>View Menu</button>
              </div>

              <div className="overflow-hidden text-center relative">
                <img
                  className='w-full h-[450px] object-cover brightness-75'
                  src="/images/place2.jpg"
                  alt=""
                />

                <h1 className='font-heading uppercase text-4xl'>Cafe</h1>
                <p className='text-xl'>Thougtfully sourced coffee, fresh pastries & seasonal bites made with care</p>
                <button className='text-accent'>View Menu</button>
              </div>

              <div className="overflow-hidden text-center relative">
                <img
                  className='w-full h-[450px] object-cover brightness-75'
                  src="/images/place1.jpg"
                  alt=""
                />

                <h1 className='font-heading uppercase text-4xl'>Cafe</h1>
                <p className='text-xl'>Thougtfully sourced coffee, fresh pastries & seasonal bites made with care</p>
                <button className='text-accent'>View Menu</button>
              </div>
            </div>
        </section>
  )
}

export default Quote
