import React from 'react'
import { fadeInClass, useLoadImage } from '../../utils/hooks'
import { Link } from 'react-router-dom';

const Header = () => {
  const {loaded, handleLoad} = useLoadImage();

  return (
       <section className='min-h-[500px] md:min-h-[750px] relative flex justify-center items-center overflow-hidden'> 
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

        {/* Background Image */}
        <img 
          src='/images/newHero.jpg' 
          className={`${fadeInClass(loaded)} duration-500 absolute blur-sm scale-105 top-0 left-0 min-w-full max-w-full h-auto min-h-full max-h-full object-cover z-[-1] bg-secondary`}
          alt="Featured menu item: " 
          onLoad={handleLoad}
        />

        <div className='absolute top-[50%] md:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[350px] max-w-[500px]  mx-auto md:max-w-[900px] z-10 text-center pb-10'>
            <h1 className='text-primary text-3xl md:text-5xl font-bold mb-10 md:mb-4 z-[10] font-heading tracking-tight md:tracking-wider leading2'>
            GARDENSIDE KITCHEN & <br className='md:hidden'/> COFFEE BAR
            </h1>
             <p className='hidden md:block mb-6 md:mb-10 text-white text-2xl md:text-3xl'>Come and shop our newest menu selections</p>
             
            <Link 
              to={'/menu'} 
              className=' mx-auto max-w-[200px] primary-button text-lg rounded-sm px-8 py-3'>
                View Menu
            </Link>
        </div>
        </section>
  )
}

export default Header
