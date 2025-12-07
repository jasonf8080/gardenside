import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import morgan from 'morgan';



 // logs concise output

import orderRouter from './routes/orderRouter.js';
import squareRouter from './routes/squareRouter.js';

dotenv.config(); // load environment variables

const app = express();

// ✅ Use your Stripe secret key from .env
//const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // OR hardcoded like you had

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// MongoDB connection
mongoose.connect(
  'mongodb+srv://jasonf8080:Vbnm13458@nodeexpressproject.0scapjz.mongodb.net/onlineOrders?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Stripe payment intent route
// app.post('/create-payment-intent', async (req, res) => {
//   const { amount } = req.body;

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//       payment_method_types: ['card'],
//     });

//     res.send({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// Routers
app.use('/payments', squareRouter);
app.use('/orders', orderRouter);

// Start server
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
