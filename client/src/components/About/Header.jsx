import { fadeInClass, useLoadImage } from "../../utils/hooks"


const Header = () => {
   const {loaded, handleLoad} = useLoadImage()

  return (
    <section className='relative z-[10] bg-secondary text-white mb-[100px] md:mb-0'> 
          {/* Content */}
          <div className="max-w-[95%] mx-auto flex flex-col justify-center items-center text-center translate-y-[40px]">
            {/* <img className='max-w-[100px] md:max-w-[130px]' src="https://static.vecteezy.com/system/resources/thumbnails/042/886/850/small_2x/watercolor-and-painting-green-leaf-element-illustration-free-png.png" alt="leaf" /> */}
      
            <h1 className='text-4xl md:text-6xl font-heading my-4'>OUR STORY</h1>
            
             
          </div>
      

        {/* Background Image */}
        <img 
          src='/images/aboutHeader.jpg' 
          className={`${fadeInClass(loaded)} duration-500 blur-[0px] mx-auto w-[90%] h-[275px] md:h-[400px] translate-y-[100px] md:translate-y-[130px] relative z-[10] object-cover`}
          alt="cafe and winery counter" 
          onLoad={handleLoad}
        />

       
        </section>
  )
}

export default Header
