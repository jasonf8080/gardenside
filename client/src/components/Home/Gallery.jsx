import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { galleryImages } from '../../data'

const Gallery = () => {
  const innerSlider = useRef(null)

  useEffect(() => {
  const slider = innerSlider.current;
  let scrollSpeed = 1; // px per frame
  let intervalId;

  function startScroll() {
    intervalId = setInterval(() => {
        
      slider.scrollLeft += scrollSpeed;

      // Reset scroll when reaching the end
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }
    }, 10); //Every 0.1 seconds this will run -- where the scrollLeft will increase by 1 of what it previously was.. -- When it reaches the end, reset to 0.
  }

  startScroll();

  return () => clearInterval(intervalId);
}, []);

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section ref={ref} className='pt-16 md:pt-20  bg-secondary text-white'>
        <div className="container text-center">
            <h1 className='text-2xl md:text-4xl mb-4'>Follow us on social media for more</h1>
            <a href="https://www.instagram.com/gardensidekitchen/" className='underline text-xl uppercase underline-offset-8'>@gardensidekitchen</a>
        </div>
      
        <div id="gallery" className='mt-12 overflow-hidden'>
            <div ref={innerSlider} id='gallery-slider' className="w-full overflow-hidden">
                {inView && 
                <motion.div 
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.5, delay: 0.5}}
                  id='gallery-slider-inner-container' className="flex items-center max-w-[100vw]">
                      {galleryImages.map((item, index) => {
                          return <img 
                                    key={index}
                                    src={item} 
                                    className='object-cover min-w-[275px] max-w-[275px] min-h-[275px] max-h-[275px] md:max-w-[400px] md:max-h-[400px] md:min-w-[400px] md:min-h-[400px]'
                                    loading='lazy'
                                    />
                      })}
                </motion.div>}
            </div>
        </div>
    </section>
  )
}

export default Gallery
