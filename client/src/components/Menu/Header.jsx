import { fadeInClass, useLoadImage } from "../../utils/hooks"

const Header = () => {
    const {loaded, handleLoad} = useLoadImage();

  return (
      <section className='h-[500px] md:min-h-[600px] w-full relative flex justify-center items-center overflow-hidden'>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 "></div>
        <img className={`${fadeInClass(loaded)} absolute blur-[1px] scale-105 top-0 left-0 max-w-full min-w-full min-h-full max-h-full h-auto object-cover z-[-1]`}
          src='/images/menuHeader.jpg'
          alt="menu" 
        
          onLoad={handleLoad}/>
        
        <h1 className='text-primary text-[33px] md:text-5xl font-bold mb-4 z-[10] font-heading'>Menu</h1>
      </section>    
  )
}

export default Header
