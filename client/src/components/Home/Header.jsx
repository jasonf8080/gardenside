import React from 'react'
import { fadeInClass, useLoadImage } from '../../utils/hooks'
import { Link } from 'react-router-dom';

const Header = () => {
  const {loaded, handleLoad} = useLoadImage();

  return (
       <section className='relative z-[10] bg-secondary text-white'> 
          {/* Content */}
          <div className="max-w-[95%] mx-auto flex flex-col justify-center items-center text-center translate-y-[40px]">
            <img className='max-w-[100px] md:max-w-[130px]' src="https://static.vecteezy.com/system/resources/previews/024/856/600/original/pink-sakura-flower-isolated-on-transparent-background-ai-generated-free-png.png" alt="green leaf" />
           <div className="flex items-center justify-center gap-4 text-accent">
            <div className="w-12 h-px bg-accent"></div>
            <p className="text-lg md:text-xl font-bold">EST 2026</p>
            <div className="w-12 h-px bg-accent"></div>
          </div>
            <h1 className='text-4xl md:text-6xl font-heading my-4'>GARDENSIDE KITCHEN & <br/> COFFEE BAR</h1>
             <p className='text-lg md:text-xl flex justify-center items-center text-accent mb-6'>FRESH COFFEE • HANDCRAFTED PASTRIES • FOCCACIAS • LOCAL WINE • LATTES</p>
             <Link to='/menu' className="primary-button px-6 py-2 mb-8">View Menu</Link>
          </div>
      

        {/* Background Image */}
        <img 
          src='/images/newHero.jpg' 
          className={`${fadeInClass(loaded)} duration-500 blur-[0px] mx-auto w-[90%] h-[275px] md:h-[400px] translate-y-[100px] md:translate-y-[130px] relative z-[10] object-cover`}
          alt="Featured menu item: " 
          onLoad={handleLoad}
        />

       
        </section>
  )
}

export default Header
