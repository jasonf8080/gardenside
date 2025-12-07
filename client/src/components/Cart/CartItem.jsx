import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, editItemQuantity} from '../../redux/cartSlice'
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi'

const CartItem = ({_id, name, quantity, price}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(quantity === 0){
            dispatch(removeItem(_id))
        }
    }, [quantity])

  return (
     <article className="w-full flex justify-between items-start py-4 md:py-6 px-2 border-b-[1px] border-y-[#817573]">
                <div>
                    <h1 className="font-heading uppercase font-bold text-lg md:text-xl mb-2">{name}</h1>
                      <div className="flex items-center gap-3 border-[1px] border-[#817573] border-opacity-50 max-w-[110px] h-[30px] justify-between">
                        <button 
                        onClick={() => dispatch(editItemQuantity({incrementType: 'decrease', _id}))}
                        className="border-none text-md px-3  border rounded py-1"><HiOutlineMinus/></button>
                        <span className="text-center text-xl py-1">
                        {quantity}
                        </span>
                        
                        <button
                         onClick={() => dispatch(editItemQuantity({incrementType: 'increase', _id}))}
                         className="border-none text-md px-3  border rounded py-1" ><HiOutlinePlus/></button>
                    </div>
                    <button onClick={() => dispatch(removeItem(_id))}className='underline text-xs uppercase mt-2'>Remove</button>
                   
                </div>

                <div className=''>
                    <p className='text-2xl'>${price * quantity}.00</p>
                </div>
        </article>
  )
}

export default CartItem
