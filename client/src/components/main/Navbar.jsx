import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FiShoppingBag } from "react-icons/fi";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../redux/cartSlice";


const Navbar = () => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const {isCartOpen, cartItems} = useSelector((store) => store.cart)

  return (
    <nav  className='py-4 sticky top-0 left-0 w-full bg-secondary text-white z-[99] h-[80px] flex justify-between items-center'>
        {/* Desktop */}
        <div className="container hidden md:flex justify-between items-center relative">
        
          <ul className="flex items-center gap-4 text-2xl">
            <li><a href="#"><FaFacebook/></a></li>
            <li><a href="#"><FaInstagram/></a></li>
          </ul>

        
         

          
          <ul className="nav-links hidden md:flex items-center gap-4 text-xl">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/menu'}>Menu</Link></li>
            <li className="translate-y-[-1px] ml-3" onClick={() => dispatch(openCart())}>
              {/* <span className="text-[28px] relative">
                <FiShoppingBag/>
                {cartItems.length > 0 && <span className="absolute top-[-16px] right-[-18px] w-[30px] h-[30px] flex items-center justify-center text-[20px]  leading-none bg-[#838562] text-white rounded-full">
                  {cartItems.reduce((acc, currentItem) => {
                    return acc += currentItem.quantity
                  }, 0)}
              </span>}
              </span> */}
              </li>
          </ul>

        </div>

          {/* Mobile */}
        <div className="container flex md:hidden justify-between items-center relative">
            <span onClick={() => setMenuOpen(true)} className="text-4xl relative">
              <CgMenuLeftAlt/>
            </span>

            {/* <span className="text-[28px] relative mr-2 " onClick={() => dispatch(openCart())}>
                <FiShoppingBag/>
                <span className="absolute top-[-16px] right-[-18px] w-[30px] h-[30px]  flex items-center justify-center text-[20px] leading-none bg-[#838562] text-white rounded-full">
                {cartItems.reduce((acc, currentItem) => {
                    return acc += currentItem.quantity
                  }, 0)}
                </span>
            </span> */}
          
        </div>


        {menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
        {isCartOpen && <Cart/>}
    </nav>
 
  )
}

export default Navbar
