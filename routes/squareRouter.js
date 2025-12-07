import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import squareClient from '../squareClient.js';

const router = express.Router();
const { paymentsApi } = squareClient;

router.post('/process-payment', async (req, res) => {
  const { nonce, amount } = req.body;

  try {
    const response = await paymentsApi.createPayment({
      sourceId: nonce,
      idempotencyKey: uuidv4(), // unique key for idempotency
      amountMoney: {
        amount: amount, // $10.00 in cents
        currency: 'USD',
      },
       billingAddress: {
    addressLine1: '123 Test St',
    locality: 'Testville',
    administrativeDistrictLevel1: 'CA',
    postalCode: '12345',
    country: 'US',
  },
    });

  res.json({
  success: true,
  payment: JSON.parse(JSON.stringify(response.result.payment, (_, v) =>
    typeof v === 'bigint' ? v.toString() : v
  )),
});
  } catch (error) {
    console.error('Square Payment Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});



export default router;
