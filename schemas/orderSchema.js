import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const OrderSchema = new mongoose.Schema({
  customerName: String,
  createdAt: { type: Date, default: Date.now },
  items: [CartItemSchema],
  total: Number,
  status: { type: String, default: 'pending' },
});

const Order = mongoose.model('Order', OrderSchema);

export { Order };
