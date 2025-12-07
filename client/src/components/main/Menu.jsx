import { FaFacebook, FaInstagram } from "react-icons/fa"
import { LiaTimesSolid } from "react-icons/lia"
import { Link } from "react-router-dom"

const Menu = ({setMenuOpen}) => {
 

  return (
    <div className="fixed top-0 right-0 z-[99] w-[100vw] h-[100vh] min-h-[600px] text-[#32180f]">
       <div className="w-full h-full bg-primary bg-opacity-[97%] relative flex  justify-center items-center">
          <button className="absolute top-4 right-4 text-4xl" onClick={() => setMenuOpen(false)}><LiaTimesSolid/></button>
          <div className="flex flex-col mb-20">
            <ul className="mobile-links text-center text-3xl">
              <li className="mb-6"><Link to={'/'} onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li className="mb-6"><Link to={'/about'} onClick={() => setMenuOpen(false)}>About</Link></li>
              <li className="mb-6"><Link to={'/menu'} onClick={() => setMenuOpen(false)}>Menu</Link></li>
              {/* <li className="mb-12"><Link to={'/menu'} onClick={() => setMenuOpen(false)}>Cart</Link></li> */}
            </ul>
            <div className="flex justify-center items-center text-4xl">
              <a  className='mr-4' href="#"><FaFacebook/></a>
              <a href="#"><FaInstagram/></a>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Menu
