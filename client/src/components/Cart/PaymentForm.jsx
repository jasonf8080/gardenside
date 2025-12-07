import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';


export default function PaymentForm() {
  const [payments, setPayments] = useState(null);
   const cardRef = useRef(null);

   //Cart Total
  const {cartItems} = useSelector((store) => store.cart);
  const cartTotal = Math.round(
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100
  );



  // Load the Square Payments SDK
  useEffect(() => {
    const loadSquare = async () => {
      const script = document.createElement('script');
      script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
      script.async = true;
      script.onload = async () => {
        if (!window.Square) return;

        try {
          const paymentsInstance = window.Square.payments(
            'sandbox-sq0idb-zLsARLC27ByYU0sEH_8p-A',
            'LC4Y84HXVAZ53'
          );
          setPayments(paymentsInstance);
        } catch (err) {
          console.error('Failed to load Square Payments SDK', err);
        }
      };
      document.body.appendChild(script);
    };

    loadSquare();
  }, []);

  // Mount the card input field when SDK is ready
useEffect(() => {
  if (!payments) return;

  let card;

  const mountCard = async () => {
    card = await payments.card();
    await card.attach('#card-container');
    cardRef.current = card; // save card instance in ref
  };

  mountCard();

  return () => {
    if (card) {
      card.destroy(); // Detach the card input when component unmounts or re-runs effect
    }
  };
}, [payments]);

  // Payment submission handler
  const handlePayment = async (event) => {
    event.preventDefault();

    if (!cardRef.current) {
      console.error('Card instance not ready');
      return;
    }

    try {
      const result = await cardRef.current.tokenize();
      if (result.status === 'OK') {
        const nonce = result.token;
        console.log('Got nonce:', nonce);

        // Send nonce to backend
        const response = await fetch('http://localhost:4242/payments/process-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nonce, amount: cartTotal }),
        });

        const data = await response.json();

        if (data.success) {
          alert('Payment successful!');
        } else {
          alert('Payment failed: ' + data.error);
        }
      } else {
        console.error('Tokenization failed:', result.errors);
        alert('Payment failed: ' + JSON.stringify(result.errors));
      }
    } catch (e) {
      console.error('Payment failed:', e);
      alert('Payment failed, see console for details');
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <div id="card-container" />
      <button type="submit" id="pay-button">
        Pay
      </button>
    </form>
  );
}
