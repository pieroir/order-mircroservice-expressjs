import express from 'express';
const router = express.Router();

import orderRoute from './order.route';
import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);

  router.use('/order', orderRoute);
  return router;
};

export default routes;
