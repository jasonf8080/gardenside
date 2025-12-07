import React from 'react'
import { useSelector } from 'react-redux'
import PaymentForm from '../components/Cart/PaymentForm'

const Checkout = () => {
    const {cartItems} = useSelector((store) => store.cart)

// const testFetch = async () => {
//   try {
//     const response = await fetch('http://localhost:4242/create-checkout-session', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     console.log('success! fetch went through')

//   } catch (error) {
//     console.error('Error creating checkout session:', error);
//   }
// };

  return (
    <div className='w-full flex flex-col md:flex-row'>
      <div className="bg-inherit w-full pt-10">
        <div className="w-[85%] md:w-[65%] mx-auto">
            <h1 className='border-b-[1px] border-[#aaa] py-4 font-heading uppercase font-bold text-2xl'>Payment Information</h1>

            <div id="payment-information" className='w-full my-6 pb-4 border-b-[1px] border-[#aaa]'>
                <div className="flex gap-3">
                    <input type="text" id="first-name" placeholder='First name' className='w-full'/>
                    <input type="text" id="last-name" placeholder='Last name' className='w-full'/>
                </div>

                <input type="email" name="email" id="email" placeholder='Email'  className='block w-full'/>
                <input type="tel" name="phone" placeholder="Enter your phone number"  className='block w-full'/>
            </div>
            {/* <button onClick={testFetch} >PAY NOW</button> */}
            {/* <StripeCheckout/> */}
            <PaymentForm/>
        </div>
        
      </div>

      <div className="bg-[#F5F5F5] w-full pt-10">
        <div className="w-[85%] md:w-[65%] mx-auto">
            <h1 className='border-b-[1px] border-[#817573] py-4 font-heading0 uppercase font-bold text-2xl'>Order Summary</h1>
            
            <div className="border-b-[1px] border-[#817573]  pt-2 pb-4">
                {cartItems.map((cartItem) => {
                    return (
                        <article className='flex justify-between py-3'>
                            <div className='flex'>
                                <p className='text-xl mr-4'>{cartItem.quantity} <span className='text-lg ml-1'>x</span></p>
                                <h1 className="text-xl">{cartItem.name}</h1>
                            </div>

                            <p className="text-xl font-bold">${cartItem.quantity * cartItem.price}.00</p>
                           
                        </article>
                    )
                })}
                    
            </div>

            <p className='text-right text-3xl font-bold mt-6 mb-4'>Total: ${cartItems.reduce((acc, currentItem) => {
                return acc += currentItem.price * currentItem.quantity
            }, 0)}.00</p>
        </div>
      </div>
    </div>
  )
}

export default Checkout
