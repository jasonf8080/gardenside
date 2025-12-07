import { fadeInClass, useLoadImage } from "../../utils/hooks"

const Header = () => {
    const {loaded, handleLoad} = useLoadImage();

  return (
      <section className='h-[500px] w-full relative flex justify-center items-center'>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 "></div>
        <img className={`${fadeInClass(loaded)} absolute top-0 left-0 max-w-full min-w-full min-h-full max-h-full h-auto object-cover z-[-1]`}
          src='https://images.pexels.com/photos/4828315/pexels-photo-4828315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt="menu" 
        
          onLoad={handleLoad}/>
        
        <h1 className='text-primary text-[33px] md:text-5xl font-bold mb-4 z-[10] font-heading'>Menu</h1>
      </section>    
  )
}

export default Header
