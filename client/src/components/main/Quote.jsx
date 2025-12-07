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
        <section ref={ref} className="py-28 md:py-32 flex flex-col justify-center items-center  bg-[#838562] text-white">
            <div className="max-w-[300px] md:max-w-[1000px] mx-auto">
             {inView &&
              <>
                <motion.h1 
                  initial={{opacity: 0, y: -30}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: 0.5}}
                  className=" text-center text-3xl md:text-4xl leading-[1.5] md:leading-[2] italic mb-12 ">
                  {quote}
                </motion.h1>

                 {buttonEl &&  <motion.button 
                  initial={{opacity: 0, y: -30}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: 0.8}}
                  className='flex justify-center items-center mx-auto primary-button text-xl px-8 py-3'>
                  <Link to={'/about'}>
                  Learn More
                  </Link>
                </motion.button>}
              </>
              }
            </div>
        </section>
  )
}

export default Quote
