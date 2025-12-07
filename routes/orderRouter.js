import express from 'express';
const router = express.Router();
// const { testOrder, retrieveOrders } = await import('../controllers/orderController.js');
import { handleCreateSquareOrder } from '../controllers/orderController.js';


router.post('/create-square-order', handleCreateSquareOrder);
// Controllers 


export default router;  // <--- add this