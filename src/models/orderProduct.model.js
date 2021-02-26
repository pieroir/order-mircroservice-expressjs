import { Schema, model } from 'mongoose';

const orderProductSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product'
    },
    count: {
      type: Number
    },
    price: {
      type: String
    },
    totalPrice: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('OrderProduct', orderProductSchema);
