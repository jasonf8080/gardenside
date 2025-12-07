import React from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { coreValues } from '../../data'
import { useInView } from 'react-intersection-observer'


const CoreValues = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  return (
    <section
      ref={ref} 
      className="py-24" >
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-3">
        {coreValues.map((coreValue, index) => {
            return <CoreValue 
                      key={coreValue.title}
                      index={index}
                      inView={inView}
                      {...coreValue} 
                       />
        })}
        </div>
    </section>
  )
}



const CoreValue = ({img, title, content, inView, index}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <>
     {inView && 
      <motion.article 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1,  delay: Number(`0.${(index * 3)}`)}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-[500px]  relative flex justify-center items-center cursor-pointer"
        >
        <span 
            className={`${isHovered ? 'bg-opacity-80' : 'bg-opacity-40'} 
            absolute top-0 left-0 w-full h-full bg-black z-10 duration-200`}>
        </span>

        <img
            className=" absolute top-0 left-0 min-h-full max-h-full object-cover max-w-full min-w-full"
            src={img}
            loading="lazy" 
            alt={title}
        />

        <div className="text-white z-20 text-center max-w-[85%] mx-auto">
            <h1 className='font-heading text-4xl uppercase mb-3'>{title}</h1>

            <AnimatePresence mode='wait'>
             {isHovered &&
              <motion.p 
                initial={{y: -20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.3}}
                className='text-2xl leading-[2.5rem]'>
                    {content}
              </motion.p>}
            </AnimatePresence>
         </div>
    
      </motion.article>}
      </>
  )
}

export default CoreValues
