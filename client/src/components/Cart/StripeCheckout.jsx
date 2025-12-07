import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  useStripe,
  useElements,
  PaymentElement
} from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

const stripePromise = loadStripe('pk_test_51LvSKCDfxr0ACHNg576ZGqCO98691zJ7KzHKEAS95bOJB4OMHRk6i2NRVPclbgPel06vbbSEaQVWwQV8a9JP4sHP00gQKwcm23'); // your public key


const StripeCheckout = () => {
  const [clientSecret, setClientSecret] = useState('');
  const {cartItems} = useSelector((store) => store.cart);
  const cartTotal = cartItems.reduce((acc, currentItem) => {
  return acc + currentItem.price * currentItem.quantity;
}, 0);

// Convert to cents
const amountInCents = Math.round(cartTotal * 100);

 useEffect(() => {
  fetch('http://localhost:4242/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: amountInCents }) // $10.00
  })
    .then(res => res.json())
    .then(data => setClientSecret(data.clientSecret));
}, []);

useEffect(() => {
  console.log(`cartTotal: ${amountInCents}`)
}, [])


const options = {
  clientSecret,
  appearance: {
    theme: 'stripe',
    layout: {
      type: 'accordion',
      defaultCollapsed: false,
    },
  },
};

  if(clientSecret){
   return  (
    <Elements stripe={stripePromise} options={options}>
     <CheckoutForm />
     </Elements>
  ) 
  } else {
    return <p>Loasding...</p>
  }
};



//Actual Card Details Form
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

//Submit Payment
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/success', // optional redirect
      },
    });

    if (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <PaymentElement />
      <button
        type="submit"
        disabled={!stripe}
        className="bg-[#838562] text-white px-4 py-2 mt-6 mb-12 uppercase min-w-full font-bold text-xl"
      >
        Submit Payment
      </button> 
    </form>
  );
};

export default StripeCheckout;
