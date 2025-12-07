import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { addItem, openCart } from '../../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';


const MenuItem = ({_id, name, ingredients, price, index }) => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((store) => store.cart)

  const handleAddToCart = () => {
    dispatch(addItem({_id, name, quantity: 1, price}))
    dispatch(openCart())
  }



    //Update localStorage whenver cart is edited
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: parseFloat(`0.${index}`)  }}
      className='md:min-w-[1fr]' 
    >
     {/* md:min-h-[300px] rounded-sm */}
      <div className='px-2 md:px-4 py-4'>
        <div className="flex justify-between items-start">
            <h1 className="text-xl md:text-2xl mb-1 font-heading uppercase font-bold">
          {name}
        </h1>

        {/* <button onClick={handleAddToCart} className='text-sm md:text-lg underline  md:translate-y-[-5px]'>Add to Cart</button> */}
        </div>
      
        <p className='text-lg md:text-xl md:block'>
          {ingredients}
        </p>
        <p className='font-bold mt-4 text-xl text-orange-950'>
          ${price}.00
        </p>
      </div>
    </motion.article>
  )
}

export default MenuItem
