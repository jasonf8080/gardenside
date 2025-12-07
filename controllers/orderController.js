import { v4 as uuidv4 } from 'uuid';
import squareClient from '../squareClient.js';

const createSquareOrder = async (locationId, cartItems) => {
  // Format line items for Square API
    const lineItems = cartItems.map(item => ({
    name: item.name,
    quantity: item.quantity.toString(),
    basePriceMoney: {
      amount: Math.round(Number(item.price) * 100), // Convert dollars to cents, ensure Number
      currency: 'USD',
    },
  }));


  const orderRequest = {
    order: {
      locationId,
      lineItems,
    },
    idempotencyKey: uuidv4(),
  };

  // Call Square Orders API
  const { result } = await squareClient.ordersApi.createOrder(orderRequest);
  return result.order; // contains order.id, etc
};


const handleCreateSquareOrder = async (req, res) => {
  const { locationId, cartItems } = req.body;

  try {
    const order = await createSquareOrder(locationId, cartItems);
    res.status(200).json(order);
  } catch (error) {
    console.error('Error creating Square order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

export { handleCreateSquareOrder }