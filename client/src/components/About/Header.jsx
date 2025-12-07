import { fadeInClass, useLoadImage } from "../../utils/hooks"


const Header = () => {
   const {loaded, handleLoad} = useLoadImage()

  return (
   <section className='min-h-[500px] md:min-h-[750px] relative flex justify-center items-center'> 
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        {/* Background Image */}
        <img 
            src='/images/heroCompress.webp' 
            className={`${fadeInClass(loaded)} absolute top-0 left-0 min-w-full max-w-full h-auto min-h-full max-h-full object-cover z-[-1]`}
            alt="Our story" 
            onLoad={handleLoad}
            />
        
        <div className='max-w-[300px] mx-auto md:max-w-[700px] z-10 text-center pb-10'>
            <h1 className='text-primary text-[33px] md:text-6xl font-bold mb-4 font-heading'>Our Story</h1>
        </div>
    </section>
  )
}

export default Header
