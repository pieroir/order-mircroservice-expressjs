import Order from '../models/order.model';

//get all orders
export const getAllOrders = async () => {
  const data = await Order.find();
  return data;
};

//create new order
export const newOrder = async (body) => {
  const data = await Order.create(body);
  return data;
};

//update single order
export const updateOrder = async (_id, body) => {
  const data = await Order.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single order
export const deleteOrder = async (id) => {
  await Order.findByIdAndDelete(id);
  return '';
};

//get single order
export const getOrder = async (id) => {
  const data = await Order.findById(id);
  return data;
};
