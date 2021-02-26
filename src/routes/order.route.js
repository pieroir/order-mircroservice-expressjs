import express from 'express';
import * as orderController from '../controllers/order.controller';
import { newOrderValidator } from '../validators/order.validator';
// import { orderAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all orders
router.get('', orderController.getAllOrders);

//route to create a new order
router.post('', newOrderValidator, orderController.newOrder);

//route to get a single order by their order id
// router.get('/:_id', orderAuth, orderController.getOrder);

//route to update a single order by their order id
router.put('/:_id', orderController.updateOrder);

//route to delete a single order by their order id
router.delete('/:_id', orderController.deleteOrder);

export default router;
