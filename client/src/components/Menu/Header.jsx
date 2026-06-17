import { fadeInClass, useLoadImage } from "../../utils/hooks"

const Header = () => {
    const {loaded, handleLoad} = useLoadImage();

  return (
        <section className='relative z-[10] bg-secondary text-white'> 
          {/* Content */}
          <div className="max-w-[95%] mx-auto flex flex-col justify-center items-center text-center translate-y-[40px]">
            <img className='max-w-[100px] md:max-w-[130px]' src="https://www.pngarts.com/files/1/Coffee-PNG-Free-Download.png" alt="coffee mug" />
      
            <h1 className='text-4xl md:text-6xl font-heading my-4'>OUR MENU</h1>
            
             
          </div>
      

        {/* Background Image */}
        <img 
          src='/images/menuHeader.jpg' 
          className={`${fadeInClass(loaded)} duration-500 blur-[0px] mx-auto w-[90%] h-[275px] md:h-[400px] translate-y-[100px] md:translate-y-[130px] relative z-[10] object-cover`}
          alt="Featured menu item: " 
          onLoad={handleLoad}
        />

       
        </section>
  )
}

export default Header
