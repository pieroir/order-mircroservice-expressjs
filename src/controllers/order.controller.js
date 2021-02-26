import HttpStatus from 'http-status-codes';
import * as OrderService from '../services/order.service';

/**
 * Controller to get all orders available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllOrders = async (req, res, next) => {
  try {
    const data = await OrderService.getAllOrders();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All orders fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single order
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getOrder = async (req, res, next) => {
  try {
    const data = await OrderService.getOrder(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Order fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new order
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newOrder = async (req, res, next) => {
  try {
    const data = await OrderService.newOrder(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Order created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a order
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateOrder = async (req, res, next) => {
  try {
    const data = await OrderService.updateOrder(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Order updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a order
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteOrder = async (req, res, next) => {
  try {
    await OrderService.deleteOrder(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Order deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
