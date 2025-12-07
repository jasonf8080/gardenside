import { LiaTimesSolid } from "react-icons/lia"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { closeCart } from '../../redux/cartSlice'
import { motion } from 'framer-motion'


const Cart = () => {
    const {cartItems} = useSelector((store) => store.cart)
    const dispatch = useDispatch();


  return (
    <motion.div 
     initial={{ opacity: 0}}   
  animate={{ opacity: 1 }}   
  transition={{ duration: 0.2 }}
    className="fixed top-0 right-0 z-[99] w-[100vw] h-[100vh] min-h-[600px] bg-black bg-opacity-50 text-[#32180f]">
      <motion.div
        initial={{ translateX: '100%'}}   
  animate={{ translateX: '0%' }}  
  transition={{ duration: 0.2 , delay: 0.3}}
       className="absolute top-0 right-0 bg-[#FFFDF9] w-[90vw] md:w-[500px] h-[100vh] py-8 px-5  md:px-10">
        {/* Cart Header */}
        <div className="flex justify-between items-center border-b-[1px] border-y-[#817573] pb-6">
            <h1 className='font-heading text-3xl md:text-3xl uppercase font-bold'>Cart</h1>
            <button className='text-3xl translate-y-[-6px]' onClick={() => dispatch(closeCart())}><LiaTimesSolid/></button>
        </div>

            {/* Title, Quantity, Price */}
         
            {cartItems.length < 1 ? <h1 className='p-10 text-center text-2xl'>Cart is Empty</h1> : <>
            {cartItems.map((cartItem) => {
                return (
                    <CartItem {...cartItem}/>
                )
            })}
           

            <p className='text-right text-3xl font-bold mt-6 mb-4'>Total: ${cartItems.reduce((acc, currentItem) => {
                return acc += currentItem.price * currentItem.quantity
            }, 0)}.00</p>
            <Link to="/checkout"
                className="bg-[#838562] text-white rounded-sm uppercase px-8 py-3 text-lg md:text-xl font-bold tracking-wider w-full flex justify-center items-center text-center"
                >
                Checkout
            </Link>
            </>
     }
      </motion.div>
    </motion.div>
  )
}

export default Cart
